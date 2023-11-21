const http = require('http');

const server = http.createServer((req, res) => {
    // 设置响应头，指定返回的内容类型为 JSON，并且字符编码为 UTF-8
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    console.log(`${req.url}, ${req.headers.host}`);
    if (req.url !== '/cars') {
        res.end(JSON.stringify({"msg": "you got an error！！！"}));
        return;
    }
    // 构造要返回的 JSON 数据
    const jsonData = [
        {
            "id": 1,
            "title": "沃尔沃XC60",
            "completed": true
        },
        {
            "id": 2,
            "title": "护卫舰07",
            "completed": true
        },
        {
            "id": 3,
            "title": "海豹",
            "completed": true
        }
    ];

    // 将 JSON 数据转换为字符串并返回
    res.end(JSON.stringify(jsonData));
});

const PORT = 5002;

// 启动服务器，监听指定端口
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/cars`);

});
