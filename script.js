const questions =[
    {
        question : "Kusal Gunasekara1",
        answer : [{"Answer":"Kusal Gunasekara","correct":true}, {"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":false}],
    },
    {
        question : "Kusal Gunasekara2",
        answer : [{"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":true}, {"Answer":"Kusal Gunasekara","correct":false}],
    },
    {
        question : "Kusal Gunasekara3",
        answer : [{"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":true}, {"Answer":"Kusal Gunasekara","correct":false}],
    },
    {
        question : "Kusal Gunasekara4",
        answer : [{"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":true}, {"Answer":"Kusal Gunasekara","correct":false}],
    },
    {
        question : "Kusal Gunasekara5",
        answer : [{"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":true}, {"Answer":"Kusal Gunasekara","correct":false}],
    }

]

var callCount = 0;
$(document).ready(() => {
    const runQuiz = () => {
        callCount++;
        if (callCount > 5) {
            console.log("Quiz Over")
            return;
        } else {
            let timeoutId = setTimeout(runQuiz, 2000);
        }
        quizCardLoader(callCount-1);
    };

    runQuiz();
});

let quizCardLoader= (number)=>{
    $('#question').html("");
    $("#questionNumber").text(number+1+" / 5 Question");
    let question = questions[number].question;
    let questionTemp = `
            <h4>${number + 1}. ${question}</h4><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="answer${number + 1}">
              <label class="form-check-label" for="answer${number + 1}">
                ${questions[number].answer[0].Answer}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="answer${number + 2}">
              <label class="form-check-label" for="answer${number + 2}">
                ${questions[number].answer[1].Answer}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="answer${number + 3}">
              <label class="form-check-label" for="answer${number + 3}">
                ${questions[number].answer[2].Answer}
              </label>
            </div><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="answer${number + 4}">
              <label class="form-check-label" for="answer${number + 4}">
                ${questions[number].answer[3].Answer}
              </label>
            </div><br>
            <div class="card-footer text-end">
                 <a href="#" class="btn btn-success" id="nextBtn">Next</a>
            </div>
        `;
    $("#question").append(questionTemp);
}