(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VzZXJzL3NlYW5fL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vLy8gVElQOiBpbygpIHdpdGggbm8gYXJncyBkb2VzIGF1dG8tZGlzY292ZXJ5XHJcbiAgICB2YXIgc29ja2V0ID0gaW8oKTtcclxuICAgICQoXCJmb3JtXCIpLnN1Ym1pdChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHNvY2tldC5lbWl0KFwiY2hhdCBtZXNzYWdlXCIsICQoXCIjbVwiKS52YWwoKSk7XHJcbiAgICAgICQoXCIjbVwiKS52YWwoXCJcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgc29ja2V0Lm9uKFwiY2hhdCBtZXNzYWdlXCIsIGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgJChcIiNtZXNzYWdlc1wiKS5hcHBlbmQoJChcIjxsaT5cIikudGV4dChtc2cpKTtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNvY2tldC5vbihcImNvbm5lY3RcIiwgKCkgPT4ge1xyXG4gICAgICAvLyBUSVA6IHlvdSBjYW4gYXZvaWQgbGlzdGVuaW5nIG9uIGBjb25uZWN0YCBhbmQgbGlzdGVuIG9uIGV2ZW50cyBkaXJlY3RseSB0b28hXHJcbiAgICAgIHNvY2tldC5lbWl0KFwiZmVycmV0XCIsIFwidG9iaVwiLCBcIndvb3RcIiwgKGRhdGEpPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7IHVzZXIgZGVmb2UgZXZlbnRcclxuICAgICAgICByZXR1cm4gXCJ0b2JpXCIgKyBcIndvb3RcIlxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pOyJdfQ==
