<a href="https://simple-keyboard-autocorrect-demo.glitch.me/" title="See demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/autocorrectX4.png" width="100%"></a>
<blockquote>Autocorrect module for simple-keyboard</blockquote>

[![Build Status](https://travis-ci.org/hodgef/simple-keyboard-autocorrect.svg?branch=master)](https://travis-ci.org/hodgef/simple-keyboard-autocorrect)
  
## Installation

### npm

`npm install simple-keyboard simple-keyboard-autocorrect --save`

### zip file (self-hosted)

[Click here to download the latest release (zip format).](https://github.com/hodgef/simple-keyboard-autocorrect/zipball/master)

> Want to use a CDN instead of self-host? Scroll down to the "Usage with CDN" instructions below.

## Usage with npm


````js
import Keyboard from "simple-keyboard";
import autocorrect from "simple-keyboard-autocorrect";

// CSS
import 'simple-keyboard/build/css/index.css';

let wordList = ["my", "word", "list"];

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  autocorrectDict: wordList,
  modules: [
    autocorrect
  ]
});

function onChange(input){
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button){
  console.log("Button pressed", button);
}
````

### html

````html
<input class="input" />
<div class="simple-keyboard"></div>
````

<a href="https://codesandbox.io/s/mm7667xqqp" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

## Usage with CDN

### html

````html
<html>
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/css/index.css">
</head>

<body>
  <input class="input" />
  <div class="simple-keyboard"></div>

  <script src="https://cdn.jsdelivr.net/npm/simple-keyboard@latest/build/index.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/simple-keyboard-autocorrect@latest/build/index.min.js"></script>
  <script src="src/index.js"></script>
</body>

</html>
````

### js (index.js)

````js
let Keyboard = window.SimpleKeyboard.default;
let autocorrect = window.SimpleKeyboardAutocorrect.default;

let wordList = ["my", "word", "list"];

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  autocorrectDict: wordList,
  modules: [
    autocorrect
  ]
});

function onChange(input){
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button){
  console.log("Button pressed", button);
}
````

<a href="https://simple-keyboard-autocorrect-demo.glitch.me/" title="run demo" target="_blank"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/rundemo200.png" width="150" align="center"></a>

# Options and Customization

> To fully customize your virtual keyboard, check out the main simple-keyboard repository:

<a href="https://github.com/hodgef/simple-keyboard" title="simple-keyboard repository"><img src="https://franciscohodge.com/project-pages/simple-keyboard/images/simplekeyboard-banner3x.png" align="center"></a>
