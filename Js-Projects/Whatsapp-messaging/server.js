const io = require("socket.io")(3000);

const users = {};
let userCount = 0;
io.on("connection", (socket) => {
  socket.on("new-user", (username) => {
    ++userCount;
    users[socket.id] = username;
    io.sockets.emit("users-connected", { users });
  });

  socket.on("send-chat-message", (data) => {
    socket.broadcast.emit("chat-message", {
      message: data.message,
      timeStamp: data.timeStamp,
      name: users[socket.id],
    });
  });

  socket.on("start-to-type", (username) => {
    socket.broadcast.emit("user-typing", {
      username,
    });
  });

  socket.on("stop-to-type", (username) => {
    socket.broadcast.emit("user-stops-typing", {
      username,
    });
  });
  socket.on("disconnect", () => {
    const disconnectedUser = users[socket.id];
    delete users[socket.id];
    --userCount;
    socket.broadcast.emit("user-disconnected", { users, disconnectedUser });
  });
});
