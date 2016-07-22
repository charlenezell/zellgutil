let config = {
    taskList: [{
        name: "新建",
        description: "新建一些东西",
        menu: [{
            name: "新建项目模板1",
            description: "gulp+babel+eslint+scss+handlebars"
        }, {
            name: "新建项目模板2",
            description: "webpack+babel+postcss+handlebars"
        }]
    }, {
        name: "图片处理",
        description: "查看文档api",
        menu: [{
            name: "minify",
            description: "拖入文件或文件夹，配置globs与构建配置，进行图片处理"
        }, {
            name: "dataUrl",
            description: "转换图片或文件夹为dataUrl字符串"
        }, {
            name: "图片合并",
            description: "使用handlebars模板，合并目录内的图片文件，为某种中间或者最终形式的代码片段和sprite图"
        }]

    }, {
        name: "代码处理",
        description: "代码测试与代码生成",
        menu: [{
            name: "uglify",
            description: "option=>uglify=>result"
        }, {
            name: "typescript",
            description: "ts=>trans=>js"
        }, {
            name: "scss",
            description: "scss=>Sass=>css"
        }, {
            name: "less",
            description: "less=>LESS=>css"
        }, {
            name: "esNext",
            description: "esNext=>BABEL=>jsNow"
        }, {
            name: "转码",
            description: "各种转码URIComponentSeries,qrCode,Unicode,Base64,Shaq/md5"
        }]
    }, {
        name: "服务器",
        description: "拖入或输入文件路径启动随机的临时静态服务器"
    }, {
        name: "host切换",
        description: "host切换工具"
    }, {
        name: "网络",
        description: "各种网络工具Util",
        menu: [{
            name: "捕获",
            description: "通过url列表获取url下的资源路径列表"
        }, {
            name: "下载",
            description: "按资源列表下载资源"
        }]
    }, {
        name: "vcsTools",
        description: "源码管理工具",
        menu: [{
            name: "tfs记录查看器",
            description: "按各种条件查看tfs记录并作常用处理结果展示"
        }]
    }, {
        name: "util",
        description: "可视化的命令行工具",
        menu: [{
            name: "zreplace",
            description: "批量处理替换名字工具"
        }]
    }]
};
export default config;