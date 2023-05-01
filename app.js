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
const keysEnTwo = {
  '`': '~',
  1: '!',
  2: '@',
  3: '#',
  4: '$',
  5: '%',
  6: '^',
  7: '&',
  8: '*',
  9: '(',
  0: ')',
  '-': '_',
  '=': '+',
};
const keysRuTwo = {
  ё: 'Ё',
  1: '!',
  2: '"',
  3: '№',
  4: ';',
  5: '%',
  6: ':',
  7: '?',
  8: '*',
  9: '(',
  0: ')',
  '-': '_',
  '=': '+',
};

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

init();

// CapsLock
const capsLock = document.querySelector('.key-button:nth-child(32)');
capsLock.addEventListener('click', () => {
  capsLockOn();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'CapsLock') {
    capsLockOn();
  } else if (event.key === 'Shift') {
    shiftOn();
  } else if (event.key === 'Control' && 'Shift') {
    renameKeys();
  } else if (event.key === 'Enter') {
    textarea.value += '\n';
  } else if (event.key === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  } else if (event.key === 'Tab') {
    textarea.value += '    ';
  } else {
    for (let i = 0; i < keyButtons.length; i += 1) {
      if (keyButtons[i].textContent === event.key) {
        keyButtons[i].classList.add('active');
        textarea.value += keyButtons[i].textContent;
      }
    }
  }
});

// click
const keyButtons = document.querySelectorAll('.key-button');
for (let i = 0; i < keyButtons.length; i += 1) {
  keyButtons[i].addEventListener('click', () => {
    textarea.value += keyButtons[i].textContent;
  });
}

function capsLockOn() {
  capsLock.classList.toggle('active');
  const letters = document.querySelectorAll('.key-button');
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i].textContent.length === 1) {
      if (capsLock.classList.contains('active')) {
        letters[i].textContent = letters[i].textContent.toUpperCase();
      } else {
        letters[i].textContent = letters[i].textContent.toLowerCase();
      }
    }
  }
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

// Shift
const shift = document.querySelector('.key-button:nth-child(46)');
const shiftActive = false;

function shiftOn() {
  shift.classList.toggle('active');
  const letters = document.querySelectorAll('.key-button');
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i].textContent.length === 1) {
      if (shift.classList.contains('active')) {
        letters[i].textContent = letters[i].textContent.toUpperCase();
      } else {
        letters[i].textContent = letters[i].textContent.toLowerCase();
      }
    }
  }
}

// Enter
const enter = document.querySelector('.key-button:nth-child(28)');
enter.addEventListener('click', () => {
  textarea.value += '\n';
});
