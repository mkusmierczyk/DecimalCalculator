console.log(`To jest button.
Jego szerokość to 140px.
Napis, który na nim widnieje to "Send message".`);

const button = {
    text: "Send message",
    id: "sendMsg",
    width: 100,
    padding: 20
};
const buttonContainer = document.getElementById("buttonContainer");

const btn = document.createElement("button");
btn.innerText = `${button.text}`;
btn.id = `${button.id}`;
btn.style.width = `${button.width}px`;
btn.style.padding = `${button.padding}px`;
buttonContainer.appendChild(btn);



