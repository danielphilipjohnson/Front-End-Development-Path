const socket = io("http://localhost:3000");
const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

// const username = prompt("What is your name?");
const username = "Daniel";

const createTimeStamp = function timeStamp() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  return `${hours}: ${minutes}`;
};

socket.emit("new-user", username);
appendUsers(username, createTimeStamp());

// socket.emit("retrieve message", "anon");

// client-side
socket.on("connect", () => {
  appendMessage(socket.id);
  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
  // socket.emit("con");
});

socket.on("hello", (data) => {
  appendMessage(data);
  console.log(data); // ojIckSD2jqNzOqIrAGzL
});

socket.on("display messages", (data) => {
  data.map((message) => {
    appendMessage(`${message.message}`);
  });
});

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

function appendMessage(message) {
  console.log(message);
  const messageElement = document.createElement("div");
  // need to create element and add text to it
  messageElement.innerText = message;
  messageContainer.append(messageElement);
}
