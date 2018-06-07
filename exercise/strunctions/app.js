var str = 'when the lights';  
var str2 = ' go down in the city';  
var fullStr = str.concat(str2);  
    console.log(fullStr);

var str = 'WHen THe Lights GO DowN IN The CITY';  
var lower = str.toLowerCase();  
    console.log(lower);

var str = 'when the lights go down in the city';  
var upper = str.toUpperCase();  
    console.log(upper);

var str = 'when the lights go down in the city';  
var iIndex = str.indexOf('i');  
    console.log(iIndex)

var str = "when the lights go down in the city";
var n = str.lastIndexOf("go");
    console.log(n);

var str = "came for fame, left with shame"
var res = str.match(/ame/gi);
    console.log(res);
    
var str = "when the lights go down in the city";  
 console.log(str.slice(4));

 var str = "when the lights go down in the city";
 var res = str.split(" ");
    console.log(res);

var str = "when the lights go down in the city";
var res = str.substr(9, 15);
    console.log(res);
