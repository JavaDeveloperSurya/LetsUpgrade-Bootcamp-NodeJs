LetsUpgrade.in NodeJs Day 2 Assignment Submission
Assignment 2: Basic HTTP Server

Create a basic HTTP server using Node.js (without Express) that:
- Listens on port 3000
- Returns different responses based on the URL path:
- / should return "Welcome to My Server"
- /about should return "This is the About Page"
- /contact should return "Contact us at: contact@example.com"
- Any other path should return "404 - Page Not Found"
- Set appropriate Content-Type headers
- Log each request to the console with timestamp and path


Requirements:
- Use only Node.js built-in http module
- Handle different HTTP methods (GET requests)
- Start the server and test using a browser or curl
