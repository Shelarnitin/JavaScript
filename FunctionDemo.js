// Normal function and this
let obj = {
    name : "Neo",
    SayHii: function(){
        console.log("Hello " + this.name);
    }
};
obj.SayHii()

// Arrow function and This
let obj1 = {
    namee : "Nitin",
    SayHello: () => {
        console.log("Hello " + this.namee)
    }
}
obj1.SayHello() // Hello undefined

// Arrow function inside method

let obj2 = {
    name: "Neo",
    say: function (){
        let arrow = () => console.log("Hii " + this.name)
        arrow();
    }
}
obj2.say()

// Arrow function in callback

function person(name){
    this.name = name;
    setTimeout(() => {
        console.log("Hello" + this.name)
    })
}
let pe = new person("Nitin")