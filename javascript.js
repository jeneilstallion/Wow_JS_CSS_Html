const question1 = document.getElementsByName('question-1');
for (choice of question1) {
    // code block to be executed
    if(choice.checked){
        alert(choice.value);
        break;
    }
  }
  question1.addEventListener('change',function () {
    console.log("test log")
});