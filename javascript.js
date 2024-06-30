let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userscorep=document.querySelector("#user-score");
const compscorep=document.querySelector("#comp-score");

const getcompchoice =()=>{
    //rock paper scissor
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame=()=>{
    console.log("game is draw");
    msg.innerText="Game Draw"; 
    msg.style.backgroundColor="black";
};
const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorep.innerText=userscore;
        console.log("you win");
        msg.innerText='you win';
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorep.innerText=compscore;
        console.log("you loose");
        msg.innerText='you loose';
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>{
    console.log("user choice = ", userchoice);
    const compchoice=getcompchoice();
    console.log("comp choice = ", compchoice);

    if(userchoice===compchoice){
    drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper")
        {
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});