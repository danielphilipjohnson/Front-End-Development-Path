import generateName from "./data.js";
const username = generateName();

const socket = io("http://localhost:3000");

const messageInput = document.getElementById("message-input");

const createTimeStamp = function timeStamp() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();

  if (minutes.toString().length < 2) {
    let temp = "0" + minutes;
    minutes = temp;
  }
  return `${hours}:${minutes}`;
};

socket.emit("new-user", username);
appendConnectedUser(username);

socket.on("chat-message", ({ message, timeStamp, name }) => {
  if (name === username) {
    console.log("its my message");
  }
  // split these up
  // use name to determine which color to pick
  appendMessage(`${message}`, `${timeStamp}`);
});

socket.on("users connected", ({ users }) => {
  removeConnectedUser();

  for (const key in users) {
    if (users[key] != username) {
      appendUsers(users[key], createTimeStamp());
    }
  }
});

socket.on("users typing", (username) => {
  // find user in sidebar and change
  showTyping(username);
});

socket.on("user-disconnected", ({ users, disconnectedUser }) => {
  appendMessage(`${disconnectedUser} disconnected`, createTimeStamp());

  removeConnectedUser();
  for (const key in users) {
    console.log(users[key]);
    if (users[key] != username) {
      appendUsers(users[key], createTimeStamp());
    }
  }
});

// make event
messageInput.addEventListener("input", (e) => {
  console.log("chnage");
  socket.emit("start-to-type", username);
});

messageInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && messageInput.value) {
    e.preventDefault();
    const timeStamp = createTimeStamp();
    const message = messageInput.value;
    appendMyMessage(message, createTimeStamp());
    socket.emit("send-chat-message", { message, timeStamp });
    messageInput.value = "";
  }
});

function showTyping({ username }) {
  const userContainer = document.getElementById("users");
  for (const iterator of userContainer.children) {
    const textContent = iterator.children[1];
    console.log(textContent);
    console.log(textContent.children[0].textContent);
    console.log(username);
    if (textContent.children[0].textContent === username) {
      textContent.children[1].textContent = "typing ....";
    }
    console.log(textContent.children);
    // iterator.children[1].textContent
  }
}

function removeConnectedUser() {
  const userContainer = document.getElementById("users");
  userContainer.innerHTML = "";
}

function appendConnectedUser(username) {
  const userContainer = document.getElementById("connected-user");

  const messageElement = document.createElement("div");
  messageElement.className = "text-white";

  messageElement.innerHTML = `        
 
  <div>
    <p>${username}</p>
    <p class="text-xs text-gray-300">Active</p>
  </div>

`;
  userContainer.append(messageElement);
}

function appendUsers(username, timeStamp) {
  const userContainer = document.getElementById("users");

  const messageElement = document.createElement("div");
  messageElement.className = "bg-gray-800 flex justify-between p-4";

  messageElement.innerHTML = `        
  <div>
    <img
      class="w-10 h-10 rounded-full"
      src="https://source.unsplash.com/random"
      alt=""
    />
  </div>
  <div>
    <p>${username}</p>
    <p class="text-xs text-gray-300">last message</p>
  </div>
  <div>${timeStamp}</div>
`;
  userContainer.append(messageElement);
}

function appendMessage(message, timeStamp) {
  const messageContainer = document.getElementById("message-container");

  const messageElement = document.createElement("div");
  messageElement.className = `flex submenu  justify-between  mx-6  my-4  px-2  py-4  w-3/4  rounded-md  text-white`;

  messageElement.innerHTML = `        
    <p class="mx-4 p-2  rounded-md text-white">
        ${message}
    </p>
    <span class="text-sm self-end">${timeStamp}</span>`;

  messageContainer.append(messageElement);
}
function appendMyMessage(message, timeStamp) {
  const messageContainer = document.getElementById("message-container");

  const messageElement = document.createElement("div");
  messageElement.className = `flex submenu my-menu justify-between  mx-6  my-4  px-2  py-4  w-3/4  rounded-md  text-white`;

  messageElement.innerHTML = `        
    <p class="mx-4 p-2  rounded-md text-white">
        ${message}
    </p>
    <span class="text-sm self-end">${timeStamp}</span>`;

  messageContainer.append(messageElement);
}
