// items

const menu = [
    {
        id:1,
        title:"Buttermilk pancakes",
        category:"breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },

    {
        id:2,
        title:"Dinner double",
        category:"lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    
    {
        id:3,
        title:"Godzilla Milkshake",
        category:"breakfast",
        price: 14.99,
        img: "./images/item-3.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },


    {
        id:4,
        title:"Country Delight",
        category:"lunch",
        price: 10.99,
        img: "./images/item-4.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },


    {
        id:5,
        title:"Egg Attack",
        category:"breakfast",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },

    {
        id:6,
        title:"Oreo Dream",
        category:"dinner",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },

    {
        id:7,
        title:"Becon Overflow",
        category:"dinner",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },

    {
        id:8,
        title:"American Classic",
        category:"breakfast",
        price: 12.99,
        img: "./images/item-7.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },

    {
        id:9,
        title:"Yummy bites",
        category:"breakfast",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },

    {
        id:10,
        title:"longthroat bites",
        category:"breakfast",
        price: 14.99,
        img: "./images/item-10.jpeg",
        desc: "I am baby work milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    }
];

 const sectionCenter = document.querySelector(".section-center");

 window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
    
    return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}" />

        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
        </article>`;
    
    });

    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
 });

