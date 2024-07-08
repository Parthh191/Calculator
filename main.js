let string ="";
const buttons=document.querySelectorAll(".button");
const displayInput = document.querySelector('#display');
const themelabel=document.getElementsByTagName("lable");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==='='){
            try{
                string=eval(string);
                displayInput.value=string;
            }
            catch(err){
                if(err instanceof SyntaxError){
                    displayInput.value="Syntax Error";
                }
                else if(err instanceof undefined){
                    displayInput.value="Undefined";
                }
                else{
                    displayInput.value=err;
                }
            }
        }
        else if(e.target.innerHTML==="RESET"){
            string="";
            displayInput.value=string;
        }
        else if(e.target.innerHTML==="DEL"){
            let l=string.length-1;
            string=string.toString().slice(0,l);
            displayInput.value=string;
        }
        else{
            string=string+e.target.innerHTML;
            displayInput.value=string;
        }
    });
});
const themes=document.querySelectorAll('input[name="theme"]');
document.getElementById("theme-1").checked = true;
themes.forEach((theme)=>{
    theme.addEventListener('click',(e)=>{
        if(theme.checked){
            if(e.target.id==="theme-2"){
                buttons.forEach(button => {
                    button.style.background = 'white';
                    button.style.color = 'black';
                });
                document.getElementsByTagName("body")[0].style.background = 'white';
                document.querySelector(".input").style.background='white';
                document.querySelector(".input").style.color='black';
                document.querySelector(".reset").style.background='skyblue';
                document.querySelector(".equal").style.background='rgb(255, 145, 0)';
                document.querySelector(".del").style.background='skyblue';
                document.getElementsByTagName("main")[0].style.background="gray";
                document.querySelector("header h1").style.color = 'black';
                document.querySelector("header h2").style.color = 'black';
                document.querySelector("footer h3 a").style.color='black';
                document.querySelectorAll("label").forEach(label => {
                    label.style.color = 'black';
                });
            }
            else if(e.target.id==="theme-3"){
                buttons.forEach(button => {
                    button.style.background = 'rgb(45, 7, 81)';
                    button.style.color = 'rgba(252, 241, 26, 0.984)';
                });
                document.getElementsByTagName("body")[0].style.background = 'rgb(10, 1, 18)';
                document.querySelector(".input").style.background='rgb(45, 7, 81)';
                document.querySelector(".input").style.color='rgba(252, 241, 26, 0.984)';
                document.querySelector(".reset").style.background='rgb(84, 46, 120)';
                document.querySelector(".reset").style.color='white';
                document.querySelector(".equal").style.background='skyblue';
                document.querySelector(".equal").style.color='black';
                document.querySelector(".del").style.background='rgb(84, 46, 120)';
                document.querySelector(".del").style.color='white';
                document.getElementsByTagName("main")[0].style.background="rgb(104, 58, 148)";
                document.querySelector("header h1").style.color = 'white';
                document.querySelector("header h2").style.color = 'white';
                document.querySelectorAll("label").forEach(label => {
                    label.style.color = 'white';
                });
                document.querySelector("footer h3 a").style.color='white';
            }
            else{
                buttons.forEach(button => {
                    button.style.background = 'white';
                    button.style.color = 'black';
                });
                document.getElementsByTagName("body")[0].style.background="rgba(85, 91, 166, 0.953)";
                document.querySelector(".input").style.background='rgb(34, 38, 55)';
                document.querySelector(".input").style.color='white';
                document.querySelector(".reset").style.background='rgba(28, 35, 113, 0.953)';
                document.querySelector(".equal").style.background='red';
                document.querySelector(".del").style.background='rgba(28, 35, 113, 0.953)';
                document.querySelectorAll("main")[0].style.background="rgb(49, 56, 85)";
                document.querySelector("header h1").style.color = 'black';
                document.querySelector("header h2").style.color = 'black';
                document.querySelector("footer h3 a").style.color='black';
                document.querySelectorAll("label").forEach(label => {
                    label.style.color = 'black';
                });
            }
        }
    });
});
