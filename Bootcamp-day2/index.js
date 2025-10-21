const http=require('http');
// Create a basic HTTP server using Node.js (without Express) that:
const server=http.createServer((req,res)=>{
//  Returns different responses based on the URL path:
    
    if(req.url === "/" && req.method ==='GET'){
        // / should return "Welcome to My Server"
        console.log('Time:',new Date().toLocaleTimeString(),' path :',req.url);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to My Server');
    }else if(req.url === "/about" && req.method ==='GET'){
        // - /about should return "This is the About Page"
        console.log('Time:',new Date().toLocaleTimeString(),' path :',req.url);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the About Page');
    }else if(req.url === "/contact" && req.method ==='GET'){
        // - /contact should return "Contact us at:contact@example.com"
        console.log('Time:',new Date().toLocaleTimeString(),' path :',req.url);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Contact us at:contact@example.com');
    }else {
        // - Any other path should return "404 - Page Not Found"
        console.log('Time:',new Date().toLocaleTimeString(),' path :',req.url);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});
// - Listens on port 3000
server.listen(3000,()=>{
    console.log('server listining on port ',3000);
})