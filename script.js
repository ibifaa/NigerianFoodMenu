const food = [
    {
        id: 1,
        src: 'images/afang-soup.jpg',
        type: "Affang Soup",
        price: 10.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 2,
        src: 'images/african-salad.jpg',
        type: "African Salad",
        price: 10.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 3,
        src: 'images/beans.jpeg',
        type: "Beans",
        price: 5.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },
    {
        id: 4,
        src: 'images/egusi-soup.jpg',
        type: "Egusi",
        price: 5.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 5,
        src: 'images/isiewu.jpg',
        type: "Isi Ewu",
        price: 10.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },


    {
        id: 6,
        src: 'images/jollof-rice.jpeg',
        type: "Jollof Rice",
        price: 5.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 7,
        src: 'images/native-soup.jpg',
        type: "Native Soup",
        price: 10.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 8,
        src: 'images/plantain-porriage.jpg',
        type: "Plantain Porriage",
        price: 5.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },


]

window.addEventListener("DOMContentLoaded", () =>{
    let displayMenu = food.map((item) => {
        // console.log(item);
        return `<article class="card ">
        <div class='card-image-section'>
            <img src=${item.src} alt=${item.type} class='card-image' />
        </div>

        <div class='card-body' >
            <header class="food-price-section flex">
            <h5 class='food-type'>${item.type}</h5>
            <h5 class="price">${item.price}</h5>
            </header>
            <p class='card-txt'>${item.description}</p>
        </div>
    </article>`;
    })

    displayMenu = displayMenu.join("")
    menuSection.innerHTML = displayMenu;
})

let menuSection = document.querySelector('.menuSection');

