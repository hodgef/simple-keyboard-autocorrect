
import FuzzySet from 'fuzzyset.js';

class SimpleKeyboardAutocorrect {
  init = (keyboard) => {
    keyboard.registerModule(
      "autocorrect",
      (module) => {
        module.setDictionary = (wordsArray) => {
          module.wordBank = FuzzySet(wordsArray);
        }

        module.get = (string) => {
          return module.wordBank.get(string);
        }

        module.setDictionary(keyboard.options.autocorrectDict);
        
        module.fn = {};
        module.fn.handleButtonClicked = keyboard.handleButtonClicked;

        keyboard.handleButtonClicked = (button) => {
          let hotkey = keyboard.options.autocorrectHotkey || "{space}";

          let autocorrectedWord = '';
          let searchFor = '';
      
          if(button === hotkey && !keyboard.options.disableAutocorrectSetInput){
            let input = keyboard.getInput();
            let inputWords = input.split(" ");
            searchFor = inputWords[inputWords.length - 1];
      
            if(inputWords) {
              autocorrectedWord = module.wordBank.get(searchFor);
      
              if(autocorrectedWord){
                let autocorrectedWordStr = autocorrectedWord[0][1];
                inputWords[inputWords.length - 1] = autocorrectedWordStr;
                keyboard.setInput(inputWords.join(" "));
                keyboard.utilities.updateCaretPos(autocorrectedWordStr.length);
              }
            }
          }

          if(typeof keyboard.options.onAutocorrectPrediction === "function" && autocorrectedWord && searchFor){
            keyboard.options.onAutocorrectPrediction(searchFor, autocorrectedWord)
          }
      
          module.fn.handleButtonClicked(button);
        }
      }
    );
  }
}

export default SimpleKeyboardAutocorrect;