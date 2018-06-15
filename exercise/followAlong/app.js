
function sum(x, y){  
    if (typeof x !== "number" || typeof y !== "number") {
      throw "Give two numbers";
    }
    return x + y;
  }
  
  try {
      console.log("\nTesting sum with '1' and '2' (strings)......");
      console.log(sum("'1' and '2'"));
  } catch(err) {
      console.log(err);
  
  }
  try {
    console.log("\nTesting sum with 1 and 2 (numbers))......");
    console.log(sum(1, 2));
} catch(err) {
    console.log(err);
 
}
var user = {username: "sam", 
        password: "123abc"};  

        function login(username, password){  

}