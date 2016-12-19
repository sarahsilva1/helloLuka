module.exports = helloLuka;

function helloLuka (phrase, numberOfSpaces, leftOrRight){
  var spaces = '';
  if (leftOrRight == 'left') {
    for(var i = 0; i < numberOfSpaces; i++){
      spaces += ' '
      }
      var lukafiedPhrase = spaces + phrase
      return lukafiedPhrase
    } else if (leftOrRight == 'right') {
      for(var i = 0; i < numberOfSpaces; i++){
        spaces += ' '
        }
        var lukafiedPhrase = phrase + spaces
        return lukafiedPhrase
      } else {
    console.log('Do you want to add spaces to the left or right side?')
  }
  console.log(lukafiedPhrase);
};
