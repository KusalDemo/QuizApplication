const questions = [
    {
        question: "Kusal Gunasekara1",
        answer: [{"Answer": "Kusal Gunasekara", "correct": true}, {
            "Answer": "Kusal Gunasekara",
            "correct": false
        }, {"Answer": "Kusal Gunasekara", "correct": false}, {"Answer": "Kusal Gunasekara", "correct": false}],
    },
    {
        question: "Kusal Gunasekara2",
        answer: [{"Answer": "Kusal Gunasekara", "correct": false}, {
            "Answer": "Kusal Gunasekara",
            "correct": false
        }, {"Answer": "Kusal Gunasekara", "correct": true}, {"Answer": "Kusal Gunasekara", "correct": false}],
    },
    {
        question: "Kusal Gunasekara3",
        answer: [{"Answer": "Kusal Gunasekara", "correct": false}, {
            "Answer": "Kusal Gunasekara",
            "correct": false
        }, {"Answer": "Kusal Gunasekara", "correct": true}, {"Answer": "Kusal Gunasekara", "correct": false}],
    },
    {
        question: "Kusal Gunasekara4",
        answer: [{"Answer": "Kusal Gunasekara", "correct": false}, {
            "Answer": "Kusal Gunasekara",
            "correct": false
        }, {"Answer": "Kusal Gunasekara", "correct": true}, {"Answer": "Kusal Gunasekara", "correct": false}],
    },
    {
        question: "Kusal Gunasekara5",
        answer: [{"Answer": "Kusal Gunasekara", "correct": false}, {
            "Answer": "Kusal Gunasekara",
            "correct": false
        }, {"Answer": "Kusal Gunasekara", "correct": true}, {"Answer": "Kusal Gunasekara", "correct": false}],
    }

]

var callCount = 0;
var finalCorrectAnswerCount = 0;
$(document).ready(() => {
    async function fetchQuestions() {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple');
            const data = await response.json();

            // Assuming the API returns an array of questions in 'results'
            const questions = data.results;
            /*displayQuestions(questions);*/ // Display the questions
            console.log(questions);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    }

// Call the function to fetch questions
    fetchQuestions();

    const runQuiz = () => {
            let count=5;
            /*let timeoutId = setTimeout(runQuiz, 8000);*/
            setInterval(()=>{
                count--;
                $('#countdown').text(count);
                if (count <= 0) {
                    callCount++;
                  quizCardLoader(callCount - 1);
                  count = 5;
                }else if(count <= -1){

                }
            },2000);

        /*quizCardLoader(callCount - 1);*/
    };
    runQuiz();
});

let quizCardLoader = (number) => {
    $('#question').html("");
    $("#questionNumber").text(number + 1 + " / 5 Question");
    let question = questions[number].question;
    let questionTemp = `
            <h4>${number + 1}. ${question}</h4><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value=0 id="answer${number + 1}">
              <label class="form-check-label" for="answer${number + 1}">
                ${questions[number].answer[0].Answer}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value=1 id="answer${number + 2}">
              <label class="form-check-label" for="answer${number + 2}">
                ${questions[number].answer[1].Answer}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value=2 id="answer${number + 3}">
              <label class="form-check-label" for="answer${number + 3}">
                ${questions[number].answer[2].Answer}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" value=3 id="answer${number + 4}">
              <label class="form-check-label" for="answer${number + 4}">
                ${questions[number].answer[3].Answer}
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
        return [currentQuestionNumber,null];
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
