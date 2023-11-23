
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`${req.url}, ${req.headers.host}`);
    // 截取掉前面的 "//" 字符串
    const modifiedUrlArr = req.url.split('/');
    let time = 0.25;
    // 检查数组长度
    if (modifiedUrlArr.length >= 2) {
        time = modifiedUrlArr[1].replace('s', '') * 1000;
        // 其他操作...
    }

    console.log(`${time}秒后发送响应`);
    // 读取 Vue.js 文件
    fs.readFile('/Users/adam/Documents/Developer/MyGithub/eason_20230717_vue/js/vue.js', 'utf8', (err, data) => {
        if (err) {
            // 处理读取文件错误
            res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            res.end('Internal Server Error');
            return;
        }

        // 设置 Cache-Control 和 Expires 头部，例如设置缓存一天
        // const oneDayInSeconds = 86400; // 60 * 60 * 24
        // const expires = new Date(Date.now() + oneDayInSeconds * 1000).toUTCString();

        res.writeHead(200, {
            'Content-Type': 'text/html',
            // 'Cache-Control': 'public, max-age=' + oneDayInSeconds,
            // 'Expires': expires
        });


        // 模拟异步操作，延迟发送响应
        setTimeout(() => {
            // 返回 Vue.js 文件内容
            console.log(`${req.url}, ${req.headers.host}, 返回js`);
            res.end(data);
        }, time); // 5秒后发送响应
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${ PORT }/3s/vue.js,代表3秒后返回数据`);
});