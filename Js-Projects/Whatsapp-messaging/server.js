const io = require("socket.io")(3000);

const users = {};
io.on("connection", (socket) => {
  socket.on("new-user", (username) => {
    users[socket.id] = username;
    io.sockets.emit("users connected", { users });
  });

  socket.on("send-chat-message", (data) => {
    socket.broadcast.emit("chat-message", {
      message: data.message,
      timeStamp: data.timeStamp,
      name: users[socket.id],
    });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});
