var counter = {};
var string = "slimey smelly solution";
var stringArray = string.split('');
stringArray.forEach(function(character){
  if(!counter.hasOwnProperty(character)){
    counter[character] = 0;
  }
  counter[character]++;
});
console.log(counter);

