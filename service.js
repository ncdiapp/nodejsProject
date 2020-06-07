var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;

// default load index.html page
app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/bundle.js", function (req, res) {
  res.sendFile(`${__dirname}/bundle.js`);
});

io.on("connection", function (socket) {
  console.log("connection on *:");
  socket.on("chat message", function (msg) {
    console.log(msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("disconnect on *:");
  });

  socket.on("ferret", (name, word, fn) => {
    if(fn==null){

      console.log('function is empty ');
    }else{
      console.log(fn);
    }
   
    console.log( fn(name + " says node is change need to update cause iis chage " + word));
  });
});

http.listen(port, function () {
  console.log("listening on *:" + port);
});
