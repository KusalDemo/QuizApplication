const questions =[
    {
        question : "Kusal Gunasekara",
        answer : [{"Answer":"Kusal Gunasekara","correct":true}, {"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":false}, {"Answer":"Kusal Gunasekara","correct":false}],
    }

]
$(document).ready(() => {
    $('#question').html("");
    for (let i = 0; i < 1; i++) {
        $("#questionNumber").text(i+1+" / 5 Question")
        console.log("I'm Running..");
        let question = questions[i].question;
        let questionTemp = `
            <h4>${i+1}. ${question}</h4><br>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="answer${i+1}">
              <label class="form-check-label" for="answer${i+1}">
                ${questions[i].answer[0].Answer}
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="answer${i+2}">
              <label class="form-check-label" for="answer${i+2}">
                ${questions[i].answer[1].Answer}
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="answer${i+3}">
              <label class="form-check-label" for="answer${i+3}">
                ${questions[i].answer[2].Answer}
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="answer" id="answer${i+4}">
              <label class="form-check-label" for="answer${i+4}">
                ${questions[i].answer[3].Answer}
              </label>
            </div>
        `;
        $("#question").append(questionTemp);
    }
});
