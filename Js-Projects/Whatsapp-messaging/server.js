const io = require("socket.io")(3000);

// assume user is logged in with the name DANIEL
const USERNAME = "daniel";
// retrieve persons connected to

const users = {};
io.on("connection", (socket) => {
  socket.on("new-user", (username) => {
    users[username] = socket.id;
    console.log(users);

    socket.broadcast.emit("users connected", {
      users: users,
    });
    // display active
    // socket.broadcast.emit("user-connected", username);
  });

  socket.on("send-chat-message", (data) => {
    // make message log
    console.log(data);

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
