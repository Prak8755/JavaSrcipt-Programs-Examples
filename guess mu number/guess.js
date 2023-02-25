
let randomNumber=Math.trunc(Math.random()*20+1);
// document.querySelector('.guess').innerHTML=randomNumber;



let score=20;
let highscore=0;

function play(){
const inputValue=Number(document.querySelector('.value').value);
console.log(typeof inputValue);
 if(!inputValue){
    document.querySelector('.para').innerText='No Number Found';
 }
 else if (inputValue===randomNumber){
    document.querySelector('.para').innerText='Congrats Correct Number';
    document.querySelector('.para').style.color='blue';
    // document.querySelector('.highscore').innerHTML=score;
    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').innerHTML=highscore;
        document.querySelector('.highscore').style.color='blue';
        document.querySelector('.highscorePara').style.color='blue';
    }

 }
 else if (inputValue!==randomNumber){
    if (score>1){
        score=score-1;
        document.querySelector('.score').innerText=score;
        document.querySelector('.para').innerText=inputValue>randomNumber?'Too large':'Too small';
    }
   
 }

}


function playAgain(){
    score=20;
    document.querySelector('.value').value='';
     randomNumber=Math.trunc(Math.random()*20+1);
    //  document.querySelector('.guess').innerHTML=randomNumber;
     document.querySelector('.para').innerText='Start Guessing ....';
     document.querySelector('.score').innerText=score;

}
