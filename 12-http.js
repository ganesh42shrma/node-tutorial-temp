const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
   res.end('Welcome ot our home page');
   }
   else if(req.url === '/about'){
       res.end('Here is our About page');
   } else {
   res.end(`<h1>Ooops!</h1>
   <p>We can't seem to find the page you are looking for</p>
   <a href="/">Back Home</a>`)
   }
})

server.listen(5000)