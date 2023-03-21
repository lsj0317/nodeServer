// node.js 기본제공 http 모듈 불려와서 http 변수에 담기
const http =  require('http');

// http 모듈의 createServer 메소드를 이용해 서버 생성

// req: 요청, res: 응답
const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'}); // 응답 헤더 작성
    res.end('test server...'); // 응답 종료
});

server.listen(8000); // 8000번 포트로 서버 실행