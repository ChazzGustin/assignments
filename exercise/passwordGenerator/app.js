function passwordGen( len ) {
    var length = (len)?(len):(10);
    var string = "abcdefghijklmnopqrstuvwxyz";  
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]:;?><,./\-=';
    var password = "";
    var character = "";
    var crunch = true;
    while( password.length<length ) {
        req1 = Math.ceil(string.length * Math.random()*Math.random());
        req2 = Math.ceil(numeric.length * Math.random()*Math.random());
        req3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( req1 );
        hold = (req1%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( req2 );
        character += punctuation.charAt( req3 );
        password = character;
    }
    return password;
}

console.log(passwordGen() );