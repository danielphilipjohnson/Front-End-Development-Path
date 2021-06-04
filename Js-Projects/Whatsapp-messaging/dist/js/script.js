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

  if (minutes.toString().length < 2) {
    let temp = "0" + minutes;
    minutes = temp;
  }
  return `${hours}:${minutes}`;
};

socket.on("connect", () => {
  socket.emit("new-user", username);
  appendUsers(username, createTimeStamp());
  // get default messages
});

socket.on("display messages", (data) => {
  data.map((message) => {
    appendMessage(`${message.message}`);
  });
});

messageInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && messageInput.value) {
    e.preventDefault();
    const message = messageInput.value;
    appendMessage(message, createTimeStamp());
    socket.emit("send-chat-message", message);
    messageInput.value = "";
  }
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
