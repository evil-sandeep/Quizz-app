const questions=[
    {
        question: "Which of the following is not a JavaScript data type?",
        answers : [
               { text :"String", correct:"false"},
               { text :"Boolean", correct:"false"},
               { text :"Array", correct:"false"},
               { text :"Integer", correct:"true"},
        ]
    },
    {
        question: "What is the correct way to write a JavaScript comment ?",
        answers : [
               { text : " //This is a coment// ",correct:"false"},
               { text :"/ This is a comment", correct:"true"},
               { text :"/* This is a comment */", correct:"false"},
               { text :"** This is a comment **", correct:"false"},
        ]  
    },
    {
        question: "Which method is used to add an element at the end of an array in JavaScript?",
        answers : [
               { text :" push()", correct:"true"},
               { text :"pop()", correct:"false"},
               { text :"shift()", correct:"false"},
               { text :"unshift()", correct:"false"},
        ] 
    }, {
        question: "WWhat is the result of the following expression: '2' + 2 in JavaScript ?",
        answers : [
               { text :" 4", correct:"false"},
               { text :"'4'", correct:"false"},
               { text :"22", correct:"false"},
               { text :"'22'", correct:"true"},
        ] 
    }, {
        question: "How do you declare a variable in JavaScript?",
        answers : [
               { text :"int x = 5;", correct:"false"},
               { text :" variable x = 5;", correct:"false"},
               { text :"var x = 5;", correct:"true"},
               { text :"x = 5;", correct:"false"},
        ] 
    }, {
        question: "What is the output of the following code snippet? console.log(typeof null);",
        answers : [
               { text :" undefined", correct:"false"},
               { text :"null", correct:"false"},
               { text :"object", correct:"true"},
               { text :"boolean", correct:"false"},
        ] 
    }, {
        question: "Which operator is used to compare both value and type in JavaScript?",
        answers : [
               { text :"==", correct:"false"},
               { text :"===", correct:"true"},
               { text :"=", correct:"false"},
               { text :"!=", correct:"false"},
        ] 
    }, {
        question: "What does the setTimeout() function do in JavaScript?",
        answers : [
               { text :" Stops the execution of the script", correct:"false"},
               { text :"Executes a function after a specified delay", correct:"true"},
               { text :"Checks if a condition is true or false", correct:"false"},
               { text :"Changes the style of an HTML element", correct:"false"},
        ] 
    }, {
        question: "How do you access the length of a string in JavaScript?",
        answers : [
               { text :" string.length()", correct:"false"},
               { text :"string.size()", correct:"false"},
               { text :"string.length", correct:"true"},
               { text :" length.string", correct:"false"},
        ] 
    },
    {
        question: "Which keyword is used to create a function in JavaScript?",
        answers : [
               { text :" new", correct:"false"},
               { text :" function", correct:"true"},
               { text :"new", correct:"false"},
               { text :" def", correct:"false"},
        ] 
    }
];

const questionElement=document.getElementById("question");
const answerbtn=document.getElementById("answer-btn");
const nextBtn=document.getElementById("next-btn");

let currentIndex=0;
let score=0;

function startQuiz(){
    currentIndex=0;
    score=0;
    nextBtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    // Questions
    let currentQuestion=questions[currentIndex];
    let questionNo=currentIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    // Answers
    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

};

// reset the previous ans
function resetState(){
    nextBtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectAnswer(e){
   const selectBtn=e.target;
   const isCorrect=selectBtn.dataset.correct==="true";
   if(isCorrect){
    selectBtn.classList.add("correct");
    score++;
   }
   else{
    selectBtn.classList.add("incorrect");
   }
   Array.from(answerbtn.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled="true";
   })
   nextBtn.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`Your Scored ${score} out of ${questions.length}!!!`;
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="flex";
}

function handleNextButton(){
    currentIndex++;
    if(currentIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if(currentIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
// 