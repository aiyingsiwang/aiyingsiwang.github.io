window.SNIPPETS = [

    {
        id: "h",

        title: "Python 临时 HTTP 文件服务器",

        keywords: [
            "python",
            "http",
            "server",
            "8000",
            "文件服务器",
            "网页服务器"
        ],

        code: String.raw`python -m http.server 8000`
    },


    {
        id: "dns",

        title: "Windows 刷新 DNS",

        keywords: [
            "windows",
            "dns",
            "网络",
            "flushdns"
        ],

        code: String.raw`ipconfig /flushdns`
    },


    {
        id: "ip",

        title: "Windows 查看网络配置",

        keywords: [
            "windows",
            "ip",
            "ipconfig",
            "网络",
            "网卡"
        ],

        code: String.raw`ipconfig /all`
    },


    {
        id: "ping",

        title: "测试网络连接",

        keywords: [
            "ping",
            "网络",
            "internet",
            "8.8.8.8",
            "测试"
        ],

        code: String.raw`ping 8.8.8.8`
    },


    {
        id: "p8000",

        title: "查看 8000 端口占用",

        keywords: [
            "port",
            "8000",
            "端口",
            "netstat",
            "pid",
            "进程"
        ],

        code: String.raw`netstat -ano | findstr :8000`
    }

];
