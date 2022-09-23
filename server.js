const connect = require('connect');

const app = connect();

function hello(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello from NodeJS Application');
};

app.use('/hello',hello);

app.listen(3000);

console.log('Server running at http://localhost:3000');