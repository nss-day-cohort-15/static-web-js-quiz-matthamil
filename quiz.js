let heightInput = document.querySelector('input[name="height"]');
let charInput = document.querySelector('input[name="character"]');
let growTreeButton = document.querySelector('button');

function tree(obj) {
  // obj.height = number
  // obj.char = string
  var str = '';
  var toAdd = 1;

  console.log('🎅❄️ Here\'s your tree 🎄⛄️');

  for (let i = 0; i < obj.height; i++) {
    str = ' '.repeat(obj.height - i + 1).concat(obj.char.repeat(toAdd));
    toAdd += 2;
    console.log(str);
  }
}

function growTree() {
  if (validateInput()) {
    let treeObject = {
      height: heightInput.value,
      char: charInput.value
    }

    tree(treeObject);
  }
}

function validateInput() {
  if (!heightInput.value || !charInput.value) {
    alert('Both input fields need a value!');
    return false;
  }

  return true;
}

growTreeButton.addEventListener('click', growTree);

heightInput.addEventListener('keyup', function enterKey(e) {
  if (e.keyCode == 13) {
    growTree();
  }
});

charInput.addEventListener('keyup', function enterKey(e) {
  if (e.keyCode == 13) {
    growTree();
  }
});
