// Normal function and this
let obj = {
    name : "Neo",
    SayHii: function(){
        console.log("Hello " + this.name);
    }
};
obj.SayHii()