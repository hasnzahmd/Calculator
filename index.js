let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');
let string = "";

Array.from(buttons).forEach( (button) => {
     
    button.addEventListener('click', (event) =>{

        switch(event.target.textContent){

            case '=':
                    string = eval(string);
                    input.value = string;
                break;
            
            case 'C':
                    string = "";
                    input.value = string;
                break;
            
            case 'backspace':
                    if(string.length == 1){
                        string = "";
                        input.value = string;
                    }
                    else{
                        string = string.substring(0, string.length-1);
                        input.value = string;
                    }
                break;

            case '+/-':
                    string = eval(string);
                    string = string * -1;
                    input.value = string;
                break;

            case '1/x':
                    string = eval(string);
                    string = 1/string;
                    input.value = string;
                break;

            case 'x2':
                    string = eval(string);
                    string = string*string;
                    input.value = string;
                break;

            case '√x':
                    string = eval(string);
                    string = Math.sqrt(string);
                    input.value = string;
                break;
            
            default:
                string += event.target.textContent;
                var count = 0;
                    for(let char of string){
                        if( char == '/' || char == '*' || char == '+' || char == '-' || char == '%')
                            count++;     
                    }
                    if((count == 2 && string.charAt(0)!=='-') || count==3){
                        str = string.slice(-1);
                        string = eval(string.slice(0,-1));
                        string += str;
                    }
                input.value = string;   
        }    
    })
})

var btns = document.querySelectorAll(".button");
btns.forEach((button) => {
    button.addEventListener("click", function() {
        var audio = new Audio("./sound.mp3");
        audio.play();
        this.classList.add("pressed");
        setTimeout( ()=>{this.classList.remove("pressed")} , 170);
    })
})
