const questionArray=[];
var callCount = 0;
$(document).ready(() => {
    async function fetchQuestions() {
        try {
            let response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple');
            let data = await response.json();
            let fetchedQuestions = data.results;
            console.log(fetchedQuestions)
            for (let i = 0; i < fetchedQuestions.length; i++) {
                let answer01 = fetchedQuestions[i].correct_answer.toLowerCase();
                let answer02 = fetchedQuestions[i].incorrect_answers[0].toLowerCase();
                let answer03 = fetchedQuestions[i].incorrect_answers[1].toLowerCase();
                let answer04 = fetchedQuestions[i].incorrect_answers[2].toLowerCase();
                let answerArray = [answer01, answer02, answer03, answer04];
                questionArray.push({
                    question: fetchedQuestions[i].question,
                    answer: answerArray,
                    correctAnswer: fetchedQuestions[i].correct_answer.toLowerCase()
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchQuestions();
    console.log(questionArray);

    let quizRound=0;
    let interval=setInterval(()=>{
        quizCardLoader(quizRound);
        quizRound++
        if(quizRound==5){
            quizRound=0
            clearInterval(interval)
        }
    },1000)
})

let quizCardLoader = (number) => {
    $('#question').html("");
    $("#questionNumber").text(number + 1 + " / 5 Question");
    let question = questionArray[number].question;
    let questionTemp = `
            <h4>${number + 1}. ${question}</h4><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value=0 id="answer${number + 1}">
              <label class="form-check-label" for="answer${number + 1}">
                ${questionArray[number].answer[0]}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value=1 id="answer${number + 2}">
              <label class="form-check-label" for="answer${number + 2}">
                ${questionArray[number].answer[1]}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value=2 id="answer${number + 3}">
              <label class="form-check-label" for="answer${number + 3}">
                ${questionArray[number].answer[2]}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value=3 id="answer${number + 4}">
              <label class="form-check-label" for="answer${number + 4}">
                ${questionArray[number].answer[3]}
              </label>
            </div><br>
            <div class="card-footer text-end">
                 <a class="btn btn-success" id="nextBtn" onclick=checkAnswer(getSelectedAnswer(${number}))>Next</a>
            </div>
        `;
    $("#question").append(questionTemp);
}
let getSelectedAnswer = (currentQuestionNumber) => {
    console.log("{$number} "+currentQuestionNumber)
    let checkedInput = document.querySelector('input[name="answer"]:checked');
    if (!checkedInput) {
        console.error("No answer selected.");
        return [currentQuestionNumber,null];f
    }
    console.log(checkedInput.value)
    return [currentQuestionNumber,checkedInput.value];
};
let checkAnswer=(answer)=>{
    if(answer[1]===null){
        return;
    }
    if(questions[answer[0]].answer[answer[1]].correct){
        console.log("Correct");
        finalCorrectAnswerCount++;
    }else{
        console.log("Wrong");
    }
}

