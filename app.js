console.log("hello vija gorade");


const HTMLQuestion = [
  {
    question: "1. What is the full form of HTML?",
    option: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "2. What does CSS stand for?",
    option: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "3. Which tag is used to create a hyperlink in HTML?",
    option: [
      "<link>",
      "<a>",
      "<href>",
      "<hyperlink>"
    ],
    answer: "<a>"
  },
  {
    question: "4. What is the correct syntax to link an external CSS file?",
    option: [
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'>",
      "<css link='style.css'>",
      "<script src='style.css'>"
    ],
    answer: "<link rel='stylesheet' href='style.css'>"
  },
  {
    question: "5. Which property is used to change the background color in CSS?",
    option: [
      "color",
      "bgcolor",
      "background-color",
      "background"
    ],
    answer: "background-color"
  },
  {
    question: "6. Inside which HTML element do we put the JavaScript code?",
    option: [
      "<js>",
      "<javascript>",
      "<script>",
      "<code>"
    ],
    answer: "<script>"
  },
  {
    question: "7. How do you write 'Hello World' in an alert box in JavaScript?",
    option: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
      "msgBox('Hello World');"
    ],
    answer: "alert('Hello World');"
  },
  {
    question: "8. Which event occurs when the user clicks on an HTML element?",
    option: [
      "onmouseclick",
      "onmouseover",
      "onchange",
      "onclick"
    ],
    answer: "onclick"
  },
  {
    question: "9. Which operator is used to assign a value to a variable?",
    option: [
      "*",
      "=",
      "-",
      "x"
    ],
    answer: "="
  },
  {
    question: "10. How do you create a function in JavaScript?",
    option: [
      "function myFunction()",
      "function:myFunction()",
      "create myFunction()",
      "define myFunction()"
    ],
    answer: "function myFunction()"
  }
];


const cssQuestions = [
  {
    question: "1. What does CSS stand for?",
    option: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "2. Which HTML tag is used to link an external CSS file?",
    option: [
      "<link>",
      "<style>",
      "<css>",
      "<stylesheet>"
    ],
    answer: "<link>"
  },
  {
    question: "3. Which CSS property is used to change the text color of an element?",
    option: [
      "color",
      "text-color",
      "font-color",
      "foreground-color"
    ],
    answer: "color"
  },
  {
    question: "4. Which property is used to change the background color?",
    option: [
      "background-color",
      "bgcolor",
      "color",
      "background-style"
    ],
    answer: "background-color"
  },
  {
    question: "5. How do you make all <p> elements bold in CSS?",
    option: [
      "p { font-weight: bold; }",
      "<p style='bold'>",
      "p { text-style: bold; }",
      "p { font: bold; }"
    ],
    answer: "p { font-weight: bold; }"
  },
  {
    question: "6. Which CSS property controls the text size?",
    option: [
      "font-size",
      "text-size",
      "size",
      "font-style"
    ],
    answer: "font-size"
  },
  {
    question: "7. How do you add a comment in CSS?",
    option: [
      "/* This is a comment */",
      "// This is a comment",
      "# This is a comment",
      "<!-- This is a comment -->"
    ],
    answer: "/* This is a comment */"
  },
  {
    question: "8. Which CSS property is used to center text?",
    option: [
      "text-align",
      "text-center",
      "align-text",
      "center"
    ],
    answer: "text-align"
  },
  {
    question: "9. How do you select an element with id 'header' in CSS?",
    option: [
      "#header",
      ".header",
      "header",
      "*header"
    ],
    answer: "#header"
  },
  {
    question: "10. What does the 'display: none' do?",
    option: [
      "Hides the element completely",
      "Makes text invisible only",
      "Collapses margin only",
      "Disables styling"
    ],
    answer: "Hides the element completely"
  }
];


const jsQuestions = [
  {
    question: "1. Inside which HTML element do we put the JavaScript?",
    option: [
      "<script>",
      "<js>",
      "<javascript>",
      "<code>"
    ],
    answer: "<script>"
  },
  {
    question: "2. How do you write 'Hello World' in an alert box?",
    option: [
      "alert('Hello World');",
      "msg('Hello World');",
      "alertBox('Hello World');",
      "console.log('Hello World');"
    ],
    answer: "alert('Hello World');"
  },
  {
    question: "3. How do you create a function in JavaScript?",
    option: [
      "function myFunction()",
      "function:myFunction()",
      "create myFunction()",
      "def myFunction()"
    ],
    answer: "function myFunction()"
  },
  {
    question: "4. How do you call a function named 'myFunction'?",
    option: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()",
      "execute.myFunction()"
    ],
    answer: "myFunction()"
  },
  {
    question: "5. Which operator is used to assign a value to a variable?",
    option: [
      "=",
      "==",
      "===",
      ":="
    ],
    answer: "="
  },
  {
    question: "6. What is the correct way to write a JavaScript array?",
    option: [
      "var colors = ['red', 'green', 'blue'];",
      "var colors = 'red', 'green', 'blue';",
      "var colors = (1:'red', 2:'green', 3:'blue');",
      "var colors = {1='red', 2='green', 3='blue'};"
    ],
    answer: "var colors = ['red', 'green', 'blue'];"
  },
  {
    question: "7. Which method adds a new element to the end of an array?",
    option: [
      "push()",
      "add()",
      "append()",
      "insert()"
    ],
    answer: "push()"
  },
  {
    question: "8. Which keyword is used to declare a variable in JavaScript?",
    option: [
      "var",
      "int",
      "String",
      "float"
    ],
    answer: "var"
  },
  {
    question: "9. How do you write an 'if' statement in JavaScript?",
    option: [
      "if (x > y)",
      "if x > y then",
      "if x > y:",
      "if (x > y) then"
    ],
    answer: "if (x > y)"
  },
  {
    question: "10. What does 'typeof' operator do?",
    option: [
      "Returns the data type of a variable",
      "Creates a new variable",
      "Changes data type",
      "Checks the scope"
    ],
    answer: "Returns the data type of a variable"
  }
];

const javaQuestions = [
  {
    question: "1. Which company developed Java?",
    option: [
      "Sun Microsystems",
      "Microsoft",
      "Google",
      "Apple"
    ],
    answer: "Sun Microsystems"
  },
  {
    question: "2. What is the extension of Java compiled files?",
    option: [
      ".class",
      ".java",
      ".js",
      ".exe"
    ],
    answer: ".class"
  },
  {
    question: "3. Which keyword is used to create a class in Java?",
    option: [
      "class",
      "Class",
      "struct",
      "define"
    ],
    answer: "class"
  },
  {
    question: "4. Which method is the entry point of a Java program?",
    option: [
      "main()",
      "start()",
      "run()",
      "execute()"
    ],
    answer: "main()"
  },
  {
    question: "5. Which of these is not a Java primitive type?",
    option: [
      "String",
      "int",
      "boolean",
      "char"
    ],
    answer: "String"
  },
  {
    question: "6. Which keyword is used to inherit a class in Java?",
    option: [
      "extends",
      "inherits",
      "implement",
      "super"
    ],
    answer: "extends"
  },
  {
    question: "7. What is used to handle exceptions in Java?",
    option: [
      "try-catch",
      "do-catch",
      "error-catch",
      "catch-throw"
    ],
    answer: "try-catch"
  },
  {
    question: "8. Which loop is guaranteed to execute at least once?",
    option: [
      "do-while",
      "while",
      "for",
      "foreach"
    ],
    answer: "do-while"
  },
  {
    question: "9. What does JVM stand for?",
    option: [
      "Java Virtual Machine",
      "Java Visual Model",
      "Just Virtual Mode",
      "Java Variable Manager"
    ],
    answer: "Java Virtual Machine"
  },
  {
    question: "10. Which keyword is used to prevent inheritance?",
    option: [
      "final",
      "private",
      "static",
      "const"
    ],
    answer: "final"
  }
];


function removeStyle(btnArray)
{
    btnArray.forEach((e)=>{
e.style.border="2px solid rgba(255, 255, 255, 0.3)";
 e.style.backgroundColor="transparent";
    })
}

function setStyle(e)
{
e.style.backgroundColor="white";
e.style.color="black";
}

let htmlchecker=0;
let csschecker=0;
let jschecker=0;
let javachecker=0;
const languageDivbtn=document.querySelector(".btnsLanguage");

languageDivbtn.addEventListener("click",(e)=>{
    const btnArray=[...languageDivbtn.getElementsByTagName("button")];
removeStyle(btnArray);




if(e.target.className=="html")
{
htmlchecker=1;
csschecker=0;
jschecker=0;
javachecker=0;
setStyle(e.target);
}
else if(e.target.className=="css")
{
htmlchecker=0;
csschecker=1;
jschecker=0;
javachecker=0;

setStyle(e.target);
}else if(e.target.className=="js")
{
htmlchecker=0;
csschecker=0;
jschecker=1;
javachecker=0;

setStyle(e.target);
}
else if(e.target.className=="java")
{
    htmlchecker=0;
csschecker=0;
jschecker=0;
javachecker=1;
setStyle(e.target);
}
})
let intervalCode=0;

const startQuizBtn=document.querySelector(".starBtn");
const nameQuiz=document.querySelector(".NameQuiz");
const mainQuizDiv=document.querySelector(".quizDiv");
const resultDiv=document.querySelector(".scoreShowDiv");
const quizStartDiv=document.querySelector(".mainDiv");
startQuizBtn.addEventListener("click",()=>{

    if(htmlchecker)
    {
      
mainQuizDiv.style.visibility="visible";
quizStartDiv.style.visibility="hidden"
       setDataOnUI(HTMLQuestion,true)
     nameQuiz.innerText="HTML";
   intervalCode=setInterval(()=>{
      setDataOnUI(HTMLQuestion)
     },10000)
    }
    else if(csschecker)
    {
      
mainQuizDiv.style.visibility="visible";
quizStartDiv.style.visibility="hidden"
         setDataOnUI(cssQuestions,true)
nameQuiz.innerText="CSS";
intervalCode=  setInterval(()=>{
      setDataOnUI(cssQuestions)
     },10000)
    }
    else if(jschecker)
    {
      
mainQuizDiv.style.visibility="visible";
quizStartDiv.style.visibility="hidden"
        setDataOnUI(jsQuestions,true)
   nameQuiz.innerText="Javascript";
   intervalCode=  setInterval(()=>{
      setDataOnUI(jsQuestions)
     },10000)
    }
    else if(javachecker)
    {
      
mainQuizDiv.style.visibility="visible";
quizStartDiv.style.visibility="hidden"
        setDataOnUI(javaQuestions,true)
nameQuiz.innerText="Java";
 intervalCode= setInterval(()=>{
      setDataOnUI(javaQuestions);
     },10000);
    } 
    else{
      alert("please select the language for quiz")
    }
})

let index=0;
const numberOfQuestionPara=document.querySelector(".questionNO")
const questionHeading=document.querySelector(".question");
const optionDiv=document.querySelector(".threeOptionDiv");
const fourOptions=[...optionDiv.getElementsByTagName("div")];
const saveAndNextbtn=document.querySelector(".saveAndNextBtn");

let scoreOfQuiz=0;
const timeLestParaHTML=document.querySelector(".timer");

let checkAnawer=false;

optionDiv.addEventListener("click",(e)=>{
if(e.target.className=="option1"||e.target.className=="option2"||e.target.className=="option3"||e.target.className=="option4")
{
getAnswer(e.target);
}
})
function getAnswer(element)
{
console.log(element)
if(element.getAttribute("answer")==element.getAttribute("option"))
{
checkAnawer=true;
}
// console.log(element.getAttribute("answer"))     
// console.log(element.getAttribute("option"))
}

let codeTimeInterval=0;
const paraTimer=document.querySelector(".paraTimer")

function setStyle2(arr)
{
arr.forEach((e)=>{

e.style.color="white"
})
}

function setDataOnUI(Questions,isBeginQuestion){
  clearInterval(codeTimeInterval);
  removeStyle(fourOptions);
  setStyle2(fourOptions);
paraTimer.style.animationName="timerColorChange";
paraTimer.style.animationDuration=".5s";
paraTimer.style.animationTimingFunction="linear";
paraTimer.style.animationIterationCount="infinite";

if(isBeginQuestion)
{

    index=0;
}

let numberCount=10;
console.log(index)
if(index==HTMLQuestion.length)
{
timeLestParaHTML.innerText="over";
  return 1;
}
if(index==HTMLQuestion.length-1)
{
    saveAndNextbtn.style.backgroundColor="green";
  saveAndNextbtn.style.color="white";
}
questionHeading.innerText=Questions[index].question;
fourOptions.forEach((e,i)=>{
e.innerText=Questions[index].option[i];
e.setAttribute("answer",Questions[index].answer);
e.setAttribute("option",Questions[index].option[i])
});
numberOfQuestionPara.innerText=index+1;
    
if(checkAnawer)
{
scoreOfQuiz++;
}
checkAnawer=false;
console.log(scoreOfQuiz);

codeTimeInterval=setInterval(()=>{
  numberCount--;
  timeLestParaHTML.innerText=numberCount;
},1000);
index++;
}

let code=0;



const ScoreShoewPara=document.querySelector(".ScoreShoewPara");

saveAndNextbtn.addEventListener("click",()=>{
  clearInterval(intervalCode)
  removeStyle(fourOptions);
  setStyle2(fourOptions);
  clearInterval(code)
  if(index==HTMLQuestion.length){
    console.log(scoreOfQuiz);
    timeLestParaHTML.innerText="over";
    resultDiv.style.visibility="visible";
    ScoreShoewPara.innerText=scoreOfQuiz;
    mainQuizDiv.style.visibility="hidden"
    return;
  }
if(htmlchecker)
    { 
        setDataOnUI(HTMLQuestion);
    code=  setInterval(()=>{
      setDataOnUI(HTMLQuestion);
     },10000)
    }
    else if(csschecker)
    {
         setDataOnUI(cssQuestions);
       code=    setInterval(()=>{
      setDataOnUI(cssQuestions);
     },10000)
    }
    else if(jschecker)
    {
        setDataOnUI(jsQuestions);
        code=  setInterval(()=>{
      setDataOnUI(jsQuestions);
     },10000)
    }
    else if(javachecker)
    {
        setDataOnUI(javaQuestions);
         code= setInterval(()=>{
      setDataOnUI(javaQuestions);
     },10000)
    }
})  
console.log(optionDiv);

optionDiv.addEventListener("click",(e)=>{
if(e.target.className=="option1"||e.target.className=="option2"||e.target.className=="option3"||e.target.className=="option4")
{
removeStyle(fourOptions);
setStyle(e.target);
}
});




