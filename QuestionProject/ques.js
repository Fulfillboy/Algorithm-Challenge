// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         if(question.classList.contains("show-text")){
//             question.classList.remove("show-text");
//         }
//         else{
//             question.classList.add("show-text");
//         }
//     });
// });



// Alternative Code for
const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});
