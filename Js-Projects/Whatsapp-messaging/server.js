const io = require("socket.io")(3000);

// assume user is logged in with the name DANIEL
const USERNAME = "daniel";
// retrieve persons connected to

const users = {};

io.on("connection", (socket) => {
  socket.on("new-user", (username) => {
    users[socket.id] = username;
    socket.broadcast.emit("user-connected", username);
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});
