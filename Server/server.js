const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
app.use(history());
app.use(express.static(__dirname + '/static'));

app.get('/person', (req, res) => {
    console.log(req.url, req.originalUrl);
    res.send({
        name: 'John',
        age: 34
    })
});

app.listen('5050', (err) => {
    if (!err) console.log('端口号为：5050的服务器启动成功了！');
});