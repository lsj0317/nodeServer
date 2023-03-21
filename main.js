// node.js 기본제공 http 모듈 불려와서 http 변수에 담기
const express = require('express');           // express 모듈 불러오기
const nunjucks = require('nunjucks');         // nunjucks 모듈 불러오기
const { userList } = require('./model/user'); // user.js에서 userList 불러오기
const app = express();                        // express 객체 생성

app.set('view engine', 'html');               // view engine을 html로 설정
nunjucks.configure('views', {express:app});   // nunjucks 설정

app.use(express.urlencoded({extended: true})); // body-parser 설정

app.get('/', (req, res) => {                   // 루트 경로로 접속했을 때
    res.render('index.html');                  // index.html 렌더링
});

server.listen(8800);                           // 8800번 포트로 서버 실행