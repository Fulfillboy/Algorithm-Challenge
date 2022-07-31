let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTab = document.getElementById("savetab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads );
  }

  saveTab.addEventListener("click", function(){
     chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
      myLeads.push(tabs[0].url);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
  })

})
  

  function render(leads){
    let listItem = "";
    for(let i= 0; i<leads.length; i++){
      // Using a template string/literals ===> change the string quote to a backtick. in this case ("") to be change to a backtick and then do a template strigs on the "myLeads", then break into a new line for easy readability.
      listItem += "<li><a target='_blank' href=' " + leads[i] + "'>" + leads[i] + "</a></li>"
  }
    ulEl.innerHTML = listItem
  }

  deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
  })

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
})


// let welcomeMl = document.getElementById("welcome-el");

// function greetEl(greet){
//   welcomeMl.textContent = greet + ", how are you today"?
// }

// greetEl("Hi Promise");

// function add(parameter1, parameter2){
//   return parameter1 + parameter2;
// }

// console.log(add(3,4));


// function getfirst(arr){
//   return arr[0];
// }
// let firstCard = getfirst([10,2,5]);
// console.log(firstCard);


// let myCourse = ["Learn CSS Animation", "Learn Algorithm", "Learn JavaScript"];

// function logCourse(){
//   for(let i=0; i<myCourse.length; i++){
//     let myCourses = myCourse[i];
//     console.log(myCourses);
//   }
// }
// logCourse(myCourse);

// localStorage.setItem("myLead", "100");
// localStorage.clear()
// localStorage.getItem("myLead")

// let data = [{
//   player: "Jane",
//   score: 52},

//   {
//   player: "Mark",
//   score:41
//   }
// ]

// let janeBtn = document.getElementById("jane-btn");

// janeBtn.addEventListener("click", function(){
//   console.log(data[0].score);
// })


// countries = ["China", "India", "USA"];

// function generateSentence(desc, arr){
//  for(let i=0; i<countries.length; i++){
//   // let country = countries[i]; ==> this specifies when you want to log out individual letters.
//   console.log(countries[0]);
//  }
// }
// generateSentence(countries);