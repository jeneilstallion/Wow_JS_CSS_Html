const NUMBER_OF_QUESTIONS = 5;

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
    const checkedNumberOfQuestions = $("input[type=radio]:checked").length;
    console.log("# of questions checked:", checkedNumberOfQuestions);
    if (checkedNumberOfQuestions < NUMBER_OF_QUESTIONS) {
        console.log("still need to answer more questions:", checkedNumberOfQuestions);
        // alert('Please answer all questions before proceeding.');
        // const errorMessage = (`<div class="error-message">Please answer all questions before procedding</div>`);
        // $('#error-message-div').append(errorMessage);
    } else {
        console.log("all questions answered:", checkedNumberOfQuestions);
        window.location.href = "./resources.html";
    }    
})


