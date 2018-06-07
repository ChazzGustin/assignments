var mug = {
    color: "black",
    price: 25,
    isThermos: true,
    write: function() {
        console.log("My favorite mug is " + mug.color + "that cost $ " + mug.keepscoffeewarm);
    }
}

var phone = {
    price: 500,
    isIphone: true,
    model: "8 plus",
    write: function() {
        console.log("fancy phone " + "costs $ " + this.isIphone + phone.model);
    }
} 

var phil = {
    age: 30,
    gender: "male",
    friend: true,
    write: function() {
        console.log(" years old" + "gender" + this.isFriend);
    }
}

var glasses = {
    style: "lennon",
    tinted: true,
    price: 1,

}