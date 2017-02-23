var requirejs, require, define;
(function(global) {
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.11", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, apsp = ap.splice, isBrowser = !!(typeof window !== "undefined" && typeof navigator !== "undefined" && window.document), isWebWorker = !isBrowser && typeof importScripts !== "undefined", readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = typeof opera !== "undefined" && opera.toString() === "[object Opera]", contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = false;
    function isFunction(it) {
        return ostring.call(it) === "[object Function]"
    }
    function isArray(it) {
        return ostring.call(it) === "[object Array]"
    }
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break
                }
            }
        }
    }
    function eachReverse(ary, func) {
        if (ary) {
            var i;
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break
                }
            }
        }
    }
    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop)
    }
    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop]
    }
    function eachProp(obj, func) {
        var prop;
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break
                }
            }
        }
    }
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function(value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === "object" && value && !isArray(value) && !isFunction(value) && !(value instanceof RegExp)) {
                        if (!target[prop]) {
                            target[prop] = {}
                        }
                        mixin(target[prop], value, force, deepStringMixin)
                    } else {
                        target[prop] = value
                    }
                }
            })
        }
        return target
    }
    function bind(obj, fn) {
        return function() {
            return fn.apply(obj, arguments)
        }
    }
    function scripts() {
        return document.getElementsByTagName("script")
    }
    function defaultOnError(err) {
        throw err
    }
    function getGlobal(value) {
        if (!value) {
            return value
        }
        var g = global;
        each(value.split("."), function(part) {
            g = g[part]
        });
        return g
    }
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + "\nhttp://requirejs.org/docs/errors.html#" + id);
        e.requireType = id;
        e.requireModules = requireModules;
        if (err) {
            e.originalError = err
        }
        return e
    }
    if (typeof define !== "undefined") {
        return
    }
    if (typeof requirejs !== "undefined") {
        if (isFunction(requirejs)) {
            return
        }
        cfg = requirejs;
        requirejs = undefined
    }
    if (typeof require !== "undefined" && !isFunction(require)) {
        cfg = require;
        require = undefined
    }
    function newContext(contextName) {
        var inCheckLoaded, Module, context, handlers, checkLoadedTimeoutId, config = {waitSeconds: 7, baseUrl: "./", paths: {}, bundles: {}, pkgs: {}, shim: {}, config: {}}, registry = {}, enabledRegistry = {}, undefEvents = {}, defQueue = [], defined = {}, urlFetched = {}, bundlesMap = {}, requireCounter = 1, unnormalizedCounter = 1;
        function trimDots(ary) {
            var i, part, length = ary.length;
            for (i = 0; i < length; i++) {
                part = ary[i];
                if (part === ".") {
                    ary.splice(i, 1);
                    i -= 1
                } else {
                    if (part === "..") {
                        if (i === 1 && (ary[2] === ".." || ary[0] === "..")) {
                            break
                        } else {
                            if (i > 0) {
                                ary.splice(i - 1, 2);
                                i -= 2
                            }
                        }
                    }
                }
            }
        }
        function normalize(name, baseName, applyMap) {
            var pkgMain, mapValue, nameParts, i, j, nameSegment, lastIndex, foundMap, foundI, foundStarMap, starI, baseParts = baseName && baseName.split("/"), normalizedBaseParts = baseParts, map = config.map, starMap = map && map["*"];
            if (name && name.charAt(0) === ".") {
                if (baseName) {
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                    name = name.split("/");
                    lastIndex = name.length - 1;
                    if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                        name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "")
                    }
                    name = normalizedBaseParts.concat(name);
                    trimDots(name);
                    name = name.join("/")
                } else {
                    if (name.indexOf("./") === 0) {
                        name = name.substring(2)
                    }
                }
            }
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split("/");
                outerLoop:for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join("/");
                    if (baseParts) {
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join("/"));
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment);
                                if (mapValue) {
                                    foundMap = mapValue;
                                    foundI = i;
                                    break outerLoop
                                }
                            }
                        }
                    }
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment);
                        starI = i
                    }
                }
                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap;
                    foundI = starI
                }
                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap);
                    name = nameParts.join("/")
                }
            }
            pkgMain = getOwn(config.pkgs, name);
            return pkgMain ? pkgMain : name
        }
        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function(scriptNode) {
                    if (scriptNode.getAttribute("data-requiremodule") === name && scriptNode.getAttribute("data-requirecontext") === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode);
                        return true
                    }
                })
            }
        }
        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id);
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                pathConfig.shift();
                context.require.undef(id);
                context.require([id]);
                return true
            }
        }
        function splitPrefix(name) {
            var prefix, index = name ? name.indexOf("!") : -1;
            if (index > -1) {
                prefix = name.substring(0, index);
                name = name.substring(index + 1, name.length)
            }
            return[prefix, name]
        }
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url, pluginModule, suffix, nameParts, prefix = null, parentName = parentModuleMap ? parentModuleMap.name : null, originalName = name, isDefine = true, normalizedName = "";
            if (!name) {
                isDefine = false;
                name = "_@r" + (requireCounter += 1)
            }
            nameParts = splitPrefix(name);
            prefix = nameParts[0];
            name = nameParts[1];
            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap);
                pluginModule = getOwn(defined, prefix)
            }
            if (name) {
                if (prefix) {
                    if (pluginModule && pluginModule.normalize) {
                        normalizedName = pluginModule.normalize(name, function(name) {
                            return normalize(name, parentName, applyMap)
                        })
                    } else {
                        normalizedName = normalize(name, parentName, applyMap)
                    }
                } else {
                    normalizedName = normalize(name, parentName, applyMap);
                    nameParts = splitPrefix(normalizedName);
                    prefix = nameParts[0];
                    normalizedName = nameParts[1];
                    isNormalized = true;
                    url = context.nameToUrl(normalizedName)
                }
            }
            suffix = prefix && !pluginModule && !isNormalized ? "_unnormalized" + (unnormalizedCounter += 1) : "";
            return{prefix: prefix, name: normalizedName, parentMap: parentModuleMap, unnormalized: !!suffix, url: url, originalName: originalName, isDefine: isDefine, id: (prefix ? prefix + "!" + normalizedName : normalizedName) + suffix}
        }
        function getModule(depMap) {
            var id = depMap.id, mod = getOwn(registry, id);
            if (!mod) {
                mod = registry[id] = new context.Module(depMap)
            }
            return mod
        }
        function on(depMap, name, fn) {
            var id = depMap.id, mod = getOwn(registry, id);
            if (hasProp(defined, id) && (!mod || mod.defineEmitComplete)) {
                if (name === "defined") {
                    fn(defined[id])
                }
            } else {
                mod = getModule(depMap);
                if (mod.error && name === "error") {
                    fn(mod.error)
                } else {
                    mod.on(name, fn)
                }
            }
        }
        function onError(err, errback) {
            var ids = err.requireModules, notified = false;
            if (errback) {
                errback(err)
            } else {
                each(ids, function(id) {
                    var mod = getOwn(registry, id);
                    if (mod) {
                        mod.error = err;
                        if (mod.events.error) {
                            notified = true;
                            mod.emit("error", err)
                        }
                    }
                });
                if (!notified) {
                    req.onError(err)
                }
            }
        }
        function takeGlobalQueue() {
            if (globalDefQueue.length) {
                apsp.apply(defQueue, [defQueue.length, 0].concat(globalDefQueue));
                globalDefQueue = []
            }
        }
        handlers = {require: function(mod) {
                if (mod.require) {
                    return mod.require
                } else {
                    return(mod.require = context.makeRequire(mod.map))
                }
            }, exports: function(mod) {
                mod.usingExports = true;
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return(defined[mod.map.id] = mod.exports)
                    } else {
                        return(mod.exports = defined[mod.map.id] = {})
                    }
                }
            }, module: function(mod) {
                if (mod.module) {
                    return mod.module
                } else {
                    return(mod.module = {id: mod.map.id, uri: mod.map.url, config: function() {
                            return getOwn(config.config, mod.map.id) || {}
                        }, exports: mod.exports || (mod.exports = {})})
                }
            }};
        function cleanRegistry(id) {
            delete registry[id];
            delete enabledRegistry[id]
        }
        function breakCycle(mod, traced, processed) {
            var id = mod.map.id;
            if (mod.error) {
                mod.emit("error", mod.error)
            } else {
                traced[id] = true;
                each(mod.depMaps, function(depMap, i) {
                    var depId = depMap.id, dep = getOwn(registry, depId);
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId]);
                            mod.check()
                        } else {
                            breakCycle(dep, traced, processed)
                        }
                    }
                });
                processed[id] = true
            }
        }
        function checkLoaded() {
            var err, usingPathFallback, waitInterval = config.waitSeconds * 1000, expired = waitInterval && (context.startTime + waitInterval) < new Date().getTime(), noLoads = [], reqCalls = [], stillLoading = false, needCycleCheck = true;
            if (inCheckLoaded) {
                return
            }
            inCheckLoaded = true;
            eachProp(enabledRegistry, function(mod) {
                var map = mod.map, modId = map.id;
                if (!mod.enabled) {
                    return
                }
                if (!map.isDefine) {
                    reqCalls.push(mod)
                }
                if (!mod.error) {
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true;
                            stillLoading = true
                        } else {
                            noLoads.push(modId);
                            removeScript(modId)
                        }
                    } else {
                        if (!mod.inited && mod.fetched && map.isDefine) {
                            stillLoading = true;
                            if (!map.prefix) {
                                return(needCycleCheck = false)
                            }
                        }
                    }
                }
            });
            if (expired && noLoads.length) {
                err = makeError("timeout", "Load timeout for modules: " + noLoads, null, noLoads);
                err.contextName = context.contextName;
                return onError(err)
            }
            if (needCycleCheck) {
                each(reqCalls, function(mod) {
                    breakCycle(mod, {}, {})
                })
            }
            if ((!expired || usingPathFallback) && stillLoading) {
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function() {
                        checkLoadedTimeoutId = 0;
                        checkLoaded()
                    }, 50)
                }
            }
            inCheckLoaded = false
        }
        Module = function(map) {
            this.events = getOwn(undefEvents, map.id) || {};
            this.map = map;
            this.shim = getOwn(config.shim, map.id);
            this.depExports = [];
            this.depMaps = [];
            this.depMatched = [];
            this.pluginMaps = {};
            this.depCount = 0
        };
        Module.prototype = {init: function(depMaps, factory, errback, options) {
                options = options || {};
                if (this.inited) {
                    return
                }
                this.factory = factory;
                if (errback) {
                    this.on("error", errback)
                } else {
                    if (this.events.error) {
                        errback = bind(this, function(err) {
                            this.emit("error", err)
                        })
                    }
                }
                this.depMaps = depMaps && depMaps.slice(0);
                this.errback = errback;
                this.inited = true;
                this.ignore = options.ignore;
                if (options.enabled || this.enabled) {
                    this.enable()
                } else {
                    this.check()
                }
            }, defineDep: function(i, depExports) {
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true;
                    this.depCount -= 1;
                    this.depExports[i] = depExports
                }
            }, fetch: function() {
                if (this.fetched) {
                    return
                }
                this.fetched = true;
                context.startTime = (new Date()).getTime();
                var map = this.map;
                if (this.shim) {
                    context.makeRequire(this.map, {enableBuildCallback: true})(this.shim.deps || [], bind(this, function() {
                        return map.prefix ? this.callPlugin() : this.load()
                    }))
                } else {
                    return map.prefix ? this.callPlugin() : this.load()
                }
            }, load: function() {
                var url = this.map.url;
                if (!urlFetched[url]) {
                    urlFetched[url] = true;
                    context.load(this.map.id, url)
                }
            }, check: function() {
                if (!this.enabled || this.enabling) {
                    return
                }
                var err, cjsModule, id = this.map.id, depExports = this.depExports, exports = this.exports, factory = this.factory;
                if (!this.inited) {
                    this.fetch()
                } else {
                    if (this.error) {
                        this.emit("error", this.error)
                    } else {
                        if (!this.defining) {
                            this.defining = true;
                            if (this.depCount < 1 && !this.defined) {
                                if (isFunction(factory)) {
                                    if ((this.events.error && this.map.isDefine) || req.onError !== defaultOnError) {
                                        try {
                                            exports = context.execCb(id, factory, depExports, exports)
                                        } catch (e) {
                                            err = e
                                        }
                                    } else {
                                        exports = context.execCb(id, factory, depExports, exports)
                                    }
                                    if (this.map.isDefine && exports === undefined) {
                                        cjsModule = this.module;
                                        if (cjsModule) {
                                            exports = cjsModule.exports
                                        } else {
                                            if (this.usingExports) {
                                                exports = this.exports
                                            }
                                        }
                                    }
                                    if (err) {
                                        err.requireMap = this.map;
                                        err.requireModules = this.map.isDefine ? [this.map.id] : null;
                                        err.requireType = this.map.isDefine ? "define" : "require";
                                        return onError((this.error = err))
                                    }
                                } else {
                                    exports = factory
                                }
                                this.exports = exports;
                                if (this.map.isDefine && !this.ignore) {
                                    defined[id] = exports;
                                    if (req.onResourceLoad) {
                                        req.onResourceLoad(context, this.map, this.depMaps)
                                    }
                                }
                                cleanRegistry(id);
                                this.defined = true
                            }
                            this.defining = false;
                            if (this.defined && !this.defineEmitted) {
                                this.defineEmitted = true;
                                this.emit("defined", this.exports);
                                this.defineEmitComplete = true
                            }
                        }
                    }
                }
            }, callPlugin: function() {
                var map = this.map, id = map.id, pluginMap = makeModuleMap(map.prefix);
                this.depMaps.push(pluginMap);
                on(pluginMap, "defined", bind(this, function(plugin) {
                    var load, normalizedMap, normalizedMod, bundleId = getOwn(bundlesMap, this.map.id), name = this.map.name, parentName = this.map.parentMap ? this.map.parentMap.name : null, localRequire = context.makeRequire(map.parentMap, {enableBuildCallback: true});
                    if (this.map.unnormalized) {
                        if (plugin.normalize) {
                            name = plugin.normalize(name, function(name) {
                                return normalize(name, parentName, true)
                            }) || ""
                        }
                        normalizedMap = makeModuleMap(map.prefix + "!" + name, this.map.parentMap);
                        on(normalizedMap, "defined", bind(this, function(value) {
                            this.init([], function() {
                                return value
                            }, null, {enabled: true, ignore: true})
                        }));
                        normalizedMod = getOwn(registry, normalizedMap.id);
                        if (normalizedMod) {
                            this.depMaps.push(normalizedMap);
                            if (this.events.error) {
                                normalizedMod.on("error", bind(this, function(err) {
                                    this.emit("error", err)
                                }))
                            }
                            normalizedMod.enable()
                        }
                        return
                    }
                    if (bundleId) {
                        this.map.url = context.nameToUrl(bundleId);
                        this.load();
                        return
                    }
                    load = bind(this, function(value) {
                        this.init([], function() {
                            return value
                        }, null, {enabled: true})
                    });
                    load.error = bind(this, function(err) {
                        this.inited = true;
                        this.error = err;
                        err.requireModules = [id];
                        eachProp(registry, function(mod) {
                            if (mod.map.id.indexOf(id + "_unnormalized") === 0) {
                                cleanRegistry(mod.map.id)
                            }
                        });
                        onError(err)
                    });
                    load.fromText = bind(this, function(text, textAlt) {
                        var moduleName = map.name, moduleMap = makeModuleMap(moduleName), hasInteractive = useInteractive;
                        if (textAlt) {
                            text = textAlt
                        }
                        if (hasInteractive) {
                            useInteractive = false
                        }
                        getModule(moduleMap);
                        if (hasProp(config.config, id)) {
                            config.config[moduleName] = config.config[id]
                        }
                        try {
                            req.exec(text)
                        } catch (e) {
                            return onError(makeError("fromtexteval", "fromText eval for " + id + " failed: " + e, e, [id]))
                        }
                        if (hasInteractive) {
                            useInteractive = true
                        }
                        this.depMaps.push(moduleMap);
                        context.completeLoad(moduleName);
                        localRequire([moduleName], load)
                    });
                    plugin.load(map.name, localRequire, load, config)
                }));
                context.enable(pluginMap, this);
                this.pluginMaps[pluginMap.id] = pluginMap
            }, enable: function() {
                enabledRegistry[this.map.id] = this;
                this.enabled = true;
                this.enabling = true;
                each(this.depMaps, bind(this, function(depMap, i) {
                    var id, mod, handler;
                    if (typeof depMap === "string") {
                        depMap = makeModuleMap(depMap, (this.map.isDefine ? this.map : this.map.parentMap), false, !this.skipMap);
                        this.depMaps[i] = depMap;
                        handler = getOwn(handlers, depMap.id);
                        if (handler) {
                            this.depExports[i] = handler(this);
                            return
                        }
                        this.depCount += 1;
                        on(depMap, "defined", bind(this, function(depExports) {
                            this.defineDep(i, depExports);
                            this.check()
                        }));
                        if (this.errback) {
                            on(depMap, "error", bind(this, this.errback))
                        }
                    }
                    id = depMap.id;
                    mod = registry[id];
                    if (!hasProp(handlers, id) && mod && !mod.enabled) {
                        context.enable(depMap, this)
                    }
                }));
                eachProp(this.pluginMaps, bind(this, function(pluginMap) {
                    var mod = getOwn(registry, pluginMap.id);
                    if (mod && !mod.enabled) {
                        context.enable(pluginMap, this)
                    }
                }));
                this.enabling = false;
                this.check()
            }, on: function(name, cb) {
                var cbs = this.events[name];
                if (!cbs) {
                    cbs = this.events[name] = []
                }
                cbs.push(cb)
            }, emit: function(name, evt) {
                each(this.events[name], function(cb) {
                    cb(evt)
                });
                if (name === "error") {
                    delete this.events[name]
                }
            }};
        function callGetModule(args) {
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2])
            }
        }
        function removeListener(node, func, name, ieName) {
            if (node.detachEvent && !isOpera) {
                if (ieName) {
                    node.detachEvent(ieName, func)
                }
            } else {
                node.removeEventListener(name, func, false)
            }
        }
        function getScriptData(evt) {
            var node = evt.currentTarget || evt.srcElement;
            removeListener(node, context.onScriptLoad, "load", "onreadystatechange");
            removeListener(node, context.onScriptError, "error");
            return{node: node, id: node && node.getAttribute("data-requiremodule")}
        }
        function intakeDefines() {
            var args;
            takeGlobalQueue();
            while (defQueue.length) {
                args = defQueue.shift();
                if (args[0] === null) {
                    return onError(makeError("mismatch", "Mismatched anonymous define() module: " + args[args.length - 1]))
                } else {
                    callGetModule(args)
                }
            }
        }
        context = {config: config, contextName: contextName, registry: registry, defined: defined, urlFetched: urlFetched, defQueue: defQueue, Module: Module, makeModuleMap: makeModuleMap, nextTick: req.nextTick, onError: onError, configure: function(cfg) {
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== "/") {
                        cfg.baseUrl += "/"
                    }
                }
                var shim = config.shim, objs = {paths: true, bundles: true, config: true, map: true};
                eachProp(cfg, function(value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {}
                        }
                        mixin(config[prop], value, true, true)
                    } else {
                        config[prop] = value
                    }
                });
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function(value, prop) {
                        each(value, function(v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop
                            }
                        })
                    })
                }
                if (cfg.shim) {
                    eachProp(cfg.shim, function(value, id) {
                        if (isArray(value)) {
                            value = {deps: value}
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value)
                        }
                        shim[id] = value
                    });
                    config.shim = shim
                }
                if (cfg.packages) {
                    each(cfg.packages, function(pkgObj) {
                        var location, name;
                        pkgObj = typeof pkgObj === "string" ? {name: pkgObj} : pkgObj;
                        name = pkgObj.name;
                        location = pkgObj.location;
                        if (location) {
                            config.paths[name] = pkgObj.location
                        }
                        config.pkgs[name] = pkgObj.name + "/" + (pkgObj.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    })
                }
                eachProp(registry, function(mod, id) {
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id)
                    }
                });
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback)
                }
            }, makeShimExports: function(value) {
                function fn() {
                    var ret;
                    if (value.init) {
                        ret = value.init.apply(global, arguments)
                    }
                    return ret || (value.exports && getGlobal(value.exports))
                }
                return fn
            }, makeRequire: function(relMap, options) {
                options = options || {};
                function localRequire(deps, callback, errback) {
                    var id, map, requireMod;
                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true
                    }
                    if (typeof deps === "string") {
                        if (isFunction(callback)) {
                            return onError(makeError("requireargs", "Invalid require call"), errback)
                        }
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id])
                        }
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire)
                        }
                        map = makeModuleMap(deps, relMap, false, true);
                        id = map.id;
                        if (!hasProp(defined, id)) {
                            return onError(makeError("notloaded", 'Module name "' + id + '" has not been loaded yet for context: ' + contextName + (relMap ? "" : ". Use require([])")))
                        }
                        return defined[id]
                    }
                    intakeDefines();
                    context.nextTick(function() {
                        intakeDefines();
                        requireMod = getModule(makeModuleMap(null, relMap));
                        requireMod.skipMap = options.skipMap;
                        requireMod.init(deps, callback, errback, {enabled: true});
                        checkLoaded()
                    });
                    return localRequire
                }
                mixin(localRequire, {isBrowser: isBrowser, toUrl: function(moduleNamePlusExt) {
                        var ext, index = moduleNamePlusExt.lastIndexOf("."), segment = moduleNamePlusExt.split("/")[0], isRelative = segment === "." || segment === "..";
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length);
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index)
                        }
                        return context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, true), ext, true)
                    }, defined: function(id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id)
                    }, specified: function(id) {
                        id = makeModuleMap(id, relMap, false, true).id;
                        return hasProp(defined, id) || hasProp(registry, id)
                    }});
                if (!relMap) {
                    localRequire.undef = function(id) {
                        takeGlobalQueue();
                        var map = makeModuleMap(id, relMap, true), mod = getOwn(registry, id);
                        removeScript(id);
                        delete defined[id];
                        delete urlFetched[map.url];
                        delete undefEvents[id];
                        eachReverse(defQueue, function(args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1)
                            }
                        });
                        if (mod) {
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events
                            }
                            cleanRegistry(id)
                        }
                    }
                }
                return localRequire
            }, enable: function(depMap) {
                var mod = getOwn(registry, depMap.id);
                if (mod) {
                    getModule(depMap).enable()
                }
            }, completeLoad: function(moduleName) {
                var found, args, mod, shim = getOwn(config.shim, moduleName) || {}, shExports = shim.exports;
                takeGlobalQueue();
                while (defQueue.length) {
                    args = defQueue.shift();
                    if (args[0] === null) {
                        args[0] = moduleName;
                        if (found) {
                            break
                        }
                        found = true
                    } else {
                        if (args[0] === moduleName) {
                            found = true
                        }
                    }
                    callGetModule(args)
                }
                mod = getOwn(registry, moduleName);
                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return
                        } else {
                            return onError(makeError("nodefine", "No define call for " + moduleName, null, [moduleName]))
                        }
                    } else {
                        callGetModule([moduleName, (shim.deps || []), shim.exportsFn])
                    }
                }
                checkLoaded()
            }, nameToUrl: function(moduleName, ext, skipExt) {
                var paths, syms, i, parentModule, url, parentPath, bundleId, pkgMain = getOwn(config.pkgs, moduleName);
                if (pkgMain) {
                    moduleName = pkgMain
                }
                bundleId = getOwn(bundlesMap, moduleName);
                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt)
                }
                if (req.jsExtRegExp.test(moduleName)) {
                    url = moduleName + (ext || "")
                } else {
                    paths = config.paths;
                    syms = moduleName.split("/");
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join("/");
                        parentPath = getOwn(paths, parentModule);
                        if (parentPath) {
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0]
                            }
                            syms.splice(0, i, parentPath);
                            break
                        }
                    }
                    url = syms.join("/");
                    url += (ext || (/^data\:|\?/.test(url) || skipExt ? "" : ".js"));
                    url = (url.charAt(0) === "/" || url.match(/^[\w\+\.\-]+:/) ? "" : config.baseUrl) + url
                }
                return config.urlArgs ? url + ((url.indexOf("?") === -1 ? "?" : "&") + config.urlArgs) : url
            }, load: function(id, url) {
                req.load(context, id, url)
            }, execCb: function(name, callback, args, exports) {
                return callback.apply(exports, args)
            }, onScriptLoad: function(evt) {
                if (evt.type === "load" || (readyRegExp.test((evt.currentTarget || evt.srcElement).readyState))) {
                    interactiveScript = null;
                    var data = getScriptData(evt);
                    context.completeLoad(data.id)
                }
            }, onScriptError: function(evt) {
                var data = getScriptData(evt);
                if (!hasPathFallback(data.id)) {
                    return onError(makeError("scripterror", "Script error for: " + data.id, evt, [data.id]))
                }
            }};
        context.require = context.makeRequire();
        return context
    }
    req = requirejs = function(deps, callback, errback, optional) {
        var context, config, contextName = defContextName;
        if (!isArray(deps) && typeof deps !== "string") {
            config = deps;
            if (isArray(callback)) {
                deps = callback;
                callback = errback;
                errback = optional
            } else {
                deps = []
            }
        }
        if (config && config.context) {
            contextName = config.context
        }
        context = getOwn(contexts, contextName);
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName)
        }
        if (config) {
            context.configure(config)
        }
        return context.require(deps, callback, errback)
    };
    req.config = function(config) {
        return req(config)
    };
    req.nextTick = typeof setTimeout !== "undefined" ? function(fn) {
        setTimeout(fn, 4)
    } : function(fn) {
        fn()
    };
    if (!require) {
        require = req
    }
    req.version = version;
    req.jsExtRegExp = /^\/|:|\?|\.js$/;
    req.isBrowser = isBrowser;
    s = req.s = {contexts: contexts, newContext: newContext};
    req({});
    each(["toUrl", "undef", "defined", "specified"], function(prop) {
        req[prop] = function() {
            var ctx = contexts[defContextName];
            return ctx.require[prop].apply(ctx, arguments)
        }
    });
    if (isBrowser) {
        head = s.head = document.getElementsByTagName("head")[0];
        baseElement = document.getElementsByTagName("base")[0];
        if (baseElement) {
            head = s.head = baseElement.parentNode
        }
    }
    req.onError = defaultOnError;
    req.createNode = function(config, moduleName, url) {
        var node = config.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
        node.type = config.scriptType || "text/javascript";
        node.charset = "utf-8";
        node.async = true;
        return node
    };
    req.load = function(context, moduleName, url) {
        var config = (context && context.config) || {}, node;
        if (isBrowser) {
            node = req.createNode(config, moduleName, url);
            node.setAttribute("data-requirecontext", context.contextName);
            node.setAttribute("data-requiremodule", moduleName);
            if (node.attachEvent && !(node.attachEvent.toString && node.attachEvent.toString().indexOf("[native code") < 0) && !isOpera) {
                useInteractive = true;
                node.attachEvent("onreadystatechange", context.onScriptLoad)
            } else {
                node.addEventListener("load", context.onScriptLoad, false);
                node.addEventListener("error", context.onScriptError, false)
            }
            node.src = url;
            currentlyAddingScript = node;
            if (baseElement) {
                head.insertBefore(node, baseElement)
            } else {
                head.appendChild(node)
            }
            currentlyAddingScript = null;
            return node
        } else {
            if (isWebWorker) {
                try {
                    importScripts(url);
                    context.completeLoad(moduleName)
                } catch (e) {
                    context.onError(makeError("importscripts", "importScripts failed for " + moduleName + " at " + url, e, [moduleName]))
                }
            }
        }
    };
    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === "interactive") {
            return interactiveScript
        }
        eachReverse(scripts(), function(script) {
            if (script.readyState === "interactive") {
                return(interactiveScript = script)
            }
        });
        return interactiveScript
    }
    if (isBrowser && !cfg.skipDataMain) {
        eachReverse(scripts(), function(script) {
            if (!head) {
                head = script.parentNode
            }
            dataMain = script.getAttribute("data-main");
            if (dataMain) {
                mainScript = dataMain;
                if (!cfg.baseUrl) {
                    src = mainScript.split("/");
                    mainScript = src.pop();
                    subPath = src.length ? src.join("/") + "/" : "./";
                    cfg.baseUrl = subPath
                }
                mainScript = mainScript.replace(jsSuffixRegExp, "");
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain
                }
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript];
                return true
            }
        })
    }
    define = function(name, deps, callback) {
        var node, context;
        if (typeof name !== "string") {
            callback = deps;
            deps = name;
            name = null
        }
        if (!isArray(deps)) {
            callback = deps;
            deps = null
        }
        if (!deps && isFunction(callback)) {
            deps = [];
            if (callback.length) {
                callback.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(match, dep) {
                    deps.push(dep)
                });
                deps = (callback.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(deps)
            }
        }
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript();
            if (node) {
                if (!name) {
                    name = node.getAttribute("data-requiremodule")
                }
                context = contexts[node.getAttribute("data-requirecontext")]
            }
        }
        (context ? context.defQueue : globalDefQueue).push([name, deps, callback])
    };
    define.amd = {jQuery: true};
    req.exec = function(text) {
        return eval(text)
    };
    req(cfg)
}(this));
(function() {
    if (require && require.config) {
        var b = "";
        if (window.URLPrefix && window.URLPrefix.statics) {
            b = URLPrefix.statics
        } else {
            b = "http://image.yihaodianimg.com/front-homepage"
        }
        requirejs.config({baseUrl: b + "/global/js", paths: {qrcode: "libs/moduleLib/qrcode.min.js?v1.01", base_observer: "base/yhd.observer", common_impression: "common/biz/yhd.impression", central_ct_adContentTracker: "central/ct/adContentTracker", central_adExpTracker: "central/adExpTracker", header_province: "header/province_v3"}})
    }
})();
var loli = {_loli: loli};
(function() {
    var b = window.loli || (window.loli = {});
    var a = b;
    var c = a.util = a.util || {};
    c.hashImgUrl = function(g) {
        var d = "http:\\/\\/d(\\\d{1,2})\\.";
        var e = new RegExp(d, "i");
        if (e.test(g)) {
            var f = c.toHash(g);
            return g.replace(e, "http://d" + (f % 4 + 6) + ".")
        } else {
            return g
        }
    };
    c.toHash = function(e) {
        var d = 0;
        for (var f = 0; f < e.length; f++) {
            if (e[f]) {
                d += e[f].charCodeAt()
            }
        }
        return d
    };
    c.isIE = function() {
        var e = window.navigator.userAgent.toLowerCase();
        var f = /msie ([\d\.]+)/;
        if (f.test(e)) {
            var d = parseInt(f.exec(e)[1]);
            return d
        }
        return 0
    };
    c.generateMixed = function(f) {
        var h = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var e = "";
        for (var d = 0; d < f; d++) {
            var g = Math.floor(Math.random() * 32);
            e += h[g]
        }
        return e
    };
    c.isExistArray = function(f, e) {
        var g = false;
        for (var d = 0; d < f.length; d++) {
            if (f[d] == e) {
                g = true;
                break
            }
        }
        return g
    }
})();
(function() {
    var d = window.loli || (window.loli = {});
    var c = d;
    var b = c.util = c.util || {};
    function a(f) {
        if (!f) {
            return true
        }
        for (var e in f) {
            return false
        }
        return true
    }
    b.url = {getParams: function(f) {
            f = $.trim(f);
            var g = this;
            var e = g.parseUrl(f);
            return e ? e.params : null
        }, appendParams: function(g, i) {
            var h = this;
            if (a(i)) {
                return g
            }
            var e = h.parseUrl(g);
            if (!e) {
                return g
            }
            var j = e.params;
            for (var f in i) {
                if (i.hasOwnProperty(f) && i[f]) {
                    j[f] = i[f]
                } else {
                    if (!i[f]) {
                        delete j[f]
                    }
                }
            }
            e.params = j;
            return h.toCusString(e)
        }, deleteParams: function(h, f) {
            var j = this;
            if (!f || f.length < 0) {
                return h
            }
            var l = j.parseUrl(h);
            if (!l) {
                return h
            }
            var g = l.params;
            for (var k = 0; k < f.length; k++) {
                var e = f[k];
                if (g.hasOwnProperty(e)) {
                    delete g[e]
                }
            }
            l.params = g;
            return j.toCusString(l)
        }, parseUrl: function(v) {
            var m = "";
            var q = "";
            var s = "";
            var k = {};
            v = $.trim(v);
            if (v == "") {
                return null
            }
            var o = v.split("#");
            var t = o[0];
            if (o.length >= 2) {
                for (var j = 1, f = o.length; j < f; j++) {
                    m += "#" + o[j]
                }
            }
            var h = t.indexOf("?");
            var g = t.length;
            if (h > 0) {
                q = t.substring(0, h);
                s = t.substring(h + 1, g)
            } else {
                q = t
            }
            if (s) {
                var p = s.split("&");
                for (var j = 0, f = p.length;
                        j < f; j++) {
                    var n = p[j].indexOf("=");
                    if (n == -1) {
                        continue
                    }
                    var e = p[j].substring(0, n);
                    var l = p[j].substring(n + 1);
                    k[e] = l
                }
            }
            var r = {loc: q, params: k, append: m};
            return r
        }, toCusString: function(f) {
            var h = [];
            h.push(f.loc);
            var g = f.params;
            if (!a(g)) {
                h.push("?");
                var i = 0;
                for (var e in g) {
                    if (g.hasOwnProperty(e) && g[e]) {
                        if (i) {
                            h.push("&")
                        }
                        h.push(e + "=" + g[e]);
                        i++
                    }
                }
            }
            if (f.append) {
                h.push(f.append)
            }
            return h.join("")
        }, getCookie: function(j) {
            if (j) {
                var f = document.cookie;
                var g = f.split("; ");
                for (var e = 0; e < g.length; e++) {
                    var h = g[e].split("=");
                    if (h[0] == j) {
                        return h[1]
                    }
                }
            }
            return null
        }, setCookie: function(e, i, g, j) {
            var f = j || 30;
            var h = new Date();
            h.setTime(h.getTime() + f * 60 * 1000);
            document.cookie = e + "=" + i + ";expires=" + h.toGMTString() + ";domain=" + g + ";path=/;"
        }, addPosition: function(i, k) {
            if (c.global.uid && c.util.generateMixed) {
                var m = this;
                var o = c.global.uid;
                if (o && o.indexOf("-") > 0) {
                    var s = o.split("-")[0];
                    if (s && i != null) {
                        var t = "x" + i.xrate + "y" + i.yrate;
                        var e = "x:" + i.xrate + "|y:" + i.yrate;
                        var p = c.util.generateMixed(4);
                        var h = p;
                        var u = s + "_" + h;
                        var g = m.getCookie(u);
                        var l = 1;
                        while (g) {
                            h = p + "_" + l;
                            u = s + "_" + h;
                            g = m.getCookie(u);
                            l++
                        }
                        var f = false;
                        try {
                            var r = no3wUrl || "yhd.com";
                            m.setCookie(u, e, r, 5);
                            var n = m.getCookie(u);
                            if (n == e) {
                                f = true
                            }
                        } catch (q) {
                        }
                        var j = {ti: h, tps: ""};
                        if (!f) {
                            j = {ti: "", tps: t}
                        }
                        k = m.appendParams(k, j)
                    }
                }
            }
            return k
        }}
})();
(function() {
    var e = window.loli || (window.loli = {});
    var c = e;
    c.config = c.config || {};
    var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`^abcdefghijklmnopqrstuvwxyz";
    var b = a.split("");
    c.config.genUID = function() {
        var f = new Date().getTime();
        var g = c.config.hashClientInfo("11");
        return c.config.base64(f) + "-" + g
    };
    c.config.base64 = function(j) {
        var g = j;
        var h = [];
        var l = k(g);
        var f = l.length;
        for (var i = 0; i < f; i++) {
            h.push(b[parseInt(l[i], 2).toString(10)])
        }
        return h.join("");
        function k(r) {
            var p = parseInt(r).toString(2);
            var o = p.length;
            var m = [];
            var q = o % 6;
            if (q > 0) {
                m.push(p.substring(0, q))
            }
            var n = q;
            while (n < o) {
                m.push(p.substring(n, n + 6));
                n += 6
            }
            return m
        }}
    ;
    c.config.parseUID = function(m) {
        if (!m) {
            return null
        }
        var g = m.length;
        if (g != 7) {
            return null
        }
        var k = [];
        for (var i = 0; i < g; i++) {
            var l = m.charAt(i);
            var j = a.indexOf(l);
            if (j == -1) {
                return null
            }
            var f = j.toString(2);
            for (var h = 6; h > f.length; ) {
                f = "0" + f
            }
            k[i] = f
        }
        return parseInt(k.join(""), 2).toString(10)
    };
    c.config.isValidUID = function(g) {
        var f = g.split("-");
        if (f.length == 3) {
            var h = c.config.hashClientInfo(f[1]);
            if (!h) {
                return 0
            }
            h = h.split("-");
            if (h.length == 2 && h[1] != f[2]) {
                return 0
            }
        } else {
            return 0
        }
        return 1
    };
    c.config.hashClientInfo = function(h) {
        var j = window.navigator;
        var g = d("guid");
        j = j.appName + j.platform + j.userAgent;
        var i = "";
        if (g && g != "" && h[0] == 1) {
            j += g;
            i += "1"
        } else {
            i += "0"
        }
        var f = d("yihaodian_uid");
        if (f && f != "" && h[1] == 1) {
            j += f;
            i += "1"
        } else {
            i += "0"
        }
        return i + "-" + c.config.base64(c.config.hash(j))
    };
    c.config.hash = function(g) {
        var f = 0, i = 0, h;
        if (g) {
            for (h = g.length - 1; h >= 0; h--) {
                i = g.charCodeAt(h);
                f = (f << 6 & 268435455) + i + (i << 14);
                i = f & 266338304;
                f = i != 0 ? f ^ i >> 21 : f
            }
        }
        return f
    };
    function d(j) {
        var g = document.cookie;
        var h = g.split("; ");
        for (var f = 0; f < h.length; f++) {
            var i = h[f].split("=");
            if (i[0] == j) {
                return i[1]
            }
        }
        return null
    }}
)();
loli.global = loli.global || {};
loli.global.uid = loli.config.genUID();
/*
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
(function(b, a) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = b.document ? a(b, true) : function(c) {
            if (!c.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return a(c)
        }
    } else {
        a(b)
    }
}(typeof window !== "undefined" ? window : this, function(a9, aP) {
    var G = [];
    var V = G.slice;
    var bA = G.concat;
    var bS = G.push;
    var bC = G.indexOf;
    var a1 = {};
    var bi = a1.toString;
    var aV = a1.hasOwnProperty;
    var bg = {};
    var A = "1.11.3", ae = function(e, i) {
        return new ae.fn.init(e, i)
    }, ao = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, f = /^-ms-/, aX = /-([\da-z])/gi, bu = function(e, i) {
        return i.toUpperCase()
    };
    ae.fn = ae.prototype = {jquery: A, constructor: ae, selector: "", length: 0, toArray: function() {
            return V.call(this)
        }, get: function(e) {
            return e != null ? (e < 0 ? this[e + this.length] : this[e]) : V.call(this)
        }, pushStack: function(e) {
            var i = ae.merge(this.constructor(), e);
            i.prevObject = this;
            i.context = this.context;
            return i
        }, each: function(i, e) {
            return ae.each(this, i, e)
        }, map: function(e) {
            return this.pushStack(ae.map(this, function(i, b5) {
                return e.call(i, b5, i)
            }))
        }, slice: function() {
            return this.pushStack(V.apply(this, arguments))
        }, first: function() {
            return this.eq(0)
        }, last: function() {
            return this.eq(-1)
        }, eq: function(e) {
            var i = this.length, b5 = +e + (e < 0 ? i : 0);
            return this.pushStack(b5 >= 0 && b5 < i ? [this[b5]] : [])
        }, end: function() {
            return this.prevObject || this.constructor(null)
        }, push: bS, sort: G.sort, splice: G.splice};
    ae.extend = ae.fn.extend = function() {
        var e, b7, b5, b6, cc, ca, i = arguments[0] || {}, b8 = 1, b9 = arguments.length, cb = false;
        if (typeof i === "boolean") {
            cb = i;
            i = arguments[b8] || {};
            b8++
        }
        if (typeof i !== "object" && !ae.isFunction(i)) {
            i = {}
        }
        if (b8 === b9) {
            i = this;
            b8--
        }
        for (; b8 < b9; b8++) {
            if ((cc = arguments[b8]) != null) {
                for (b6 in cc) {
                    e = i[b6];
                    b5 = cc[b6];
                    if (i === b5) {
                        continue
                    }
                    if (cb && b5 && (ae.isPlainObject(b5) || (b7 = ae.isArray(b5)))) {
                        if (b7) {
                            b7 = false;
                            ca = e && ae.isArray(e) ? e : []
                        } else {
                            ca = e && ae.isPlainObject(e) ? e : {}
                        }
                        i[b6] = ae.extend(cb, ca, b5)
                    } else {
                        if (b5 !== undefined) {
                            i[b6] = b5
                        }
                    }
                }
            }
        }
        return i
    };
    ae.extend({expando: "jQuery" + (A + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e) {
            throw new Error(e)
        }, noop: function() {
        }, isFunction: function(e) {
            return ae.type(e) === "function"
        }, isArray: Array.isArray || function(e) {
            return ae.type(e) === "array"
        }, isWindow: function(e) {
            return e != null && e == e.window
        }, isNumeric: function(e) {
            return !ae.isArray(e) && (e - parseFloat(e) + 1) >= 0
        }, isEmptyObject: function(i) {
            var e;
            for (e in i) {
                return false
            }
            return true
        }, isPlainObject: function(e) {
            var i;
            if (!e || ae.type(e) !== "object" || e.nodeType || ae.isWindow(e)) {
                return false
            }
            try {
                if (e.constructor && !aV.call(e, "constructor") && !aV.call(e.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (b5) {
                return false
            }
            if (bg.ownLast) {
                for (i in e) {
                    return aV.call(e, i)
                }
            }
            for (i in e) {
            }
            return i === undefined || aV.call(e, i)
        }, type: function(e) {
            if (e == null) {
                return e + ""
            }
            return typeof e === "object" || typeof e === "function" ? a1[bi.call(e)] || "object" : typeof e
        }, globalEval: function(e) {
            if (e && ae.trim(e)) {
                (a9.execScript || function(i) {
                    a9["eval"].call(a9, i)
                })(e)
            }
        }, camelCase: function(e) {
            return e.replace(f, "ms-").replace(aX, bu)
        }, nodeName: function(i, e) {
            return i.nodeName && i.nodeName.toLowerCase() === e.toLowerCase()
        }, each: function(b7, i, b5) {
            var e, b6 = 0, b8 = b7.length, b9 = bd(b7);
            if (b5) {
                if (b9) {
                    for (; b6 < b8; b6++) {
                        e = i.apply(b7[b6], b5);
                        if (e === false) {
                            break
                        }
                    }
                } else {
                    for (b6 in b7) {
                        e = i.apply(b7[b6], b5);
                        if (e === false) {
                            break
                        }
                    }
                }
            } else {
                if (b9) {
                    for (; b6 < b8; b6++) {
                        e = i.call(b7[b6], b6, b7[b6]);
                        if (e === false) {
                            break
                        }
                    }
                } else {
                    for (b6 in b7) {
                        e = i.call(b7[b6], b6, b7[b6]);
                        if (e === false) {
                            break
                        }
                    }
                }
            }
            return b7
        }, trim: function(e) {
            return e == null ? "" : (e + "").replace(ao, "")
        }, makeArray: function(e, b5) {
            var i = b5 || [];
            if (e != null) {
                if (bd(Object(e))) {
                    ae.merge(i, typeof e === "string" ? [e] : e)
                } else {
                    bS.call(i, e)
                }
            }
            return i
        }, inArray: function(e, b5, b6) {
            var i;
            if (b5) {
                if (bC) {
                    return bC.call(b5, e, b6)
                }
                i = b5.length;
                b6 = b6 ? b6 < 0 ? Math.max(0, i + b6) : b6 : 0;
                for (; b6 < i; b6++) {
                    if (b6 in b5 && b5[b6] === e) {
                        return b6
                    }
                }
            }
            return -1
        }, merge: function(i, b6) {
            var b7 = +b6.length, b5 = 0, e = i.length;
            while (b5 < b7) {
                i[e++] = b6[b5++]
            }
            if (b7 !== b7) {
                while (b6[b5] !== undefined) {
                    i[e++] = b6[b5++]
                }
            }
            i.length = e;
            return i
        }, grep: function(b7, ca, b8) {
            var i, e = [], b5 = 0, b6 = b7.length, b9 = !b8;
            for (; b5 < b6; b5++) {
                i = !ca(b7[b5], b5);
                if (i !== b9) {
                    e.push(b7[b5])
                }
            }
            return e
        }, map: function(b6, b7, ca) {
            var i, b8 = 0, b9 = b6.length, b5 = bd(b6), e = [];
            if (b5) {
                for (; b8 < b9; b8++) {
                    i = b7(b6[b8], b8, ca);
                    if (i != null) {
                        e.push(i)
                    }
                }
            } else {
                for (b8 in b6) {
                    i = b7(b6[b8], b8, ca);
                    if (i != null) {
                        e.push(i)
                    }
                }
            }
            return bA.apply([], e)
        }, guid: 1, proxy: function(b7, b6) {
            var e, b5, i;
            if (typeof b6 === "string") {
                i = b7[b6];
                b6 = b7;
                b7 = i
            }
            if (!ae.isFunction(b7)) {
                return undefined
            }
            e = V.call(arguments, 2);
            b5 = function() {
                return b7.apply(b6 || this, e.concat(V.call(arguments)))
            };
            b5.guid = b7.guid = b7.guid || ae.guid++;
            return b5
        }, now: function() {
            return +(new Date())
        }, support: bg});
    ae.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, i) {
        a1["[object " + i + "]"] = i.toLowerCase()
    });
    function bd(b5) {
        var i = "length" in b5 && b5.length, e = ae.type(b5);
        if (e === "function" || ae.isWindow(b5)) {
            return false
        }
        if (b5.nodeType === 1 && i) {
            return true
        }
        return e === "array" || i === 0 || typeof i === "number" && i > 0 && (i - 1) in b5
    }
    var bZ =
            /*
             * Sizzle CSS Selector Engine v2.2.0-pre
             * http://sizzlejs.com/
             *
             * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2014-12-16
             */
                    (function(cH) {
                        var cN, cP, cr, ck, cd, cC, cl, cO, b6, cm, b9, cb, cG, cs, cy, db, cK, dd, cT, e = "sizzle" + 1 * new Date(), ca = cH.document, cR = 0, c8 = 0, cp = cU(), cW = cU(), cV = cU(), cM = function(dl, dk) {
                            if (dl === dk) {
                                b9 = true
                            }
                            return 0
                        }, ci = 1 << 31, c3 = ({}).hasOwnProperty, dj = [], cF = dj.pop, cg = dj.push, cn = dj.push, dc = dj.slice, c5 = function(dk, dn) {
                            var dm = 0, dl = dk.length;
                            for (; dm < dl; dm++) {
                                if (dk[dm] === dn) {
                                    return dm
                                }
                            }
                            return -1
                        }, co = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", cu = "[\\x20\\t\\r\\n\\f]", c6 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ce = c6.replace("w", "w#"), de = "\\[" + cu + "*(" + c6 + ")(?:" + cu + "*([*^$|!~]?=)" + cu + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ce + "))|)" + cu + "*\\]", c7 = ":(" + c6 + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + de + ")*)|.*)\\)|)", di = new RegExp(cu + "+", "g"), cE = new RegExp("^" + cu + "+|((?:^|[^\\\\])(?:\\\\.)*)" + cu + "+$", "g"), cS = new RegExp("^" + cu + "*," + cu + "*"), cJ = new RegExp("^" + cu + "*([>+~]|" + cu + ")" + cu + "*"), dh = new RegExp("=" + cu + "*([^\\]'\"]*?)" + cu + "*\\]", "g"), c0 = new RegExp(c7), ch = new RegExp("^" + ce + "$"), cA = {ID: new RegExp("^#(" + c6 + ")"), CLASS: new RegExp("^\\.(" + c6 + ")"), TAG: new RegExp("^(" + c6.replace("w", "w*") + ")"), ATTR: new RegExp("^" + de), PSEUDO: new RegExp("^" + c7), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + cu + "*(even|odd|(([+-]|)(\\d*)n|)" + cu + "*(?:([+-]|)" + cu + "*(\\d+)|))" + cu + "*\\)|)", "i"), bool: new RegExp("^(?:" + co + ")$", "i"), needsContext: new RegExp("^" + cu + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + cu + "*((?:-\\d)?\\d*)" + cu + "*\\)|)(?=[^-]|$)", "i")}, c4 = /^(?:input|select|textarea|button)$/i, c9 = /^h\d$/i, b7 = /^[^{]+\{\s*\[native \w/, cZ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, cz = /[+~]/, c2 = /'|\\/g, dg = new RegExp("\\\\([\\da-f]{1,6}" + cu + "?|(" + cu + ")|.)", "ig"), da = function(dk, dn, dl) {
                            var dm = "0x" + dn - 65536;
                            return dm !== dm || dl ? dn : dm < 0 ? String.fromCharCode(dm + 65536) : String.fromCharCode(dm >> 10 | 55296, dm & 1023 | 56320)
                        }, b5 = function() {
                            cb()
                        };
                        try {
                            cn.apply((dj = dc.call(ca.childNodes)), ca.childNodes);
                            dj[ca.childNodes.length].nodeType
                        } catch (cI) {
                            cn = {apply: dj.length ? function(dl, dk) {
                                    cg.apply(dl, dc.call(dk))
                                } : function(dk, dn) {
                                    var dl = dk.length, dm = 0;
                                    while ((dk[dl++] = dn[dm++])) {
                                    }
                                    dk.length = dl - 1
                                }}
                        }
                        function cD(du, dl, dy, dn) {
                            var dz, dr, ds, dw, dx, dq, dp, dk, dm, dv;
                            if ((dl ? dl.ownerDocument || dl : ca) !== cG) {
                                cb(dl)
                            }
                            dl = dl || cG;
                            dy = dy || [];
                            dw = dl.nodeType;
                            if (typeof du !== "string" || !du || dw !== 1 && dw !== 9 && dw !== 11) {
                                return dy
                            }
                            if (!dn && cy) {
                                if (dw !== 11 && (dz = cZ.exec(du))) {
                                    if ((ds = dz[1])) {
                                        if (dw === 9) {
                                            dr = dl.getElementById(ds);
                                            if (dr && dr.parentNode) {
                                                if (dr.id === ds) {
                                                    dy.push(dr);
                                                    return dy
                                                }
                                            } else {
                                                return dy
                                            }
                                        } else {
                                            if (dl.ownerDocument && (dr = dl.ownerDocument.getElementById(ds)) && cT(dl, dr) && dr.id === ds) {
                                                dy.push(dr);
                                                return dy
                                            }
                                        }
                                    } else {
                                        if (dz[2]) {
                                            cn.apply(dy, dl.getElementsByTagName(du));
                                            return dy
                                        } else {
                                            if ((ds = dz[3]) && cP.getElementsByClassName) {
                                                cn.apply(dy, dl.getElementsByClassName(ds));
                                                return dy
                                            }
                                        }
                                    }
                                }
                                if (cP.qsa && (!db || !db.test(du))) {
                                    dk = dp = e;
                                    dm = dl;
                                    dv = dw !== 1 && du;
                                    if (dw === 1 && dl.nodeName.toLowerCase() !== "object") {
                                        dq = cC(du);
                                        if ((dp = dl.getAttribute("id"))) {
                                            dk = dp.replace(c2, "\\$&")
                                        } else {
                                            dl.setAttribute("id", dk)
                                        }
                                        dk = "[id='" + dk + "'] ";
                                        dx = dq.length;
                                        while (dx--) {
                                            dq[dx] = dk + cx(dq[dx])
                                        }
                                        dm = cz.test(du) && c1(dl.parentNode) || dl;
                                        dv = dq.join(",")
                                    }
                                    if (dv) {
                                        try {
                                            cn.apply(dy, dm.querySelectorAll(dv));
                                            return dy
                                        } catch (dt) {
                                        } finally {
                                            if (!dp) {
                                                dl.removeAttribute("id")
                                            }
                                        }
                                    }
                                }
                            }
                            return cO(du.replace(cE, "$1"), dl, dy, dn)
                        }
                        function cU() {
                            var dl = [];
                            function dk(dm, dn) {
                                if (dl.push(dm + " ") > cr.cacheLength) {
                                    delete dk[dl.shift()]
                                }
                                return(dk[dm + " "] = dn)
                            }
                            return dk
                        }
                        function cq(dk) {
                            dk[e] = true;
                            return dk
                        }
                        function df(dk) {
                            var dm = cG.createElement("div");
                            try {
                                return !!dk(dm)
                            } catch (dl) {
                                return false
                            } finally {
                                if (dm.parentNode) {
                                    dm.parentNode.removeChild(dm)
                                }
                                dm = null
                            }
                        }
                        function cY(dm, dk) {
                            var dl = dm.split("|"), dn = dm.length;
                            while (dn--) {
                                cr.attrHandle[dl[dn]] = dk
                            }
                        }
                        function cv(dl, dk) {
                            var dn = dk && dl, dm = dn && dl.nodeType === 1 && dk.nodeType === 1 && (~dk.sourceIndex || ci) - (~dl.sourceIndex || ci);
                            if (dm) {
                                return dm
                            }
                            if (dn) {
                                while ((dn = dn.nextSibling)) {
                                    if (dn === dk) {
                                        return -1
                                    }
                                }
                            }
                            return dl ? 1 : -1
                        }
                        function cL(dk) {
                            return function(dm) {
                                var dl = dm.nodeName.toLowerCase();
                                return dl === "input" && dm.type === dk
                            }
                        }
                        function cf(dk) {
                            return function(dm) {
                                var dl = dm.nodeName.toLowerCase();
                                return(dl === "input" || dl === "button") && dm.type === dk
                            }
                        }
                        function cw(dk) {
                            return cq(function(dl) {
                                dl = +dl;
                                return cq(function(dm, dr) {
                                    var dp, dn = dk([], dm.length, dl), dq = dn.length;
                                    while (dq--) {
                                        if (dm[(dp = dn[dq])]) {
                                            dm[dp] = !(dr[dp] = dm[dp])
                                        }
                                    }
                                })
                            })
                        }
                        function c1(dk) {
                            return dk && typeof dk.getElementsByTagName !== "undefined" && dk
                        }
                        cP = cD.support = {};
                        cd = cD.isXML = function(dk) {
                            var dl = dk && (dk.ownerDocument || dk).documentElement;
                            return dl ? dl.nodeName !== "HTML" : false
                        };
                        cb = cD.setDocument = function(dm) {
                            var dk, dl, dn = dm ? dm.ownerDocument || dm : ca;
                            if (dn === cG || dn.nodeType !== 9 || !dn.documentElement) {
                                return cG
                            }
                            cG = dn;
                            cs = dn.documentElement;
                            dl = dn.defaultView;
                            if (dl && dl !== dl.top) {
                                if (dl.addEventListener) {
                                    dl.addEventListener("unload", b5, false)
                                } else {
                                    if (dl.attachEvent) {
                                        dl.attachEvent("onunload", b5)
                                    }
                                }
                            }
                            cy = !cd(dn);
                            cP.attributes = df(function(dp) {
                                dp.className = "i";
                                return !dp.getAttribute("className")
                            });
                            cP.getElementsByTagName = df(function(dp) {
                                dp.appendChild(dn.createComment(""));
                                return !dp.getElementsByTagName("*").length
                            });
                            cP.getElementsByClassName = b7.test(dn.getElementsByClassName);
                            cP.getById = df(function(dp) {
                                cs.appendChild(dp).id = e;
                                return !dn.getElementsByName || !dn.getElementsByName(e).length
                            });
                            if (cP.getById) {
                                cr.find.ID = function(dr, dq) {
                                    if (typeof dq.getElementById !== "undefined" && cy) {
                                        var dp = dq.getElementById(dr);
                                        return dp && dp.parentNode ? [dp] : []
                                    }
                                };
                                cr.filter.ID = function(dq) {
                                    var dp = dq.replace(dg, da);
                                    return function(dr) {
                                        return dr.getAttribute("id") === dp
                                    }
                                }
                            } else {
                                delete cr.find.ID;
                                cr.filter.ID = function(dq) {
                                    var dp = dq.replace(dg, da);
                                    return function(ds) {
                                        var dr = typeof ds.getAttributeNode !== "undefined" && ds.getAttributeNode("id");
                                        return dr && dr.value === dp
                                    }
                                }
                            }
                            cr.find.TAG = cP.getElementsByTagName ? function(dp, dq) {
                                if (typeof dq.getElementsByTagName !== "undefined") {
                                    return dq.getElementsByTagName(dp)
                                } else {
                                    if (cP.qsa) {
                                        return dq.querySelectorAll(dp)
                                    }
                                }
                            } : function(dp, dt) {
                                var du, ds = [], dr = 0, dq = dt.getElementsByTagName(dp);
                                if (dp === "*") {
                                    while ((du = dq[dr++])) {
                                        if (du.nodeType === 1) {
                                            ds.push(du)
                                        }
                                    }
                                    return ds
                                }
                                return dq
                            };
                            cr.find.CLASS = cP.getElementsByClassName && function(dq, dp) {
                                if (cy) {
                                    return dp.getElementsByClassName(dq)
                                }
                            };
                            cK = [];
                            db = [];
                            if ((cP.qsa = b7.test(dn.querySelectorAll))) {
                                df(function(dp) {
                                    cs.appendChild(dp).innerHTML = "<a id='" + e + "'></a><select id='" + e + "-\f]' msallowcapture=''><option selected=''></option></select>";
                                    if (dp.querySelectorAll("[msallowcapture^='']").length) {
                                        db.push("[*^$]=" + cu + "*(?:''|\"\")")
                                    }
                                    if (!dp.querySelectorAll("[selected]").length) {
                                        db.push("\\[" + cu + "*(?:value|" + co + ")")
                                    }
                                    if (!dp.querySelectorAll("[id~=" + e + "-]").length) {
                                        db.push("~=")
                                    }
                                    if (!dp.querySelectorAll(":checked").length) {
                                        db.push(":checked")
                                    }
                                    if (!dp.querySelectorAll("a#" + e + "+*").length) {
                                        db.push(".#.+[+~]")
                                    }
                                });
                                df(function(dq) {
                                    var dp = dn.createElement("input");
                                    dp.setAttribute("type", "hidden");
                                    dq.appendChild(dp).setAttribute("name", "D");
                                    if (dq.querySelectorAll("[name=d]").length) {
                                        db.push("name" + cu + "*[*^$|!~]?=")
                                    }
                                    if (!dq.querySelectorAll(":enabled").length) {
                                        db.push(":enabled", ":disabled")
                                    }
                                    dq.querySelectorAll("*,:x");
                                    db.push(",.*:")
                                })
                            }
                            if ((cP.matchesSelector = b7.test((dd = cs.matches || cs.webkitMatchesSelector || cs.mozMatchesSelector || cs.oMatchesSelector || cs.msMatchesSelector)))) {
                                df(function(dp) {
                                    cP.disconnectedMatch = dd.call(dp, "div");
                                    dd.call(dp, "[s!='']:x");
                                    cK.push("!=", c7)
                                })
                            }
                            db = db.length && new RegExp(db.join("|"));
                            cK = cK.length && new RegExp(cK.join("|"));
                            dk = b7.test(cs.compareDocumentPosition);
                            cT = dk || b7.test(cs.contains) ? function(dq, dp) {
                                var ds = dq.nodeType === 9 ? dq.documentElement : dq, dr = dp && dp.parentNode;
                                return dq === dr || !!(dr && dr.nodeType === 1 && (ds.contains ? ds.contains(dr) : dq.compareDocumentPosition && dq.compareDocumentPosition(dr) & 16))
                            } : function(dq, dp) {
                                if (dp) {
                                    while ((dp = dp.parentNode)) {
                                        if (dp === dq) {
                                            return true
                                        }
                                    }
                                }
                                return false
                            };
                            cM = dk ? function(dq, dp) {
                                if (dq === dp) {
                                    b9 = true;
                                    return 0
                                }
                                var dr = !dq.compareDocumentPosition - !dp.compareDocumentPosition;
                                if (dr) {
                                    return dr
                                }
                                dr = (dq.ownerDocument || dq) === (dp.ownerDocument || dp) ? dq.compareDocumentPosition(dp) : 1;
                                if (dr & 1 || (!cP.sortDetached && dp.compareDocumentPosition(dq) === dr)) {
                                    if (dq === dn || dq.ownerDocument === ca && cT(ca, dq)) {
                                        return -1
                                    }
                                    if (dp === dn || dp.ownerDocument === ca && cT(ca, dp)) {
                                        return 1
                                    }
                                    return cm ? (c5(cm, dq) - c5(cm, dp)) : 0
                                }
                                return dr & 4 ? -1 : 1
                            } : function(dq, dp) {
                                if (dq === dp) {
                                    b9 = true;
                                    return 0
                                }
                                var dw, dt = 0, dv = dq.parentNode, ds = dp.parentNode, dr = [dq], du = [dp];
                                if (!dv || !ds) {
                                    return dq === dn ? -1 : dp === dn ? 1 : dv ? -1 : ds ? 1 : cm ? (c5(cm, dq) - c5(cm, dp)) : 0
                                } else {
                                    if (dv === ds) {
                                        return cv(dq, dp)
                                    }
                                }
                                dw = dq;
                                while ((dw = dw.parentNode)) {
                                    dr.unshift(dw)
                                }
                                dw = dp;
                                while ((dw = dw.parentNode)) {
                                    du.unshift(dw)
                                }
                                while (dr[dt] === du[dt]) {
                                    dt++
                                }
                                return dt ? cv(dr[dt], du[dt]) : dr[dt] === ca ? -1 : du[dt] === ca ? 1 : 0
                            };
                            return dn
                        };
                        cD.matches = function(dl, dk) {
                            return cD(dl, null, null, dk)
                        };
                        cD.matchesSelector = function(dm, dk) {
                            if ((dm.ownerDocument || dm) !== cG) {
                                cb(dm)
                            }
                            dk = dk.replace(dh, "='$1']");
                            if (cP.matchesSelector && cy && (!cK || !cK.test(dk)) && (!db || !db.test(dk))) {
                                try {
                                    var dl = dd.call(dm, dk);
                                    if (dl || cP.disconnectedMatch || dm.document && dm.document.nodeType !== 11) {
                                        return dl
                                    }
                                } catch (dn) {
                                }
                            }
                            return cD(dk, cG, null, [dm]).length > 0
                        };
                        cD.contains = function(dk, dl) {
                            if ((dk.ownerDocument || dk) !== cG) {
                                cb(dk)
                            }
                            return cT(dk, dl)
                        };
                        cD.attr = function(dm, dk) {
                            if ((dm.ownerDocument || dm) !== cG) {
                                cb(dm)
                            }
                            var dl = cr.attrHandle[dk.toLowerCase()], dn = dl && c3.call(cr.attrHandle, dk.toLowerCase()) ? dl(dm, dk, !cy) : undefined;
                            return dn !== undefined ? dn : cP.attributes || !cy ? dm.getAttribute(dk) : (dn = dm.getAttributeNode(dk)) && dn.specified ? dn.value : null
                        };
                        cD.error = function(dk) {
                            throw new Error("Syntax error, unrecognized expression: " + dk)
                        };
                        cD.uniqueSort = function(dn) {
                            var dp, dk = [], dl = 0, dm = 0;
                            b9 = !cP.detectDuplicates;
                            cm = !cP.sortStable && dn.slice(0);
                            dn.sort(cM);
                            if (b9) {
                                while ((dp = dn[dm++])) {
                                    if (dp === dn[dm]) {
                                        dl = dk.push(dm)
                                    }
                                }
                                while (dl--) {
                                    dn.splice(dk[dl], 1)
                                }
                            }
                            cm = null;
                            return dn
                        };
                        ck = cD.getText = function(dk) {
                            var dp, dm = "", dn = 0, dl = dk.nodeType;
                            if (!dl) {
                                while ((dp = dk[dn++])) {
                                    dm += ck(dp)
                                }
                            } else {
                                if (dl === 1 || dl === 9 || dl === 11) {
                                    if (typeof dk.textContent === "string") {
                                        return dk.textContent
                                    } else {
                                        for (dk = dk.firstChild; dk; dk = dk.nextSibling) {
                                            dm += ck(dk)
                                        }
                                    }
                                } else {
                                    if (dl === 3 || dl === 4) {
                                        return dk.nodeValue
                                    }
                                }
                            }
                            return dm
                        };
                        cr = cD.selectors = {cacheLength: 50, createPseudo: cq, match: cA, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: true}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: true}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function(dk) {
                                    dk[1] = dk[1].replace(dg, da);
                                    dk[3] = (dk[3] || dk[4] || dk[5] || "").replace(dg, da);
                                    if (dk[2] === "~=") {
                                        dk[3] = " " + dk[3] + " "
                                    }
                                    return dk.slice(0, 4)
                                }, CHILD: function(dk) {
                                    dk[1] = dk[1].toLowerCase();
                                    if (dk[1].slice(0, 3) === "nth") {
                                        if (!dk[3]) {
                                            cD.error(dk[0])
                                        }
                                        dk[4] = +(dk[4] ? dk[5] + (dk[6] || 1) : 2 * (dk[3] === "even" || dk[3] === "odd"));
                                        dk[5] = +((dk[7] + dk[8]) || dk[3] === "odd")
                                    } else {
                                        if (dk[3]) {
                                            cD.error(dk[0])
                                        }
                                    }
                                    return dk
                                }, PSEUDO: function(dl) {
                                    var dk, dm = !dl[6] && dl[2];
                                    if (cA.CHILD.test(dl[0])) {
                                        return null
                                    }
                                    if (dl[3]) {
                                        dl[2] = dl[4] || dl[5] || ""
                                    } else {
                                        if (dm && c0.test(dm) && (dk = cC(dm, true)) && (dk = dm.indexOf(")", dm.length - dk) - dm.length)) {
                                            dl[0] = dl[0].slice(0, dk);
                                            dl[2] = dm.slice(0, dk)
                                        }
                                    }
                                    return dl.slice(0, 3)
                                }}, filter: {TAG: function(dl) {
                                    var dk = dl.replace(dg, da).toLowerCase();
                                    return dl === "*" ? function() {
                                        return true
                                    } : function(dm) {
                                        return dm.nodeName && dm.nodeName.toLowerCase() === dk
                                    }
                                }, CLASS: function(dk) {
                                    var dl = cp[dk + " "];
                                    return dl || (dl = new RegExp("(^|" + cu + ")" + dk + "(" + cu + "|$)")) && cp(dk, function(dm) {
                                        return dl.test(typeof dm.className === "string" && dm.className || typeof dm.getAttribute !== "undefined" && dm.getAttribute("class") || "")
                                    })
                                }, ATTR: function(dm, dl, dk) {
                                    return function(dp) {
                                        var dn = cD.attr(dp, dm);
                                        if (dn == null) {
                                            return dl === "!="
                                        }
                                        if (!dl) {
                                            return true
                                        }
                                        dn += "";
                                        return dl === "=" ? dn === dk : dl === "!=" ? dn !== dk : dl === "^=" ? dk && dn.indexOf(dk) === 0 : dl === "*=" ? dk && dn.indexOf(dk) > -1 : dl === "$=" ? dk && dn.slice(-dk.length) === dk : dl === "~=" ? (" " + dn.replace(di, " ") + " ").indexOf(dk) > -1 : dl === "|=" ? dn === dk || dn.slice(0, dk.length + 1) === dk + "-" : false
                                    }
                                }, CHILD: function(dl, dp, dn, dq, dm) {
                                    var dk = dl.slice(0, 3) !== "nth", dr = dl.slice(-4) !== "last", ds = dp === "of-type";
                                    return dq === 1 && dm === 0 ? function(dt) {
                                        return !!dt.parentNode
                                    } : function(dF, dB, dv) {
                                        var dx, dz, du, dy, dt, dD, dE = dk !== dr ? "nextSibling" : "previousSibling", dw = dF.parentNode, dC = ds && dF.nodeName.toLowerCase(), dA = !dv && !ds;
                                        if (dw) {
                                            if (dk) {
                                                while (dE) {
                                                    du = dF;
                                                    while ((du = du[dE])) {
                                                        if (ds ? du.nodeName.toLowerCase() === dC : du.nodeType === 1) {
                                                            return false
                                                        }
                                                    }
                                                    dD = dE = dl === "only" && !dD && "nextSibling"
                                                }
                                                return true
                                            }
                                            dD = [dr ? dw.firstChild : dw.lastChild];
                                            if (dr && dA) {
                                                dz = dw[e] || (dw[e] = {});
                                                dx = dz[dl] || [];
                                                dt = dx[0] === cR && dx[1];
                                                dy = dx[0] === cR && dx[2];
                                                du = dt && dw.childNodes[dt];
                                                while ((du = ++dt && du && du[dE] || (dy = dt = 0) || dD.pop())) {
                                                    if (du.nodeType === 1 && ++dy && du === dF) {
                                                        dz[dl] = [cR, dt, dy];
                                                        break
                                                    }
                                                }
                                            } else {
                                                if (dA && (dx = (dF[e] || (dF[e] = {}))[dl]) && dx[0] === cR) {
                                                    dy = dx[1]
                                                } else {
                                                    while ((du = ++dt && du && du[dE] || (dy = dt = 0) || dD.pop())) {
                                                        if ((ds ? du.nodeName.toLowerCase() === dC : du.nodeType === 1) && ++dy) {
                                                            if (dA) {
                                                                (du[e] || (du[e] = {}))[dl] = [cR, dy]
                                                            }
                                                            if (du === dF) {
                                                                break
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            dy -= dm;
                                            return dy === dq || (dy % dq === 0 && dy / dq >= 0)
                                        }
                                    }
                                }, PSEUDO: function(dn, dm) {
                                    var dk, dl = cr.pseudos[dn] || cr.setFilters[dn.toLowerCase()] || cD.error("unsupported pseudo: " + dn);
                                    if (dl[e]) {
                                        return dl(dm)
                                    }
                                    if (dl.length > 1) {
                                        dk = [dn, dn, "", dm];
                                        return cr.setFilters.hasOwnProperty(dn.toLowerCase()) ? cq(function(dr, dt) {
                                            var dq, dp = dl(dr, dm), ds = dp.length;
                                            while (ds--) {
                                                dq = c5(dr, dp[ds]);
                                                dr[dq] = !(dt[dq] = dp[ds])
                                            }
                                        }) : function(dp) {
                                            return dl(dp, 0, dk)
                                        }
                                    }
                                    return dl
                                }}, pseudos: {not: cq(function(dk) {
                                    var dl = [], dm = [], dn = cl(dk.replace(cE, "$1"));
                                    return dn[e] ? cq(function(dq, dv, dt, dr) {
                                        var du, dp = dn(dq, null, dr, []), ds = dq.length;
                                        while (ds--) {
                                            if ((du = dp[ds])) {
                                                dq[ds] = !(dv[ds] = du)
                                            }
                                        }
                                    }) : function(dr, dq, dp) {
                                        dl[0] = dr;
                                        dn(dl, null, dp, dm);
                                        dl[0] = null;
                                        return !dm.pop()
                                    }
                                }), has: cq(function(dk) {
                                    return function(dl) {
                                        return cD(dk, dl).length > 0
                                    }
                                }), contains: cq(function(dk) {
                                    dk = dk.replace(dg, da);
                                    return function(dl) {
                                        return(dl.textContent || dl.innerText || ck(dl)).indexOf(dk) > -1
                                    }
                                }), lang: cq(function(dk) {
                                    if (!ch.test(dk || "")) {
                                        cD.error("unsupported lang: " + dk)
                                    }
                                    dk = dk.replace(dg, da).toLowerCase();
                                    return function(dm) {
                                        var dl;
                                        do {
                                            if ((dl = cy ? dm.lang : dm.getAttribute("xml:lang") || dm.getAttribute("lang"))) {
                                                dl = dl.toLowerCase();
                                                return dl === dk || dl.indexOf(dk + "-") === 0
                                            }
                                        } while ((dm = dm.parentNode) && dm.nodeType === 1);
                                        return false
                                    }
                                }), target: function(dk) {
                                    var dl = cH.location && cH.location.hash;
                                    return dl && dl.slice(1) === dk.id
                                }, root: function(dk) {
                                    return dk === cs
                                }, focus: function(dk) {
                                    return dk === cG.activeElement && (!cG.hasFocus || cG.hasFocus()) && !!(dk.type || dk.href || ~dk.tabIndex)
                                }, enabled: function(dk) {
                                    return dk.disabled === false
                                }, disabled: function(dk) {
                                    return dk.disabled === true
                                }, checked: function(dk) {
                                    var dl = dk.nodeName.toLowerCase();
                                    return(dl === "input" && !!dk.checked) || (dl === "option" && !!dk.selected)
                                }, selected: function(dk) {
                                    if (dk.parentNode) {
                                        dk.parentNode.selectedIndex
                                    }
                                    return dk.selected === true
                                }, empty: function(dk) {
                                    for (dk = dk.firstChild; dk; dk = dk.nextSibling) {
                                        if (dk.nodeType < 6) {
                                            return false
                                        }
                                    }
                                    return true
                                }, parent: function(dk) {
                                    return !cr.pseudos.empty(dk)
                                }, header: function(dk) {
                                    return c9.test(dk.nodeName)
                                }, input: function(dk) {
                                    return c4.test(dk.nodeName)
                                }, button: function(dl) {
                                    var dk = dl.nodeName.toLowerCase();
                                    return dk === "input" && dl.type === "button" || dk === "button"
                                }, text: function(dl) {
                                    var dk;
                                    return dl.nodeName.toLowerCase() === "input" && dl.type === "text" && ((dk = dl.getAttribute("type")) == null || dk.toLowerCase() === "text")
                                }, first: cw(function() {
                                    return[0]
                                }), last: cw(function(dk, dl) {
                                    return[dl - 1]
                                }), eq: cw(function(dk, dm, dl) {
                                    return[dl < 0 ? dl + dm : dl]
                                }), even: cw(function(dk, dm) {
                                    var dl = 0;
                                    for (; dl < dm; dl += 2) {
                                        dk.push(dl)
                                    }
                                    return dk
                                }), odd: cw(function(dk, dm) {
                                    var dl = 1;
                                    for (; dl < dm; dl += 2) {
                                        dk.push(dl)
                                    }
                                    return dk
                                }), lt: cw(function(dl, dk, dn) {
                                    var dm = dn < 0 ? dn + dk : dn;
                                    for (; --dm >= 0; ) {
                                        dl.push(dm)
                                    }
                                    return dl
                                }), gt: cw(function(dl, dk, dn) {
                                    var dm = dn < 0 ? dn + dk : dn;
                                    for (; ++dm < dk; ) {
                                        dl.push(dm)
                                    }
                                    return dl
                                })}};
                        cr.pseudos.nth = cr.pseudos.eq;
                        for (cN in {radio: true, checkbox: true, file: true, password: true, image: true}) {
                            cr.pseudos[cN] = cL(cN)
                        }
                        for (cN in {submit: true, reset: true}) {
                            cr.pseudos[cN] = cf(cN)
                        }
                        function cj() {
                        }
                        cj.prototype = cr.filters = cr.pseudos;
                        cr.setFilters = new cj();
                        cC = cD.tokenize = function(dp, du) {
                            var dm, dq, ds, dt, dr, dl, dk, dn = cW[dp + " "];
                            if (dn) {
                                return du ? 0 : dn.slice(0)
                            }
                            dr = dp;
                            dl = [];
                            dk = cr.preFilter;
                            while (dr) {
                                if (!dm || (dq = cS.exec(dr))) {
                                    if (dq) {
                                        dr = dr.slice(dq[0].length) || dr
                                    }
                                    dl.push((ds = []))
                                }
                                dm = false;
                                if ((dq = cJ.exec(dr))) {
                                    dm = dq.shift();
                                    ds.push({value: dm, type: dq[0].replace(cE, " ")});
                                    dr = dr.slice(dm.length)
                                }
                                for (dt in cr.filter) {
                                    if ((dq = cA[dt].exec(dr)) && (!dk[dt] || (dq = dk[dt](dq)))) {
                                        dm = dq.shift();
                                        ds.push({value: dm, type: dt, matches: dq});
                                        dr = dr.slice(dm.length)
                                    }
                                }
                                if (!dm) {
                                    break
                                }
                            }
                            return du ? dr.length : dr ? cD.error(dp) : cW(dp, dl).slice(0)
                        };
                        function cx(dk) {
                            var dn = 0, dm = dk.length, dl = "";
                            for (; dn < dm; dn++) {
                                dl += dk[dn].value
                            }
                            return dl
                        }
                        function cB(dp, dm, dn) {
                            var dk = dm.dir, dq = dn && dk === "parentNode", dl = c8++;
                            return dm.first ? function(dt, ds, dr) {
                                while ((dt = dt[dk])) {
                                    if (dt.nodeType === 1 || dq) {
                                        return dp(dt, ds, dr)
                                    }
                                }
                            } : function(dv, dt, ds) {
                                var dw, du, dr = [cR, dl];
                                if (ds) {
                                    while ((dv = dv[dk])) {
                                        if (dv.nodeType === 1 || dq) {
                                            if (dp(dv, dt, ds)) {
                                                return true
                                            }
                                        }
                                    }
                                } else {
                                    while ((dv = dv[dk])) {
                                        if (dv.nodeType === 1 || dq) {
                                            du = dv[e] || (dv[e] = {});
                                            if ((dw = du[dk]) && dw[0] === cR && dw[1] === dl) {
                                                return(dr[2] = dw[2])
                                            } else {
                                                du[dk] = dr;
                                                if ((dr[2] = dp(dv, dt, ds))) {
                                                    return true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        function i(dk) {
                            return dk.length > 1 ? function(dl, dp, dm) {
                                var dn = dk.length;
                                while (dn--) {
                                    if (!dk[dn](dl, dp, dm)) {
                                        return false
                                    }
                                }
                                return true
                            } : dk[0]
                        }
                        function cQ(dm, dk, dp) {
                            var dn = 0, dl = dk.length;
                            for (; dn < dl; dn++) {
                                cD(dm, dk[dn], dp)
                            }
                            return dp
                        }
                        function cc(dk, dl, dm, dn, dr) {
                            var dp, du = [], dq = 0, ds = dk.length, dt = dl != null;
                            for (; dq < ds; dq++) {
                                if ((dp = dk[dq])) {
                                    if (!dm || dm(dp, dn, dr)) {
                                        du.push(dp);
                                        if (dt) {
                                            dl.push(dq)
                                        }
                                    }
                                }
                            }
                            return du
                        }
                        function ct(dm, dl, dp, dn, dq, dk) {
                            if (dn && !dn[e]) {
                                dn = ct(dn)
                            }
                            if (dq && !dq[e]) {
                                dq = ct(dq, dk)
                            }
                            return cq(function(dy, du, dC, dw) {
                                var dx, dv, dr, dD = [], dz = [], dB = du.length, dA = dy || cQ(dl || "*", dC.nodeType ? [dC] : dC, []), ds = dm && (dy || !dl) ? cc(dA, dD, dm, dC, dw) : dA, dt = dp ? dq || (dy ? dm : dB || dn) ? [] : du : ds;
                                if (dp) {
                                    dp(ds, dt, dC, dw)
                                }
                                if (dn) {
                                    dx = cc(dt, dz);
                                    dn(dx, [], dC, dw);
                                    dv = dx.length;
                                    while (dv--) {
                                        if ((dr = dx[dv])) {
                                            dt[dz[dv]] = !(ds[dz[dv]] = dr)
                                        }
                                    }
                                }
                                if (dy) {
                                    if (dq || dm) {
                                        if (dq) {
                                            dx = [];
                                            dv = dt.length;
                                            while (dv--) {
                                                if ((dr = dt[dv])) {
                                                    dx.push((ds[dv] = dr))
                                                }
                                            }
                                            dq(null, (dt = []), dx, dw)
                                        }
                                        dv = dt.length;
                                        while (dv--) {
                                            if ((dr = dt[dv]) && (dx = dq ? c5(dy, dr) : dD[dv]) > -1) {
                                                dy[dx] = !(du[dx] = dr)
                                            }
                                        }
                                    }
                                } else {
                                    dt = cc(dt === du ? dt.splice(dB, dt.length) : dt);
                                    if (dq) {
                                        dq(null, du, dt, dw)
                                    } else {
                                        cn.apply(du, dt)
                                    }
                                }
                            })
                        }
                        function cX(dn) {
                            var du, dl, dv, dm = dn.length, dr = cr.relative[dn[0].type], ds = dr || cr.relative[" "], dk = dr ? 1 : 0, dp = cB(function(dw) {
                                return dw === du
                            }, ds, true), dq = cB(function(dw) {
                                return c5(du, dw) > -1
                            }, ds, true), dt = [function(dz, dy, dx) {
                                    var dw = (!dr && (dx || dy !== b6)) || ((du = dy).nodeType ? dp(dz, dy, dx) : dq(dz, dy, dx));
                                    du = null;
                                    return dw
                                }];
                            for (; dk < dm; dk++) {
                                if ((dl = cr.relative[dn[dk].type])) {
                                    dt = [cB(i(dt), dl)]
                                } else {
                                    dl = cr.filter[dn[dk].type].apply(null, dn[dk].matches);
                                    if (dl[e]) {
                                        dv = ++dk;
                                        for (; dv < dm; dv++) {
                                            if (cr.relative[dn[dv].type]) {
                                                break
                                            }
                                        }
                                        return ct(dk > 1 && i(dt), dk > 1 && cx(dn.slice(0, dk - 1).concat({value: dn[dk - 2].type === " " ? "*" : ""})).replace(cE, "$1"), dl, dk < dv && cX(dn.slice(dk, dv)), dv < dm && cX((dn = dn.slice(dv))), dv < dm && cx(dn))
                                    }
                                    dt.push(dl)
                                }
                            }
                            return i(dt)
                        }
                        function b8(dn, dm) {
                            var dk = dm.length > 0, dp = dn.length > 0, dl = function(dw, dq, dB, du, dy) {
                                var dC, dA, dE, dv = 0, ds = "0", dD = dw && [], dx = [], dF = b6, dz = dw || dp && cr.find.TAG("*", dy), dr = (cR += dF == null ? 1 : Math.random() || 0.1), dt = dz.length;
                                if (dy) {
                                    b6 = dq !== cG && dq
                                }
                                for (; ds !== dt && (dC = dz[ds]) != null; ds++) {
                                    if (dp && dC) {
                                        dA = 0;
                                        while ((dE = dn[dA++])) {
                                            if (dE(dC, dq, dB)) {
                                                du.push(dC);
                                                break
                                            }
                                        }
                                        if (dy) {
                                            cR = dr
                                        }
                                    }
                                    if (dk) {
                                        if ((dC = !dE && dC)) {
                                            dv--
                                        }
                                        if (dw) {
                                            dD.push(dC)
                                        }
                                    }
                                }
                                dv += ds;
                                if (dk && ds !== dv) {
                                    dA = 0;
                                    while ((dE = dm[dA++])) {
                                        dE(dD, dx, dq, dB)
                                    }
                                    if (dw) {
                                        if (dv > 0) {
                                            while (ds--) {
                                                if (!(dD[ds] || dx[ds])) {
                                                    dx[ds] = cF.call(du)
                                                }
                                            }
                                        }
                                        dx = cc(dx)
                                    }
                                    cn.apply(du, dx);
                                    if (dy && !dw && dx.length > 0 && (dv + dm.length) > 1) {
                                        cD.uniqueSort(du)
                                    }
                                }
                                if (dy) {
                                    cR = dr;
                                    b6 = dF
                                }
                                return dD
                            };
                            return dk ? cq(dl) : dl
                        }
                        cl = cD.compile = function(dk, dn) {
                            var dp, dm = [], dl = [], dq = cV[dk + " "];
                            if (!dq) {
                                if (!dn) {
                                    dn = cC(dk)
                                }
                                dp = dn.length;
                                while (dp--) {
                                    dq = cX(dn[dp]);
                                    if (dq[e]) {
                                        dm.push(dq)
                                    } else {
                                        dl.push(dq)
                                    }
                                }
                                dq = cV(dk, b8(dl, dm));
                                dq.selector = dk
                            }
                            return dq
                        };
                        cO = cD.select = function(dv, dt, dk, dn) {
                            var dl, dr, du, ds, dp, dq = typeof dv === "function" && dv, dm = !dn && cC((dv = dq.selector || dv));
                            dk = dk || [];
                            if (dm.length === 1) {
                                dr = dm[0] = dm[0].slice(0);
                                if (dr.length > 2 && (du = dr[0]).type === "ID" && cP.getById && dt.nodeType === 9 && cy && cr.relative[dr[1].type]) {
                                    dt = (cr.find.ID(du.matches[0].replace(dg, da), dt) || [])[0];
                                    if (!dt) {
                                        return dk
                                    } else {
                                        if (dq) {
                                            dt = dt.parentNode
                                        }
                                    }
                                    dv = dv.slice(dr.shift().value.length)
                                }
                                dl = cA.needsContext.test(dv) ? 0 : dr.length;
                                while (dl--) {
                                    du = dr[dl];
                                    if (cr.relative[(ds = du.type)]) {
                                        break
                                    }
                                    if ((dp = cr.find[ds])) {
                                        if ((dn = dp(du.matches[0].replace(dg, da), cz.test(dr[0].type) && c1(dt.parentNode) || dt))) {
                                            dr.splice(dl, 1);
                                            dv = dn.length && cx(dr);
                                            if (!dv) {
                                                cn.apply(dk, dn);
                                                return dk
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            (dq || cl(dv, dm))(dn, dt, !cy, dk, cz.test(dv) && c1(dt.parentNode) || dt);
                            return dk
                        };
                        cP.sortStable = e.split("").sort(cM).join("") === e;
                        cP.detectDuplicates = !!b9;
                        cb();
                        cP.sortDetached = df(function(dk) {
                            return dk.compareDocumentPosition(cG.createElement("div")) & 1
                        });
                        if (!df(function(dk) {
                            dk.innerHTML = "<a href='#'></a>";
                            return dk.firstChild.getAttribute("href") === "#"
                        })) {
                            cY("type|href|height|width", function(dl, dk, dm) {
                                if (!dm) {
                                    return dl.getAttribute(dk, dk.toLowerCase() === "type" ? 1 : 2)
                                }
                            })
                        }
                        if (!cP.attributes || !df(function(dk) {
                            dk.innerHTML = "<input/>";
                            dk.firstChild.setAttribute("value", "");
                            return dk.firstChild.getAttribute("value") === ""
                        })) {
                            cY("value", function(dl, dk, dm) {
                                if (!dm && dl.nodeName.toLowerCase() === "input") {
                                    return dl.defaultValue
                                }
                            })
                        }
                        if (!df(function(dk) {
                            return dk.getAttribute("disabled") == null
                        })) {
                            cY(co, function(dl, dk, dn) {
                                var dm;
                                if (!dn) {
                                    return dl[dk] === true ? dk.toLowerCase() : (dm = dl.getAttributeNode(dk)) && dm.specified ? dm.value : null
                                }
                            })
                        }
                        return cD
                    })(a9);
            ae.find = bZ;
            ae.expr = bZ.selectors;
            ae.expr[":"] = ae.expr.pseudos;
            ae.unique = bZ.uniqueSort;
            ae.text = bZ.getText;
            ae.isXMLDoc = bZ.isXML;
            ae.contains = bZ.contains;
            var aB = ae.expr.match.needsContext;
            var aK = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
            var F = /^.[^:#\[\.,]*$/;
            function d(b5, e, i) {
                if (ae.isFunction(e)) {
                    return ae.grep(b5, function(b7, b6) {
                        return !!e.call(b7, b6, b7) !== i
                    })
                }
                if (e.nodeType) {
                    return ae.grep(b5, function(b6) {
                        return(b6 === e) !== i
                    })
                }
                if (typeof e === "string") {
                    if (F.test(e)) {
                        return ae.filter(e, b5, i)
                    }
                    e = ae.filter(e, b5)
                }
                return ae.grep(b5, function(b6) {
                    return(ae.inArray(b6, e) >= 0) !== i
                })
            }
            ae.filter = function(b6, e, b5) {
                var i = e[0];
                if (b5) {
                    b6 = ":not(" + b6 + ")"
                }
                return e.length === 1 && i.nodeType === 1 ? ae.find.matchesSelector(i, b6) ? [i] : [] : ae.find.matches(b6, ae.grep(e, function(b7) {
                    return b7.nodeType === 1
                }))
            };
            ae.fn.extend({find: function(b5) {
                    var i, b7 = [], b6 = this, e = b6.length;
                    if (typeof b5 !== "string") {
                        return this.pushStack(ae(b5).filter(function() {
                            for (i = 0; i < e; i++) {
                                if (ae.contains(b6[i], this)) {
                                    return true
                                }
                            }
                        }))
                    }
                    for (i = 0; i < e; i++) {
                        ae.find(b5, b6[i], b7)
                    }
                    b7 = this.pushStack(e > 1 ? ae.unique(b7) : b7);
                    b7.selector = this.selector ? this.selector + " " + b5 : b5;
                    return b7
                }, filter: function(e) {
                    return this.pushStack(d(this, e || [], false))
                }, not: function(e) {
                    return this.pushStack(d(this, e || [], true))
                }, is: function(e) {
                    return !!d(this, typeof e === "string" && aB.test(e) ? ae(e) : e || [], false).length
                }});
            var bo, aH = a9.document, bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, bL = ae.fn.init = function(e, b5) {
                var i, b6;
                if (!e) {
                    return this
                }
                if (typeof e === "string") {
                    if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                        i = [null, e, null]
                    } else {
                        i = bt.exec(e)
                    }
                    if (i && (i[1] || !b5)) {
                        if (i[1]) {
                            b5 = b5 instanceof ae ? b5[0] : b5;
                            ae.merge(this, ae.parseHTML(i[1], b5 && b5.nodeType ? b5.ownerDocument || b5 : aH, true));
                            if (aK.test(i[1]) && ae.isPlainObject(b5)) {
                                for (i in b5) {
                                    if (ae.isFunction(this[i])) {
                                        this[i](b5[i])
                                    } else {
                                        this.attr(i, b5[i])
                                    }
                                }
                            }
                            return this
                        } else {
                            b6 = aH.getElementById(i[2]);
                            if (b6 && b6.parentNode) {
                                if (b6.id !== i[2]) {
                                    return bo.find(e)
                                }
                                this.length = 1;
                                this[0] = b6
                            }
                            this.context = aH;
                            this.selector = e;
                            return this
                        }
                    } else {
                        if (!b5 || b5.jquery) {
                            return(b5 || bo).find(e)
                        } else {
                            return this.constructor(b5).find(e)
                        }
                    }
                } else {
                    if (e.nodeType) {
                        this.context = this[0] = e;
                        this.length = 1;
                        return this
                    } else {
                        if (ae.isFunction(e)) {
                            return typeof bo.ready !== "undefined" ? bo.ready(e) : e(ae)
                        }
                    }
                }
                if (e.selector !== undefined) {
                    this.selector = e.selector;
                    this.context = e.context
                }
                return ae.makeArray(e, this)
            };
            bL.prototype = ae.fn;
            bo = ae(aH);
            var I = /^(?:parents|prev(?:Until|All))/, l = {children: true, contents: true, next: true, prev: true};
            ae.extend({dir: function(b5, i, b7) {
                    var e = [], b6 = b5[i];
                    while (b6 && b6.nodeType !== 9 && (b7 === undefined || b6.nodeType !== 1 || !ae(b6).is(b7))) {
                        if (b6.nodeType === 1) {
                            e.push(b6)
                        }
                        b6 = b6[i]
                    }
                    return e
                }, sibling: function(b5, i) {
                    var e = [];
                    for (; b5; b5 = b5.nextSibling) {
                        if (b5.nodeType === 1 && b5 !== i) {
                            e.push(b5)
                        }
                    }
                    return e
                }});
            ae.fn.extend({has: function(e) {
                    var b6, b5 = ae(e, this), i = b5.length;
                    return this.filter(function() {
                        for (b6 = 0; b6 < i; b6++) {
                            if (ae.contains(this, b5[b6])) {
                                return true
                            }
                        }
                    })
                }, closest: function(b7, e) {
                    var b8, b6 = 0, b5 = this.length, b9 = [], i = aB.test(b7) || typeof b7 !== "string" ? ae(b7, e || this.context) : 0;
                    for (; b6 < b5; b6++) {
                        for (b8 = this[b6]; b8 && b8 !== e; b8 = b8.parentNode) {
                            if (b8.nodeType < 11 && (i ? i.index(b8) > -1 : b8.nodeType === 1 && ae.find.matchesSelector(b8, b7))) {
                                b9.push(b8);
                                break
                            }
                        }
                    }
                    return this.pushStack(b9.length > 1 ? ae.unique(b9) : b9)
                }, index: function(e) {
                    if (!e) {
                        return(this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
                    }
                    if (typeof e === "string") {
                        return ae.inArray(this[0], ae(e))
                    }
                    return ae.inArray(e.jquery ? e[0] : e, this)
                }, add: function(e, i) {
                    return this.pushStack(ae.unique(ae.merge(this.get(), ae(e, i))))
                }, addBack: function(e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
                }});
            function bk(i, e) {
                do {
                    i = i[e]
                } while (i && i.nodeType !== 1);
                return i
            }
            ae.each({parent: function(i) {
                    var e = i.parentNode;
                    return e && e.nodeType !== 11 ? e : null
                }, parents: function(e) {
                    return ae.dir(e, "parentNode")
                }, parentsUntil: function(b5, i, e) {
                    return ae.dir(b5, "parentNode", e)
                }, next: function(e) {
                    return bk(e, "nextSibling")
                }, prev: function(e) {
                    return bk(e, "previousSibling")
                }, nextAll: function(e) {
                    return ae.dir(e, "nextSibling")
                }, prevAll: function(e) {
                    return ae.dir(e, "previousSibling")
                }, nextUntil: function(b5, i, e) {
                    return ae.dir(b5, "nextSibling", e)
                }, prevUntil: function(b5, i, e) {
                    return ae.dir(b5, "previousSibling", e)
                }, siblings: function(e) {
                    return ae.sibling((e.parentNode || {}).firstChild, e)
                }, children: function(e) {
                    return ae.sibling(e.firstChild)
                }, contents: function(e) {
                    return ae.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ae.merge([], e.childNodes)
                }}, function(e, i) {
                ae.fn[e] = function(b7, b5) {
                    var b6 = ae.map(this, i, b7);
                    if (e.slice(-5) !== "Until") {
                        b5 = b7
                    }
                    if (b5 && typeof b5 === "string") {
                        b6 = ae.filter(b5, b6)
                    }
                    if (this.length > 1) {
                        if (!l[e]) {
                            b6 = ae.unique(b6)
                        }
                        if (I.test(e)) {
                            b6 = b6.reverse()
                        }
                    }
                    return this.pushStack(b6)
                }
            });
            var Z = (/\S+/g);
            var M = {};
            function T(i) {
                var e = M[i] = {};
                ae.each(i.match(Z) || [], function(b6, b5) {
                    e[b5] = true
                });
                return e
            }
            ae.Callbacks = function(cd) {
                cd = typeof cd === "string" ? (M[cd] || T(cd)) : ae.extend({}, cd);
                var b7, b6, e, b8, i, b5, ca = [], cb = !cd.once && [], b9 = function(ce) {
                    b6 = cd.memory && ce;
                    e = true;
                    i = b5 || 0;
                    b5 = 0;
                    b8 = ca.length;
                    b7 = true;
                    for (; ca && i < b8; i++) {
                        if (ca[i].apply(ce[0], ce[1]) === false && cd.stopOnFalse) {
                            b6 = false;
                            break
                        }
                    }
                    b7 = false;
                    if (ca) {
                        if (cb) {
                            if (cb.length) {
                                b9(cb.shift())
                            }
                        } else {
                            if (b6) {
                                ca = []
                            } else {
                                cc.disable()
                            }
                        }
                    }
                }, cc = {add: function() {
                        if (ca) {
                            var cf = ca.length;
                            (function ce(cg) {
                                ae.each(cg, function(ci, ch) {
                                    var cj = ae.type(ch);
                                    if (cj === "function") {
                                        if (!cd.unique || !cc.has(ch)) {
                                            ca.push(ch)
                                        }
                                    } else {
                                        if (ch && ch.length && cj !== "string") {
                                            ce(ch)
                                        }
                                    }
                                })
                            })(arguments);
                            if (b7) {
                                b8 = ca.length
                            } else {
                                if (b6) {
                                    b5 = cf;
                                    b9(b6)
                                }
                            }
                        }
                        return this
                    }, remove: function() {
                        if (ca) {
                            ae.each(arguments, function(cg, ce) {
                                var cf;
                                while ((cf = ae.inArray(ce, ca, cf)) > -1) {
                                    ca.splice(cf, 1);
                                    if (b7) {
                                        if (cf <= b8) {
                                            b8--
                                        }
                                        if (cf <= i) {
                                            i--
                                        }
                                    }
                                }
                            })
                        }
                        return this
                    }, has: function(ce) {
                        return ce ? ae.inArray(ce, ca) > -1 : !!(ca && ca.length)
                    }, empty: function() {
                        ca = [];
                        b8 = 0;
                        return this
                    }, disable: function() {
                        ca = cb = b6 = undefined;
                        return this
                    }, disabled: function() {
                        return !ca
                    }, lock: function() {
                        cb = undefined;
                        if (!b6) {
                            cc.disable()
                        }
                        return this
                    }, locked: function() {
                        return !cb
                    }, fireWith: function(cf, ce) {
                        if (ca && (!e || cb)) {
                            ce = ce || [];
                            ce = [cf, ce.slice ? ce.slice() : ce];
                            if (b7) {
                                cb.push(ce)
                            } else {
                                b9(ce)
                            }
                        }
                        return this
                    }, fire: function() {
                        cc.fireWith(this, arguments);
                        return this
                    }, fired: function() {
                        return !!e
                    }};
                return cc
            };
            ae.extend({Deferred: function(b5) {
                    var i = [["resolve", "done", ae.Callbacks("once memory"), "resolved"], ["reject", "fail", ae.Callbacks("once memory"), "rejected"], ["notify", "progress", ae.Callbacks("memory")]], b6 = "pending", b7 = {state: function() {
                            return b6
                        }, always: function() {
                            e.done(arguments).fail(arguments);
                            return this
                        }, then: function() {
                            var b8 = arguments;
                            return ae.Deferred(function(b9) {
                                ae.each(i, function(ca, cc) {
                                    var cb = ae.isFunction(b8[ca]) && b8[ca];
                                    e[cc[1]](function() {
                                        var cd = cb && cb.apply(this, arguments);
                                        if (cd && ae.isFunction(cd.promise)) {
                                            cd.promise().done(b9.resolve).fail(b9.reject).progress(b9.notify)
                                        } else {
                                            b9[cc[0] + "With"](this === b7 ? b9.promise() : this, cb ? [cd] : arguments)
                                        }
                                    })
                                });
                                b8 = null
                            }).promise()
                        }, promise: function(b8) {
                            return b8 != null ? ae.extend(b8, b7) : b7
                        }}, e = {};
                    b7.pipe = b7.then;
                    ae.each(i, function(b9, b8) {
                        var cb = b8[2], ca = b8[3];
                        b7[b8[1]] = cb.add;
                        if (ca) {
                            cb.add(function() {
                                b6 = ca
                            }, i[b9 ^ 1][2].disable, i[2][2].lock)
                        }
                        e[b8[0]] = function() {
                            e[b8[0] + "With"](this === e ? b7 : this, arguments);
                            return this
                        };
                        e[b8[0] + "With"] = cb.fireWith
                    });
                    b7.promise(e);
                    if (b5) {
                        b5.call(e, e)
                    }
                    return e
                }, when: function(b8) {
                    var b6 = 0, b9 = V.call(arguments), e = b9.length, b5 = e !== 1 || (b8 && ae.isFunction(b8.promise)) ? e : 0, cc = b5 === 1 ? b8 : ae.Deferred(), b7 = function(cd, ce, cf) {
                        return function(cg) {
                            ce[cd] = this;
                            cf[cd] = arguments.length > 1 ? V.call(arguments) : cg;
                            if (cf === cb) {
                                cc.notifyWith(ce, cf)
                            } else {
                                if (!(--b5)) {
                                    cc.resolveWith(ce, cf)
                                }
                            }
                        }
                    }, cb, i, ca;
                    if (e > 1) {
                        cb = new Array(e);
                        i = new Array(e);
                        ca = new Array(e);
                        for (; b6 < e; b6++) {
                            if (b9[b6] && ae.isFunction(b9[b6].promise)) {
                                b9[b6].promise().done(b7(b6, ca, b9)).fail(cc.reject).progress(b7(b6, i, cb))
                            } else {
                                --b5
                            }
                        }
                    }
                    if (!b5) {
                        cc.resolveWith(ca, b9)
                    }
                    return cc.promise()
                }});
            var K;
            ae.fn.ready = function(e) {
                ae.ready.promise().done(e);
                return this
            };
            ae.extend({isReady: false, readyWait: 1, holdReady: function(e) {
                    if (e) {
                        ae.readyWait++
                    } else {
                        ae.ready(true)
                    }
                }, ready: function(e) {
                    if (e === true ? --ae.readyWait : ae.isReady) {
                        return
                    }
                    if (!aH.body) {
                        return setTimeout(ae.ready)
                    }
                    ae.isReady = true;
                    if (e !== true && --ae.readyWait > 0) {
                        return
                    }
                    K.resolveWith(aH, [ae]);
                    if (ae.fn.triggerHandler) {
                        ae(aH).triggerHandler("ready");
                        ae(aH).off("ready")
                    }
                }});
            function h() {
                if (aH.addEventListener) {
                    aH.removeEventListener("DOMContentLoaded", bc, false);
                    a9.removeEventListener("load", bc, false)
                } else {
                    aH.detachEvent("onreadystatechange", bc);
                    a9.detachEvent("onload", bc)
                }
            }
            function bc() {
                if (aH.addEventListener || event.type === "load" || aH.readyState === "complete") {
                    h();
                    ae.ready()
                }
            }
            ae.ready.promise = function(e) {
                if (!K) {
                    K = ae.Deferred();
                    if (aH.readyState === "complete") {
                        setTimeout(ae.ready)
                    } else {
                        if (aH.addEventListener) {
                            aH.addEventListener("DOMContentLoaded", bc, false);
                            a9.addEventListener("load", bc, false)
                        } else {
                            aH.attachEvent("onreadystatechange", bc);
                            a9.attachEvent("onload", bc);
                            var b6 = false;
                            try {
                                b6 = a9.frameElement == null && aH.documentElement
                            } catch (b5) {
                            }
                            if (b6 && b6.doScroll) {
                                (function i() {
                                    if (!ae.isReady) {
                                        try {
                                            b6.doScroll("left")
                                        } catch (b7) {
                                            return setTimeout(i, 50)
                                        }
                                        h();
                                        ae.ready()
                                    }
                                })()
                            }
                        }
                    }
                }
                return K.promise(e)
            };
            var ah = typeof undefined;
            var bK;
            for (bK in ae(bg)) {
                break
            }
            bg.ownLast = bK !== "0";
            bg.inlineBlockNeedsLayout = false;
            ae(function() {
                var b5, b6, e, i;
                e = aH.getElementsByTagName("body")[0];
                if (!e || !e.style) {
                    return
                }
                b6 = aH.createElement("div");
                i = aH.createElement("div");
                i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                e.appendChild(i).appendChild(b6);
                if (typeof b6.style.zoom !== ah) {
                    b6.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
                    bg.inlineBlockNeedsLayout = b5 = b6.offsetWidth === 3;
                    if (b5) {
                        e.style.zoom = 1
                    }
                }
                e.removeChild(i)
            });
            (function() {
                var e = aH.createElement("div");
                if (bg.deleteExpando == null) {
                    bg.deleteExpando = true;
                    try {
                        delete e.test
                    } catch (i) {
                        bg.deleteExpando = false
                    }
                }
                e = null
            })();
            ae.acceptData = function(b5) {
                var i = ae.noData[(b5.nodeName + " ").toLowerCase()], e = +b5.nodeType || 1;
                return e !== 1 && e !== 9 ? false : !i || i !== true && b5.getAttribute("classid") === i
            };
            var b2 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
            function b4(b6, b5, b7) {
                if (b7 === undefined && b6.nodeType === 1) {
                    var i = "data-" + b5.replace(O, "-$1").toLowerCase();
                    b7 = b6.getAttribute(i);
                    if (typeof b7 === "string") {
                        try {
                            b7 = b7 === "true" ? true : b7 === "false" ? false : b7 === "null" ? null : +b7 + "" === b7 ? +b7 : b2.test(b7) ? ae.parseJSON(b7) : b7
                        } catch (e) {
                        }
                        ae.data(b6, b5, b7)
                    } else {
                        b7 = undefined
                    }
                }
                return b7
            }
            function a8(i) {
                var e;
                for (e in i) {
                    if (e === "data" && ae.isEmptyObject(i[e])) {
                        continue
                    }
                    if (e !== "toJSON") {
                        return false
                    }
                }
                return true
            }
            function bQ(e, i, b8, b7) {
                if (!ae.acceptData(e)) {
                    return
                }
                var ca, b5, cb = ae.expando, cc = e.nodeType, b6 = cc ? ae.cache : e, b9 = cc ? e[cb] : e[cb] && cb;
                if ((!b9 || !b6[b9] || (!b7 && !b6[b9].data)) && b8 === undefined && typeof i === "string") {
                    return
                }
                if (!b9) {
                    if (cc) {
                        b9 = e[cb] = G.pop() || ae.guid++
                    } else {
                        b9 = cb
                    }
                }
                if (!b6[b9]) {
                    b6[b9] = cc ? {} : {toJSON: ae.noop}
                }
                if (typeof i === "object" || typeof i === "function") {
                    if (b7) {
                        b6[b9] = ae.extend(b6[b9], i)
                    } else {
                        b6[b9].data = ae.extend(b6[b9].data, i)
                    }
                }
                b5 = b6[b9];
                if (!b7) {
                    if (!b5.data) {
                        b5.data = {}
                    }
                    b5 = b5.data
                }
                if (b8 !== undefined) {
                    b5[ae.camelCase(i)] = b8
                }
                if (typeof i === "string") {
                    ca = b5[i];
                    if (ca == null) {
                        ca = b5[ae.camelCase(i)]
                    }
                } else {
                    ca = b5
                }
                return ca
            }
            function bY(b7, b6, b8) {
                if (!ae.acceptData(b7)) {
                    return
                }
                var i, e, b9 = b7.nodeType, b5 = b9 ? ae.cache : b7, ca = b9 ? b7[ae.expando] : ae.expando;
                if (!b5[ca]) {
                    return
                }
                if (b6) {
                    i = b8 ? b5[ca] : b5[ca].data;
                    if (i) {
                        if (!ae.isArray(b6)) {
                            if (b6 in i) {
                                b6 = [b6]
                            } else {
                                b6 = ae.camelCase(b6);
                                if (b6 in i) {
                                    b6 = [b6]
                                } else {
                                    b6 = b6.split(" ")
                                }
                            }
                        } else {
                            b6 = b6.concat(ae.map(b6, ae.camelCase))
                        }
                        e = b6.length;
                        while (e--) {
                            delete i[b6[e]]
                        }
                        if (b8 ? !a8(i) : !ae.isEmptyObject(i)) {
                            return
                        }
                    }
                }
                if (!b8) {
                    delete b5[ca].data;
                    if (!a8(b5[ca])) {
                        return
                    }
                }
                if (b9) {
                    ae.cleanData([b7], true)
                } else {
                    if (bg.deleteExpando || b5 != b5.window) {
                        delete b5[ca]
                    } else {
                        b5[ca] = null
                    }
                }
            }
            ae.extend({cache: {}, noData: {"applet ": true, "embed ": true, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function(e) {
                    e = e.nodeType ? ae.cache[e[ae.expando]] : e[ae.expando];
                    return !!e && !a8(e)
                }, data: function(i, e, b5) {
                    return bQ(i, e, b5)
                }, removeData: function(i, e) {
                    return bY(i, e)
                }, _data: function(i, e, b5) {
                    return bQ(i, e, b5, true)
                }, _removeData: function(i, e) {
                    return bY(i, e, true)
                }});
            ae.fn.extend({data: function(b7, i) {
                    var b6, b5, b8, e = this[0], b9 = e && e.attributes;
                    if (b7 === undefined) {
                        if (this.length) {
                            b8 = ae.data(e);
                            if (e.nodeType === 1 && !ae._data(e, "parsedAttrs")) {
                                b6 = b9.length;
                                while (b6--) {
                                    if (b9[b6]) {
                                        b5 = b9[b6].name;
                                        if (b5.indexOf("data-") === 0) {
                                            b5 = ae.camelCase(b5.slice(5));
                                            b4(e, b5, b8[b5])
                                        }
                                    }
                                }
                                ae._data(e, "parsedAttrs", true)
                            }
                        }
                        return b8
                    }
                    if (typeof b7 === "object") {
                        return this.each(function() {
                            ae.data(this, b7)
                        })
                    }
                    return arguments.length > 1 ? this.each(function() {
                        ae.data(this, b7, i)
                    }) : e ? b4(e, b7, ae.data(e, b7)) : undefined
                }, removeData: function(e) {
                    return this.each(function() {
                        ae.removeData(this, e)
                    })
                }});
            ae.extend({queue: function(b5, i, b6) {
                    var e;
                    if (b5) {
                        i = (i || "fx") + "queue";
                        e = ae._data(b5, i);
                        if (b6) {
                            if (!e || ae.isArray(b6)) {
                                e = ae._data(b5, i, ae.makeArray(b6))
                            } else {
                                e.push(b6)
                            }
                        }
                        return e || []
                    }
                }, dequeue: function(b7, e) {
                    e = e || "fx";
                    var i = ae.queue(b7, e), b8 = i.length, b6 = i.shift(), b9 = ae._queueHooks(b7, e), b5 = function() {
                        ae.dequeue(b7, e)
                    };
                    if (b6 === "inprogress") {
                        b6 = i.shift();
                        b8--
                    }
                    if (b6) {
                        if (e === "fx") {
                            i.unshift("inprogress")
                        }
                        delete b9.stop;
                        b6.call(b7, b5, b9)
                    }
                    if (!b8 && b9) {
                        b9.empty.fire()
                    }
                }, _queueHooks: function(b5, i) {
                    var e = i + "queueHooks";
                    return ae._data(b5, e) || ae._data(b5, e, {empty: ae.Callbacks("once memory").add(function() {
                            ae._removeData(b5, i + "queue");
                            ae._removeData(b5, e)
                        })})
                }});
            ae.fn.extend({queue: function(e, i) {
                    var b5 = 2;
                    if (typeof e !== "string") {
                        i = e;
                        e = "fx";
                        b5--
                    }
                    if (arguments.length < b5) {
                        return ae.queue(this[0], e)
                    }
                    return i === undefined ? this : this.each(function() {
                        var b6 = ae.queue(this, e, i);
                        ae._queueHooks(this, e);
                        if (e === "fx" && b6[0] !== "inprogress") {
                            ae.dequeue(this, e)
                        }
                    })
                }, dequeue: function(e) {
                    return this.each(function() {
                        ae.dequeue(this, e)
                    })
                }, clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                }, promise: function(b6, b7) {
                    var b5, i = 1, ca = ae.Deferred(), b9 = this, e = this.length, b8 = function() {
                        if (!(--i)) {
                            ca.resolveWith(b9, [b9])
                        }
                    };
                    if (typeof b6 !== "string") {
                        b7 = b6;
                        b6 = undefined
                    }
                    b6 = b6 || "fx";
                    while (e--) {
                        b5 = ae._data(b9[e], b6 + "queueHooks");
                        if (b5 && b5.empty) {
                            i++;
                            b5.empty.add(b8)
                        }
                    }
                    b8();
                    return ca.promise(b7)
                }});
            var aS = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
            var U = ["Top", "Right", "Bottom", "Left"];
            var s = function(i, e) {
                i = e || i;
                return ae.css(i, "display") === "none" || !ae.contains(i.ownerDocument, i)
            };
            var aJ = ae.access = function(e, i, ca, b5, b7, cc, cb) {
                var b6 = 0, b8 = e.length, b9 = ca == null;
                if (ae.type(ca) === "object") {
                    b7 = true;
                    for (b6 in ca) {
                        ae.access(e, i, b6, ca[b6], true, cc, cb)
                    }
                } else {
                    if (b5 !== undefined) {
                        b7 = true;
                        if (!ae.isFunction(b5)) {
                            cb = true
                        }
                        if (b9) {
                            if (cb) {
                                i.call(e, b5);
                                i = null
                            } else {
                                b9 = i;
                                i = function(cf, ce, cd) {
                                    return b9.call(ae(cf), cd)
                                }
                            }
                        }
                        if (i) {
                            for (; b6 < b8; b6++) {
                                i(e[b6], ca, cb ? b5 : b5.call(e[b6], b6, i(e[b6], ca)))
                            }
                        }
                    }
                }
                return b7 ? e : b9 ? i.call(e) : b8 ? i(e[0], ca) : cc
            };
            var N = (/^(?:checkbox|radio)$/i);
            (function() {
                var i = aH.createElement("input"), e = aH.createElement("div"), b5 = aH.createDocumentFragment();
                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                bg.leadingWhitespace = e.firstChild.nodeType === 3;
                bg.tbody = !e.getElementsByTagName("tbody").length;
                bg.htmlSerialize = !!e.getElementsByTagName("link").length;
                bg.html5Clone = aH.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
                i.type = "checkbox";
                i.checked = true;
                b5.appendChild(i);
                bg.appendChecked = i.checked;
                e.innerHTML = "<textarea>x</textarea>";
                bg.noCloneChecked = !!e.cloneNode(true).lastChild.defaultValue;
                b5.appendChild(e);
                e.innerHTML = "<input type='radio' checked='checked' name='t'/>";
                bg.checkClone = e.cloneNode(true).cloneNode(true).lastChild.checked;
                bg.noCloneEvent = true;
                if (e.attachEvent) {
                    e.attachEvent("onclick", function() {
                        bg.noCloneEvent = false
                    });
                    e.cloneNode(true).click()
                }
                if (bg.deleteExpando == null) {
                    bg.deleteExpando = true;
                    try {
                        delete e.test
                    } catch (b6) {
                        bg.deleteExpando = false
                    }
                }
            })();
            (function() {
                var b5, i, e = aH.createElement("div");
                for (b5 in {submit: true, change: true, focusin: true}) {
                    i = "on" + b5;
                    if (!(bg[b5 + "Bubbles"] = i in a9)) {
                        e.setAttribute(i, "t");
                        bg[b5 + "Bubbles"] = e.attributes[i].expando === false
                    }
                }
                e = null
            })();
            var av = /^(?:input|select|textarea)$/i, m = /^key/, bT = /^(?:mouse|pointer|contextmenu)|click/, an = /^(?:focusinfocus|focusoutblur)$/, p = /^([^.]*)(?:\.(.+)|)$/;
            function aL() {
                return true
            }
            function bF() {
                return false
            }
            function W() {
                try {
                    return aH.activeElement
                } catch (e) {
                }
            }
            ae.event = {global: {}, add: function(b7, ch, b9, cc, b8) {
                    var cf, ca, cb, cd, cj, cg, i, b6, e, b5, ce, ci = ae._data(b7);
                    if (!ci) {
                        return
                    }
                    if (b9.handler) {
                        cd = b9;
                        b9 = cd.handler;
                        b8 = cd.selector
                    }
                    if (!b9.guid) {
                        b9.guid = ae.guid++
                    }
                    if (!(ca = ci.events)) {
                        ca = ci.events = {}
                    }
                    if (!(cg = ci.handle)) {
                        cg = ci.handle = function(ck) {
                            return typeof ae !== ah && (!ck || ae.event.triggered !== ck.type) ? ae.event.dispatch.apply(cg.elem, arguments) : undefined
                        };
                        cg.elem = b7
                    }
                    ch = (ch || "").match(Z) || [""];
                    cb = ch.length;
                    while (cb--) {
                        cf = p.exec(ch[cb]) || [];
                        e = ce = cf[1];
                        b5 = (cf[2] || "").split(".").sort();
                        if (!e) {
                            continue
                        }
                        cj = ae.event.special[e] || {};
                        e = (b8 ? cj.delegateType : cj.bindType) || e;
                        cj = ae.event.special[e] || {};
                        i = ae.extend({type: e, origType: ce, data: cc, handler: b9, guid: b9.guid, selector: b8, needsContext: b8 && ae.expr.match.needsContext.test(b8), namespace: b5.join(".")}, cd);
                        if (!(b6 = ca[e])) {
                            b6 = ca[e] = [];
                            b6.delegateCount = 0;
                            if (!cj.setup || cj.setup.call(b7, cc, b5, cg) === false) {
                                if (b7.addEventListener) {
                                    b7.addEventListener(e, cg, false)
                                } else {
                                    if (b7.attachEvent) {
                                        b7.attachEvent("on" + e, cg)
                                    }
                                }
                            }
                        }
                        if (cj.add) {
                            cj.add.call(b7, i);
                            if (!i.handler.guid) {
                                i.handler.guid = b9.guid
                            }
                        }
                        if (b8) {
                            b6.splice(b6.delegateCount++, 0, i)
                        } else {
                            b6.push(i)
                        }
                        ae.event.global[e] = true
                    }
                    b7 = null
                }, remove: function(b6, ch, b9, b7, cg) {
                    var cc, i, cf, b8, cb, ca, cj, cd, e, b5, ce, ci = ae.hasData(b6) && ae._data(b6);
                    if (!ci || !(ca = ci.events)) {
                        return
                    }
                    ch = (ch || "").match(Z) || [""];
                    cb = ch.length;
                    while (cb--) {
                        cf = p.exec(ch[cb]) || [];
                        e = ce = cf[1];
                        b5 = (cf[2] || "").split(".").sort();
                        if (!e) {
                            for (e in ca) {
                                ae.event.remove(b6, e + ch[cb], b9, b7, true)
                            }
                            continue
                        }
                        cj = ae.event.special[e] || {};
                        e = (b7 ? cj.delegateType : cj.bindType) || e;
                        cd = ca[e] || [];
                        cf = cf[2] && new RegExp("(^|\\.)" + b5.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        b8 = cc = cd.length;
                        while (cc--) {
                            i = cd[cc];
                            if ((cg || ce === i.origType) && (!b9 || b9.guid === i.guid) && (!cf || cf.test(i.namespace)) && (!b7 || b7 === i.selector || b7 === "**" && i.selector)) {
                                cd.splice(cc, 1);
                                if (i.selector) {
                                    cd.delegateCount--
                                }
                                if (cj.remove) {
                                    cj.remove.call(b6, i)
                                }
                            }
                        }
                        if (b8 && !cd.length) {
                            if (!cj.teardown || cj.teardown.call(b6, b5, ci.handle) === false) {
                                ae.removeEvent(b6, e, ci.handle)
                            }
                            delete ca[e]
                        }
                    }
                    if (ae.isEmptyObject(ca)) {
                        delete ci.handle;
                        ae._removeData(b6, "events")
                    }
                }, trigger: function(b6, cc, i, b5) {
                    var cd, b8, ch, e, cf, cb, ca, b7 = [i || aH], cg = aV.call(b6, "type") ? b6.type : b6, b9 = aV.call(b6, "namespace") ? b6.namespace.split(".") : [];
                    ch = cb = i = i || aH;
                    if (i.nodeType === 3 || i.nodeType === 8) {
                        return
                    }
                    if (an.test(cg + ae.event.triggered)) {
                        return
                    }
                    if (cg.indexOf(".") >= 0) {
                        b9 = cg.split(".");
                        cg = b9.shift();
                        b9.sort()
                    }
                    b8 = cg.indexOf(":") < 0 && "on" + cg;
                    b6 = b6[ae.expando] ? b6 : new ae.Event(cg, typeof b6 === "object" && b6);
                    b6.isTrigger = b5 ? 2 : 3;
                    b6.namespace = b9.join(".");
                    b6.namespace_re = b6.namespace ? new RegExp("(^|\\.)" + b9.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    b6.result = undefined;
                    if (!b6.target) {
                        b6.target = i
                    }
                    cc = cc == null ? [b6] : ae.makeArray(cc, [b6]);
                    cf = ae.event.special[cg] || {};
                    if (!b5 && cf.trigger && cf.trigger.apply(i, cc) === false) {
                        return
                    }
                    if (!b5 && !cf.noBubble && !ae.isWindow(i)) {
                        e = cf.delegateType || cg;
                        if (!an.test(e + cg)) {
                            ch = ch.parentNode
                        }
                        for (; ch; ch = ch.parentNode) {
                            b7.push(ch);
                            cb = ch
                        }
                        if (cb === (i.ownerDocument || aH)) {
                            b7.push(cb.defaultView || cb.parentWindow || a9)
                        }
                    }
                    ca = 0;
                    while ((ch = b7[ca++]) && !b6.isPropagationStopped()) {
                        b6.type = ca > 1 ? e : cf.bindType || cg;
                        cd = (ae._data(ch, "events") || {})[b6.type] && ae._data(ch, "handle");
                        if (cd) {
                            cd.apply(ch, cc)
                        }
                        cd = b8 && ch[b8];
                        if (cd && cd.apply && ae.acceptData(ch)) {
                            b6.result = cd.apply(ch, cc);
                            if (b6.result === false) {
                                b6.preventDefault()
                            }
                        }
                    }
                    b6.type = cg;
                    if (!b5 && !b6.isDefaultPrevented()) {
                        if ((!cf._default || cf._default.apply(b7.pop(), cc) === false) && ae.acceptData(i)) {
                            if (b8 && i[cg] && !ae.isWindow(i)) {
                                cb = i[b8];
                                if (cb) {
                                    i[b8] = null
                                }
                                ae.event.triggered = cg;
                                try {
                                    i[cg]()
                                } catch (ce) {
                                }
                                ae.event.triggered = undefined;
                                if (cb) {
                                    i[b8] = cb
                                }
                            }
                        }
                    }
                    return b6.result
                }, dispatch: function(e) {
                    e = ae.event.fix(e);
                    var b8, i, cc, b5, b7, cb = [], ca = V.call(arguments), b6 = (ae._data(this, "events") || {})[e.type] || [], b9 = ae.event.special[e.type] || {};
                    ca[0] = e;
                    e.delegateTarget = this;
                    if (b9.preDispatch && b9.preDispatch.call(this, e) === false) {
                        return
                    }
                    cb = ae.event.handlers.call(this, e, b6);
                    b8 = 0;
                    while ((b5 = cb[b8++]) && !e.isPropagationStopped()) {
                        e.currentTarget = b5.elem;
                        b7 = 0;
                        while ((cc = b5.handlers[b7++]) && !e.isImmediatePropagationStopped()) {
                            if (!e.namespace_re || e.namespace_re.test(cc.namespace)) {
                                e.handleObj = cc;
                                e.data = cc.data;
                                i = ((ae.event.special[cc.origType] || {}).handle || cc.handler).apply(b5.elem, ca);
                                if (i !== undefined) {
                                    if ((e.result = i) === false) {
                                        e.preventDefault();
                                        e.stopPropagation()
                                    }
                                }
                            }
                        }
                    }
                    if (b9.postDispatch) {
                        b9.postDispatch.call(this, e)
                    }
                    return e.result
                }, handlers: function(e, b6) {
                    var b5, ca, i, b8, b9 = [], b7 = b6.delegateCount, cb = e.target;
                    if (b7 && cb.nodeType && (!e.button || e.type !== "click")) {
                        for (; cb != this; cb = cb.parentNode || this) {
                            if (cb.nodeType === 1 && (cb.disabled !== true || e.type !== "click")) {
                                i = [];
                                for (b8 = 0; b8 < b7; b8++) {
                                    ca = b6[b8];
                                    b5 = ca.selector + " ";
                                    if (i[b5] === undefined) {
                                        i[b5] = ca.needsContext ? ae(b5, this).index(cb) >= 0 : ae.find(b5, this, null, [cb]).length
                                    }
                                    if (i[b5]) {
                                        i.push(ca)
                                    }
                                }
                                if (i.length) {
                                    b9.push({elem: cb, handlers: i})
                                }
                            }
                        }
                    }
                    if (b7 < b6.length) {
                        b9.push({elem: this, handlers: b6.slice(b7)})
                    }
                    return b9
                }, fix: function(b7) {
                    if (b7[ae.expando]) {
                        return b7
                    }
                    var b5, i, b8, b6 = b7.type, b9 = b7, e = this.fixHooks[b6];
                    if (!e) {
                        this.fixHooks[b6] = e = bT.test(b6) ? this.mouseHooks : m.test(b6) ? this.keyHooks : {}
                    }
                    b8 = e.props ? this.props.concat(e.props) : this.props;
                    b7 = new ae.Event(b9);
                    b5 = b8.length;
                    while (b5--) {
                        i = b8[b5];
                        b7[i] = b9[i]
                    }
                    if (!b7.target) {
                        b7.target = b9.srcElement || aH
                    }
                    if (b7.target.nodeType === 3) {
                        b7.target = b7.target.parentNode
                    }
                    b7.metaKey = !!b7.metaKey;
                    return e.filter ? e.filter(b7, b9) : b7
                }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function(i, e) {
                        if (i.which == null) {
                            i.which = e.charCode != null ? e.charCode : e.keyCode
                        }
                        return i
                    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(b6, b5) {
                        var b7, b9, e, i = b5.button, b8 = b5.fromElement;
                        if (b6.pageX == null && b5.clientX != null) {
                            b9 = b6.target.ownerDocument || aH;
                            e = b9.documentElement;
                            b7 = b9.body;
                            b6.pageX = b5.clientX + (e && e.scrollLeft || b7 && b7.scrollLeft || 0) - (e && e.clientLeft || b7 && b7.clientLeft || 0);
                            b6.pageY = b5.clientY + (e && e.scrollTop || b7 && b7.scrollTop || 0) - (e && e.clientTop || b7 && b7.clientTop || 0)
                        }
                        if (!b6.relatedTarget && b8) {
                            b6.relatedTarget = b8 === b6.target ? b5.toElement : b8
                        }
                        if (!b6.which && i !== undefined) {
                            b6.which = (i & 1 ? 1 : (i & 2 ? 3 : (i & 4 ? 2 : 0)))
                        }
                        return b6
                    }}, special: {load: {noBubble: true}, focus: {trigger: function() {
                            if (this !== W() && this.focus) {
                                try {
                                    this.focus();
                                    return false
                                } catch (e) {
                                }
                            }
                        }, delegateType: "focusin"}, blur: {trigger: function() {
                            if (this === W() && this.blur) {
                                this.blur();
                                return false
                            }
                        }, delegateType: "focusout"}, click: {trigger: function() {
                            if (ae.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                                this.click();
                                return false
                            }
                        }, _default: function(e) {
                            return ae.nodeName(e.target, "a")
                        }}, beforeunload: {postDispatch: function(e) {
                            if (e.result !== undefined && e.originalEvent) {
                                e.originalEvent.returnValue = e.result
                            }
                        }}}, simulate: function(b5, b7, b6, i) {
                    var e = ae.extend(new ae.Event(), b6, {type: b5, isSimulated: true, originalEvent: {}});
                    if (i) {
                        ae.event.trigger(e, null, b7)
                    } else {
                        ae.event.dispatch.call(b7, e)
                    }
                    if (e.isDefaultPrevented()) {
                        b6.preventDefault()
                    }
                }};
            ae.removeEvent = aH.removeEventListener ? function(i, e, b5) {
                if (i.removeEventListener) {
                    i.removeEventListener(e, b5, false)
                }
            } : function(b5, i, b6) {
                var e = "on" + i;
                if (b5.detachEvent) {
                    if (typeof b5[e] === ah) {
                        b5[e] = null
                    }
                    b5.detachEvent(e, b6)
                }
            };
            ae.Event = function(i, e) {
                if (!(this instanceof ae.Event)) {
                    return new ae.Event(i, e)
                }
                if (i && i.type) {
                    this.originalEvent = i;
                    this.type = i.type;
                    this.isDefaultPrevented = i.defaultPrevented || i.defaultPrevented === undefined && i.returnValue === false ? aL : bF
                } else {
                    this.type = i
                }
                if (e) {
                    ae.extend(this, e)
                }
                this.timeStamp = i && i.timeStamp || ae.now();
                this[ae.expando] = true
            };
            ae.Event.prototype = {isDefaultPrevented: bF, isPropagationStopped: bF, isImmediatePropagationStopped: bF, preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = aL;
                    if (!e) {
                        return
                    }
                    if (e.preventDefault) {
                        e.preventDefault()
                    } else {
                        e.returnValue = false
                    }
                }, stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = aL;
                    if (!e) {
                        return
                    }
                    if (e.stopPropagation) {
                        e.stopPropagation()
                    }
                    e.cancelBubble = true
                }, stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = aL;
                    if (e && e.stopImmediatePropagation) {
                        e.stopImmediatePropagation()
                    }
                    this.stopPropagation()
                }};
            ae.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function(i, e) {
                ae.event.special[i] = {delegateType: e, bindType: e, handle: function(b7) {
                        var b5, b9 = this, b8 = b7.relatedTarget, b6 = b7.handleObj;
                        if (!b8 || (b8 !== b9 && !ae.contains(b9, b8))) {
                            b7.type = b6.origType;
                            b5 = b6.handler.apply(this, arguments);
                            b7.type = e
                        }
                        return b5
                    }}
            });
            if (!bg.submitBubbles) {
                ae.event.special.submit = {setup: function() {
                        if (ae.nodeName(this, "form")) {
                            return false
                        }
                        ae.event.add(this, "click._submit keypress._submit", function(e) {
                            var b5 = e.target, i = ae.nodeName(b5, "input") || ae.nodeName(b5, "button") ? b5.form : undefined;
                            if (i && !ae._data(i, "submitBubbles")) {
                                ae.event.add(i, "submit._submit", function(b6) {
                                    b6._submit_bubble = true
                                });
                                ae._data(i, "submitBubbles", true)
                            }
                        })
                    }, postDispatch: function(e) {
                        if (e._submit_bubble) {
                            delete e._submit_bubble;
                            if (this.parentNode && !e.isTrigger) {
                                ae.event.simulate("submit", this.parentNode, e, true)
                            }
                        }
                    }, teardown: function() {
                        if (ae.nodeName(this, "form")) {
                            return false
                        }
                        ae.event.remove(this, "._submit")
                    }}
            }
            if (!bg.changeBubbles) {
                ae.event.special.change = {setup: function() {
                        if (av.test(this.nodeName)) {
                            if (this.type === "checkbox" || this.type === "radio") {
                                ae.event.add(this, "propertychange._change", function(e) {
                                    if (e.originalEvent.propertyName === "checked") {
                                        this._just_changed = true
                                    }
                                });
                                ae.event.add(this, "click._change", function(e) {
                                    if (this._just_changed && !e.isTrigger) {
                                        this._just_changed = false
                                    }
                                    ae.event.simulate("change", this, e, true)
                                })
                            }
                            return false
                        }
                        ae.event.add(this, "beforeactivate._change", function(e) {
                            var i = e.target;
                            if (av.test(i.nodeName) && !ae._data(i, "changeBubbles")) {
                                ae.event.add(i, "change._change", function(b5) {
                                    if (this.parentNode && !b5.isSimulated && !b5.isTrigger) {
                                        ae.event.simulate("change", this.parentNode, b5, true)
                                    }
                                });
                                ae._data(i, "changeBubbles", true)
                            }
                        })
                    }, handle: function(i) {
                        var e = i.target;
                        if (this !== e || i.isSimulated || i.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                            return i.handleObj.handler.apply(this, arguments)
                        }
                    }, teardown: function() {
                        ae.event.remove(this, "._change");
                        return !av.test(this.nodeName)
                    }}
            }
            if (!bg.focusinBubbles) {
                ae.each({focus: "focusin", blur: "focusout"}, function(b5, e) {
                    var i = function(b6) {
                        ae.event.simulate(e, b6.target, ae.event.fix(b6), true)
                    };
                    ae.event.special[e] = {setup: function() {
                            var b7 = this.ownerDocument || this, b6 = ae._data(b7, e);
                            if (!b6) {
                                b7.addEventListener(b5, i, true)
                            }
                            ae._data(b7, e, (b6 || 0) + 1)
                        }, teardown: function() {
                            var b7 = this.ownerDocument || this, b6 = ae._data(b7, e) - 1;
                            if (!b6) {
                                b7.removeEventListener(b5, i, true);
                                ae._removeData(b7, e)
                            } else {
                                ae._data(b7, e, b6)
                            }
                        }}
                })
            }
            ae.fn.extend({on: function(b5, b7, e, b9, i) {
                    var b6, b8;
                    if (typeof b5 === "object") {
                        if (typeof b7 !== "string") {
                            e = e || b7;
                            b7 = undefined
                        }
                        for (b6 in b5) {
                            this.on(b6, b7, e, b5[b6], i)
                        }
                        return this
                    }
                    if (e == null && b9 == null) {
                        b9 = b7;
                        e = b7 = undefined
                    } else {
                        if (b9 == null) {
                            if (typeof b7 === "string") {
                                b9 = e;
                                e = undefined
                            } else {
                                b9 = e;
                                e = b7;
                                b7 = undefined
                            }
                        }
                    }
                    if (b9 === false) {
                        b9 = bF
                    } else {
                        if (!b9) {
                            return this
                        }
                    }
                    if (i === 1) {
                        b8 = b9;
                        b9 = function(ca) {
                            ae().off(ca);
                            return b8.apply(this, arguments)
                        };
                        b9.guid = b8.guid || (b8.guid = ae.guid++)
                    }
                    return this.each(function() {
                        ae.event.add(this, b5, b9, e, b7)
                    })
                }, one: function(i, e, b6, b5) {
                    return this.on(i, e, b6, b5, 1)
                }, off: function(b5, b7, e) {
                    var i, b6;
                    if (b5 && b5.preventDefault && b5.handleObj) {
                        i = b5.handleObj;
                        ae(b5.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                        return this
                    }
                    if (typeof b5 === "object") {
                        for (b6 in b5) {
                            this.off(b6, b7, b5[b6])
                        }
                        return this
                    }
                    if (b7 === false || typeof b7 === "function") {
                        e = b7;
                        b7 = undefined
                    }
                    if (e === false) {
                        e = bF
                    }
                    return this.each(function() {
                        ae.event.remove(this, b5, e, b7)
                    })
                }, trigger: function(e, i) {
                    return this.each(function() {
                        ae.event.trigger(e, i, this)
                    })
                }, triggerHandler: function(e, b5) {
                    var i = this[0];
                    if (i) {
                        return ae.event.trigger(e, b5, i, true)
                    }
                }});
            function J(e) {
                var b5 = ad.split("|"), i = e.createDocumentFragment();
                if (i.createElement) {
                    while (b5.length) {
                        i.createElement(b5.pop())
                    }
                }
                return i
            }
            var ad = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", by = / jQuery\d+="(?:null|\d+)"/g, a0 = new RegExp("<(?:" + ad + ")[\\s/>]", "i"), bf = /^\s+/, ba = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, az = /<([\w:]+)/, bq = /<tbody/i, aR = /<|&#?\w+;/, bm = /<(?:script|style|link)/i, P = /checked\s*(?:[^=]|=\s*.checked.)/i, H = /^$|\/(?:java|ecma)script/i, t = /^true\/(.*)/, bE = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, bU = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: bg.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, b = J(aH), ap = b.appendChild(aH.createElement("div"));
            bU.optgroup = bU.option;
            bU.tbody = bU.tfoot = bU.colgroup = bU.caption = bU.thead;
            bU.th = bU.td;
            function bX(b7, b8) {
                var b5, e, b6 = 0, i = typeof b7.getElementsByTagName !== ah ? b7.getElementsByTagName(b8 || "*") : typeof b7.querySelectorAll !== ah ? b7.querySelectorAll(b8 || "*") : undefined;
                if (!i) {
                    for (i = [], b5 = b7.childNodes || b7; (e = b5[b6]) != null; b6++) {
                        if (!b8 || ae.nodeName(e, b8)) {
                            i.push(e)
                        } else {
                            ae.merge(i, bX(e, b8))
                        }
                    }
                }
                return b8 === undefined || b8 && ae.nodeName(b7, b8) ? ae.merge([b7], i) : i
            }
            function aN(e) {
                if (N.test(e.type)) {
                    e.defaultChecked = e.checked
                }
            }
            function aQ(i, e) {
                return ae.nodeName(i, "table") && ae.nodeName(e.nodeType !== 11 ? e : e.firstChild, "tr") ? i.getElementsByTagName("tbody")[0] || i.appendChild(i.ownerDocument.createElement("tbody")) : i
            }
            function aw(e) {
                e.type = (ae.find.attr(e, "type") !== null) + "/" + e.type;
                return e
            }
            function aa(i) {
                var e = t.exec(i.type);
                if (e) {
                    i.type = e[1]
                } else {
                    i.removeAttribute("type")
                }
                return i
            }
            function aD(e, b6) {
                var i, b5 = 0;
                for (; (i = e[b5]) != null; b5++) {
                    ae._data(i, "globalEval", !b6 || ae._data(b6[b5], "globalEval"))
                }
            }
            function E(b7, b5) {
                if (b5.nodeType !== 1 || !ae.hasData(b7)) {
                    return
                }
                var b8, ca, e, i = ae._data(b7), b9 = ae._data(b5, i), b6 = i.events;
                if (b6) {
                    delete b9.handle;
                    b9.events = {};
                    for (b8 in b6) {
                        for (ca = 0, e = b6[b8].length; ca < e; ca++) {
                            ae.event.add(b5, b8, b6[b8][ca])
                        }
                    }
                }
                if (b9.data) {
                    b9.data = ae.extend({}, b9.data)
                }
            }
            function bH(b7, i) {
                var e, b6, b5;
                if (i.nodeType !== 1) {
                    return
                }
                e = i.nodeName.toLowerCase();
                if (!bg.noCloneEvent && i[ae.expando]) {
                    b5 = ae._data(i);
                    for (b6 in b5.events) {
                        ae.removeEvent(i, b6, b5.handle)
                    }
                    i.removeAttribute(ae.expando)
                }
                if (e === "script" && i.text !== b7.text) {
                    aw(i).text = b7.text;
                    aa(i)
                } else {
                    if (e === "object") {
                        if (i.parentNode) {
                            i.outerHTML = b7.outerHTML
                        }
                        if (bg.html5Clone && (b7.innerHTML && !ae.trim(i.innerHTML))) {
                            i.innerHTML = b7.innerHTML
                        }
                    } else {
                        if (e === "input" && N.test(b7.type)) {
                            i.defaultChecked = i.checked = b7.checked;
                            if (i.value !== b7.value) {
                                i.value = b7.value
                            }
                        } else {
                            if (e === "option") {
                                i.defaultSelected = i.selected = b7.defaultSelected
                            } else {
                                if (e === "input" || e === "textarea") {
                                    i.defaultValue = b7.defaultValue
                                }
                            }
                        }
                    }
                }
            }
            ae.extend({clone: function(b5, b7, e) {
                    var i, b6, cb, b8, b9, ca = ae.contains(b5.ownerDocument, b5);
                    if (bg.html5Clone || ae.isXMLDoc(b5) || !a0.test("<" + b5.nodeName + ">")) {
                        cb = b5.cloneNode(true)
                    } else {
                        ap.innerHTML = b5.outerHTML;
                        ap.removeChild(cb = ap.firstChild)
                    }
                    if ((!bg.noCloneEvent || !bg.noCloneChecked) && (b5.nodeType === 1 || b5.nodeType === 11) && !ae.isXMLDoc(b5)) {
                        i = bX(cb);
                        b9 = bX(b5);
                        for (b8 = 0; (b6 = b9[b8]) != null; ++b8) {
                            if (i[b8]) {
                                bH(b6, i[b8])
                            }
                        }
                    }
                    if (b7) {
                        if (e) {
                            b9 = b9 || bX(b5);
                            i = i || bX(cb);
                            for (b8 = 0; (b6 = b9[b8]) != null; b8++) {
                                E(b6, i[b8])
                            }
                        } else {
                            E(b5, cb)
                        }
                    }
                    i = bX(cb, "script");
                    if (i.length > 0) {
                        aD(i, !ca && bX(b5, "script"))
                    }
                    i = b9 = b6 = null;
                    return cb
                }, buildFragment: function(b5, e, cc, ch) {
                    var cd, b6, cb, cg, b8, cf, b7, ca = b5.length, i = J(e), b9 = [], ce = 0;
                    for (; ce < ca; ce++) {
                        b6 = b5[ce];
                        if (b6 || b6 === 0) {
                            if (ae.type(b6) === "object") {
                                ae.merge(b9, b6.nodeType ? [b6] : b6)
                            } else {
                                if (!aR.test(b6)) {
                                    b9.push(e.createTextNode(b6))
                                } else {
                                    cg = cg || i.appendChild(e.createElement("div"));
                                    b8 = (az.exec(b6) || ["", ""])[1].toLowerCase();
                                    b7 = bU[b8] || bU._default;
                                    cg.innerHTML = b7[1] + b6.replace(ba, "<$1></$2>") + b7[2];
                                    cd = b7[0];
                                    while (cd--) {
                                        cg = cg.lastChild
                                    }
                                    if (!bg.leadingWhitespace && bf.test(b6)) {
                                        b9.push(e.createTextNode(bf.exec(b6)[0]))
                                    }
                                    if (!bg.tbody) {
                                        b6 = b8 === "table" && !bq.test(b6) ? cg.firstChild : b7[1] === "<table>" && !bq.test(b6) ? cg : 0;
                                        cd = b6 && b6.childNodes.length;
                                        while (cd--) {
                                            if (ae.nodeName((cf = b6.childNodes[cd]), "tbody") && !cf.childNodes.length) {
                                                b6.removeChild(cf)
                                            }
                                        }
                                    }
                                    ae.merge(b9, cg.childNodes);
                                    cg.textContent = "";
                                    while (cg.firstChild) {
                                        cg.removeChild(cg.firstChild)
                                    }
                                    cg = i.lastChild
                                }
                            }
                        }
                    }
                    if (cg) {
                        i.removeChild(cg)
                    }
                    if (!bg.appendChecked) {
                        ae.grep(bX(b9, "input"), aN)
                    }
                    ce = 0;
                    while ((b6 = b9[ce++])) {
                        if (ch && ae.inArray(b6, ch) !== -1) {
                            continue
                        }
                        cb = ae.contains(b6.ownerDocument, b6);
                        cg = bX(i.appendChild(b6), "script");
                        if (cb) {
                            aD(cg)
                        }
                        if (cc) {
                            cd = 0;
                            while ((b6 = cg[cd++])) {
                                if (H.test(b6.type || "")) {
                                    cc.push(b6)
                                }
                            }
                        }
                    }
                    cg = null;
                    return i
                }, cleanData: function(e, cc) {
                    var b7, cb, b6, b8, i = 0, cd = ae.expando, b5 = ae.cache, b9 = bg.deleteExpando, ca = ae.event.special;
                    for (; (b7 = e[i]) != null; i++) {
                        if (cc || ae.acceptData(b7)) {
                            b6 = b7[cd];
                            b8 = b6 && b5[b6];
                            if (b8) {
                                if (b8.events) {
                                    for (cb in b8.events) {
                                        if (ca[cb]) {
                                            ae.event.remove(b7, cb)
                                        } else {
                                            ae.removeEvent(b7, cb, b8.handle)
                                        }
                                    }
                                }
                                if (b5[b6]) {
                                    delete b5[b6];
                                    if (b9) {
                                        delete b7[cd]
                                    } else {
                                        if (typeof b7.removeAttribute !== ah) {
                                            b7.removeAttribute(cd)
                                        } else {
                                            b7[cd] = null
                                        }
                                    }
                                    G.push(b6)
                                }
                            }
                        }
                    }
                }});
            ae.fn.extend({text: function(e) {
                    return aJ(this, function(i) {
                        return i === undefined ? ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || aH).createTextNode(i))
                    }, null, e, arguments.length)
                }, append: function() {
                    return this.domManip(arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var i = aQ(this, e);
                            i.appendChild(e)
                        }
                    })
                }, prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var i = aQ(this, e);
                            i.insertBefore(e, i.firstChild)
                        }
                    })
                }, before: function() {
                    return this.domManip(arguments, function(e) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(e, this)
                        }
                    })
                }, after: function() {
                    return this.domManip(arguments, function(e) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(e, this.nextSibling)
                        }
                    })
                }, remove: function(b7, i) {
                    var e, b5 = b7 ? ae.filter(b7, this) : this, b6 = 0;
                    for (; (e = b5[b6]) != null; b6++) {
                        if (!i && e.nodeType === 1) {
                            ae.cleanData(bX(e))
                        }
                        if (e.parentNode) {
                            if (i && ae.contains(e.ownerDocument, e)) {
                                aD(bX(e, "script"))
                            }
                            e.parentNode.removeChild(e)
                        }
                    }
                    return this
                }, empty: function() {
                    var e, i = 0;
                    for (; (e = this[i]) != null; i++) {
                        if (e.nodeType === 1) {
                            ae.cleanData(bX(e, false))
                        }
                        while (e.firstChild) {
                            e.removeChild(e.firstChild)
                        }
                        if (e.options && ae.nodeName(e, "select")) {
                            e.options.length = 0
                        }
                    }
                    return this
                }, clone: function(i, e) {
                    i = i == null ? false : i;
                    e = e == null ? i : e;
                    return this.map(function() {
                        return ae.clone(this, i, e)
                    })
                }, html: function(e) {
                    return aJ(this, function(b8) {
                        var b7 = this[0] || {}, b6 = 0, b5 = this.length;
                        if (b8 === undefined) {
                            return b7.nodeType === 1 ? b7.innerHTML.replace(by, "") : undefined
                        }
                        if (typeof b8 === "string" && !bm.test(b8) && (bg.htmlSerialize || !a0.test(b8)) && (bg.leadingWhitespace || !bf.test(b8)) && !bU[(az.exec(b8) || ["", ""])[1].toLowerCase()]) {
                            b8 = b8.replace(ba, "<$1></$2>");
                            try {
                                for (; b6 < b5; b6++) {
                                    b7 = this[b6] || {};
                                    if (b7.nodeType === 1) {
                                        ae.cleanData(bX(b7, false));
                                        b7.innerHTML = b8
                                    }
                                }
                                b7 = 0
                            } catch (i) {
                            }
                        }
                        if (b7) {
                            this.empty().append(b8)
                        }
                    }, null, e, arguments.length)
                }, replaceWith: function() {
                    var e = arguments[0];
                    this.domManip(arguments, function(i) {
                        e = this.parentNode;
                        ae.cleanData(bX(this));
                        if (e) {
                            e.replaceChild(i, this)
                        }
                    });
                    return e && (e.length || e.nodeType) ? this : this.remove()
                }, detach: function(e) {
                    return this.remove(e, true)
                }, domManip: function(cb, cg) {
                    cb = bA.apply([], cb);
                    var b5, b6, e, b8, ce, ca, i = 0, b7 = this.length, cd = this, cf = b7 - 1, cc = cb[0], b9 = ae.isFunction(cc);
                    if (b9 || (b7 > 1 && typeof cc === "string" && !bg.checkClone && P.test(cc))) {
                        return this.each(function(ch) {
                            var ci = cd.eq(ch);
                            if (b9) {
                                cb[0] = cc.call(this, ch, ci.html())
                            }
                            ci.domManip(cb, cg)
                        })
                    }
                    if (b7) {
                        ca = ae.buildFragment(cb, this[0].ownerDocument, false, this);
                        b5 = ca.firstChild;
                        if (ca.childNodes.length === 1) {
                            ca = b5
                        }
                        if (b5) {
                            b8 = ae.map(bX(ca, "script"), aw);
                            e = b8.length;
                            for (; i < b7; i++) {
                                b6 = ca;
                                if (i !== cf) {
                                    b6 = ae.clone(b6, true, true);
                                    if (e) {
                                        ae.merge(b8, bX(b6, "script"))
                                    }
                                }
                                cg.call(this[i], b6, i)
                            }
                            if (e) {
                                ce = b8[b8.length - 1].ownerDocument;
                                ae.map(b8, aa);
                                for (i = 0; i < e; i++) {
                                    b6 = b8[i];
                                    if (H.test(b6.type || "") && !ae._data(b6, "globalEval") && ae.contains(ce, b6)) {
                                        if (b6.src) {
                                            if (ae._evalUrl) {
                                                ae._evalUrl(b6.src)
                                            }
                                        } else {
                                            ae.globalEval((b6.text || b6.textContent || b6.innerHTML || "").replace(bE, ""))
                                        }
                                    }
                                }
                            }
                            ca = b5 = null
                        }
                    }
                    return this
                }});
            ae.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function(e, i) {
                ae.fn[e] = function(b5) {
                    var b6, b8 = 0, b7 = [], ca = ae(b5), b9 = ca.length - 1;
                    for (; b8 <= b9; b8++) {
                        b6 = b8 === b9 ? this : this.clone(true);
                        ae(ca[b8])[i](b6);
                        bS.apply(b7, b6.get())
                    }
                    return this.pushStack(b7)
                }
            });
            var g, ai = {};
            function aW(b7, e) {
                var i, b5 = ae(e.createElement(b7)).appendTo(e.body), b6 = a9.getDefaultComputedStyle && (i = a9.getDefaultComputedStyle(b5[0])) ? i.display : ae.css(b5[0], "display");
                b5.detach();
                return b6
            }
            function X(b5) {
                var i = aH, e = ai[b5];
                if (!e) {
                    e = aW(b5, i);
                    if (e === "none" || !e) {
                        g = (g || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement);
                        i = (g[0].contentWindow || g[0].contentDocument).document;
                        i.write();
                        i.close();
                        e = aW(b5, i);
                        g.detach()
                    }
                    ai[b5] = e
                }
                return e
            }
            (function() {
                var e;
                bg.shrinkWrapBlocks = function() {
                    if (e != null) {
                        return e
                    }
                    e = false;
                    var b6, i, b5;
                    i = aH.getElementsByTagName("body")[0];
                    if (!i || !i.style) {
                        return
                    }
                    b6 = aH.createElement("div");
                    b5 = aH.createElement("div");
                    b5.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                    i.appendChild(b5).appendChild(b6);
                    if (typeof b6.style.zoom !== ah) {
                        b6.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1";
                        b6.appendChild(aH.createElement("div")).style.width = "5px";
                        e = b6.offsetWidth !== 3
                    }
                    i.removeChild(b5);
                    return e
                }
            })();
            var R = (/^margin/);
            var b0 = new RegExp("^(" + aS + ")(?!px)[a-z%]+$", "i");
            var bG, bh, aE = /^(top|right|bottom|left)$/;
            if (a9.getComputedStyle) {
                bG = function(e) {
                    if (e.ownerDocument.defaultView.opener) {
                        return e.ownerDocument.defaultView.getComputedStyle(e, null)
                    }
                    return a9.getComputedStyle(e, null)
                };
                bh = function(b7, ca, b9) {
                    var i, b6, b8, e, b5 = b7.style;
                    b9 = b9 || bG(b7);
                    e = b9 ? b9.getPropertyValue(ca) || b9[ca] : undefined;
                    if (b9) {
                        if (e === "" && !ae.contains(b7.ownerDocument, b7)) {
                            e = ae.style(b7, ca)
                        }
                        if (b0.test(e) && R.test(ca)) {
                            i = b5.width;
                            b6 = b5.minWidth;
                            b8 = b5.maxWidth;
                            b5.minWidth = b5.maxWidth = b5.width = e;
                            e = b9.width;
                            b5.width = i;
                            b5.minWidth = b6;
                            b5.maxWidth = b8
                        }
                    }
                    return e === undefined ? e : e + ""
                }
            } else {
                if (aH.documentElement.currentStyle) {
                    bG = function(e) {
                        return e.currentStyle
                    };
                    bh = function(b7, b6, b8) {
                        var b9, ca, i, b5, e = b7.style;
                        b8 = b8 || bG(b7);
                        b5 = b8 ? b8[b6] : undefined;
                        if (b5 == null && e && e[b6]) {
                            b5 = e[b6]
                        }
                        if (b0.test(b5) && !aE.test(b6)) {
                            b9 = e.left;
                            ca = b7.runtimeStyle;
                            i = ca && ca.left;
                            if (i) {
                                ca.left = b7.currentStyle.left
                            }
                            e.left = b6 === "fontSize" ? "1em" : b5;
                            b5 = e.pixelLeft + "px";
                            e.left = b9;
                            if (i) {
                                ca.left = i
                            }
                        }
                        return b5 === undefined ? b5 : b5 + "" || "auto"
                    }
                }
            }
            function bw(e, i) {
                return{get: function() {
                        var b5 = e();
                        if (b5 == null) {
                            return
                        }
                        if (b5) {
                            delete this.get;
                            return
                        }
                        return(this.get = i).apply(this, arguments)
                    }}
            }
            (function() {
                var b7, b8, b6, b9, b5, ca, i;
                b7 = aH.createElement("div");
                b7.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                b6 = b7.getElementsByTagName("a")[0];
                b8 = b6 && b6.style;
                if (!b8) {
                    return
                }
                b8.cssText = "float:left;opacity:.5";
                bg.opacity = b8.opacity === "0.5";
                bg.cssFloat = !!b8.cssFloat;
                b7.style.backgroundClip = "content-box";
                b7.cloneNode(true).style.backgroundClip = "";
                bg.clearCloneStyle = b7.style.backgroundClip === "content-box";
                bg.boxSizing = b8.boxSizing === "" || b8.MozBoxSizing === "" || b8.WebkitBoxSizing === "";
                ae.extend(bg, {reliableHiddenOffsets: function() {
                        if (ca == null) {
                            e()
                        }
                        return ca
                    }, boxSizingReliable: function() {
                        if (b5 == null) {
                            e()
                        }
                        return b5
                    }, pixelPosition: function() {
                        if (b9 == null) {
                            e()
                        }
                        return b9
                    }, reliableMarginRight: function() {
                        if (i == null) {
                            e()
                        }
                        return i
                    }});
                function e() {
                    var cc, cd, ce, cb;
                    cd = aH.getElementsByTagName("body")[0];
                    if (!cd || !cd.style) {
                        return
                    }
                    cc = aH.createElement("div");
                    ce = aH.createElement("div");
                    ce.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                    cd.appendChild(ce).appendChild(cc);
                    cc.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                    b9 = b5 = false;
                    i = true;
                    if (a9.getComputedStyle) {
                        b9 = (a9.getComputedStyle(cc, null) || {}).top !== "1%";
                        b5 = (a9.getComputedStyle(cc, null) || {width: "4px"}).width === "4px";
                        cb = cc.appendChild(aH.createElement("div"));
                        cb.style.cssText = cc.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                        cb.style.marginRight = cb.style.width = "0";
                        cc.style.width = "1px";
                        i = !parseFloat((a9.getComputedStyle(cb, null) || {}).marginRight);
                        cc.removeChild(cb)
                    }
                    cc.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                    cb = cc.getElementsByTagName("td");
                    cb[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                    ca = cb[0].offsetHeight === 0;
                    if (ca) {
                        cb[0].style.display = "";
                        cb[1].style.display = "none";
                        ca = cb[0].offsetHeight === 0
                    }
                    cd.removeChild(ce)
                }}
            )();
            ae.swap = function(b7, e, b8, b6) {
                var b5, i, b9 = {};
                for (i in e) {
                    b9[i] = b7.style[i];
                    b7.style[i] = e[i]
                }
                b5 = b8.apply(b7, b6 || []);
                for (i in e) {
                    b7.style[i] = b9[i]
                }
                return b5
            };
            var x = /alpha\([^)]*\)/i, aI = /opacity\s*=\s*([^)]*)/, bz = /^(none|table(?!-c[ea]).+)/, Q = new RegExp("^(" + aS + ")(.*)$", "i"), bW = new RegExp("^([+-])=(" + aS + ")", "i"), bB = {position: "absolute", visibility: "hidden", display: "block"}, bp = {letterSpacing: "0", fontWeight: "400"}, af = ["Webkit", "O", "Moz", "ms"];
            function a6(b7, b5) {
                if (b5 in b7) {
                    return b5
                }
                var i = b5.charAt(0).toUpperCase() + b5.slice(1), e = b5, b6 = af.length;
                while (b6--) {
                    b5 = af[b6] + i;
                    if (b5 in b7) {
                        return b5
                    }
                }
                return e
            }
            function r(b7, b9) {
                var ca, e, b8, i = [], b5 = 0, b6 = b7.length;
                for (; b5 < b6; b5++) {
                    e = b7[b5];
                    if (!e.style) {
                        continue
                    }
                    i[b5] = ae._data(e, "olddisplay");
                    ca = e.style.display;
                    if (b9) {
                        if (!i[b5] && ca === "none") {
                            e.style.display = ""
                        }
                        if (e.style.display === "" && s(e)) {
                            i[b5] = ae._data(e, "olddisplay", X(e.nodeName))
                        }
                    } else {
                        b8 = s(e);
                        if (ca && ca !== "none" || !b8) {
                            ae._data(e, "olddisplay", b8 ? ca : ae.css(e, "display"))
                        }
                    }
                }
                for (b5 = 0; b5 < b6; b5++) {
                    e = b7[b5];
                    if (!e.style) {
                        continue
                    }
                    if (!b9 || e.style.display === "none" || e.style.display === "") {
                        e.style.display = b9 ? i[b5] || "" : "none"
                    }
                }
                return b7
            }
            function S(e, b5, b6) {
                var i = Q.exec(b5);
                return i ? Math.max(0, i[1] - (b6 || 0)) + (i[2] || "px") : b5
            }
            function a5(b7, b5, e, i, b9) {
                var b6 = e === (i ? "border" : "content") ? 4 : b5 === "width" ? 1 : 0, b8 = 0;
                for (; b6 < 4; b6 += 2) {
                    if (e === "margin") {
                        b8 += ae.css(b7, e + U[b6], true, b9)
                    }
                    if (i) {
                        if (e === "content") {
                            b8 -= ae.css(b7, "padding" + U[b6], true, b9)
                        }
                        if (e !== "margin") {
                            b8 -= ae.css(b7, "border" + U[b6] + "Width", true, b9)
                        }
                    } else {
                        b8 += ae.css(b7, "padding" + U[b6], true, b9);
                        if (e !== "padding") {
                            b8 += ae.css(b7, "border" + U[b6] + "Width", true, b9)
                        }
                    }
                }
                return b8
            }
            function k(b7, i, b9) {
                var b6 = true, e = i === "width" ? b7.offsetWidth : b7.offsetHeight, b5 = bG(b7), b8 = bg.boxSizing && ae.css(b7, "boxSizing", false, b5) === "border-box";
                if (e <= 0 || e == null) {
                    e = bh(b7, i, b5);
                    if (e < 0 || e == null) {
                        e = b7.style[i]
                    }
                    if (b0.test(e)) {
                        return e
                    }
                    b6 = b8 && (bg.boxSizingReliable() || e === b7.style[i]);
                    e = parseFloat(e) || 0
                }
                return(e + a5(b7, i, b9 || (b8 ? "border" : "content"), b6, b5)) + "px"
            }
            ae.extend({cssHooks: {opacity: {get: function(b5, i) {
                            if (i) {
                                var e = bh(b5, "opacity");
                                return e === "" ? "1" : e
                            }
                        }}}, cssNumber: {columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true}, cssProps: {"float": bg.cssFloat ? "cssFloat" : "styleFloat"}, style: function(b5, e, cb, b6) {
                    if (!b5 || b5.nodeType === 3 || b5.nodeType === 8 || !b5.style) {
                        return
                    }
                    var b8, ca, cc, b7 = ae.camelCase(e), b9 = b5.style;
                    e = ae.cssProps[b7] || (ae.cssProps[b7] = a6(b9, b7));
                    cc = ae.cssHooks[e] || ae.cssHooks[b7];
                    if (cb !== undefined) {
                        ca = typeof cb;
                        if (ca === "string" && (b8 = bW.exec(cb))) {
                            cb = (b8[1] + 1) * b8[2] + parseFloat(ae.css(b5, e));
                            ca = "number"
                        }
                        if (cb == null || cb !== cb) {
                            return
                        }
                        if (ca === "number" && !ae.cssNumber[b7]) {
                            cb += "px"
                        }
                        if (!bg.clearCloneStyle && cb === "" && e.indexOf("background") === 0) {
                            b9[e] = "inherit"
                        }
                        if (!cc || !("set" in cc) || (cb = cc.set(b5, cb, b6)) !== undefined) {
                            try {
                                b9[e] = cb
                            } catch (i) {
                            }
                        }
                    } else {
                        if (cc && "get" in cc && (b8 = cc.get(b5, false, b6)) !== undefined) {
                            return b8
                        }
                        return b9[e]
                    }
                }, css: function(b7, b9, i, b8) {
                    var b6, ca, e, b5 = ae.camelCase(b9);
                    b9 = ae.cssProps[b5] || (ae.cssProps[b5] = a6(b7.style, b5));
                    e = ae.cssHooks[b9] || ae.cssHooks[b5];
                    if (e && "get" in e) {
                        ca = e.get(b7, true, i)
                    }
                    if (ca === undefined) {
                        ca = bh(b7, b9, b8)
                    }
                    if (ca === "normal" && b9 in bp) {
                        ca = bp[b9]
                    }
                    if (i === "" || i) {
                        b6 = parseFloat(ca);
                        return i === true || ae.isNumeric(b6) ? b6 || 0 : ca
                    }
                    return ca
                }});
            ae.each(["height", "width"], function(e, i) {
                ae.cssHooks[i] = {get: function(b6, b5, b7) {
                        if (b5) {
                            return bz.test(ae.css(b6, "display")) && b6.offsetWidth === 0 ? ae.swap(b6, bB, function() {
                                return k(b6, i, b7)
                            }) : k(b6, i, b7)
                        }
                    }, set: function(b6, b7, b8) {
                        var b5 = b8 && bG(b6);
                        return S(b6, b7, b8 ? a5(b6, i, b8, bg.boxSizing && ae.css(b6, "boxSizing", false, b5) === "border-box", b5) : 0)
                    }}
            });
            if (!bg.opacity) {
                ae.cssHooks.opacity = {get: function(i, e) {
                        return aI.test((e && i.currentStyle ? i.currentStyle.filter : i.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
                    }, set: function(b7, e) {
                        var b6 = b7.style, i = b7.currentStyle, b8 = ae.isNumeric(e) ? "alpha(opacity=" + e * 100 + ")" : "", b5 = i && i.filter || b6.filter || "";
                        b6.zoom = 1;
                        if ((e >= 1 || e === "") && ae.trim(b5.replace(x, "")) === "" && b6.removeAttribute) {
                            b6.removeAttribute("filter");
                            if (e === "" || i && !i.filter) {
                                return
                            }
                        }
                        b6.filter = x.test(b5) ? b5.replace(x, b8) : b5 + " " + b8
                    }}
            }
            ae.cssHooks.marginRight = bw(bg.reliableMarginRight, function(i, e) {
                if (e) {
                    return ae.swap(i, {display: "inline-block"}, bh, [i, "marginRight"])
                }
            });
            ae.each({margin: "", padding: "", border: "Width"}, function(e, i) {
                ae.cssHooks[e + i] = {expand: function(b7) {
                        var b6 = 0, b5 = {}, b8 = typeof b7 === "string" ? b7.split(" ") : [b7];
                        for (; b6 < 4; b6++) {
                            b5[e + U[b6] + i] = b8[b6] || b8[b6 - 2] || b8[0]
                        }
                        return b5
                    }};
                if (!R.test(e)) {
                    ae.cssHooks[e + i].set = S
                }
            });
            ae.fn.extend({css: function(e, i) {
                    return aJ(this, function(b9, b6, ca) {
                        var b8, b5, cb = {}, b7 = 0;
                        if (ae.isArray(b6)) {
                            b8 = bG(b9);
                            b5 = b6.length;
                            for (; b7 < b5; b7++) {
                                cb[b6[b7]] = ae.css(b9, b6[b7], false, b8)
                            }
                            return cb
                        }
                        return ca !== undefined ? ae.style(b9, b6, ca) : ae.css(b9, b6)
                    }, e, i, arguments.length > 1)
                }, show: function() {
                    return r(this, true)
                }, hide: function() {
                    return r(this)
                }, toggle: function(e) {
                    if (typeof e === "boolean") {
                        return e ? this.show() : this.hide()
                    }
                    return this.each(function() {
                        if (s(this)) {
                            ae(this).show()
                        } else {
                            ae(this).hide()
                        }
                    })
                }});
            function bl(b5, i, b7, e, b6) {
                return new bl.prototype.init(b5, i, b7, e, b6)
            }
            ae.Tween = bl;
            bl.prototype = {constructor: bl, init: function(b6, i, b7, e, b8, b5) {
                    this.elem = b6;
                    this.prop = b7;
                    this.easing = b8 || "swing";
                    this.options = i;
                    this.start = this.now = this.cur();
                    this.end = e;
                    this.unit = b5 || (ae.cssNumber[b7] ? "" : "px")
                }, cur: function() {
                    var e = bl.propHooks[this.prop];
                    return e && e.get ? e.get(this) : bl.propHooks._default.get(this)
                }, run: function(b5) {
                    var i, e = bl.propHooks[this.prop];
                    if (this.options.duration) {
                        this.pos = i = ae.easing[this.easing](b5, this.options.duration * b5, 0, 1, this.options.duration)
                    } else {
                        this.pos = i = b5
                    }
                    this.now = (this.end - this.start) * i + this.start;
                    if (this.options.step) {
                        this.options.step.call(this.elem, this.now, this)
                    }
                    if (e && e.set) {
                        e.set(this)
                    } else {
                        bl.propHooks._default.set(this)
                    }
                    return this
                }};
            bl.prototype.init.prototype = bl.prototype;
            bl.propHooks = {_default: {get: function(i) {
                        var e;
                        if (i.elem[i.prop] != null && (!i.elem.style || i.elem.style[i.prop] == null)) {
                            return i.elem[i.prop]
                        }
                        e = ae.css(i.elem, i.prop, "");
                        return !e || e === "auto" ? 0 : e
                    }, set: function(e) {
                        if (ae.fx.step[e.prop]) {
                            ae.fx.step[e.prop](e)
                        } else {
                            if (e.elem.style && (e.elem.style[ae.cssProps[e.prop]] != null || ae.cssHooks[e.prop])) {
                                ae.style(e.elem, e.prop, e.now + e.unit)
                            } else {
                                e.elem[e.prop] = e.now
                            }
                        }
                    }}};
            bl.propHooks.scrollTop = bl.propHooks.scrollLeft = {set: function(e) {
                    if (e.elem.nodeType && e.elem.parentNode) {
                        e.elem[e.prop] = e.now
                    }
                }};
            ae.easing = {linear: function(e) {
                    return e
                }, swing: function(e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2
                }};
            ae.fx = bl.prototype.init;
            ae.fx.step = {};
            var bO, bx, am = /^(?:toggle|show|hide)$/, aq = new RegExp("^(?:([+-])=|)(" + aS + ")([a-z%]*)$", "i"), a7 = /queueHooks$/, bD = [bj], ay = {"*": [function(e, b8) {
                        var cb = this.createTween(e, b8), b7 = cb.cur(), b6 = aq.exec(b8), ca = b6 && b6[3] || (ae.cssNumber[e] ? "" : "px"), i = (ae.cssNumber[e] || ca !== "px" && +b7) && aq.exec(ae.css(cb.elem, e)), b5 = 1, b9 = 20;
                        if (i && i[3] !== ca) {
                            ca = ca || i[3];
                            b6 = b6 || [];
                            i = +b7 || 1;
                            do {
                                b5 = b5 || ".5";
                                i = i / b5;
                                ae.style(cb.elem, e, i + ca)
                            } while (b5 !== (b5 = cb.cur() / b7) && b5 !== 1 && --b9)
                        }
                        if (b6) {
                            i = cb.start = +i || +b7 || 0;
                            cb.unit = ca;
                            cb.end = b6[1] ? i + (b6[1] + 1) * b6[2] : +b6[2]
                        }
                        return cb
                    }]};
            function aY() {
                setTimeout(function() {
                    bO = undefined
                });
                return(bO = ae.now())
            }
            function a2(b6, i) {
                var b7, e = {height: b6}, b5 = 0;
                i = i ? 1 : 0;
                for (; b5 < 4; b5 += 2 - i) {
                    b7 = U[b5];
                    e["margin" + b7] = e["padding" + b7] = b6
                }
                if (i) {
                    e.opacity = e.width = b6
                }
                return e
            }
            function o(b7, b8, b6) {
                var i, e = (ay[b8] || []).concat(ay["*"]), b9 = 0, b5 = e.length;
                for (; b9 < b5; b9++) {
                    if ((i = e[b9].call(b6, b8, b7))) {
                        return i
                    }
                }
            }
            function bj(b6, cg, cc) {
                var b9, e, b8, ca, cb, i, cf, ci, b7 = this, ch = {}, cd = b6.style, ce = b6.nodeType && s(b6), b5 = ae._data(b6, "fxshow");
                if (!cc.queue) {
                    cb = ae._queueHooks(b6, "fx");
                    if (cb.unqueued == null) {
                        cb.unqueued = 0;
                        i = cb.empty.fire;
                        cb.empty.fire = function() {
                            if (!cb.unqueued) {
                                i()
                            }
                        }
                    }
                    cb.unqueued++;
                    b7.always(function() {
                        b7.always(function() {
                            cb.unqueued--;
                            if (!ae.queue(b6, "fx").length) {
                                cb.empty.fire()
                            }
                        })
                    })
                }
                if (b6.nodeType === 1 && ("height" in cg || "width" in cg)) {
                    cc.overflow = [cd.overflow, cd.overflowX, cd.overflowY];
                    cf = ae.css(b6, "display");
                    ci = cf === "none" ? ae._data(b6, "olddisplay") || X(b6.nodeName) : cf;
                    if (ci === "inline" && ae.css(b6, "float") === "none") {
                        if (!bg.inlineBlockNeedsLayout || X(b6.nodeName) === "inline") {
                            cd.display = "inline-block"
                        } else {
                            cd.zoom = 1
                        }
                    }
                }
                if (cc.overflow) {
                    cd.overflow = "hidden";
                    if (!bg.shrinkWrapBlocks()) {
                        b7.always(function() {
                            cd.overflow = cc.overflow[0];
                            cd.overflowX = cc.overflow[1];
                            cd.overflowY = cc.overflow[2]
                        })
                    }
                }
                for (b9 in cg) {
                    e = cg[b9];
                    if (am.exec(e)) {
                        delete cg[b9];
                        b8 = b8 || e === "toggle";
                        if (e === (ce ? "hide" : "show")) {
                            if (e === "show" && b5 && b5[b9] !== undefined) {
                                ce = true
                            } else {
                                continue
                            }
                        }
                        ch[b9] = b5 && b5[b9] || ae.style(b6, b9)
                    } else {
                        cf = undefined
                    }
                }
                if (!ae.isEmptyObject(ch)) {
                    if (b5) {
                        if ("hidden" in b5) {
                            ce = b5.hidden
                        }
                    } else {
                        b5 = ae._data(b6, "fxshow", {})
                    }
                    if (b8) {
                        b5.hidden = !ce
                    }
                    if (ce) {
                        ae(b6).show()
                    } else {
                        b7.done(function() {
                            ae(b6).hide()
                        })
                    }
                    b7.done(function() {
                        var cj;
                        ae._removeData(b6, "fxshow");
                        for (cj in ch) {
                            ae.style(b6, cj, ch[cj])
                        }
                    });
                    for (b9 in ch) {
                        ca = o(ce ? b5[b9] : 0, b9, b7);
                        if (!(b9 in b5)) {
                            b5[b9] = ca.start;
                            if (ce) {
                                ca.end = ca.start;
                                ca.start = b9 === "width" || b9 === "height" ? 1 : 0
                            }
                        }
                    }
                } else {
                    if ((cf === "none" ? X(b6.nodeName) : cf) === "inline") {
                        cd.display = cf
                    }
                }
            }
            function aG(b6, b7) {
                var b5, i, e, b8, b9;
                for (b5 in b6) {
                    i = ae.camelCase(b5);
                    e = b7[i];
                    b8 = b6[b5];
                    if (ae.isArray(b8)) {
                        e = b8[1];
                        b8 = b6[b5] = b8[0]
                    }
                    if (b5 !== i) {
                        b6[i] = b8;
                        delete b6[b5]
                    }
                    b9 = ae.cssHooks[i];
                    if (b9 && "expand" in b9) {
                        b8 = b9.expand(b8);
                        delete b6[i];
                        for (b5 in b8) {
                            if (!(b5 in b6)) {
                                b6[b5] = b8[b5];
                                b7[b5] = e
                            }
                        }
                    } else {
                        b7[i] = e
                    }
                }
            }
            function bV(b5, b6, cc) {
                var cd, e, b8 = 0, i = bD.length, cb = ae.Deferred().always(function() {
                    delete b7.elem
                }), b7 = function() {
                    if (e) {
                        return false
                    }
                    var cj = bO || aY(), cg = Math.max(0, b9.startTime + b9.duration - cj), ce = cg / b9.duration || 0, ci = 1 - ce, cf = 0, ch = b9.tweens.length;
                    for (; cf < ch; cf++) {
                        b9.tweens[cf].run(ci)
                    }
                    cb.notifyWith(b5, [b9, ci, cg]);
                    if (ci < 1 && ch) {
                        return cg
                    } else {
                        cb.resolveWith(b5, [b9]);
                        return false
                    }
                }, b9 = cb.promise({elem: b5, props: ae.extend({}, b6), opts: ae.extend(true, {specialEasing: {}}, cc), originalProperties: b6, originalOptions: cc, startTime: bO || aY(), duration: cc.duration, tweens: [], createTween: function(cg, ce) {
                        var cf = ae.Tween(b5, b9.opts, cg, ce, b9.opts.specialEasing[cg] || b9.opts.easing);
                        b9.tweens.push(cf);
                        return cf
                    }, stop: function(cf) {
                        var ce = 0, cg = cf ? b9.tweens.length : 0;
                        if (e) {
                            return this
                        }
                        e = true;
                        for (; ce < cg; ce++) {
                            b9.tweens[ce].run(1)
                        }
                        if (cf) {
                            cb.resolveWith(b5, [b9, cf])
                        } else {
                            cb.rejectWith(b5, [b9, cf])
                        }
                        return this
                    }}), ca = b9.props;
                aG(ca, b9.opts.specialEasing);
                for (; b8 < i; b8++) {
                    cd = bD[b8].call(b9, b5, ca, b9.opts);
                    if (cd) {
                        return cd
                    }
                }
                ae.map(ca, o, b9);
                if (ae.isFunction(b9.opts.start)) {
                    b9.opts.start.call(b5, b9)
                }
                ae.fx.timer(ae.extend(b7, {elem: b5, anim: b9, queue: b9.opts.queue}));
                return b9.progress(b9.opts.progress).done(b9.opts.done, b9.opts.complete).fail(b9.opts.fail).always(b9.opts.always)
            }
            ae.Animation = ae.extend(bV, {tweener: function(i, b7) {
                    if (ae.isFunction(i)) {
                        b7 = i;
                        i = ["*"]
                    } else {
                        i = i.split(" ")
                    }
                    var b6, e = 0, b5 = i.length;
                    for (; e < b5; e++) {
                        b6 = i[e];
                        ay[b6] = ay[b6] || [];
                        ay[b6].unshift(b7)
                    }
                }, prefilter: function(i, e) {
                    if (e) {
                        bD.unshift(i)
                    } else {
                        bD.push(i)
                    }
                }});
            ae.speed = function(b5, b6, i) {
                var e = b5 && typeof b5 === "object" ? ae.extend({}, b5) : {complete: i || !i && b6 || ae.isFunction(b5) && b5, duration: b5, easing: i && b6 || b6 && !ae.isFunction(b6) && b6};
                e.duration = ae.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in ae.fx.speeds ? ae.fx.speeds[e.duration] : ae.fx.speeds._default;
                if (e.queue == null || e.queue === true) {
                    e.queue = "fx"
                }
                e.old = e.complete;
                e.complete = function() {
                    if (ae.isFunction(e.old)) {
                        e.old.call(this)
                    }
                    if (e.queue) {
                        ae.dequeue(this, e.queue)
                    }
                };
                return e
            };
            ae.fn.extend({fadeTo: function(e, b6, b5, i) {
                    return this.filter(s).css("opacity", 0).show().end().animate({opacity: b6}, e, b5, i)
                }, animate: function(b7, b6, e, b8) {
                    var b5 = ae.isEmptyObject(b7), b9 = ae.speed(b6, e, b8), i = function() {
                        var ca = bV(this, ae.extend({}, b7), b9);
                        if (b5 || ae._data(this, "finish")) {
                            ca.stop(true)
                        }
                    };
                    i.finish = i;
                    return b5 || b9.queue === false ? this.each(i) : this.queue(b9.queue, i)
                }, stop: function(b5, i, e) {
                    var b6 = function(b7) {
                        var b8 = b7.stop;
                        delete b7.stop;
                        b8(e)
                    };
                    if (typeof b5 !== "string") {
                        e = i;
                        i = b5;
                        b5 = undefined
                    }
                    if (i && b5 !== false) {
                        this.queue(b5 || "fx", [])
                    }
                    return this.each(function() {
                        var ca = true, b7 = b5 != null && b5 + "queueHooks", b9 = ae.timers, b8 = ae._data(this);
                        if (b7) {
                            if (b8[b7] && b8[b7].stop) {
                                b6(b8[b7])
                            }
                        } else {
                            for (b7 in b8) {
                                if (b8[b7] && b8[b7].stop && a7.test(b7)) {
                                    b6(b8[b7])
                                }
                            }
                        }
                        for (b7 = b9.length; b7--; ) {
                            if (b9[b7].elem === this && (b5 == null || b9[b7].queue === b5)) {
                                b9[b7].anim.stop(e);
                                ca = false;
                                b9.splice(b7, 1)
                            }
                        }
                        if (ca || !e) {
                            ae.dequeue(this, b5)
                        }
                    })
                }, finish: function(e) {
                    if (e !== false) {
                        e = e || "fx"
                    }
                    return this.each(function() {
                        var b6, b9 = ae._data(this), b5 = b9[e + "queue"], i = b9[e + "queueHooks"], b8 = ae.timers, b7 = b5 ? b5.length : 0;
                        b9.finish = true;
                        ae.queue(this, e, []);
                        if (i && i.stop) {
                            i.stop.call(this, true)
                        }
                        for (b6 = b8.length; b6--; ) {
                            if (b8[b6].elem === this && b8[b6].queue === e) {
                                b8[b6].anim.stop(true);
                                b8.splice(b6, 1)
                            }
                        }
                        for (b6 = 0; b6 < b7; b6++) {
                            if (b5[b6] && b5[b6].finish) {
                                b5[b6].finish.call(this)
                            }
                        }
                        delete b9.finish
                    })
                }});
            ae.each(["toggle", "show", "hide"], function(b5, i) {
                var e = ae.fn[i];
                ae.fn[i] = function(b8, b7, b6) {
                    return b8 == null || typeof b8 === "boolean" ? e.apply(this, arguments) : this.animate(a2(i, true), b8, b7, b6)
                }
            });
            ae.each({slideDown: a2("show"), slideUp: a2("hide"), slideToggle: a2("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function(e, i) {
                ae.fn[e] = function(b5, b7, b6) {
                    return this.animate(i, b5, b7, b6)
                }
            });
            ae.timers = [];
            ae.fx.tick = function() {
                var e, b5 = ae.timers, i = 0;
                bO = ae.now();
                for (; i < b5.length; i++) {
                    e = b5[i];
                    if (!e() && b5[i] === e) {
                        b5.splice(i--, 1)
                    }
                }
                if (!b5.length) {
                    ae.fx.stop()
                }
                bO = undefined
            };
            ae.fx.timer = function(e) {
                ae.timers.push(e);
                if (e()) {
                    ae.fx.start()
                } else {
                    ae.timers.pop()
                }
            };
            ae.fx.interval = 13;
            ae.fx.start = function() {
                if (!bx) {
                    bx = setInterval(ae.fx.tick, ae.fx.interval)
                }
            };
            ae.fx.stop = function() {
                clearInterval(bx);
                bx = null
            };
            ae.fx.speeds = {slow: 600, fast: 200, _default: 400};
            ae.fn.delay = function(i, e) {
                i = ae.fx ? ae.fx.speeds[i] || i : i;
                e = e || "fx";
                return this.queue(e, function(b6, b5) {
                    var b7 = setTimeout(b6, i);
                    b5.stop = function() {
                        clearTimeout(b7)
                    }
                })
            };
            (function() {
                var b5, b7, e, i, b6;
                b7 = aH.createElement("div");
                b7.setAttribute("className", "t");
                b7.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
                i = b7.getElementsByTagName("a")[0];
                e = aH.createElement("select");
                b6 = e.appendChild(aH.createElement("option"));
                b5 = b7.getElementsByTagName("input")[0];
                i.style.cssText = "top:1px";
                bg.getSetAttribute = b7.className !== "t";
                bg.style = /top/.test(i.getAttribute("style"));
                bg.hrefNormalized = i.getAttribute("href") === "/a";
                bg.checkOn = !!b5.value;
                bg.optSelected = b6.selected;
                bg.enctype = !!aH.createElement("form").enctype;
                e.disabled = true;
                bg.optDisabled = !b6.disabled;
                b5 = aH.createElement("input");
                b5.setAttribute("value", "");
                bg.input = b5.getAttribute("value") === "";
                b5.value = "t";
                b5.setAttribute("type", "radio");
                bg.radioValue = b5.value === "t"
            })();
            var aU = /\r/g;
            ae.fn.extend({val: function(b6) {
                    var b7, i, e, b5 = this[0];
                    if (!arguments.length) {
                        if (b5) {
                            b7 = ae.valHooks[b5.type] || ae.valHooks[b5.nodeName.toLowerCase()];
                            if (b7 && "get" in b7 && (i = b7.get(b5, "value")) !== undefined) {
                                return i
                            }
                            i = b5.value;
                            return typeof i === "string" ? i.replace(aU, "") : i == null ? "" : i
                        }
                        return
                    }
                    e = ae.isFunction(b6);
                    return this.each(function(b8) {
                        var b9;
                        if (this.nodeType !== 1) {
                            return
                        }
                        if (e) {
                            b9 = b6.call(this, b8, ae(this).val())
                        } else {
                            b9 = b6
                        }
                        if (b9 == null) {
                            b9 = ""
                        } else {
                            if (typeof b9 === "number") {
                                b9 += ""
                            } else {
                                if (ae.isArray(b9)) {
                                    b9 = ae.map(b9, function(ca) {
                                        return ca == null ? "" : ca + ""
                                    })
                                }
                            }
                        }
                        b7 = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()];
                        if (!b7 || !("set" in b7) || b7.set(this, b9, "value") === undefined) {
                            this.value = b9
                        }
                    })
                }});
            ae.extend({valHooks: {option: {get: function(e) {
                            var i = ae.find.attr(e, "value");
                            return i != null ? i : ae.trim(ae.text(e))
                        }}, select: {get: function(e) {
                            var b5, b6, cb = e.options, b8 = e.selectedIndex, b7 = e.type === "select-one" || b8 < 0, ca = b7 ? null : [], i = b7 ? b8 + 1 : cb.length, b9 = b8 < 0 ? i : b7 ? b8 : 0;
                            for (; b9 < i; b9++) {
                                b6 = cb[b9];
                                if ((b6.selected || b9 === b8) && (bg.optDisabled ? !b6.disabled : b6.getAttribute("disabled") === null) && (!b6.parentNode.disabled || !ae.nodeName(b6.parentNode, "optgroup"))) {
                                    b5 = ae(b6).val();
                                    if (b7) {
                                        return b5
                                    }
                                    ca.push(b5)
                                }
                            }
                            return ca
                        }, set: function(b7, b9) {
                            var ca, b8, b6 = b7.options, i = ae.makeArray(b9), e = b6.length;
                            while (e--) {
                                b8 = b6[e];
                                if (ae.inArray(ae.valHooks.option.get(b8), i) >= 0) {
                                    try {
                                        b8.selected = ca = true
                                    } catch (b5) {
                                        b8.scrollHeight
                                    }
                                } else {
                                    b8.selected = false
                                }
                            }
                            if (!ca) {
                                b7.selectedIndex = -1
                            }
                            return b6
                        }}}});
            ae.each(["radio", "checkbox"], function() {
                ae.valHooks[this] = {set: function(e, i) {
                        if (ae.isArray(i)) {
                            return(e.checked = ae.inArray(ae(e).val(), i) >= 0)
                        }
                    }};
                if (!bg.checkOn) {
                    ae.valHooks[this].get = function(e) {
                        return e.getAttribute("value") === null ? "on" : e.value
                    }
                }
            });
            var bv, aj, C = ae.expr.attrHandle, D = /^(?:checked|selected)$/i, aC = bg.getSetAttribute, br = bg.input;
            ae.fn.extend({attr: function(e, i) {
                    return aJ(this, ae.attr, e, i, arguments.length > 1)
                }, removeAttr: function(e) {
                    return this.each(function() {
                        ae.removeAttr(this, e)
                    })
                }});
            ae.extend({attr: function(b7, b6, e) {
                    var b8, b5, i = b7.nodeType;
                    if (!b7 || i === 3 || i === 8 || i === 2) {
                        return
                    }
                    if (typeof b7.getAttribute === ah) {
                        return ae.prop(b7, b6, e)
                    }
                    if (i !== 1 || !ae.isXMLDoc(b7)) {
                        b6 = b6.toLowerCase();
                        b8 = ae.attrHooks[b6] || (ae.expr.match.bool.test(b6) ? aj : bv)
                    }
                    if (e !== undefined) {
                        if (e === null) {
                            ae.removeAttr(b7, b6)
                        } else {
                            if (b8 && "set" in b8 && (b5 = b8.set(b7, e, b6)) !== undefined) {
                                return b5
                            } else {
                                b7.setAttribute(b6, e + "");
                                return e
                            }
                        }
                    } else {
                        if (b8 && "get" in b8 && (b5 = b8.get(b7, b6)) !== null) {
                            return b5
                        } else {
                            b5 = ae.find.attr(b7, b6);
                            return b5 == null ? undefined : b5
                        }
                    }
                }, removeAttr: function(b6, b7) {
                    var e, b8, b5 = 0, i = b7 && b7.match(Z);
                    if (i && b6.nodeType === 1) {
                        while ((e = i[b5++])) {
                            b8 = ae.propFix[e] || e;
                            if (ae.expr.match.bool.test(e)) {
                                if (br && aC || !D.test(e)) {
                                    b6[b8] = false
                                } else {
                                    b6[ae.camelCase("default-" + e)] = b6[b8] = false
                                }
                            } else {
                                ae.attr(b6, e, "")
                            }
                            b6.removeAttribute(aC ? e : b8)
                        }
                    }
                }, attrHooks: {type: {set: function(e, i) {
                            if (!bg.radioValue && i === "radio" && ae.nodeName(e, "input")) {
                                var b5 = e.value;
                                e.setAttribute("type", i);
                                if (b5) {
                                    e.value = b5
                                }
                                return i
                            }
                        }}}});
            aj = {set: function(i, b5, e) {
                    if (b5 === false) {
                        ae.removeAttr(i, e)
                    } else {
                        if (br && aC || !D.test(e)) {
                            i.setAttribute(!aC && ae.propFix[e] || e, e)
                        } else {
                            i[ae.camelCase("default-" + e)] = i[e] = true
                        }
                    }
                    return e
                }};
            ae.each(ae.expr.match.bool.source.match(/\w+/g), function(e, b5) {
                var i = C[b5] || ae.find.attr;
                C[b5] = br && aC || !D.test(b5) ? function(b7, b6, ca) {
                    var b9, b8;
                    if (!ca) {
                        b8 = C[b6];
                        C[b6] = b9;
                        b9 = i(b7, b6, ca) != null ? b6.toLowerCase() : null;
                        C[b6] = b8
                    }
                    return b9
                } : function(b6, b8, b7) {
                    if (!b7) {
                        return b6[ae.camelCase("default-" + b8)] ? b8.toLowerCase() : null
                    }
                }
            });
            if (!br || !aC) {
                ae.attrHooks.value = {set: function(i, b5, e) {
                        if (ae.nodeName(i, "input")) {
                            i.defaultValue = b5
                        } else {
                            return bv && bv.set(i, b5, e)
                        }
                    }}
            }
            if (!aC) {
                bv = {set: function(b5, b6, i) {
                        var e = b5.getAttributeNode(i);
                        if (!e) {
                            b5.setAttributeNode((e = b5.ownerDocument.createAttribute(i)))
                        }
                        e.value = b6 += "";
                        if (i === "value" || b6 === b5.getAttribute(i)) {
                            return b6
                        }
                    }};
                C.id = C.name = C.coords = function(b5, i, b6) {
                    var e;
                    if (!b6) {
                        return(e = b5.getAttributeNode(i)) && e.value !== "" ? e.value : null
                    }
                };
                ae.valHooks.button = {get: function(b5, i) {
                        var e = b5.getAttributeNode(i);
                        if (e && e.specified) {
                            return e.value
                        }
                    }, set: bv.set};
                ae.attrHooks.contenteditable = {set: function(i, b5, e) {
                        bv.set(i, b5 === "" ? false : b5, e)
                    }};
                ae.each(["width", "height"], function(e, i) {
                    ae.attrHooks[i] = {set: function(b6, b5) {
                            if (b5 === "") {
                                b6.setAttribute(i, "auto");
                                return b5
                            }
                        }}
                })
            }
            if (!bg.style) {
                ae.attrHooks.style = {get: function(e) {
                        return e.style.cssText || undefined
                    }, set: function(e, i) {
                        return(e.style.cssText = i + "")
                    }}
            }
            var ab = /^(?:input|select|textarea|button|object)$/i, u = /^(?:a|area)$/i;
            ae.fn.extend({prop: function(e, i) {
                    return aJ(this, ae.prop, e, i, arguments.length > 1)
                }, removeProp: function(e) {
                    e = ae.propFix[e] || e;
                    return this.each(function() {
                        try {
                            this[e] = undefined;
                            delete this[e]
                        } catch (i) {
                        }
                    })
                }});
            ae.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function(b7, b6, e) {
                    var b5, b8, b9, i = b7.nodeType;
                    if (!b7 || i === 3 || i === 8 || i === 2) {
                        return
                    }
                    b9 = i !== 1 || !ae.isXMLDoc(b7);
                    if (b9) {
                        b6 = ae.propFix[b6] || b6;
                        b8 = ae.propHooks[b6]
                    }
                    if (e !== undefined) {
                        return b8 && "set" in b8 && (b5 = b8.set(b7, e, b6)) !== undefined ? b5 : (b7[b6] = e)
                    } else {
                        return b8 && "get" in b8 && (b5 = b8.get(b7, b6)) !== null ? b5 : b7[b6]
                    }
                }, propHooks: {tabIndex: {get: function(i) {
                            var e = ae.find.attr(i, "tabindex");
                            return e ? parseInt(e, 10) : ab.test(i.nodeName) || u.test(i.nodeName) && i.href ? 0 : -1
                        }}}});
            if (!bg.hrefNormalized) {
                ae.each(["href", "src"], function(e, i) {
                    ae.propHooks[i] = {get: function(b5) {
                            return b5.getAttribute(i, 4)
                        }}
                })
            }
            if (!bg.optSelected) {
                ae.propHooks.selected = {get: function(i) {
                        var e = i.parentNode;
                        if (e) {
                            e.selectedIndex;
                            if (e.parentNode) {
                                e.parentNode.selectedIndex
                            }
                        }
                        return null
                    }}
            }
            ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                ae.propFix[this.toLowerCase()] = this
            });
            if (!bg.enctype) {
                ae.propFix.enctype = "encoding"
            }
            var B = /[\t\r\n\f]/g;
            ae.fn.extend({addClass: function(cb) {
                    var b6, b5, cc, b9, b7, e, b8 = 0, i = this.length, ca = typeof cb === "string" && cb;
                    if (ae.isFunction(cb)) {
                        return this.each(function(cd) {
                            ae(this).addClass(cb.call(this, cd, this.className))
                        })
                    }
                    if (ca) {
                        b6 = (cb || "").match(Z) || [];
                        for (; b8 < i; b8++) {
                            b5 = this[b8];
                            cc = b5.nodeType === 1 && (b5.className ? (" " + b5.className + " ").replace(B, " ") : " ");
                            if (cc) {
                                b7 = 0;
                                while ((b9 = b6[b7++])) {
                                    if (cc.indexOf(" " + b9 + " ") < 0) {
                                        cc += b9 + " "
                                    }
                                }
                                e = ae.trim(cc);
                                if (b5.className !== e) {
                                    b5.className = e
                                }
                            }
                        }
                    }
                    return this
                }, removeClass: function(cb) {
                    var b6, b5, cc, b9, b7, e, b8 = 0, i = this.length, ca = arguments.length === 0 || typeof cb === "string" && cb;
                    if (ae.isFunction(cb)) {
                        return this.each(function(cd) {
                            ae(this).removeClass(cb.call(this, cd, this.className))
                        })
                    }
                    if (ca) {
                        b6 = (cb || "").match(Z) || [];
                        for (; b8 < i; b8++) {
                            b5 = this[b8];
                            cc = b5.nodeType === 1 && (b5.className ? (" " + b5.className + " ").replace(B, " ") : "");
                            if (cc) {
                                b7 = 0;
                                while ((b9 = b6[b7++])) {
                                    while (cc.indexOf(" " + b9 + " ") >= 0) {
                                        cc = cc.replace(" " + b9 + " ", " ")
                                    }
                                }
                                e = cb ? ae.trim(cc) : "";
                                if (b5.className !== e) {
                                    b5.className = e
                                }
                            }
                        }
                    }
                    return this
                }, toggleClass: function(b5, e) {
                    var i = typeof b5;
                    if (typeof e === "boolean" && i === "string") {
                        return e ? this.addClass(b5) : this.removeClass(b5)
                    }
                    if (ae.isFunction(b5)) {
                        return this.each(function(b6) {
                            ae(this).toggleClass(b5.call(this, b6, this.className, e), e)
                        })
                    }
                    return this.each(function() {
                        if (i === "string") {
                            var b8, b7 = 0, b6 = ae(this), b9 = b5.match(Z) || [];
                            while ((b8 = b9[b7++])) {
                                if (b6.hasClass(b8)) {
                                    b6.removeClass(b8)
                                } else {
                                    b6.addClass(b8)
                                }
                            }
                        } else {
                            if (i === ah || i === "boolean") {
                                if (this.className) {
                                    ae._data(this, "__className__", this.className)
                                }
                                this.className = this.className || b5 === false ? "" : ae._data(this, "__className__") || ""
                            }
                        }
                    })
                }, hasClass: function(e) {
                    var i = " " + e + " ", b6 = 0, b5 = this.length;
                    for (; b6 < b5; b6++) {
                        if (this[b6].nodeType === 1 && (" " + this[b6].className + " ").replace(B, " ").indexOf(i) >= 0) {
                            return true
                        }
                    }
                    return false
                }});
            ae.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(e, i) {
                ae.fn[i] = function(b5, b6) {
                    return arguments.length > 0 ? this.on(i, null, b5, b6) : this.trigger(i)
                }
            });
            ae.fn.extend({hover: function(e, i) {
                    return this.mouseenter(e).mouseleave(i || e)
                }, bind: function(e, b5, i) {
                    return this.on(e, null, b5, i)
                }, unbind: function(e, i) {
                    return this.off(e, null, i)
                }, delegate: function(e, i, b6, b5) {
                    return this.on(i, e, b6, b5)
                }, undelegate: function(e, i, b5) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(i, e || "**", b5)
                }});
            var bb = ae.now();
            var au = (/\?/);
            var aA = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ae.parseJSON = function(e) {
                if (a9.JSON && a9.JSON.parse) {
                    return a9.JSON.parse(e + "")
                }
                var b6, b5 = null, i = ae.trim(e + "");
                return i && !ae.trim(i.replace(aA, function(b9, b7, b8, ca) {
                    if (b6 && b7) {
                        b5 = 0
                    }
                    if (b5 === 0) {
                        return b9
                    }
                    b6 = b8 || b7;
                    b5 += !ca - !b8;
                    return""
                })) ? (Function("return " + i))() : ae.error("Invalid JSON: " + e)
            };
            ae.parseXML = function(b6) {
                var i, b5;
                if (!b6 || typeof b6 !== "string") {
                    return null
                }
                try {
                    if (a9.DOMParser) {
                        b5 = new DOMParser();
                        i = b5.parseFromString(b6, "text/xml")
                    } else {
                        i = new ActiveXObject("Microsoft.XMLDOM");
                        i.async = "false";
                        i.loadXML(b6)
                    }
                } catch (e) {
                    i = undefined
                }
                if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) {
                    ae.error("Invalid XML: " + b6)
                }
                return i
            };
            var y, bP, j = /#.*$/, aM = /([?&])_=[^&]*/, bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bN = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, n = /^(?:GET|HEAD)$/, ar = /^\/\//, aO = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, w = {}, a = {}, a4 = "*/".concat("*");
            try {
                bP = location.href
            } catch (al) {
                bP = aH.createElement("a");
                bP.href = "";
                bP = bP.href
            }
            y = aO.exec(bP.toLowerCase()) || [];
            function bs(e) {
                return function(b8, i) {
                    if (typeof b8 !== "string") {
                        i = b8;
                        b8 = "*"
                    }
                    var b5, b6 = 0, b7 = b8.toLowerCase().match(Z) || [];
                    if (ae.isFunction(i)) {
                        while ((b5 = b7[b6++])) {
                            if (b5.charAt(0) === "+") {
                                b5 = b5.slice(1) || "*";
                                (e[b5] = e[b5] || []).unshift(i)
                            } else {
                                (e[b5] = e[b5] || []).push(i)
                            }
                        }
                    }
                }
            }
            function aZ(b7, b5, b8, b6) {
                var i = {}, b9 = (b7 === a);
                function e(ca) {
                    var cb;
                    i[ca] = true;
                    ae.each(b7[ca] || [], function(ce, cd) {
                        var cc = cd(b5, b8, b6);
                        if (typeof cc === "string" && !b9 && !i[cc]) {
                            b5.dataTypes.unshift(cc);
                            e(cc);
                            return false
                        } else {
                            if (b9) {
                                return !(cb = cc)
                            }
                        }
                    });
                    return cb
                }
                return e(b5.dataTypes[0]) || !i["*"] && e("*")
            }
            function bR(b5, b6) {
                var b7, i, e = ae.ajaxSettings.flatOptions || {};
                for (i in b6) {
                    if (b6[i] !== undefined) {
                        (e[i] ? b5 : (b7 || (b7 = {})))[i] = b6[i]
                    }
                }
                if (b7) {
                    ae.extend(true, b5, b7)
                }
                return b5
            }
            function be(cb, ca, b7) {
                var e, b6, b5, b8, i = cb.contents, b9 = cb.dataTypes;
                while (b9[0] === "*") {
                    b9.shift();
                    if (b6 === undefined) {
                        b6 = cb.mimeType || ca.getResponseHeader("Content-Type")
                    }
                }
                if (b6) {
                    for (b8 in i) {
                        if (i[b8] && i[b8].test(b6)) {
                            b9.unshift(b8);
                            break
                        }
                    }
                }
                if (b9[0] in b7) {
                    b5 = b9[0]
                } else {
                    for (b8 in b7) {
                        if (!b9[0] || cb.converters[b8 + " " + b9[0]]) {
                            b5 = b8;
                            break
                        }
                        if (!e) {
                            e = b8
                        }
                    }
                    b5 = b5 || e
                }
                if (b5) {
                    if (b5 !== b9[0]) {
                        b9.unshift(b5)
                    }
                    return b7[b5]
                }
            }
            function aT(ce, b6, cb, e) {
                var b8, b5, cc, b7, b9, cd = {}, ca = ce.dataTypes.slice();
                if (ca[1]) {
                    for (cc in ce.converters) {
                        cd[cc.toLowerCase()] = ce.converters[cc]
                    }
                }
                b5 = ca.shift();
                while (b5) {
                    if (ce.responseFields[b5]) {
                        cb[ce.responseFields[b5]] = b6
                    }
                    if (!b9 && e && ce.dataFilter) {
                        b6 = ce.dataFilter(b6, ce.dataType)
                    }
                    b9 = b5;
                    b5 = ca.shift();
                    if (b5) {
                        if (b5 === "*") {
                            b5 = b9
                        } else {
                            if (b9 !== "*" && b9 !== b5) {
                                cc = cd[b9 + " " + b5] || cd["* " + b5];
                                if (!cc) {
                                    for (b8 in cd) {
                                        b7 = b8.split(" ");
                                        if (b7[1] === b5) {
                                            cc = cd[b9 + " " + b7[0]] || cd["* " + b7[0]];
                                            if (cc) {
                                                if (cc === true) {
                                                    cc = cd[b8]
                                                } else {
                                                    if (cd[b8] !== true) {
                                                        b5 = b7[0];
                                                        ca.unshift(b7[1])
                                                    }
                                                }
                                                break
                                            }
                                        }
                                    }
                                }
                                if (cc !== true) {
                                    if (cc && ce["throws"]) {
                                        b6 = cc(b6)
                                    } else {
                                        try {
                                            b6 = cc(b6)
                                        } catch (i) {
                                            return{state: "parsererror", error: cc ? i : "No conversion from " + b9 + " to " + b5}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return{state: "success", data: b6}
            }
            ae.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: bP, type: "GET", isLocal: bN.test(y[1]), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": a4, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": true, "text json": ae.parseJSON, "text xml": ae.parseXML}, flatOptions: {url: true, context: true}}, ajaxSetup: function(i, e) {
                    return e ? bR(bR(i, ae.ajaxSettings), e) : bR(ae.ajaxSettings, i)
                }, ajaxPrefilter: bs(w), ajaxTransport: bs(a), ajax: function(b5, cn) {
                    if (typeof b5 === "object") {
                        cn = b5;
                        b5 = undefined
                    }
                    cn = cn || {};
                    var cc, ce, e, cj, b8, cm, cf, co, b7 = ae.ajaxSetup({}, cn), cl = b7.context || b7, ca = b7.context && (cl.nodeType || cl.jquery) ? ae(cl) : ae.event, ck = ae.Deferred(), ch = ae.Callbacks("once memory"), i = b7.statusCode || {}, cb = {}, ci = {}, cp = 0, b6 = "canceled", cd = {readyState: 0, getResponseHeader: function(cr) {
                            var cq;
                            if (cp === 2) {
                                if (!co) {
                                    co = {};
                                    while ((cq = bn.exec(cj))) {
                                        co[cq[1].toLowerCase()] = cq[2]
                                    }
                                }
                                cq = co[cr.toLowerCase()]
                            }
                            return cq == null ? null : cq
                        }, getAllResponseHeaders: function() {
                            return cp === 2 ? cj : null
                        }, setRequestHeader: function(cq, cs) {
                            var cr = cq.toLowerCase();
                            if (!cp) {
                                cq = ci[cr] = ci[cr] || cq;
                                cb[cq] = cs
                            }
                            return this
                        }, overrideMimeType: function(cq) {
                            if (!cp) {
                                b7.mimeType = cq
                            }
                            return this
                        }, statusCode: function(cr) {
                            var cq;
                            if (cr) {
                                if (cp < 2) {
                                    for (cq in cr) {
                                        i[cq] = [i[cq], cr[cq]]
                                    }
                                } else {
                                    cd.always(cr[cd.status])
                                }
                            }
                            return this
                        }, abort: function(cr) {
                            var cq = cr || b6;
                            if (cf) {
                                cf.abort(cq)
                            }
                            b9(0, cq);
                            return this
                        }};
                    ck.promise(cd).complete = ch.add;
                    cd.success = cd.done;
                    cd.error = cd.fail;
                    b7.url = ((b5 || b7.url || bP) + "").replace(j, "").replace(ar, y[1] + "//");
                    b7.type = cn.method || cn.type || b7.method || b7.type;
                    b7.dataTypes = ae.trim(b7.dataType || "*").toLowerCase().match(Z) || [""];
                    if (b7.crossDomain == null) {
                        cc = aO.exec(b7.url.toLowerCase());
                        b7.crossDomain = !!(cc && (cc[1] !== y[1] || cc[2] !== y[2] || (cc[3] || (cc[1] === "http:" ? "80" : "443")) !== (y[3] || (y[1] === "http:" ? "80" : "443"))))
                    }
                    if (b7.data && b7.processData && typeof b7.data !== "string") {
                        b7.data = ae.param(b7.data, b7.traditional)
                    }
                    aZ(w, b7, cn, cd);
                    if (cp === 2) {
                        return cd
                    }
                    cm = ae.event && b7.global;
                    if (cm && ae.active++ === 0) {
                        ae.event.trigger("ajaxStart")
                    }
                    b7.type = b7.type.toUpperCase();
                    b7.hasContent = !n.test(b7.type);
                    e = b7.url;
                    if (!b7.hasContent) {
                        if (b7.data) {
                            e = (b7.url += (au.test(e) ? "&" : "?") + b7.data);
                            delete b7.data
                        }
                        if (b7.cache === false) {
                            b7.url = aM.test(e) ? e.replace(aM, "$1_=" + bb++) : e + (au.test(e) ? "&" : "?") + "_=" + bb++
                        }
                    }
                    if (b7.ifModified) {
                        if (ae.lastModified[e]) {
                            cd.setRequestHeader("If-Modified-Since", ae.lastModified[e])
                        }
                        if (ae.etag[e]) {
                            cd.setRequestHeader("If-None-Match", ae.etag[e])
                        }
                    }
                    if (b7.data && b7.hasContent && b7.contentType !== false || cn.contentType) {
                        cd.setRequestHeader("Content-Type", b7.contentType)
                    }
                    cd.setRequestHeader("Accept", b7.dataTypes[0] && b7.accepts[b7.dataTypes[0]] ? b7.accepts[b7.dataTypes[0]] + (b7.dataTypes[0] !== "*" ? ", " + a4 + "; q=0.01" : "") : b7.accepts["*"]);
                    for (ce in b7.headers) {
                        cd.setRequestHeader(ce, b7.headers[ce])
                    }
                    if (b7.beforeSend && (b7.beforeSend.call(cl, cd, b7) === false || cp === 2)) {
                        return cd.abort()
                    }
                    b6 = "abort";
                    for (ce in {success: 1, error: 1, complete: 1}) {
                        cd[ce](b7[ce])
                    }
                    cf = aZ(a, b7, cn, cd);
                    if (!cf) {
                        b9(-1, "No Transport")
                    } else {
                        cd.readyState = 1;
                        if (cm) {
                            ca.trigger("ajaxSend", [cd, b7])
                        }
                        if (b7.async && b7.timeout > 0) {
                            b8 = setTimeout(function() {
                                cd.abort("timeout")
                            }, b7.timeout)
                        }
                        try {
                            cp = 1;
                            cf.send(cb, b9)
                        } catch (cg) {
                            if (cp < 2) {
                                b9(-1, cg)
                            } else {
                                throw cg
                            }
                        }
                    }
                    function b9(cz, cq, cr, cx) {
                        var cv, cu, cs, cy, ct, cw = cq;
                        if (cp === 2) {
                            return
                        }
                        cp = 2;
                        if (b8) {
                            clearTimeout(b8)
                        }
                        cf = undefined;
                        cj = cx || "";
                        cd.readyState = cz > 0 ? 4 : 0;
                        cv = cz >= 200 && cz < 300 || cz === 304;
                        if (cr) {
                            cy = be(b7, cd, cr)
                        }
                        cy = aT(b7, cy, cd, cv);
                        if (cv) {
                            if (b7.ifModified) {
                                ct = cd.getResponseHeader("Last-Modified");
                                if (ct) {
                                    ae.lastModified[e] = ct
                                }
                                ct = cd.getResponseHeader("etag");
                                if (ct) {
                                    ae.etag[e] = ct
                                }
                            }
                            if (cz === 204 || b7.type === "HEAD") {
                                cw = "nocontent"
                            } else {
                                if (cz === 304) {
                                    cw = "notmodified"
                                } else {
                                    cw = cy.state;
                                    cu = cy.data;
                                    cs = cy.error;
                                    cv = !cs
                                }
                            }
                        } else {
                            cs = cw;
                            if (cz || !cw) {
                                cw = "error";
                                if (cz < 0) {
                                    cz = 0
                                }
                            }
                        }
                        cd.status = cz;
                        cd.statusText = (cq || cw) + "";
                        if (cv) {
                            ck.resolveWith(cl, [cu, cw, cd])
                        } else {
                            ck.rejectWith(cl, [cd, cw, cs])
                        }
                        cd.statusCode(i);
                        i = undefined;
                        if (cm) {
                            ca.trigger(cv ? "ajaxSuccess" : "ajaxError", [cd, b7, cv ? cu : cs])
                        }
                        ch.fireWith(cl, [cd, cw]);
                        if (cm) {
                            ca.trigger("ajaxComplete", [cd, b7]);
                            if (!(--ae.active)) {
                                ae.event.trigger("ajaxStop")
                            }
                        }
                    }
                    return cd
                }, getJSON: function(e, i, b5) {
                    return ae.get(e, i, b5, "json")
                }, getScript: function(e, i) {
                    return ae.get(e, undefined, i, "script")
                }});
            ae.each(["get", "post"], function(i, e) {
                ae[e] = function(b8, b6, b7, b5) {
                    if (ae.isFunction(b6)) {
                        b5 = b5 || b7;
                        b7 = b6;
                        b6 = undefined
                    }
                    return ae.ajax({url: b8, type: e, dataType: b5, data: b6, success: b7})
                }
            });
            ae._evalUrl = function(e) {
                return ae.ajax({url: e, type: "GET", dataType: "script", async: false, global: false, "throws": true})
            };
            ae.fn.extend({wrapAll: function(e) {
                    if (ae.isFunction(e)) {
                        return this.each(function(b5) {
                            ae(this).wrapAll(e.call(this, b5))
                        })
                    }
                    if (this[0]) {
                        var i = ae(e, this[0].ownerDocument).eq(0).clone(true);
                        if (this[0].parentNode) {
                            i.insertBefore(this[0])
                        }
                        i.map(function() {
                            var b5 = this;
                            while (b5.firstChild && b5.firstChild.nodeType === 1) {
                                b5 = b5.firstChild
                            }
                            return b5
                        }).append(this)
                    }
                    return this
                }, wrapInner: function(e) {
                    if (ae.isFunction(e)) {
                        return this.each(function(i) {
                            ae(this).wrapInner(e.call(this, i))
                        })
                    }
                    return this.each(function() {
                        var i = ae(this), b5 = i.contents();
                        if (b5.length) {
                            b5.wrapAll(e)
                        } else {
                            i.append(e)
                        }
                    })
                }, wrap: function(e) {
                    var i = ae.isFunction(e);
                    return this.each(function(b5) {
                        ae(this).wrapAll(i ? e.call(this, b5) : e)
                    })
                }, unwrap: function() {
                    return this.parent().each(function() {
                        if (!ae.nodeName(this, "body")) {
                            ae(this).replaceWith(this.childNodes)
                        }
                    }).end()
                }});
            ae.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!bg.reliableHiddenOffsets() && ((e.style && e.style.display) || ae.css(e, "display")) === "none")
            };
            ae.expr.filters.visible = function(e) {
                return !ae.expr.filters.hidden(e)
            };
            var ac = /%20/g, z = /\[\]$/, bM = /\r?\n/g, b1 = /^(?:submit|button|image|reset|file)$/i, q = /^(?:input|select|textarea|keygen)/i;
            function v(b5, b7, i, b6) {
                var e;
                if (ae.isArray(b7)) {
                    ae.each(b7, function(b9, b8) {
                        if (i || z.test(b5)) {
                            b6(b5, b8)
                        } else {
                            v(b5 + "[" + (typeof b8 === "object" ? b9 : "") + "]", b8, i, b6)
                        }
                    })
                } else {
                    if (!i && ae.type(b7) === "object") {
                        for (e in b7) {
                            v(b5 + "[" + e + "]", b7[e], i, b6)
                        }
                    } else {
                        b6(b5, b7)
                    }
                }
            }
            ae.param = function(b7, b5) {
                var b6, i = [], e = function(b8, b9) {
                    b9 = ae.isFunction(b9) ? b9() : (b9 == null ? "" : b9);
                    i[i.length] = encodeURIComponent(b8) + "=" + encodeURIComponent(b9)
                };
                if (b5 === undefined) {
                    b5 = ae.ajaxSettings && ae.ajaxSettings.traditional
                }
                if (ae.isArray(b7) || (b7.jquery && !ae.isPlainObject(b7))) {
                    ae.each(b7, function() {
                        e(this.name, this.value)
                    })
                } else {
                    for (b6 in b7) {
                        v(b6, b7[b6], b5, e)
                    }
                }
                return i.join("&").replace(ac, "+")
            };
            ae.fn.extend({serialize: function() {
                    return ae.param(this.serializeArray())
                }, serializeArray: function() {
                    return this.map(function() {
                        var e = ae.prop(this, "elements");
                        return e ? ae.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !ae(this).is(":disabled") && q.test(this.nodeName) && !b1.test(e) && (this.checked || !N.test(e))
                    }).map(function(i, b5) {
                        var e = ae(this).val();
                        return e == null ? null : ae.isArray(e) ? ae.map(e, function(b6) {
                            return{name: b5.name, value: b6.replace(bM, "\r\n")}
                        }) : {name: b5.name, value: e.replace(bM, "\r\n")}
                    }).get()
                }});
            ae.ajaxSettings.xhr = a9.ActiveXObject !== undefined ? function() {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && L() || at()
            } : L;
            var ak = 0, Y = {}, bI = ae.ajaxSettings.xhr();
            if (a9.attachEvent) {
                a9.attachEvent("onunload", function() {
                    for (var e in Y) {
                        Y[e](undefined, true)
                    }
                })
            }
            bg.cors = !!bI && ("withCredentials" in bI);
            bI = bg.ajax = !!bI;
            if (bI) {
                ae.ajaxTransport(function(e) {
                    if (!e.crossDomain || bg.cors) {
                        var i;
                        return{send: function(b8, b5) {
                                var b6, b7 = e.xhr(), b9 = ++ak;
                                b7.open(e.type, e.url, e.async, e.username, e.password);
                                if (e.xhrFields) {
                                    for (b6 in e.xhrFields) {
                                        b7[b6] = e.xhrFields[b6]
                                    }
                                }
                                if (e.mimeType && b7.overrideMimeType) {
                                    b7.overrideMimeType(e.mimeType)
                                }
                                if (!e.crossDomain && !b8["X-Requested-With"]) {
                                    b8["X-Requested-With"] = "XMLHttpRequest"
                                }
                                for (b6 in b8) {
                                    if (b8[b6] !== undefined) {
                                        b7.setRequestHeader(b6, b8[b6] + "")
                                    }
                                }
                                b7.send((e.hasContent && e.data) || null);
                                i = function(ca, cf) {
                                    var ce, cd, cb;
                                    if (i && (cf || b7.readyState === 4)) {
                                        delete Y[b9];
                                        i = undefined;
                                        b7.onreadystatechange = ae.noop;
                                        if (cf) {
                                            if (b7.readyState !== 4) {
                                                b7.abort()
                                            }
                                        } else {
                                            cb = {};
                                            ce = b7.status;
                                            if (typeof b7.responseText === "string") {
                                                cb.text = b7.responseText
                                            }
                                            try {
                                                cd = b7.statusText
                                            } catch (cc) {
                                                cd = ""
                                            }
                                            if (!ce && e.isLocal && !e.crossDomain) {
                                                ce = cb.text ? 200 : 404
                                            } else {
                                                if (ce === 1223) {
                                                    ce = 204
                                                }
                                            }
                                        }
                                    }
                                    if (cb) {
                                        b5(ce, cd, cb, b7.getAllResponseHeaders())
                                    }
                                };
                                if (!e.async) {
                                    i()
                                } else {
                                    if (b7.readyState === 4) {
                                        setTimeout(i)
                                    } else {
                                        b7.onreadystatechange = Y[b9] = i
                                    }
                                }
                            }, abort: function() {
                                if (i) {
                                    i(undefined, true)
                                }
                            }}
                    }
                })
            }
            function L() {
                try {
                    return new a9.XMLHttpRequest()
                } catch (e) {
                }
            }
            function at() {
                try {
                    return new a9.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            ae.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function(e) {
                        ae.globalEval(e);
                        return e
                    }}});
            ae.ajaxPrefilter("script", function(e) {
                if (e.cache === undefined) {
                    e.cache = false
                }
                if (e.crossDomain) {
                    e.type = "GET";
                    e.global = false
                }
            });
            ae.ajaxTransport("script", function(b5) {
                if (b5.crossDomain) {
                    var e, i = aH.head || ae("head")[0] || aH.documentElement;
                    return{send: function(b6, b7) {
                            e = aH.createElement("script");
                            e.async = true;
                            if (b5.scriptCharset) {
                                e.charset = b5.scriptCharset
                            }
                            e.src = b5.url;
                            e.onload = e.onreadystatechange = function(b9, b8) {
                                if (b8 || !e.readyState || /loaded|complete/.test(e.readyState)) {
                                    e.onload = e.onreadystatechange = null;
                                    if (e.parentNode) {
                                        e.parentNode.removeChild(e)
                                    }
                                    e = null;
                                    if (!b8) {
                                        b7(200, "success")
                                    }
                                }
                            };
                            i.insertBefore(e, i.firstChild)
                        }, abort: function() {
                            if (e) {
                                e.onload(undefined, true)
                            }
                        }}
                }
            });
            var a3 = [], b3 = /(=)\?(?=&|$)|\?\?/;
            ae.ajaxSetup({jsonp: "callback", jsonpCallback: function() {
                    var e = a3.pop() || (ae.expando + "_" + (bb++));
                    this[e] = true;
                    return e
                }});
            ae.ajaxPrefilter("json jsonp", function(b6, b7, b9) {
                var b8, i, b5, e = b6.jsonp !== false && (b3.test(b6.url) ? "url" : typeof b6.data === "string" && !(b6.contentType || "").indexOf("application/x-www-form-urlencoded") && b3.test(b6.data) && "data");
                if (e || b6.dataTypes[0] === "jsonp") {
                    b8 = b6.jsonpCallback = ae.isFunction(b6.jsonpCallback) ? b6.jsonpCallback() : b6.jsonpCallback;
                    if (e) {
                        b6[e] = b6[e].replace(b3, "$1" + b8)
                    } else {
                        if (b6.jsonp !== false) {
                            b6.url += (au.test(b6.url) ? "&" : "?") + b6.jsonp + "=" + b8
                        }
                    }
                    b6.converters["script json"] = function() {
                        if (!b5) {
                            ae.error(b8 + " was not called")
                        }
                        return b5[0]
                    };
                    b6.dataTypes[0] = "json";
                    i = a9[b8];
                    a9[b8] = function() {
                        b5 = arguments
                    };
                    b9.always(function() {
                        a9[b8] = i;
                        if (b6[b8]) {
                            b6.jsonpCallback = b7.jsonpCallback;
                            a3.push(b8)
                        }
                        if (b5 && ae.isFunction(i)) {
                            i(b5[0])
                        }
                        b5 = i = undefined
                    });
                    return"script"
                }
            });
            ae.parseHTML = function(b7, b5, b6) {
                if (!b7 || typeof b7 !== "string") {
                    return null
                }
                if (typeof b5 === "boolean") {
                    b6 = b5;
                    b5 = false
                }
                b5 = b5 || aH;
                var i = aK.exec(b7), e = !b6 && [];
                if (i) {
                    return[b5.createElement(i[1])]
                }
                i = ae.buildFragment([b7], b5, e);
                if (e && e.length) {
                    ae(e).remove()
                }
                return ae.merge([], i.childNodes)
            };
            var ag = ae.fn.load;
            ae.fn.load = function(b6, b7, b9) {
                if (typeof b6 !== "string" && ag) {
                    return ag.apply(this, arguments)
                }
                var ca, b5, e, i = this, b8 = b6.indexOf(" ");
                if (b8 >= 0) {
                    ca = ae.trim(b6.slice(b8, b6.length));
                    b6 = b6.slice(0, b8)
                }
                if (ae.isFunction(b7)) {
                    b9 = b7;
                    b7 = undefined
                } else {
                    if (b7 && typeof b7 === "object") {
                        e = "POST"
                    }
                }
                if (i.length > 0) {
                    ae.ajax({url: b6, type: e, dataType: "html", data: b7}).done(function(cb) {
                        b5 = arguments;
                        i.html(ca ? ae("<div>").append(ae.parseHTML(cb)).find(ca) : cb)
                    }).complete(b9 && function(cb, cc) {
                        i.each(b9, b5 || [cb.responseText, cc, cb])
                    })
                }
                return this
            };
            ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, e) {
                ae.fn[e] = function(b5) {
                    return this.on(e, b5)
                }
            });
            ae.expr.filters.animated = function(e) {
                return ae.grep(ae.timers, function(i) {
                    return e === i.elem
                }).length
            };
            var bJ = a9.document.documentElement;
            function c(e) {
                return ae.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
            }
            ae.offset = {setOffset: function(b6, cf, b8) {
                    var cb, i, e, b7, b5, cd, ce, ca = ae.css(b6, "position"), b9 = ae(b6), cc = {};
                    if (ca === "static") {
                        b6.style.position = "relative"
                    }
                    b5 = b9.offset();
                    e = ae.css(b6, "top");
                    cd = ae.css(b6, "left");
                    ce = (ca === "absolute" || ca === "fixed") && ae.inArray("auto", [e, cd]) > -1;
                    if (ce) {
                        cb = b9.position();
                        b7 = cb.top;
                        i = cb.left
                    } else {
                        b7 = parseFloat(e) || 0;
                        i = parseFloat(cd) || 0
                    }
                    if (ae.isFunction(cf)) {
                        cf = cf.call(b6, b8, b5)
                    }
                    if (cf.top != null) {
                        cc.top = (cf.top - b5.top) + b7
                    }
                    if (cf.left != null) {
                        cc.left = (cf.left - b5.left) + i
                    }
                    if ("using" in cf) {
                        cf.using.call(b6, cc)
                    } else {
                        b9.css(cc)
                    }
                }};
            ae.fn.extend({offset: function(i) {
                    if (arguments.length) {
                        return i === undefined ? this : this.each(function(b9) {
                            ae.offset.setOffset(this, i, b9)
                        })
                    }
                    var b7, e, b6 = {top: 0, left: 0}, b5 = this[0], b8 = b5 && b5.ownerDocument;
                    if (!b8) {
                        return
                    }
                    b7 = b8.documentElement;
                    if (!ae.contains(b7, b5)) {
                        return b6
                    }
                    if (typeof b5.getBoundingClientRect !== ah) {
                        b6 = b5.getBoundingClientRect()
                    }
                    e = c(b8);
                    return{top: b6.top + (e.pageYOffset || b7.scrollTop) - (b7.clientTop || 0), left: b6.left + (e.pageXOffset || b7.scrollLeft) - (b7.clientLeft || 0)}
                }, position: function() {
                    if (!this[0]) {
                        return
                    }
                    var b5, b6, e = {top: 0, left: 0}, i = this[0];
                    if (ae.css(i, "position") === "fixed") {
                        b6 = i.getBoundingClientRect()
                    } else {
                        b5 = this.offsetParent();
                        b6 = this.offset();
                        if (!ae.nodeName(b5[0], "html")) {
                            e = b5.offset()
                        }
                        e.top += ae.css(b5[0], "borderTopWidth", true);
                        e.left += ae.css(b5[0], "borderLeftWidth", true)
                    }
                    return{top: b6.top - e.top - ae.css(i, "marginTop", true), left: b6.left - e.left - ae.css(i, "marginLeft", true)}
                }, offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent || bJ;
                        while (e && (!ae.nodeName(e, "html") && ae.css(e, "position") === "static")) {
                            e = e.offsetParent
                        }
                        return e || bJ
                    })
                }});
            ae.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function(b5, i) {
                var e = /Y/.test(i);
                ae.fn[b5] = function(b6) {
                    return aJ(this, function(b7, ca, b9) {
                        var b8 = c(b7);
                        if (b9 === undefined) {
                            return b8 ? (i in b8) ? b8[i] : b8.document.documentElement[ca] : b7[ca]
                        }
                        if (b8) {
                            b8.scrollTo(!e ? b9 : ae(b8).scrollLeft(), e ? b9 : ae(b8).scrollTop())
                        } else {
                            b7[ca] = b9
                        }
                    }, b5, b6, arguments.length, null)
                }
            });
            ae.each(["top", "left"], function(i, e) {
                ae.cssHooks[e] = bw(bg.pixelPosition, function(b5, b6) {
                    if (b6) {
                        b6 = bh(b5, e);
                        return b0.test(b6) ? ae(b5).position()[e] + "px" : b6
                    }
                })
            });
            ae.each({Height: "height", Width: "width"}, function(e, i) {
                ae.each({padding: "inner" + e, content: i, "": "outer" + e}, function(b5, b6) {
                    ae.fn[b6] = function(ca, b9) {
                        var b8 = arguments.length && (b5 || typeof ca !== "boolean"), b7 = b5 || (ca === true || b9 === true ? "margin" : "border");
                        return aJ(this, function(ce, cd, cb) {
                            var cc;
                            if (ae.isWindow(ce)) {
                                return ce.document.documentElement["client" + e]
                            }
                            if (ce.nodeType === 9) {
                                cc = ce.documentElement;
                                return Math.max(ce.body["scroll" + e], cc["scroll" + e], ce.body["offset" + e], cc["offset" + e], cc["client" + e])
                            }
                            return cb === undefined ? ae.css(ce, cd, b7) : ae.style(ce, cd, cb, b7)
                        }, i, b8 ? ca : undefined, b8, null)
                    }
                })
            });
            ae.fn.size = function() {
                return this.length
            };
            ae.fn.andSelf = ae.fn.addBack;
            if (typeof define === "function" && define.amd) {
                define("jquery", [], function() {
                    return ae
                })
            }
            var aF = a9.jQuery, ax = a9.$;
            ae.noConflict = function(e) {
                if (a9.$ === ae) {
                    a9.$ = ax
                }
                if (e && a9.jQuery === ae) {
                    a9.jQuery = aF
                }
                return ae
            };
            if (typeof aP === ah) {
                a9.jQuery = a9.$ = ae
            }
            return ae
        }));
/*
 * jQuery Migrate - v1.2.1 - 2013-05-08
 * https://github.com/jquery/jquery-migrate
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors; Licensed MIT
 */
(function(u, B, C) {
    u.migrateMute = 1;
    var j = {};
    u.migrateWarnings = [];
    if (!u.migrateMute && B.console && B.console.log) {
        B.console.log("JQMIGRATE: Logging is active")
    }
    if (u.migrateTrace === C) {
        u.migrateTrace = true
    }
    u.migrateReset = function() {
        j = {};
        u.migrateWarnings.length = 0
    };
    function x(H) {
        var G = B.console;
        if (!j[H]) {
            j[H] = true;
            u.migrateWarnings.push(H);
            if (G && G.warn && !u.migrateMute) {
                G.warn("JQMIGRATE: " + H);
                if (u.migrateTrace && G.trace) {
                    G.trace()
                }
            }
        }
    }
    function p(I, K, H, J) {
        if (Object.defineProperty) {
            try {
                Object.defineProperty(I, K, {configurable: true, enumerable: true, get: function() {
                        x(J);
                        return H
                    }, set: function(L) {
                        x(J);
                        H = L
                    }});
                return
            } catch (G) {
            }
        }
        u._definePropertyBroken = true;
        I[K] = H
    }
    if (document.compatMode === "BackCompat") {
        x("jQuery is not compatible with Quirks Mode")
    }
    var o = u("<input/>", {size: 1}).attr("size") && u.attrFn, z = u.attr, l = u.attrHooks.value && u.attrHooks.value.get || function() {
        return null
    }, D = u.attrHooks.value && u.attrHooks.value.set || function() {
        return C
    }, v = /^(?:input|button)$/i, a = /^[238]$/, r = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, n = /^(?:checked|selected)$/i;
    p(u, "attrFn", o || {}, "jQuery.attrFn is deprecated");
    u.attr = function(I, G, J, H) {
        var L = G.toLowerCase(), K = I && I.nodeType;
        if (H) {
            if (z.length < 4) {
                x("jQuery.fn.attr( props, pass ) is deprecated")
            }
            if (I && !a.test(K) && (o ? G in o : u.isFunction(u.fn[G]))) {
                return u(I)[G](J)
            }
        }
        if (G === "type" && J !== C && v.test(I.nodeName) && I.parentNode) {
            x("Can't change the 'type' of an input or button in IE 6/7/8")
        }
        if (!u.attrHooks[L] && r.test(L)) {
            u.attrHooks[L] = {get: function(N, M) {
                    var P, O = u.prop(N, M);
                    return O === true || typeof O !== "boolean" && (P = N.getAttributeNode(M)) && P.nodeValue !== false ? M.toLowerCase() : C
                }, set: function(N, P, M) {
                    var O;
                    if (P === false) {
                        u.removeAttr(N, M)
                    } else {
                        O = u.propFix[M] || M;
                        if (O in N) {
                            N[O] = true
                        }
                        N.setAttribute(M, M.toLowerCase())
                    }
                    return M
                }};
            if (n.test(L)) {
                x("jQuery.fn.attr('" + L + "') may use property instead of attribute")
            }
        }
        return z.call(u, I, G, J)
    };
    u.attrHooks.value = {get: function(I, H) {
            var G = (I.nodeName || "").toLowerCase();
            if (G === "button") {
                return l.apply(this, arguments)
            }
            if (G !== "input" && G !== "option") {
                x("jQuery.fn.attr('value') no longer gets properties")
            }
            return H in I ? I.value : null
        }, set: function(H, I) {
            var G = (H.nodeName || "").toLowerCase();
            if (G === "button") {
                return D.apply(this, arguments)
            }
            if (G !== "input" && G !== "option") {
                x("jQuery.fn.attr('value', val) no longer sets properties")
            }
            H.value = I
        }};
    var F, b, c = u.fn.init, E = u.parseJSON, h = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    u.fn.init = function(I, H, G) {
        var J;
        if (I && typeof I === "string" && !u.isPlainObject(H) && (J = h.exec(u.trim(I))) && J[0]) {
            if (I.charAt(0) !== "<") {
                x("$(html) HTML strings must start with '<' character")
            }
            if (J[3]) {
                x("$(html) HTML text after last tag is ignored")
            }
            if (J[0].charAt(0) === "#") {
                x("HTML string cannot start with a '#' character");
                u.error("JQMIGRATE: Invalid selector string (XSS)")
            }
            if (H && H.context) {
                H = H.context
            }
            if (u.parseHTML) {
                return c.call(this, u.parseHTML(J[2], H, true), H, G)
            }
        }
        return c.apply(this, arguments)
    };
    u.fn.init.prototype = u.fn;
    u.parseJSON = function(G) {
        if (!G && G !== null) {
            x("jQuery.parseJSON requires a valid JSON string");
            return null
        }
        return E.apply(this, arguments)
    };
    u.uaMatch = function(H) {
        H = H.toLowerCase();
        var G = /(chrome)[ \/]([\w.]+)/.exec(H) || /(webkit)[ \/]([\w.]+)/.exec(H) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(H) || /(msie) ([\w.]+)/.exec(H) || H.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(H) || [];
        return{browser: G[1] || "", version: G[2] || "0"}
    };
    if (!u.browser) {
        F = u.uaMatch(navigator.userAgent);
        b = {};
        if (F.browser) {
            b[F.browser] = true;
            b.version = F.version
        }
        if (b.chrome) {
            b.webkit = true
        } else {
            if (b.webkit) {
                b.safari = true
            }
        }
        u.browser = b
    }
    p(u, "browser", u.browser, "jQuery.browser is deprecated");
    u.sub = function() {
        function H(J, K) {
            return new H.fn.init(J, K)
        }
        u.extend(true, H, this);
        H.superclass = this;
        H.fn = H.prototype = this();
        H.fn.constructor = H;
        H.sub = this.sub;
        H.fn.init = function G(J, K) {
            if (K && K instanceof u && !(K instanceof H)) {
                K = H(K)
            }
            return u.fn.init.call(this, J, K, I)
        };
        H.fn.init.prototype = H.fn;
        var I = H(document);
        x("jQuery.sub() is deprecated");
        return H
    };
    u.ajaxSetup({converters: {"text json": u.parseJSON}});
    var y = u.fn.data;
    u.fn.data = function(G) {
        var J, I, H = this[0];
        if (H && G === "events" && arguments.length === 1) {
            J = u.data(H, G);
            I = u._data(H, G);
            if ((J === C || J === I) && I !== C) {
                x("Use of jQuery.fn.data('events') is deprecated");
                return I
            }
        }
        return y.apply(this, arguments)
    };
    var A = /\/(java|ecma)script/i, d = u.fn.andSelf || u.fn.addBack;
    u.fn.andSelf = function() {
        x("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return d.apply(this, arguments)
    };
    if (!u.clean) {
        u.clean = function(G, H, N, J) {
            H = H || document;
            H = !H.nodeType && H[0] || H;
            H = H.ownerDocument || H;
            x("jQuery.clean() is deprecated");
            var K, I, L, O, M = [];
            u.merge(M, u.buildFragment(G, H).childNodes);
            if (N) {
                L = function(P) {
                    if (!P.type || A.test(P.type)) {
                        return J ? J.push(P.parentNode ? P.parentNode.removeChild(P) : P) : N.appendChild(P)
                    }
                };
                for (K = 0; (I = M[K]) != null; K++) {
                    if (!(u.nodeName(I, "script") && L(I))) {
                        N.appendChild(I);
                        if (typeof I.getElementsByTagName !== "undefined") {
                            O = u.grep(u.merge([], I.getElementsByTagName("script")), L);
                            M.splice.apply(M, [K + 1, 0].concat(O));
                            K += O.length
                        }
                    }
                }
            }
            return M
        }
    }
    var t = u.event.add, s = u.event.remove, k = u.event.trigger, e = u.fn.toggle, f = u.fn.live, w = u.fn.die, i = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", m = new RegExp("\\b(?:" + i + ")\\b"), g = /(?:^|\s)hover(\.\S+|)\b/, q = function(G) {
        if (typeof (G) !== "string" || u.event.special.hover) {
            return G
        }
        if (g.test(G)) {
            x("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")
        }
        return G && G.replace(g, "mouseenter$1 mouseleave$1")
    };
    if (u.event.props && u.event.props[0] !== "attrChange") {
        u.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement")
    }
    if (u.event.dispatch) {
        p(u.event, "handle", u.event.dispatch, "jQuery.event.handle is undocumented and deprecated")
    }
    u.event.add = function(J, H, I, K, G) {
        if (J !== document && m.test(H)) {
            x("AJAX events should be attached to document: " + H)
        }
        t.call(this, J, q(H || ""), I, K, G)
    };
    u.event.remove = function(K, I, J, G, H) {
        s.call(this, K, q(I) || "", J, G, H)
    };
    u.fn.error = function() {
        var G = Array.prototype.slice.call(arguments, 0);
        x("jQuery.fn.error() is deprecated");
        G.splice(0, 0, "error");
        if (arguments.length) {
            return this.bind.apply(this, G)
        }
        this.triggerHandler.apply(this, G);
        return this
    };
    u.fn.toggle = function(I, G) {
        if (!u.isFunction(I) || !u.isFunction(G)) {
            return e.apply(this, arguments)
        }
        x("jQuery.fn.toggle(handler, handler...) is deprecated");
        var L = arguments, K = I.guid || u.guid++, H = 0, J = function(M) {
            var N = (u._data(this, "lastToggle" + I.guid) || 0) % H;
            u._data(this, "lastToggle" + I.guid, N + 1);
            M.preventDefault();
            return L[N].apply(this, arguments) || false
        };
        J.guid = K;
        while (H < L.length) {
            L[H++].guid = K
        }
        return this.click(J)
    };
    u.fn.live = function(H, G, I) {
        x("jQuery.fn.live() is deprecated");
        if (f) {
            return f.apply(this, arguments)
        }
        u(this.context).on(H, this.selector, G, I);
        return this
    };
    u.fn.die = function(G, H) {
        x("jQuery.fn.die() is deprecated");
        if (w) {
            return w.apply(this, arguments)
        }
        u(this.context).off(G, this.selector || "**", H);
        return this
    };
    u.event.trigger = function(G, H, J, I) {
        if (!J && !m.test(G)) {
            x("Global events are undocumented and deprecated")
        }
        return k.call(this, G, H, J || document, I)
    };
    u.each(i.split("|"), function(H, G) {
        u.event.special[G] = {setup: function() {
                var I = this;
                if (I !== document) {
                    u.event.add(document, G + "." + u.guid, function() {
                        u.event.trigger(G, null, I, true)
                    });
                    u._data(this, G, u.guid++)
                }
                return false
            }, teardown: function() {
                if (this !== document) {
                    u.event.remove(document, G + "." + u._data(this, G))
                }
                return false
            }}
    })
})(jQuery, window);
(function(b) {
    var a = window.loli || (window.loli = {});
    a.isMobile = function() {
        var e = navigator.userAgent.toLowerCase();
        var i = e.match(/ipad/i) == "ipad";
        var j = e.match(/iphone os/i) == "iphone os";
        var h = e.match(/midp/i) == "midp";
        var f = e.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var g = e.match(/ucweb/i) == "ucweb";
        var c = e.match(/android/i) == "android";
        var d = e.match(/windows ce/i) == "windows ce";
        var k = e.match(/windows mobile/i) == "windows mobile";
        if (i || j || h || f || g || c || d || k) {
            return true
        } else {
            return false
        }
    };
    a.getElementTopLeft = function(e) {
        var d = 0;
        var c = 0;
        while (e) {
            d += e.offsetTop;
            c += e.offsetLeft;
            e = e.offsetParent
        }
        return{top: d, left: c}
    };
    a.isVisual = function(d) {
        if (!d) {
            return false
        }
        var c = d.offsetHeight;
        var f = document.documentElement.clientHeight;
        var g = document.documentElement.scrollTop || document.body.scrollTop;
        var e = a.getElementTopLeft(d).top + c / 2;
        if (e < f + g && e > g) {
            return true
        } else {
            return false
        }
    };
    a.isVisualByTop = function(d) {
        if (!d) {
            return false
        }
        var f = a.getElementTopLeft(d).top;
        var g = document.documentElement.clientHeight;
        var e = f + d.offsetHeight;
        var c = document.documentElement.scrollTop || document.body.scrollTop;
        if ((f <= g + c && f >= c) || (f <= c && e >= c)) {
            return true
        } else {
            return false
        }
    };
    a.isSpider = function() {
        var d = navigator.userAgent.toLowerCase();
        var i = d.match(/baiduspider/i) == "baiduspider";
        var h = d.match(/360spider/i) == "360spider";
        var g = d.match(/sogou web spider/i) == "sogou web spider";
        var f = d.match(/sosospider/i) == "sosospider";
        var c = d.match(/yisouspider/i) == "yisouspider";
        var e = d.match(/googlebot/i) == "googlebot";
        var j = d.match(/bingbot/i) == "bingbot";
        if (i || h || g || f || c || e || j) {
            return true
        } else {
            return false
        }
    };
    a.getMousePos = function(m) {
        try {
            var d = m || window.event;
            if (d) {
                var c = document.body.scrollWidth;
                var k = document.body.scrollHeight;
                var j = document.documentElement.scrollLeft || document.body.scrollLeft;
                var i = document.documentElement.scrollTop || document.body.scrollTop;
                var h, g, n, l;
                h = d.pageX || d.clientX + j;
                g = d.pageY || d.clientY + i;
                if (h && g) {
                    n = h / c;
                    l = g / k;
                    return{xrate: n.toFixed(5), yrate: l.toFixed(5)}
                }
            }
        } catch (f) {
        }
        return null
    }
})(jQuery);
(function(E, A) {
    if (typeof (isExistRecordCINTT) != "undefined" && isExistRecordCINTT) {
        return
    }
    if (typeof (A.addEventListener) == "undefined") {
        return
    }
    var w = E.global || (E.global = {});
    var u = w.vars = (w.vars || {});
    w.vars.firstload = function() {
        w.vars.customInteractTime = new Date()
    };
    if (w.vars.customInteractTime) {
        return
    }
    function z(b) {
        var a = b.offsetTop;
        if (b.offsetParent !== null) {
            a += z(b.offsetParent)
        }
        return a
    }
    var x = null;
    var F = new Date();
    var G = {};
    var B = E.screen.height;
    var D = [];
    var C = false;
    var J = false;
    var H = A.getElementsByTagName("img");
    var t, i, y = 0;
    function I() {
        if (D.length) {
            for (t = 0; t < D.length; t++) {
                i = D[t];
                if (i.complete) {
                    y++;
                    if (y == D.length) {
                        J = true;
                        w.vars.customInteractTime = new Date().getTime()
                    }
                }
                i.src = i.src
            }
        } else {
            J = true
        }
        x = setInterval(function() {
            if (J) {
                w.vars.customInteractTime = new Date().getTime();
                clearInterval(x)
            }
        }, 2)
    }
    for (t = 0; t < H.length; t++) {
        i = H[t];
        if (i.width && (i.width < 25 || i.height < 25)) {
            continue
        }
        var v = z(i);
        if (v > B) {
            C = true;
            I();
            break
        } else {
            if (v <= B && !i.hasPushed) {
                i.hasPushed = 1;
                D.push(i)
            }
        }
    }
    if (!C) {
        C = true;
        I()
    }
    A.addEventListener("DOMContentLoaded", function() {
        if (!H.length) {
            C = true
        }
    });
    E.addEventListener("load", function() {
        J = true;
        C = true;
        if (x) {
            clearInterval(x)
        }
    })
})(window, document);
(function() {
    var a = window.loli || (window.loli = {});
    var c = {};
    var b = ".";
    c.checkTpPage = function(e) {
        if (!e) {
            e = $("meta[name=tp_page]").attr("content");
            if (!e) {
                return null
            }
        }
        var d = e.split(b);
        return d.length == 2 ? d : null
    };
    c.glSpmcodeToId = function(e, d) {
        if (!d) {
            return d
        }
        if (typeof (_globalSpmDataModelJson) != "undefined" && _globalSpmDataModelJson) {
            var f = 0;
            if (e) {
                f = _globalSpmDataModelJson[e] ? _globalSpmDataModelJson[e][d] : ""
            } else {
                f = _globalSpmDataModelJson[d]
            }
            if (f) {
                return f
            }
        }
        return d
    };
    c.getCurrPageInfo = function() {
        var d = c.checkTpPage();
        if (!d) {
            return null
        }
        return{pageType: c.glSpmcodeToId(null, d[0]), pageValue: d[1]}
    };
    c.getReferPageInfo = function() {
        var d = a.util.url.getParams(location.href) || {};
        var f = d.tp;
        if (f) {
            var e = f.split(".");
            if (a.config.isValidUID(e[5])) {
                return{refPageType: e[0] || "", refPageValue: e[1] || ""}
            }
        }
        return null
    };
    c.glABcodeToTag = function(e) {
        if (e && e.length > 0 && typeof (_globalABTestExpDataJson) != "undefined" && _globalABTestExpDataJson && _globalABTestExpDataJson[e]) {
            var d = _globalABTestExpDataJson[e]["tag"];
            return d
        }
        return""
    };
    c.getABExpParam = function(d) {
        if (d && d.length > 0 && typeof (_globalABTestExpDataJson) != "undefined" && _globalABTestExpDataJson && _globalABTestExpDataJson[d]) {
            var e = _globalABTestExpDataJson[d]["expParam"];
            return e
        }
        return""
    };
    window.loli.page = c
})();
jQuery.cookie = function(h, c, f) {
    if (typeof c != "undefined") {
        f = f || {};
        if (c === null) {
            c = "";
            f.expires = -1
        }
        var l = "";
        if (f.expires && (typeof f.expires == "number" || f.expires.toUTCString)) {
            var m;
            if (typeof f.expires == "number") {
                m = new Date();
                m.setTime(m.getTime() + (f.expires * 24 * 60 * 60 * 1000))
            } else {
                m = f.expires
            }
            l = "; expires=" + m.toUTCString()
        }
        var e = f.path ? "; path=" + (f.path) : "";
        var a = f.domain ? "; domain=" + (f.domain) : "";
        var g = f.secure ? "; secure" : "";
        document.cookie = [h, "=", encodeURIComponent(c), l, e, a, g].join("")
    } else {
        var k = null;
        if (document.cookie && document.cookie != "") {
            var d = document.cookie.split(";");
            for (var b = 0; b < d.length; b++) {
                var j = jQuery.trim(d[b]);
                if (j.substring(0, h.length + 1) == (h + "=")) {
                    k = decodeURIComponent(j.substring(h.length + 1));
                    break
                }
            }
        }
        return k
    }
};
define("base_observer", function() {
    var b = (function() {
        var f = {};
        function a(d, c) {
            if (!f[d]) {
                f[d] = []
            }
            f[d].push(c)
        }
        function h(e, c) {
            if (f[e]) {
                for (var d = 0, i = f[e].length; d < i; d++) {
                    f[e][d](c)
                }
            }
        }
        function g(d, c) {
            if (f[d]) {
                f[d].shift(f[d].indexOf(c))
            }
        }
        return{subscribe: a, fire: h, unsubscribe: g}
    })();
    return b
});
(function() {
    var f = {};
    var d = [];
    f.send = function(a) {
        d.push(a);
        f.run()
    };
    f.run = function(j) {
        if (j == null) {
            j = 30
        }
        var c = d.length;
        if (c >= j) {
            var a = [];
            for (var i = 0; i < j; i++) {
                var b = d.shift();
                if (b) {
                    a.push(b)
                }
            }
            batchRecordTrackerInfo(a)
        }
    };
    setTimeout(function() {
        setInterval(function() {
            e()
        }, 500)
    }, 10000);
    $(window).unload(function() {
        e()
    });
    function e() {
        var h = d.length;
        var b = [];
        for (var a = 0; a < h; a++) {
            var c = d.shift();
            if (c) {
                b.push(c)
            }
        }
        batchRecordTrackerInfo(b)
    }
    window.loli = window.loli || {};
    window.loli.extTrackerSend = f
})();
define("abtestPv_tracker", ["base_observer"], function(g) {
    var h = {};
    var f = [];
    g.subscribe("abtestPvEvent", function(n) {
        if (n) {
            var a = n.data("abtestPvFlag");
            if (a != "1") {
                var b = window.loli || {};
                if (b && b.page && b.spm) {
                    var c = n.attr("data-abtest") || 0;
                    if (c) {
                        var o = b.page.glABcodeToTag(c);
                        if (o) {
                            var m = ".";
                            var d = "1";
                            var p = b.spm.getData(n);
                            c = d + m + o;
                            gotracker(2, "abtest-pv", "", p)
                        }
                    }
                }
                n.data("abtestPvFlag", 1)
            }
        }
    });
    h.run = function(c) {
        var b = 200, a = null;
        if (c) {
            f = c
        }
        if (f.length < 1) {
            f = jQuery("[data-abtest]")
        }
        setTimeout(function() {
            e()
        }, 500);
        jQuery(document).bind("scroll", function() {
            a && clearTimeout(a);
            a = setTimeout(function() {
                e()
            }, b)
        })
    };
    function e() {
        if (typeof (g) == "object") {
            if (f.length > 0) {
                var a = 0;
                while (a < f.length) {
                    if (loli.isVisualByTop(f[a]) && f[a] && f[a].style && f[a].style.display != "none") {
                        g.fire("abtestPvEvent", jQuery(f[a]));
                        f.splice(a, 1)
                    } else {
                        a++
                    }
                }
            }
        }
    }
    return h
});
define("common_impression", ["base_observer"], function(j) {
    var f = {};
    var i = [];
    function g(a) {
        if (typeof (loli.page) == "undefined") {
            return
        }
        a = loli.page.checkTpPage(a);
        if (!a) {
            return
        }
        return loli.page.glSpmcodeToId(null, a[0])
    }
    j.subscribe("impressionEvent", function(b) {
        var w = b.attr("data-tpa");
        var s = document.documentElement.scrollTop || document.body.scrollTop;
        var e = jQuery("meta[name=tp_page]").attr("content");
        if (!e) {
            return
        }
        var a = g(e);
        if (!a && a != "0") {
            return
        }
        var z = e.split(".");
        var t = 0;
        if (z.length > 1) {
            t = z[1]
        }
        var x = b.attr("data-ctpa");
        if (x) {
            w = x
        }
        var c = {scrollTop: s, w_pt: a, w_pv: t, w_tpa: w};
        var u = a + "_" + t;
        if (b) {
            var v = b.data("extFlag");
            var d = b.attr("data-mrt") || 0;
            if (v != "1" && d == 0) {
                var y = window.loli || {};
                if (y && y.extTrackerSend) {
                    loli.extTrackerSend.send({type: "1", info: w, others: "area.module", extend: u, paramObj: c})
                } else {
                    recordTrackInfoWithType("1", w, "area.module", u, c)
                }
                b.data("extFlag", 1)
            }
        }
    });
    f.run = function(c) {
        var b = 200, a = null;
        if (c) {
            i = c
        }
        if (i.length < 1) {
            i = jQuery("[data-tpa],[data-ctpa]")
        }
        setTimeout(function() {
            h()
        }, 500);
        jQuery(document).bind("scroll", function() {
            a && clearTimeout(a);
            a = setTimeout(function() {
                h()
            }, b)
        })
    };
    function h() {
        if (typeof (j) == "object") {
            var a = new Date().getTime();
            if (i.length > 0) {
                var b = [];
                var c = 0;
                while (c < i.length) {
                    if (loli.isVisual(i[c]) && i[c] && i[c].style && i[c].style.display != "none") {
                        j.fire("impressionEvent", jQuery(i[c]));
                        i.splice(c, 1)
                    } else {
                        c++
                    }
                }
            }
        }
    }
    return f
});
define("content_tracker_expo", ["base_observer"], function(r) {
    var l = {};
    var p = loli.page.getCurrPageInfo();
    var m = loli.page.getReferPageInfo();
    var s = {};
    if (p) {
        var k = p.pageType;
        var t = p.pageValue;
        s.w_pt = k;
        s.w_pv = t
    }
    if (m) {
        var q = m.refPageType;
        var n = m.refPageValue;
        s.w_rpt = q;
        s.w_rpv = n
    }
    l.run = function(d, a, b) {
        var c = new o(d, a, b);
        c.run()
    };
    function o(d, a, b) {
        var c = this;
        c.event = d;
        c.key = a;
        c.datas = b;
        c.subscribe()
    }
    o.prototype.run = function() {
        var c = this;
        var b = c.datas;
        var d = 200, a = null;
        if (!b || b.length < 1) {
            c.datas = jQuery("[data-recordTracker]")
        }
        setTimeout(function() {
            c.scrollFire()
        }, 500);
        jQuery(document).bind("scroll", function() {
            a && clearTimeout(a);
            a = setTimeout(function() {
                c.scrollFire()
            }, d)
        })
    };
    o.prototype.scrollFire = function() {
        var a = this;
        var d = a.datas;
        var e = a.event;
        if (typeof (r) == "object") {
            if (d && d.length > 0) {
                var b = [];
                var c = 0;
                while (c < d.length) {
                    if (loli.isVisual(d[c]) && d[c] && d[c].style && d[c].style.display != "none") {
                        b.push(jQuery(d[c]));
                        d.splice(c, 1)
                    } else {
                        c++
                    }
                }
                r.fire(e, b);
                b = []
            }
        }
    };
    o.prototype.subscribe = function() {
        var b = this;
        var a = b.event;
        var c = b.key;
        r.subscribe(a, function(f) {
            if (!f) {
                return
            }
            if (typeof f instanceof $) {
                var e = f.attr("data-tc");
                var z = f.attr("data-tce");
                var h = z ? "exfield1=" + z : null;
                var d = f.attr("data-recordTracker") || 0;
                var g = f.data("data-extFlag");
                if (e && g != "1" && d == "1") {
                    var i = window.loli || {};
                    if (i && i.extTrackerSend) {
                        loli.extTrackerSend.send({type: "1", info: e, others: c, extend: h, paramObj: s})
                    } else {
                        recordTrackInfoWithType("1", e, c, null, s)
                    }
                    f.data("data-extFlag", 1)
                }
            }
            if (f.constructor == Array) {
                for (var x = 0, j = f.length; x < j; x++) {
                    var y = $(f[x]);
                    var e = y.attr("data-tc");
                    var z = y.attr("data-tce");
                    var h = z ? "exfield1=" + z : null;
                    var g = y.data("data-extFlag");
                    var d = y.attr("data-recordTracker") || 0;
                    if (e && g != "1" && d == "1") {
                        var i = window.loli || {};
                        if (i && i.extTrackerSend) {
                            loli.extTrackerSend.send({type: "1", info: e, others: c, extend: h, paramObj: s})
                        } else {
                            recordTrackInfoWithType("1", e, c, h, s)
                        }
                        y.data("data-extFlag", 1)
                    }
                }
            }
        })
    };
    return l
});
$(document).ready(function() {
    require(["common_impression"], function(b) {
        b.run()
    });
    require(["abtestPv_tracker"], function(b) {
        b.run()
    })
});
(function(u) {
    var G = ".";
    var x = "0";
    var D = "1";
    var A = {TPA: "data-tpa", TPC: "data-tpc", TPI: "tpi", TCS: "data-tcs", TCD: "data-tcd", TCI: "data-tci", PC: "data-pc", TP: "data-tp", TC: "data-tc", TCE: "data-tce", ABTEST: "data-abtest", EXPR_TAG: "a,area,button", TPA_CHILD_SIZE: "data-tpaChildSize", TPC_CHILD_SIZE: "data-tpcChildSize", TC_CHILD_SIZE: "data-tcChildSize", RESULT: {RESULT: "result", TP: "tp", TC: "tc", UNIID: "uniId", PAGETYPE: "pageType", PAGEID: "pageId"}};
    var z = null, t = null, v = 0;
    var C = window.loli || (window.loli = {});
    var H = C.global.uid;
    var F = {getData: function(a) {
            if (C.isSpider()) {
                return{}
            }
            E();
            if (v == -1 || v == 2) {
                return null
            }
            var b = new w(a);
            return b.getData()
        }, getNewPageData: function() {
            E();
            var h = C.util.url.getParams(location.href) || {};
            var b = h.tp;
            var f = h.tc;
            var e = h.tce;
            var a = h.abtest;
            var j = h.ti;
            var g = h.tps;
            var c = 0;
            var i = B();
            if (i && i.length > 0) {
                a = x + G + i;
                c = 1
            }
            var d = {tp: b, tc: f, tce: e, abtest: a, unValidAB: c, ti: j, tps: g};
            return y(d)
        }, reloadPage: function(a) {
            var b = r(window.location.href, a);
            window.location.href = b
        }, refreshPage: function(b, c, d) {
            var a = r(b, c, d);
            window.location.href = a
        }, openPage: function(e, a, b, f, g) {
            var h = r(a, e, g);
            var d = "";
            if (typeof (b) != "undefined" && b) {
                d = b
            }
            var c = "";
            if (typeof (f) != "undefined" && f) {
                c = f
            }
            window.open(h, d, c)
        }, getABExpParam: function(b) {
            var a = "";
            if (b) {
                a = C.page.getABExpParam(b)
            }
            return a
        }};
    function r(j, d, l) {
        if (typeof (j) == "undefined" || !j) {
            return""
        }
        var b = typeof (d);
        if (b == "undefined" || !d) {
            return j
        }
        var i = null;
        if (b == "string") {
            var k = d;
            var c = d.indexOf("#");
            if (c == -1) {
                k = "#" + k
            }
            i = u(k)
        } else {
            if (b == "object") {
                i = d
            }
        }
        if (!i) {
            return j
        }
        var g = C.spm.getData(i);
        if (g) {
            var a = g.tp;
            var f = g.tc;
            var e = g.tce;
            var n = g.abtestValue;
            var m = {tp: a, tc: f, tce: e, abtest: n};
            j = C.util.url.appendParams(j, m)
        }
        if (C.getMousePos) {
            var h = C.getMousePos(l);
            if (h != null) {
                j = C.util.url.addPosition(h, j)
            }
        }
        return j
    }
    function E() {
        var a = u("meta[name=tp_page]").attr("content");
        a = C.page.checkTpPage(a);
        if (!a) {
            v = -1;
            return
        }
        z = encodeURI(C.page.glSpmcodeToId(null, a[0]));
        t = encodeURI(a[1]);
        if (z && z == "0") {
            v = 2
        }
    }
    function B() {
        var a = u("meta[name=global-abtest]");
        if (a && a.length > 0) {
            return a.attr("content")
        }
        return""
    }
    function w(a) {
        var b = this;
        b._dom = a;
        b._opt = {};
        b.init()
    }
    w.prototype = {init: function() {
            var f = this, g = f._dom;
            if (!g) {
                f.set(A.RESULT.RESULT, 0);
                return
            }
            if (!(g instanceof u)) {
                g = u(g)
            }
            var e = g.data(A.PC);
            if (e == 1) {
                f.set(A.RESULT.RESULT, 1);
                return
            } else {
                if (e == -1) {
                    f.set(A.RESULT.RESULT, 0);
                    return
                }
            }
            var a = s(g, A.TPA);
            if (a.length < 1) {
                if (z) {
                    f.set(A.RESULT.RESULT, 1);
                    f.set(A.TPA, 0);
                    f.set(A.TPC, 0);
                    f.set(A.TPI, 0)
                } else {
                    f.set(A.RESULT.RESULT, 0)
                }
                return
            }
            f.set(A.TPA, a.attr(A.TPA));
            f.initTpaIndex(a);
            var b = g.data(A.TPI);
            if (!b) {
                f.initNewTpaIndex(g, a)
            }
            f.set(A.TPC, g.data(A.TPC));
            f.set(A.TPI, g.data(A.TPI));
            var i = s(g, A.TC);
            if (i && i.length > 0) {
                f.set(A.TC, i.attr(A.TC))
            } else {
                f.initTcdIndex(a);
                var d = s(g, A.TCS);
                var h = s(g, A.TCD);
                if (h.length > 0) {
                    if (!d.attr(A.TCD)) {
                        f.initNewTcdIndex(h, a)
                    }
                    f.set(A.TCS, d.attr(A.TCS));
                    f.set(A.TCD, h.attr(A.TCD));
                    f.set(A.TCI, h.data(A.TCI) || 1)
                }
            }
            var c = s(g, A.ABTEST);
            if (c && c.length > 0) {
                f.set(A.ABTEST, c.attr(A.ABTEST))
            }
            f.set(A.RESULT.RESULT, 1)
        }, rebuildTP: function(c) {
            var d = c.split(G);
            var a = C.page.glSpmcodeToId("SPM_AREA", d[2]);
            var b = C.page.glSpmcodeToId("SPM_COM", d[3]);
            return(d[0] || "0") + G + (d[1] || "0") + G + (a || "0") + G + (b || "0") + G + (d[4] || "0") + G + (d[5] || "0")
        }, rebuildTC: function(c) {
            if (!c) {
                return c
            }
            var a = c.split(G);
            var b = C.page.glSpmcodeToId("SPM_SYSTEM_TYPE", a[0] || "0");
            var d = C.page.glSpmcodeToId("SPM_DATA_TYPE", a[2] || "0");
            return b + G + (a[1] || "0") + G + (d || "0") + G + (a[3] || "0") + G + (a[4] || "1")
        }, rebuildABTest: function(a) {
            return C.page.glABcodeToTag(a)
        }, getData: function() {
            var a = this, b = u(a._dom);
            var j = a.get(A.RESULT.RESULT);
            if (!j) {
                b.data(A.PC, -1);
                return null
            }
            var c = b.data(A.PC);
            var f = "";
            var n = s(b, A.TCE);
            if (n && n.length > 0) {
                f = n.attr(A.TCE)
            }
            if (c == 1) {
                var e = b.data(A.TP);
                var N = b.data(A.TC);
                var k = b.data(A.ABTEST);
                var m = {tp: e, tc: N, tce: f, abtest: k};
                var g = y(m);
                return g
            }
            var p = a.get(A.TPA);
            var q = a.get(A.TPC);
            var o = a.get(A.TPI);
            var O = a.get(A.TCS);
            var h = a.get(A.TCD);
            var i = a.get(A.TCI);
            var N = a.get(A.TC);
            var M = z + G + t + G + p + G + q + G + o + G + H;
            var d = "";
            if (N) {
                d = N
            } else {
                if (u.trim(O) != "" || u.trim(h) != "") {
                    if (u.trim(O) != "") {
                        d += O + G
                    } else {
                        d += "0.0" + G
                    }
                    if (u.trim(h) != "") {
                        d += h + G
                    } else {
                        d += "0.0" + G
                    }
                    d += i
                }
            }
            M = this.rebuildTP(M);
            d = this.rebuildTC(d);
            var P = "";
            var k = a.get(A.ABTEST);
            if (k) {
                if (k.indexOf(x + G) < 0) {
                    var l = this.rebuildABTest(k);
                    if (l) {
                        P = D + G + l
                    }
                } else {
                    P = k
                }
            }
            b.data(A.TP, M);
            b.data(A.TC, d);
            b.data(A.ABTEST, P);
            b.data(A.PC, 1);
            var m = {tp: M, tc: d, tce: f, abtest: P};
            var g = y(m);
            return g
        }, initTpaIndex: function(k) {
            var m = k.data(A.TPA_CHILD_SIZE);
            if (m) {
                return
            }
            var h = k.find(A.EXPR_TAG);
            m = 1;
            var g = {};
            for (var e = 0, i; i = h[e]; e++) {
                i = u(i);
                var j = s(i, A.TPC);
                var l = i.data(A.TPI);
                if (j.length < 1) {
                    if (!l) {
                        i.data(A.TPI, m)
                    }
                    i.data(A.TPC, 0);
                    m++
                } else {
                    var b = j.find(A.EXPR_TAG);
                    if (b.length == 0) {
                        b = j
                    }
                    var c = j.attr(A.TPC);
                    var d = g[c] || 1;
                    for (var f = 0, a; a = b[f]; f++) {
                        u(a).data(A.TPC, c);
                        if (u(a).data(A.TPI)) {
                            continue
                        }
                        u(a).data(A.TPI, d);
                        d++
                    }
                    g[c] = d;
                    j.data(A.TPC_CHILD_SIZE, g[c])
                }
            }
            k.data(A.TPA_CHILD_SIZE, m)
        }, initNewTpaIndex: function(a, d) {
            var e = s(a, A.TPC);
            var c = a.data(A.TPI);
            if (e.length < 1) {
                var f = d.data(A.TPA_CHILD_SIZE);
                f++;
                a.data(A.TPC, 0);
                if (!c) {
                    a.data(A.TPI, f)
                }
                d.data(A.TPA_CHILD_SIZE, f)
            } else {
                var b = e.data(A.TPC_CHILD_SIZE) || 0;
                b++;
                a.data(A.TPC, e.attr(A.TPC));
                if (!c) {
                    a.data(A.TPI, b)
                }
                e.data(A.TPC_CHILD_SIZE, b)
            }
        }, initTcdIndex: function(e) {
            var a = e.data(A.TC_CHILD_SIZE);
            if (a != null) {
                return
            }
            var b = e.find("[data-tcd]");
            for (var d = 0, c; c = b[d]; d++) {
                c = u(c);
                c.data(A.TCI, d + 1)
            }
            e.data(A.TC_CHILD_SIZE, b.length)
        }, initNewTcdIndex: function(a, b) {
            var c = b.data(A.TC_CHILD_SIZE);
            c++;
            b.data(A.TC_CHILD_SIZE, c);
            a.data(A.TCI, c)
        }, get: function(a) {
            return this._opt[a]
        }, set: function(a, b) {
            this._opt[a] = b
        }};
    function y(f) {
        var n = f.tce, l = f.abtest, d = f.unValidAB, Z = f.ti, j = f.tps;
        var ad = f.tp || "";
        var aj = f.tc || "";
        var ao = "";
        var ah = "";
        var p = "";
        var ab = "";
        var an = "";
        var h = "";
        var ac = "";
        var b = "";
        var al = "";
        var e = "";
        var af = "";
        var ap = "";
        var ag = "";
        var o = "";
        if (ad) {
            ad = decodeURIComponent(ad);
            var g = ad.split(".");
            if (g.length >= 6 && C.config.isValidUID(g[5])) {
                ao = g[2] || "0";
                ah = g[3] || "0";
                p = g[4] || "0";
                al = g[0] || "0";
                e = g[5] || "0";
                af = g[1] || "0";
                if (aj) {
                    var am = aj.split(".");
                    ab = am[0] || "0";
                    an = am[1] || "0";
                    h = am[2] || "0";
                    ac = am[3] || "0";
                    b = am[4] || "1"
                }
                ap = l;
                if (Z) {
                    var ak = g[5].split("-")[0];
                    var ae = ak + "_" + Z;
                    var ai = u.cookie(ae);
                    if (ai) {
                        var c = ai.split("|");
                        if (c) {
                            for (var k = 0; k < c.length;
                                    k++) {
                                var a = c[k];
                                if (a && a.indexOf(":") > 0) {
                                    var m = a.split(":");
                                    var aa = m[0];
                                    var q = m[1];
                                    if (aa == "x") {
                                        ag = q
                                    } else {
                                        if (aa == "y") {
                                            o = q
                                        }
                                    }
                                }
                            }
                        }
                        u.cookie(ae, "", {expires: -1, path: "/", domain: no3wUrl})
                    }
                } else {
                    if (j && j.indexOf("x") == 0 && j.indexOf("y") > 1 && j.indexOf("y") != j.length - 1) {
                        var i = j.indexOf("y");
                        ag = j.substring(1, i);
                        o = j.substring(i + 1)
                    }
                }
            }
        }
        if (!ap && d) {
            ap = l
        }
        return{tp: ad, tc: aj, tpa: ao, tpc: ah, tpi: p, tcs: ab, tcsa: an, tcd: h, tcdt: ac, tci: b, tce: n || "", abtestValue: ap || "", pageTypeId: z, pageValue: t, unid: H, refPageTypeId: al, refUnid: e, refPageValue: af, eventXRate: ag, eventYRate: o}
    }
    function s(b, a) {
        return b.closest("[" + a + "]")
    }
    C.spm = F
})(jQuery);
if (typeof no3wUrl == "undefined") {
    var no3wUrl = "yhd.com"
}
function getQueryStringRegExp(b) {
    var a = location.href;
    if (a && a.indexOf("#") > 0) {
        a = a.substring(0, a.indexOf("#"))
    }
    var c = new RegExp("(^|\\?|&)" + b + "=([^&]*)(\\s|&|$)", "i");
    if (c.test(a)) {
        return unescape(RegExp.$2.replace(/\+/g, " "))
    } else {
        return""
    }
}
var referrer = document.referrer ? document.referrer : "";
var referrerDomain = referrer.match(/http[s]?:\/\/([^\/]+)/);
var ref = getQueryStringRegExp("tracker_u");
var uid = getQueryStringRegExp("uid");
var websiteid = getQueryStringRegExp("website_id");
var utype = getQueryStringRegExp("tracker_type");
var adgroupKeywordID = getQueryStringRegExp("adgroupKeywordID");
var edmEmail = getQueryStringRegExp("emailId");
var expire_time_day = new Date((new Date()).getTime() + 1 * 24 * 3600000).toGMTString();
var expire_time_mouth = new Date((new Date()).getTime() + 30 * 24 * 3600000).toGMTString();
if (ref && !isNaN(ref) && (referrerDomain == null || referrerDomain[1].indexOf("union.yhd.com") != -1 || referrerDomain[1].indexOf(no3wUrl) == -1)) {
    document.cookie = "unionKey=" + ref + ";expires=" + expire_time_day + ";domain=." + no3wUrl + ";path=/";
    if (uid) {
        document.cookie = "uid=" + uid + ";expires=" + expire_time_day + ";domain=." + no3wUrl + ";path=/"
    } else {
        document.cookie = "uid=;expires=" + -1 + ";domain=." + no3wUrl + ";path=/"
    }
    if (websiteid) {
        document.cookie = "websiteid=" + websiteid + ";expires=" + expire_time_day + ";domain=." + no3wUrl + ";path=/"
    } else {
        document.cookie = "websiteid=;expires=" + -1 + ";domain=." + no3wUrl + ";path=/"
    }
}
if (adgroupKeywordID) {
    document.cookie = "adgroupKeywordID=" + adgroupKeywordID + ";expires=" + expire_time_day + ";domain=." + no3wUrl + ";path=/"
}
if (utype) {
    document.cookie = "unionType=" + utype + ";expires=" + expire_time_mouth + ";domain=." + no3wUrl + ";path=/"
}
if (edmEmail) {
    document.cookie = "edmEmail=" + edmEmail + ";domain=." + no3wUrl + ";path=/"
}
Array.prototype.toTRACKERJSONString = function() {
    var a = "[";
    for (var b = 0; b < this.length; b++) {
        if (this[b] instanceof Parameter) {
            if (this[b].value instanceof Array) {
                a += "{" + this[b].key + "=" + this[b].value.toTRACKERJSONString() + "},"
            } else {
                a += this[b].toJSONString() + ","
            }
        }
    }
    if (a.indexOf(",") > 0) {
        a = a.substring(0, a.length - 1)
    }
    return a + "]"
};
function Parameter(a, b) {
    this.key = a;
    if (this.key == "internalKeyword") {
        this.value = encodeURIComponent(b)
    } else {
        this.value = b
    }
    this.toJSONString = function() {
        return"{" + this.key + "=" + this.value + "}"
    }
}
function addPublicParameter(a, f) {
    var h = location.href;
    a += "&w_url=" + encodeURIComponent(h);
    a += "&s_iev=" + navigator.userAgent || "";
    var e = "iPod|iTouch|iPhone";
    var i = /iPad/i;
    var b = "Android|BlackBerry|SymbianOS|SymbOS|Windows Phone OS|WAP|Kindle|pad|pod";
    var k = window.navigator.userAgent;
    var g = new RegExp(e, "i");
    var j = new RegExp(b, "i");
    if (g.test(k)) {
        a += "&s_plt=IOSSystem";
        a += "&s_ct=H5"
    } else {
        if (i.test(k)) {
            a += "&s_plt=iPad-PC";
            a += "&s_ct=" + navigator.platform || ""
        } else {
            if (j.test(k)) {
                a += "&s_plt=AndroidSystem";
                a += "&s_ct=H5"
            } else {
                a += "&s_plt=" + navigator.platform || ""
            }
        }
    }
    a += "&s_rst=" + window.screen.width + "*" + window.screen.height;
    var d = c("glTrueReffer");
    if (d && d.match(/http(s)?:\/\/.+/)) {
        a += "&w_rfu=" + encodeURIComponent(d)
    } else {
        a += "&w_rfu=" + encodeURIComponent(document.referrer || "")
    }
    return a;
    function c(m) {
        var l = location.href;
        if (l && l.indexOf("#") > 0) {
            l = l.substring(0, l.indexOf("#"))
        }
        var n = new RegExp("(^|\\?|&)" + m + "=([^&]*)(\\s|&|$)", "i");
        if (n.test(l)) {
            return unescape(RegExp.$2.replace(/\+/g, " "))
        } else {
            return""
        }
    }}
var trackerSupportKey = new Object();
trackerSupportKey.infoPageId = "w_pif";
trackerSupportKey.tp = "w_tp";
trackerSupportKey.tc = "w_tc";
trackerSupportKey.guid = "guid";
trackerSupportKey.attachedInfo = "b_ai";
trackerSupportKey.tracker_u = "b_tu";
trackerSupportKey.tracker_type = "b_trt";
trackerSupportKey.ip = "u_ip";
trackerSupportKey.infoTrackerSrc = "w_ts";
trackerSupportKey.infoTrackerSrc = "w_ts";
trackerSupportKey.cookie = "w_ck";
trackerSupportKey.orderCode = "b_oc";
trackerSupportKey.endUserId = "u_uid";
trackerSupportKey.firstLink = "w_flk";
trackerSupportKey.productId = "b_pid";
trackerSupportKey.curMerchantId = "u_cm";
trackerSupportKey.provinceId = "u_pid";
trackerSupportKey.fee = "b_fee";
trackerSupportKey.edmActivity = "b_ea";
trackerSupportKey.edmEmail = "b_ee";
trackerSupportKey.edmJobId = "b_ejb";
trackerSupportKey.internalKeyword = "b_ik";
trackerSupportKey.resultSum = "b_rs";
trackerSupportKey.currentPage = "b_scp";
trackerSupportKey.linkPosition = "b_lp";
trackerSupportKey.buttonPosition = "b_bp";
trackerSupportKey.adgroupKeywordID = "b_ak";
trackerSupportKey.extField3 = "b_set";
trackerSupportKey.extField6 = "b_adt";
trackerSupportKey.extField7 = "b_pmi";
trackerSupportKey.extField8 = "b_tid";
trackerSupportKey.extField9 = "b_cid";
trackerSupportKey.extField10 = "s_and";
trackerSupportKey.pageTypeId = "w_pt";
trackerSupportKey.unid = "w_un";
trackerSupportKey.pageValue = "w_pv";
trackerSupportKey.refPageTypeId = "w_rpt";
trackerSupportKey.refUnid = "w_run";
trackerSupportKey.refPageValue = "w_rpv";
trackerSupportKey.eventId = "b_ei";
trackerSupportKey.labelId = "b_li";
trackerSupportKey.filterInfo = "b_fi";
trackerSupportKey.activityId = "b_aci";
trackerSupportKey.listCategoryId = "b_lci";
trackerSupportKey.pmStatusTypeId = "b_pms";
trackerSupportKey.container = "s_ct";
trackerSupportKey.containerVersion = "s_ctv";
trackerSupportKey.platVersion = "s_pv";
trackerSupportKey.phoneType = "s_pt";
trackerSupportKey.provider = "s_pro";
trackerSupportKey.netType = "s_nt";
trackerSupportKey.tpa = "w_tpa";
trackerSupportKey.tpc = "w_tpc";
trackerSupportKey.tpi = "w_tpi";
trackerSupportKey.tcs = "w_tcs";
trackerSupportKey.tcsa = "w_tca";
trackerSupportKey.tcdt = "w_tct";
trackerSupportKey.tcd = "w_tcd";
trackerSupportKey.tci = "w_tci";
trackerSupportKey.tce = "w_tce";
trackerSupportKey.positionTypeId = "b_pyi";
trackerSupportKey.scrollTop = "w_st";
trackerSupportKey.abtestValue = "b_abv";
trackerSupportKey.newUserFlag = "b_nu";
trackerSupportKey.clientTime = "b_clt";
trackerSupportKey.eventXRate = "b_exr";
trackerSupportKey.eventYRate = "b_eyr";
function TrackerContainer(c) {
    var b = (typeof URLPrefix != "undefined" && URLPrefix.tracker) ? URLPrefix.tracker : "tracker.yhd.com";
    this.url = ("https:" == document.location.protocol ? "https://" : "http://") + b + "/tracker/newInfo.do?1=1";
    this.url = addPublicParameter(this.url, c);
    this.parameterArray = [];
    this.stockArray = [];
    this.commonAttached = [];
    this.addParameter = function(d) {
        this.parameterArray.push(d)
    };
    this.addStock = function(e, d) {
        this.stockArray.push(new Parameter(e, d))
    };
    this.addCommonAttached = function(d, e) {
        this.commonAttached.push(new Parameter(d, e))
    };
    this.buildAttached = function() {
        if (this.stockArray.length > 0) {
            this.commonAttached.push(new Parameter("1", this.stockArray))
        }
        if (this.commonAttached.length > 0) {
            this.addParameter(new Parameter("attachedInfo", this.commonAttached.toTRACKERJSONString("attachedInfo")))
        }
    };
    var a = trackerGetCookie("newUserFlag");
    if (a) {
        this.addParameter(new Parameter("newUserFlag", a))
    }
    this.toUrl = function() {
        this.buildAttached();
        var e = "&bd={";
        for (var g = 0; g < this.parameterArray.length; g++) {
            var f = trackerSupportKey[this.parameterArray[g].key];
            var d = this.parameterArray[g].value;
            if (f) {
                e += f + "=" + d;
                if (g < this.parameterArray.length - 1) {
                    e += "|"
                }
            }
        }
        e += "}";
        return this.url + e
    }
}
function addTrackPositionToCookie(a, b) {
    document.cookie = "linkPosition=" + encodeURIComponent(b) + ";path=/;domain=." + no3wUrl + ";"
}
function addPageMsgToCookie(a) {
    if (typeof (a) == "object" && a) {
        if (typeof (a.pmInfoId) != "undefined") {
            document.cookie = "pmInfoId=" + a.pmInfoId + ";path=/;domain=." + no3wUrl + ";"
        }
        if (typeof (a.productId) != "undefined") {
            document.cookie = "productId=" + a.productId + ";path=/;domain=." + no3wUrl + ";"
        }
    }
}
function trackerGetCookie(d) {
    var a = document.cookie;
    var b = a.split("; ");
    for (var e = 0; e < b.length; e++) {
        var c = b[e].split("=");
        if (c[0] == d) {
            return c[1]
        }
    }
    return null
}
function trackerClearCookieWithName(b, c) {
    var a = new Date();
    a.setTime(a.getTime() - 10000);
    document.cookie = b + "=" + c + ";path=/;domain=." + no3wUrl + ";expires=" + a.toGMTString()
}
var e1 = /exfield1=[^;]*;*/i;
var e2 = new RegExp("exfield2=[^;]*;*", "i");
var e3 = new RegExp("exfield3=[^;]*;*", "i");
var e4 = new RegExp("exfield4=[^;]*;*", "i");
var e5 = new RegExp("exfield5=[^;]*;*", "i");
function batchRecordTrackerInfo(c) {
    if (c && c.length > 0) {
        var b = ("https:" == document.location.protocol ? "https://" : "http://") + URLPrefix.tracker + "/related/newInfo.do?1=1";
        b = addPublicParameter(b);
        var f = [];
        for (var d = 0, a = c.length; d < a; d++) {
            var e = recordTrackerGroup(c[d]);
            f[d] = '{"bd":"{' + e + '}"}'
        }
        b += "&batchInfo=[" + f.join(",") + "]";
        sendImgUrl(b)
    }
}
function recordTrackInfoWithType(e, g, d, a, c) {
    var b = ("https:" == document.location.protocol ? "https://" : "http://") + URLPrefix.tracker + "/related/newInfo.do?1=1";
    b = addPublicParameter(b);
    var f = {type: e, info: g, others: d, extend: a, paramObj: c};
    sendImgUrl(b + "&bd={" + recordTrackerGroup(f) + "}")
}
function recordTrackerGroup(h) {
    if (!h) {
        return
    }
    var f = h.type;
    var e = h.info;
    var c = h.others;
    var m = h.extend;
    var q = h.paramObj;
    var g = {};
    if (q) {
        for (var b in q) {
            var k = trackerSupportKey[b];
            if (k) {
                g[k] = q[b]
            } else {
                g[b] = q[b]
            }
        }
    }
    if (trackerGetCookie("yihaodian_uid")) {
        g[trackerSupportKey.endUserId] = trackerGetCookie("yihaodian_uid")
    }
    if (f && e) {
        g.b_it = f;
        g.b_ri = encodeURIComponent(e) || "";
        g.b_ai = encodeURIComponent(c) || "";
        if (m) {
            var d = e1.exec(m);
            if (d) {
                g.b_e1 = encodeURIComponent(d[0].replace(/exfield1=/i, "").replace(";", ""))
            }
            var a = e2.exec(m);
            if (a) {
                g.b_e2 = encodeURIComponent(a[0].replace(/exfield2=/i, "").replace(";", ""))
            }
            var p = e3.exec(m);
            if (p) {
                g.b_e3 = encodeURIComponent(p[0].replace(/exfield3=/i, "").replace(";", ""))
            }
            var o = e4.exec(m);
            if (o) {
                g.b_e4 = encodeURIComponent(o[0].replace(/exfield4=/i, "").replace(";", ""))
            }
            var n = e5.exec(m);
            if (n) {
                g.b_e5 = encodeURIComponent(n[0].replace(/exfield5=/i, "").replace(";", ""))
            }
        }
        var l = "";
        for (var j in g) {
            if (l != "") {
                l += "|"
            }
            l += j + "=" + g[j]
        }
        return l
    }
}
function gotracker(e, j, n, f, i) {
    var m = new TrackerContainer("1");
    if (trackerGetCookie("yihaodian_uid")) {
        m.addParameter(new Parameter("endUserId", trackerGetCookie("yihaodian_uid")))
    }
    if (trackerGetCookie("provinceId")) {
        m.addParameter(new Parameter("provinceId", trackerGetCookie("provinceId")))
    }
    if (j) {
        m.addParameter(new Parameter("buttonPosition", j))
    } else {
        m.addParameter(new Parameter("buttonPosition", "defaultButton"))
    }
    if (n) {
        m.addParameter(new Parameter("productId", n))
    }
    if (typeof (e) == "number" && (e > 2 || e < 0)) {
        m.addParameter(new Parameter("extField7", e))
    } else {
        if (typeof (e) == "string") {
            var l = Number(e);
            if (l > 2 || l < 0) {
                m.addParameter(new Parameter("extField7", l))
            }
        }
    }
    if (typeof (f) == "object" && f) {
        for (var h in f) {
            m.addParameter(new Parameter(h, f[h]))
        }
        if (!f.positionTypeId) {
            m.addParameter(new Parameter("positionTypeId", "2"))
        }
        var b = window.loli || {};
        if (b && b.getMousePos) {
            var k = b.getMousePos(i);
            if (k != null) {
                if (!f.eventXRate) {
                    m.addParameter(new Parameter("eventXRate", k.xrate))
                }
                if (!f.eventYRate) {
                    m.addParameter(new Parameter("eventYRate", k.yrate))
                }
            }
        }
    } else {
        var b = window.loli || {};
        if (b && b.page) {
            var g = loli.page.getCurrPageInfo();
            if (g) {
                var d = g.pageType;
                var a = g.pageValue;
                m.addParameter(new Parameter("pageTypeId", d));
                m.addParameter(new Parameter("pageValue", a));
                m.addParameter(new Parameter("refPageTypeId", d));
                m.addParameter(new Parameter("refPageValue", a))
            }
        }
        if (b && b.getMousePos) {
            var k = b.getMousePos(i);
            if (k != null) {
                m.addParameter(new Parameter("eventXRate", k.xrate));
                m.addParameter(new Parameter("eventYRate", k.yrate))
            }
        }
    }
    var c = trackerGetCookie("edmEmail");
    if (c) {
        m.addParameter(new Parameter("edmEmail", c))
    }
    if (trackerGetCookie("yihaodian_uid")) {
        m.addParameter(new Parameter("endUserId", trackerGetCookie("yihaodian_uid")))
    }
    m.addParameter(new Parameter("clientTime", new Date().getTime()));
    sendImgUrl(m.toUrl())
}
function bindLinkClickTracker(a, c) {
    var b = jQuery("#" + a + " a");
    b.click(function() {
        var d = jQuery(this).text();
        d = c + "_" + encodeURIComponent(jQuery.trim(d));
        addTrackPositionToCookie("1", d)
    })
}
(function() {
    var a = trackerGetCookie("guid");
    if (!a) {
        document.cookie = "newUserFlag=" + 1 + ";domain=." + no3wUrl + ";path=/"
    }
})();
function addParamsToTracker(a) {
    if (trackerGetCookie("guid")) {
        a.addParameter(new Parameter("guid", trackerGetCookie("guid")))
    }
    if (trackerGetCookie("unionKey")) {
        a.addParameter(new Parameter("tracker_u", trackerGetCookie("unionKey")))
    }
    if (trackerGetCookie("unionType")) {
        a.addParameter(new Parameter("tracker_type", trackerGetCookie("unionType")))
    }
    if (trackerGetCookie("adgroupKeywordID")) {
        a.addParameter(new Parameter("adgroupKeywordID", trackerGetCookie("adgroupKeywordID")))
    }
    if (trackerGetCookie("edmEmail")) {
        a.addParameter(new Parameter("edmEmail", trackerGetCookie("edmEmail")))
    }
    if (trackerGetCookie("yihaodian_uid")) {
        a.addParameter(new Parameter("endUserId", trackerGetCookie("yihaodian_uid")))
    }
    if (trackerGetCookie("abtest")) {
        a.addParameter(new Parameter("extField6", trackerGetCookie("abtest")))
    }
    if (trackerGetCookie("provinceId")) {
        a.addParameter(new Parameter("provinceId", trackerGetCookie("provinceId")))
    }
    if (trackerGetCookie("extField8")) {
        a.addParameter(new Parameter("extField8", trackerGetCookie("extField8")))
    }
    if (trackerGetCookie("extField9")) {
        a.addParameter(new Parameter("extField9", trackerGetCookie("extField9")))
    }
    if (trackerGetCookie("extField10")) {
        a.addParameter(new Parameter("extField10", trackerGetCookie("extField10")))
    }
    var d = "";
    if (trackerGetCookie("msessionid")) {
        d = "msessionid:" + trackerGetCookie("msessionid")
    }
    if (trackerGetCookie("uname")) {
        d += ",uname:" + trackerGetCookie("uname")
    }
    if (trackerGetCookie("unionKey")) {
        d += ",unionKey:" + trackerGetCookie("unionKey")
    }
    if (trackerGetCookie("unionType")) {
        d += ",unionType:" + trackerGetCookie("unionType")
    }
    if (trackerGetCookie("tracker")) {
        d += ",tracker:" + trackerGetCookie("tracker")
    }
    if (trackerGetCookie("LTINFO")) {
        d += ",LTINFO:" + trackerGetCookie("LTINFO")
    }
    if (d) {
        a.addParameter(new Parameter("cookie", d))
    }
    if (getQueryStringRegExp("tracker_src")) {
        a.addParameter(new Parameter("infoTrackerSrc", getQueryStringRegExp("tracker_src")))
    }
    if (getQueryStringRegExp("fee")) {
        a.addParameter(new Parameter("fee", getQueryStringRegExp("fee")))
    }
    a.addParameter(new Parameter("clientTime", new Date().getTime()));
    var c = b();
    if (c) {
        c = encodeURIComponent(c);
        a.addParameter(new Parameter("infoPageId", c))
    }
    function b() {
        var e = null;
        try {
            if (parent !== window) {
                try {
                    e = parent.location.href
                } catch (f) {
                    e = document.referrer
                }
            }
        } catch (f) {
        }
        return e
    }}
var trackerContainer = new TrackerContainer();
addParamsToTracker(trackerContainer);
function sendPvTracker(d) {
    if (!d) {
        var d = new TrackerContainer();
        addParamsToTracker(d)
    }
    var a = trackerGetCookie("linkPosition");
    if (a) {
        d.addParameter(new Parameter("linkPosition", a));
        trackerClearCookieWithName("linkPosition", a)
    }
    var c = window.loli || {};
    if (c && c.spm) {
        var e = c.spm.getNewPageData();
        if (e && typeof (e) == "object") {
            for (var b in e) {
                d.addParameter(new Parameter(b, e[b]))
            }
            if (!e.positionTypeId) {
                d.addParameter(new Parameter("positionTypeId", "1"))
            }
        } else {
            d.addParameter(new Parameter("positionTypeId", "1"))
        }
    }
    var g = trackerGetCookie("pmInfoId");
    if (g) {
        d.addParameter(new Parameter("extField7", g));
        trackerClearCookieWithName("pmInfoId", g)
    }
    var f = trackerGetCookie("productId");
    if (f) {
        d.addParameter(new Parameter("productId", f));
        trackerClearCookieWithName("productId", f)
    }
    sendImgUrl(d.toUrl())
}
function sendImgUrl(a) {
    var b = "timg" + new Date().getTime();
    window[b] = new Image(1, 1);
    window[b].src = a
}
$(document).ready(function() {
    if (trackerContainer && trackerContainer.timeout) {
        var b = trackerContainer.timeout;
        setTimeout(function() {
            sendPvTracker(trackerContainer)
        }, b)
    } else {
        sendPvTracker(trackerContainer)
    }
});
var YHDREF = YHDREF || {};
(function($) {
    var refParseFunc = null;
    YHDREF.defineGlobalRefParse = function(getRefAttrFunc) {
        refParseFunc = getRefAttrFunc
    };
    $(function() {
        var head = "gl.", prevTk = "[", afterTk = "]";
        var util = loli.util.url;
        var getPrevPageFlag = function() {
            var _location = location;
            var href = _location.href;
            var params = util.getParams(href);
            if (!params || !params.ref) {
                return 0
            }
            var ref = params.ref;
            if (checkRef(ref)) {
                return ref.substring(ref.lastIndexOf(".") + 1)
            }
            return 0
        };
        var checkRef = function(ref) {
            if (ref.indexOf(head) != 0 || ref.indexOf(prevTk) <= 0 || ref.indexOf(afterTk) <= 0) {
                return false
            }
            var reg = /gl\.\d\.\d\.\w+\.\[[\S]+\]\.[\S]+\.[\S]+$/;
            var result = reg.exec(ref);
            return result ? true : false
        };
        var prevPageFlag = getPrevPageFlag();
        var currentPageFlag = loli.global.uid;
        var checkDataRef = function(dataRef) {
            return(typeof (dataRef) != "undefined" && (dataRef instanceof Array) && dataRef.length >= 1)
        };
        function isLinkRef(link) {
            if (typeof (link) == "undefined" || !link || link == "#" || link.indexOf("#") == 0 || link == "###" || link.toLowerCase().indexOf("javascript") >= 0) {
                return false
            }
            return true
        }
        var eventType = "mousedown";
        if (loli.isMobile()) {
            eventType = "click"
        }
        $("body").delegate("a, area", eventType, function(e) {
            var _this = $(this);
            var isTrkCustom = jQuery.trim(_this.attr("isTrkCustom"));
            if (typeof (isTrkCustom) != "undefined" && isTrkCustom && isTrkCustom == "1") {
                return
            }
            var dataRef = _this.data("data-tracker2cookie");
            if (!dataRef) {
                var data_ref = _this.attr("data-ref");
                if (data_ref && data_ref.indexOf("[") == 0 && data_ref.indexOf("]") == data_ref.length - 1) {
                    eval("dataRef = " + data_ref)
                } else {
                    if (data_ref) {
                        data_ref = "['" + data_ref + "']";
                        eval("dataRef = " + data_ref)
                    }
                }
            }
            if (!dataRef && refParseFunc) {
                dataRef = refParseFunc(_this);
                if (checkDataRef(dataRef)) {
                    _this.data("data-tracker2cookie", dataRef)
                }
            }
            var link = jQuery.trim(_this.attr("href"));
            var spmData = loli.spm.getData(_this);
            var posObj = null;
            if (loli.getMousePos) {
                posObj = loli.getMousePos(e);
                if (posObj != null) {
                    spmData = spmData || {};
                    spmData.eventXRate = posObj.xrate;
                    spmData.eventYRate = posObj.yrate
                }
            }
            if (isLinkRef(link)) {
                if (checkDataRef(dataRef)) {
                    addTrackPositionToCookie.apply(window, [1].concat(dataRef))
                } else {
                    if (jQuery.trim(dataRef) != "") {
                        addTrackPositionToCookie(1, dataRef)
                    }
                }
                var _rewrite = _this.data("data-globalRewrite");
                if (_rewrite && _rewrite == 1) {
                    if (spmData && spmData.tp && spmData.pageTypeId) {
                        var rewriteLink = util.addPosition(posObj, link);
                        if (rewriteLink != link) {
                            _this.attr("href", rewriteLink)
                        }
                    }
                    return
                }
                if (spmData) {
                    var tc = spmData.tc;
                    var tp = spmData.tp;
                    var tce = spmData.tce;
                    var abtest = spmData.abtestValue;
                    var params = {tc: tc, tp: tp, tce: tce, abtest: abtest};
                    link = util.appendParams(link, params);
                    if (spmData.tp && spmData.pageTypeId) {
                        link = util.addPosition(posObj, link)
                    }
                }
                _this.attr("href", link);
                _this.data("data-globalRewrite", 1);
                var trackerCode = _this.attr("data-event");
                if (trackerCode && trackerCode == "add_cart") {
                    var pmid = _this.attr("data-pmid") || 2;
                    var proid = _this.attr("data-proid");
                    spmData.positionTypeId = "4";
                    gotracker(pmid, trackerCode, proid, spmData)
                } else {
                    if (trackerCode) {
                        gotracker(2, trackerCode, null, spmData)
                    }
                }
            } else {
                var isTrkCustom = jQuery.trim(_this.attr("isTrkCustom"));
                if (typeof (isTrkCustom) != "undefined" && isTrkCustom && isTrkCustom == "1") {
                    return
                } else {
                    if (checkDataRef(dataRef)) {
                        var pmId = dataRef[2] ? dataRef[2] : 2;
                        var tk = dataRef[0];
                        var productId = dataRef[1] ? dataRef[1] : null;
                        gotracker(pmId, tk, productId, spmData)
                    } else {
                        var trackerCode = _this.attr("data-event");
                        if (trackerCode && trackerCode == "add_cart") {
                            var pmid = _this.attr("data-pmid") || 2;
                            var proid = _this.attr("data-proid");
                            spmData.positionTypeId = "4";
                            gotracker(pmid, trackerCode, proid, spmData)
                        } else {
                            if (trackerCode) {
                                gotracker(2, trackerCode, null, spmData)
                            } else {
                                if (spmData) {
                                    gotracker(2, "buttonPosition", null, spmData)
                                }
                            }
                        }
                    }
                }
            }
        })
    })
})(jQuery);
(function() {
    $(function() {
        var a = "click";
        $("body").delegate("button,input[type=button],[data-trackerSend=1]", a, function(b) {
            var d = $(this);
            var g = loli.spm.getData(d);
            var c = d.attr("data-event");
            if (loli.getMousePos) {
                var h = loli.getMousePos(b);
                if (h != null) {
                    g = g || {};
                    g.eventXRate = h.xrate;
                    g.eventYRate = h.yrate
                }
            }
            if (c && c == "add_cart") {
                var f = d.attr("data-pmid") || 2;
                var i = d.attr("data-proid");
                g.positionTypeId = "4";
                gotracker(f, c, i, g)
            } else {
                if (c) {
                    gotracker(2, c, null, g)
                } else {
                    if (g) {
                        gotracker(2, "buttonPosition", null, g)
                    }
                }
            }
        })
    })
})();