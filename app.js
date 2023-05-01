const textarea = document.createElement('textarea');
textarea.type = 'text';
textarea.className = 'textarea-text';

const parent = document.createElement('div');
parent.className = 'container';
parent.appendChild(textarea);
document.body.appendChild(parent);

const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard-wrapper';
document.body.appendChild(keyboardWrapper);

const keyboardContainer = document.createElement('div');
keyboardContainer.className = 'keyboard-container';
keyboardWrapper.appendChild(keyboardContainer);

const information = document.createElement('div');
information.className = 'information';
information.innerHTML = 'Смена языка: Ctrl + Shift';
document.body.appendChild(information);

const keysEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', ' \\ ', 'DEL',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', ' \\ ', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'];
const keysRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', ' \\ ', 'DEL',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', ' \\ ', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►'];

const keysArr = document.getElementsByClassName('key-button');
let capsLockOn = false;
// const enterButton = document.querySelector('.key-button:nth-child(44)');

// click
const keyButtons = document.querySelectorAll('.key-button');
for (let i = 0; i < keyButtons.length; i += 1) {
  keyButtons[i].addEventListener('click', () => {
    textarea.value += keyButtons[i].textContent;
  });
}

function init() {
  let output = '';
  for (let i = 0; i < keysEn.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 56) {
      output += '<div class="clearfix"></div>';
    }

    output += `<button class="key-button" >${keysEn[i]}</button>`;
  }
  document.querySelector('.keyboard-container').innerHTML = output;
}

function renameKeys() {
  const letter = document.querySelectorAll('.key-button');
  for (let i = 0; i < letter.length; i += 1) {
    const text = letter[i].textContent;
    if (keysEn.includes(text)) {
      letter[i].textContent = keysRu[i];
    } else {
      letter[i].textContent = keysEn[i];
    }
  }
}

const setUpperCaseKeys = () => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keysArr) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toUpperCase();
    }
  }
};

function setLowerCaseKeys() {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keysArr) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toLowerCase();
    }
  }
}

function shiftOn() {
  const shift = document.querySelector('.key-button:nth-child(46)');
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
      shift.style.backgroundColor = 'cadetblue';
      setUpperCaseKeys();
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
      shift.style.backgroundColor = 'lightgray';
      setLowerCaseKeys();
    }
  });
}

function shiftMouseOn() {
  const shift = document.querySelector('.key-button:nth-child(46)');
  shift.addEventListener('mousedown', () => {
    shift.style.backgroundColor = 'cadetblue';
    setUpperCaseKeys();
  });
  shift.addEventListener('mouseup', () => {
    shift.style.backgroundColor = 'lightgray';
    setLowerCaseKeys();
  });
}

function capsLkOn() {
  const capsLock = document.querySelector('.key-button:nth-child(32)');
  capsLockOn = !capsLockOn;
  if (capsLockOn) {
    setUpperCaseKeys();
    capsLock.style.backgroundColor = 'cadetblue';
  } else {
    setLowerCaseKeys();
    capsLock.style.backgroundColor = 'lightgray';
  }
}

// capsLockOn = !capsLockOn;
// const capsLock = document.querySelector('.key-button:nth-child(32)');
// document.addEventListener('keydown', (event) => {
//   if (event.key === 'CapsLock') {
//     capsLock.style.backgroundColor = 'red';
//     setUpperCaseKeys();
//   } else {
//     capsLock.style.backgroundColor = 'lightgray';
//     setLowerCaseKeys();
//   }
// });
// document.addEventListener('keyup', (event) => {
//   if (event.key === 'CapsLock') {
//     setLowerCaseKeys();
//   } else {
//     setUpperCaseKeys();
//   }
// });

function backspaceOn() {
  const backspace = document.querySelector('.key-button:nth-child(14)');
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      backspace.style.backgroundColor = 'cadetblue';
      textarea.innerHTML = textarea.innerHTML.slice(0, -1);
      setUpperCaseKeys();
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Backspace') {
      backspace.style.backgroundColor = 'lightgray';
    }
  });
}

function enterOn() {
  const enter = document.querySelector('.key-button:nth-child(44)');
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      enter.style.backgroundColor = 'cadetblue';
      textarea.innerHTML += '\n';
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      enter.style.backgroundColor = 'lightgray';
    }
  });
}

function tabOn() {
  const tab = document.querySelector('.key-button:nth-child(16)');
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
      tab.style.backgroundColor = 'cadetblue';
      textarea.innerHTML += '    ';
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Tab') {
      tab.style.backgroundColor = 'lightgray';
    }
  });
}

function deleteOn() {
  const del = document.querySelector('.key-button:nth-child(30)');
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
      del.style.backgroundColor = 'cadetblue';
      textarea.innerHTML = textarea.innerHTML.slice(0, -1);
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === 'Delete') {
      del.style.backgroundColor = 'lightgray';
    }
  });
}

function speceOn() {
  const space = document.querySelector('.key-button:nth-child(64)');
  document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      space.style.backgroundColor = 'cadetblue';
      textarea.innerHTML += ' ';
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.key === ' ') {
      space.style.backgroundColor = 'lightgray';
    }
  });
}

init();

document.addEventListener('keydown', (event) => {
  if (event.key === 'CapsLock') {
    capsLkOn();
  } else if (event.key === 'Shift') {
    shiftOn();
  } else if (event.key === 'Control' && 'Shift') {
    renameKeys();
  } else if (event.key === 'Enter') {
    enterOn();
  } else if (event.key === 'Backspace') {
    backspaceOn();
  } else if (event.key === 'Tab') {
    tabOn();
  } else if (event.key === 'Delete') {
    deleteOn();
  } else if (event.key === ' ') {
    speceOn();
  } else {
    for (let i = 0; i < keyButtons.length; i += 1) {
      if (keyButtons[i].textContent === event.key) {
        textarea.value += keyButtons[i].textContent;
      }
    }
  }
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('key-button')) {
    const buttonValue = event.target.textContent;
    if (buttonValue.length === 1) {
      textarea.value += buttonValue;
    } else if (buttonValue === 'Enter') {
      textarea.value += '\n';
    } else if (buttonValue === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (buttonValue === 'Tab') {
      textarea.value += '    ';
    } else if (buttonValue === 'Delete') {
      textarea.innerHTML = textarea.innerHTML.slice(0, -1);
    } else if (buttonValue === ' ') {
      textarea.innerHTML += ' ';
    } else if (buttonValue === 'CapsLock') {
      capsLkOn();
    } else if (buttonValue === 'Shift') {
      shiftMouseOn();
    }
  }
});
