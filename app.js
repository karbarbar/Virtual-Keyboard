const input = document.createElement("input");
input.type = "text";
input.className = "input-text";

const parent = document.createElement("div");
parent.className = "container";
parent.appendChild(input);
document.body.appendChild(parent);

const keyboardWrapper = document.createElement("div");
keyboardWrapper.className = "keyboard-wrapper";
document.body.appendChild(keyboardWrapper);

const keyboardContainer = document.createElement("div");
keyboardContainer.className = "keyboard-container";
keyboardWrapper.appendChild(keyboardContainer);


