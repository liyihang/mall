define([],function(){var a={loadImages:function(b){if(b.length>0){lazyLoadImageObjArry=lazyLoadImageObjArry||[];for(var c=0;c<b.length;c++){lazyLoadImageObjArry.push(b[c])}initImageLoad();jQuery.YHD.imgLoad.load()}}};return a});