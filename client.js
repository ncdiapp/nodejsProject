$(function () {
    //// TIP: io() with no args does auto-discovery
    var socket = io();
    $("form").submit(function () {
      socket.emit("chat message", $("#m").val());
      $("#m").val("");
      return false;
    });
    socket.on("chat message", function (msg) {
      $("#messages").append($("<li>").text(msg));
      window.scrollTo(0, document.body.scrollHeight);
    });

    socket.on("connect", () => {
      // TIP: you can avoid listening on `connect` and listen on events directly too!
      socket.emit("ferret", "tobi", "woot", (data)=> {
        //console.log(data); user defoe event
        return "tobi" + "woot"
      });
    });
  });