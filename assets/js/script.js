function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(value) {
    document.getElementById("result").value += value;
}
 
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

document.addEventListener('keydown', function(event) {
    var keyPressed = event.key;

    var keyActions = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '/': '/',
        '*': '*',
        '-': '-',
        '+': '+',
        '.': '.',
        'Enter': '=',
        'Backspace': 'backspace',
        'Delete': 'clear'
      };

      // Check if the pressed key exists in the keyActions object
      if (keyActions.hasOwnProperty(keyPressed)) {
        var action = keyActions[keyPressed];

        if (action === '=') {
          calculate();
        } else if (action === 'backspace') {
          deleteLastCharacter(); 
        } else if (action === 'clear') {
          clearScreen(); 
        } else {
          display(action); 
        }
      }
    });

    function deleteLastCharacter() {
      var displayBox = document.getElementById('result');
      var currentValue = displayBox.value;
      displayBox.value = currentValue.slice(0, -1);
    }

