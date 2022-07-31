const review = [

{ id: 1, name: "Promise Joseph", job: "Web Developer", img: "https://res.cloudinary.com/fulfill/image/upload/v1658755250/C360_2017-03-22-09-09-00-202_vtes4e.jpg",
text: "A web developer is a programmer who develops World Wide Web applications using a client–server model. The applications typically use HTML, CSS and JavaScript in the client, PHP, ASP.NET (C#), Python, Node.js, Go or Java in the server, and http for communications between client and server. A web developer may specialize in client-side applications (front-end developer), server-side applications (back-end developer), or both (full-stack developer).",},

{id: 2, name:"Janet Jackson", job: "Data Analytics", img: "https://res.cloudinary.com/demo/image/upload/e_trim/c_lpad,w_iw,h_ih/bo_4px_solid_green/nice_bird.jpg", text: "Analytics is the systematic computational analysis of data or statistics. It is used for the discovery, interpretation, and communication of meaningful patterns in data.",},

{id: 3, name:"Victor Okon", job: "Software testing", img: "https://res.cloudinary.com/fulfill/image/upload/v1658752709/cld-sample-3.jpg", text: "Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation. Test techniques include, but not necessarily limited to:",},

{
id: 4, name: "Peace Okon", job: "Software Development", img: "https://res.cloudinary.com/demo/image/upload/e_gradient_fade,x_0.9/u_happy_dog,e_grayscale/happy_dog.jpg", text:"Software developers created all of them. Software developers are the creative, brainstorming masterminds behind computer programs of all sorts. While some software developers may focus on a specific program or app, others create giant networks or underlying systems that help trigger and power other programs.",
},
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentData = 0;
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
});

function showPerson(){
    const data = review[currentData];
    img.src = data.img;
    author.textContent = data.name;
    job.textContent = data.job
    info.textContent = data.text;
}

nextBtn.addEventListener("click", function(){
    currentData++;
    if(currentData > review.length -1){
        currentData = 0;
    } 
    showPerson();
});


prevBtn.addEventListener("click", function(){
    currentData--;
    if(currentData < 0){
        currentData = review.length -1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function(){
   currentData = Math.floor(Math.random()* review.length);
//    console.log(currentData);
   showPerson();
});