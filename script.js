const text = "Preparing something unforgettable just for you...";

let i = 0;

function type(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(type,45);

    }

}

function startLoading(){

    // Reset loading text
    document.getElementById("typing").innerHTML = "";

    // Restart typing animation
    i = 0;
    type();

    // Reset progress
    let progress = 0;

    let bar = document.getElementById("progress");
    let percent = document.getElementById("percent");

    bar.style.width = "0%";
    percent.innerHTML = "0%";

    // Start loading
    let load = setInterval(()=>{

        progress++;

        bar.style.width = progress + "%";
        percent.innerHTML = progress + "%";

        if(progress >= 100){

            clearInterval(load);

            setTimeout(()=>{

                // Hide loading screen
                document.querySelector(".glass").style.display = "none";

                // Show welcome screen
                const welcome = document.getElementById("welcomeScreen");

                welcome.classList.remove("hidden");

                setTimeout(()=>{

                    welcome.classList.add("show");

                },100);

            },800);

        }

    },45);

}
for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.animationDuration=(3+Math.random()*6)+"s";

star.style.animationDelay=Math.random()*5+"s";

star.style.opacity=Math.random();

document.getElementById("particles").appendChild(star);

}

document.addEventListener("click", function(e){

if(e.target.id==="startBtn"){

document.getElementById("welcomeScreen").style.display="none";

document.getElementById("warningScreen").style.display="flex";

setTimeout(function(){

document.getElementById("warningScreen").style.display="none";

document.getElementById("quizScreen").style.display="flex";

loadQuestion();

},3000);

}

});

// ---------------- QUIZ ----------------

const questions = [

{
question:"Do you remember where we first met?",
options:["Rajasthan","Mumbai","Pune","Somewhere Else"],
correct:0
},

{
question:"What's my favourite IPL team? 🏏",

options:[
"CSK 💛",
"MI 💙",
"RCB ❤️",
"KKR 💜"
],

correct:2
},

{
question:"What's my favourite song?",
options:[
"Arz Kiya Hai - Anuv Jain",
"Khat",
"Samjhawan"
],
correct:1
},

{
question:"Who is more intelligent? 🧠",

options:["You 😎"],

correct:0,

funny:true
}

];

let currentQuestion = 0;

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const questionNumber = document.getElementById("questionNumber");

function loadQuestion(){

    let q = questions[currentQuestion];

    questionNumber.innerHTML =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionText.innerHTML = q.question;

    optionsDiv.innerHTML = "";

    q.options.forEach((option,index)=>{

        let btn = document.createElement("button");

        btn.className = "option";

        btn.innerHTML = option;

        // Funny moving button
        if(q.funny && index==1){

            btn.addEventListener("mouseenter",moveButton);

            btn.addEventListener("touchstart",moveButton);

        }

        btn.onclick=function(){

            checkAnswer(index);

     };

        optionsDiv.appendChild(btn);

    });

}

function checkAnswer(answer){

    let q = questions[currentQuestion];

    if(answer == q.correct){

        currentQuestion++;

        if(currentQuestion < questions.length){

            loadQuestion();

        }else{

            document.getElementById("quizScreen").style.display="none";

            document.getElementById("finalScreen").style.display="flex";

        }

    }else{

        alert("❌ Wrong Answer! Try Again 😄");

    }

}

function moveButton(e){

    let btn=e.target;

    btn.style.position="fixed";

    btn.style.left=Math.random()*60+20+"vw";

    btn.style.top=Math.random()*60+15+"vh";

}

document.addEventListener("click",function(e){

if(e.target.id==="readyBtn"){

document.getElementById("finalScreen").style.display="none";

document.getElementById("birthdayScreen").style.display="flex";

// Create Balloons

const screen=document.getElementById("birthdayScreen");

for(let i=0;i<40;i++){

let balloon=document.createElement("div");

balloon.className="balloon";

const emojis=["🎈","🎉","🎊"];

balloon.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

balloon.style.left=Math.random()*100+"vw";

balloon.style.fontSize=(30+Math.random()*35)+"px";

balloon.style.animationDuration=(5+Math.random()*5)+"s";

balloon.style.animationDelay=Math.random()*2+"s";

screen.appendChild(balloon);

}

}

});

const PASSWORD="1209"; // Change this

document.getElementById("unlockBtn").onclick=function(){

const entered=document.getElementById("passInput").value;

if(entered===PASSWORD){

document.getElementById("lockScreen").style.display="none";

document.querySelector(".glass").style.display="flex";

startLoading();

}
else{

document.getElementById("wrongPass").innerHTML="❌ Wrong Password";

document.getElementById("passInput").value="";

}

};
