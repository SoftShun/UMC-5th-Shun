import express from 'express';

const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
    console.log("LOGGED");
    next();
}

app.use(myLogger);

app.get('/', (req, res) => {
    console.log("/");
    res.send('Hello UMC!');
});
 
app.get('/hello', (req, res) => {
    console.log("/hello");
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});