const textarea = document.createElement("textarea");
textarea.type = "text";
textarea.className = "textarea-text";

const parent = document.createElement("div");
parent.className = "container";
parent.appendChild(textarea);
document.body.appendChild(parent);

const keyboardWrapper = document.createElement("div");
keyboardWrapper.className = "keyboard-wrapper";
document.body.appendChild(keyboardWrapper);

const keyboardContainer = document.createElement("div");
keyboardContainer.className = "keyboard-container";
keyboardWrapper.appendChild(keyboardContainer);

const keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', ' \\ ', 'DEL',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', ' \\ ', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '▲', 'Shift',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'];

function init() {
    let output = '';
    for (let i = 0; i < keys.length; i++) {
        if (i === 14 || i === 29 || i === 42 || i === 56) {
            output += `<div class="clearfix"></div>`;
        }
        output += `<button class="key-button" >${keys[i]}</button>`;
    }
    document.querySelector('.keyboard-container').innerHTML = output;
}
init();
