

 
const layout  = document.querySelector(".cronometer");
const span = document.createElement('span');
const spanContent = document.createTextNode("cronometro")
layout.appendChild(span);
span.append(spanContent);



const main  = document.querySelector("main");
const div  =  document.createElement('div');


const div3 = document.createElement('div');

const timeSpan = document.createElement('span');
const timeSpan1 = document.createElement('span');
const timeSpan2 = document.createElement('span');

const timeSpanText = document.createTextNode("segundos")
const timeSpanText1 = document.createTextNode("minutos")
const timeSpanText2 = document.createTextNode("horas")


timeSpan.appendChild(timeSpanText);
timeSpan1.appendChild(timeSpanText1);
timeSpan2.appendChild(timeSpanText2);

div3.classList.add('time-text-container');



const div2 = document.createElement('div');
const h3 = document.createElement('h3');
const h3_1 = document.createElement('h3');
const h3_2 = document.createElement('h3');




div2.classList.add('main-div');







const button = document.createElement('button')
const button1 = document.createElement('button');
const button2 = document.createElement('button');

const textButton = document.createTextNode("iniciar");
const textButton1 = document.createTextNode("Pausar");
const textButton2 = document.createTextNode("Reiniciar");


main.append(div)



div.append(div2,div3);
div2.append(h3,h3_1,h3_2);
div3.append(timeSpan,timeSpan1,timeSpan2);

div.append(button,button1,button2);

button.appendChild(textButton);
button1.appendChild(textButton1);
button2.appendChild(textButton2);





let seconds =0;
let minutes = 0;
let hours = 0;

const contador = function counter () { setInterval(()=>{
    
    seconds +=1;
    h3_2.innerHTML=seconds;
    
    if( seconds ===60 ){
        
        
        seconds=0;
        minutes +=1;
        h3_1.innerHTML=minutes;
        
    }
    if (minutes ===60 ){
        
        minutes=0;
        hours +=1;
        h3.innerHTML=hours;

        
    }


    
    
    
},1000);}


const start = button.addEventListener("click",contador)




function stoptimer (){
    clearInterval(contador);
}

const stop = button1.addEventListener("click",stoptimer);
