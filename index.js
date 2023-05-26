
function greet (){

    var name = prompt("What is your name?")
    if (name.trim()){
        alert('Hello, ' + name.trim() + '!')
    }
    else {
        alert('Hello!')
    }

    var age = prompt("How old are you?")
    var birthday = confirm("Did you have a birthday this year? (OK = yes / Cancel = no)")
    if (birthday){
       alert('You were born in ' + (new Date().getFullYear() - age) + '!')
    }
    else {
        alert('You were born in ' + ((new Date().getFullYear() - age)-1) + '!')
    }
    
}