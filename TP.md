ThinkPHP的路由：
①Pathinfo   默认的路由方式：形式如：入口文件/模块/控制器/方法/其他
②原始模式   入口文件?m=模块&c=控制器&a=方法
③rewrite模式  省略入口文件/模块/控制器/方法/其他
④兼容模式   /网址/index.php?s=/模块/控制器/方法
⑤自定义路由 开启配置：
'URL_ROUTER_ON'   => true,
'URL_ROUTE_RULES'=>array(
    'goods' => 'home/goods',
    'news/:id'               => 'News/read',
    'news/read/:id'          => '/news/:1',
),