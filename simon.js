let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["blue","green","red","yellow"]
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}
function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    check(userSeq.length-1)
}
function check(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game Over. Your score was ${level}. Press any key to restart`
        reset();
    }

}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}