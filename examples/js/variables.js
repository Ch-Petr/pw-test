//export před const můžu vyexportovat do jiného kódu

console.log("test")
let auto

function declareLet (){
    
    console.log("...")

    auto = "Mercedes"
    console.log(auto)

}

declareLet()

auto=1234
console.log(auto)

function defVar() {
    var kolo
    kolo = 123
}

console.log(kolo)