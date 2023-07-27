const food = [
    {
        id: 1,
        src: 'images/afang-soup.jpg',
        category: "lunch",
        type: "Affang Soup",
        price: 10.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 2,
        src: 'images/african-salad.jpg',
        type: "African Salad",
        category: "dinner",
        price: 10.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 3,
        src: 'images/beans.jpeg',
        category: "breakfast",
        type: "Beans",
        price: 5.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },
    {
        id: 4,
        src: 'images/egusi-soup.jpg',
        category: "lunch",
        type: "Egusi",
        price: 5.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 5,
        src: 'images/isiewu.jpg',
        category: "lunch",
        type: "Isi Ewu",
        price: 10.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },


    {
        id: 6,
        src: 'images/jollof-rice.jpeg',
        category: "dinner",
        type: "Jollof Rice",
        price: 5.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 7,
        src: 'images/native-soup.jpg',
        category: "lunch",
        type: "Native Soup",
        price: 10.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },

    {
        id: 8,
        src: 'images/plantain-porriage.jpg',
        category: "dinner",
        type: "Plantain Porriage",
        price: 5.00,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eaque iure rerum eligendi, atque pariatur debitis aliquid eius aperiam aut?"
    },


]

let menuSection = document.querySelector('.menuSection');

let filterBtn = document.querySelectorAll(".food-btn");

// Loading all items
window.addEventListener("DOMContentLoaded", () =>{
    displayMenuItem(food)
})

// filter for a specific category

filterBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        let menuCategory = food.filter((menuItem)=>{
            if(menuItem.category === category){
                return menuItem;
            }
        });

        if(category === "all"){
            displayMenuItem(food);
        }

        else{
            return displayMenuItem(menuCategory);
        }
    });

});


function displayMenuItem(menuItem){
    let displayMenu = menuItem.map((item) => {
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

}
