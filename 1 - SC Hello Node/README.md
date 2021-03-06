# Hello Node.js

As usual, we are going to create the famous "Hello World" using Node.js and a server running inside our computer (*localhost*).

```jsx
const http = require("http");// imports http module
const port = 8000 //define the port we will use
```

Once we already specified de protocol (*http*), module and the port (*8000*), let`s initialize the server, set a response and write a message when the server is running.

```jsx
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end("Hello Node.js!");
}).listen(port);

console.log(`Server is running! (port ${port})`)
```

Now we can start our local server with Node and access it inside our internet browser. First starting the server:

```bash
node hellonode.js
```

The terminal output should be something like this:

```bash
Server is running! (port 8000)
```

The web browser answer should be this:

![Untitled](README/Untitled.png)

To closeyour application you should open the Node server terminal and press *Ctrl + C*.
