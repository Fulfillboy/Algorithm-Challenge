// persistence(45) = 4*5 = 20, 2*0 = 0 // 2 steps
// persistence (365) = 3*5*6 = 90, 9*0 = 0 // 2 steps


// function persistence(num){
//     function recursive(num,step){
//         let str = num + "";
//         if(str.length == 1)return step;
//         let newNum = 1;
//         for(i=0; i<str.length; i++){
//             newNum *= parseInt(str[i]);
//         }
//         step++
//         return recursive(num,step); 
//     }
//     return recursive(num, 0);
// };

// persistence(365);
 const date1 = document.getElementById("date1");
 const date2 = document.getElementById("date2");
 const Btn = document.querySelector(".btn")
 const ans = document.getElementById("ans")

const newTime1 = new Date('oct 12, 1991');
const newTime2 = new Date('July 30, 2022');

Btn.addEventListener("click", function(date1, date2){
    // console.log(Btn);
    const oneDay = 1000*60*60*24;
    date1 = newTime1.getTime();
    console.log(newTime1);
    date2 = newTime2.getTime();
    console.log(newTime2);
    let date = newTime2 - newTime1;
    console.log(date);
    let days = Math.round(Math.abs(date/oneDay));
    ans.textContent += days + " " + 'days'
    console.log(ans);
})


// function getDays(date1, date2){
//     const  time2 = date2.getTime();
//     console.log(time2);
//     const time1 = date1.getTime();
//     console.log(time1);
// };