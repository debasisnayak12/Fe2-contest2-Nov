const cardDetails = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

const cardContainer = document.querySelector(".card-Container");
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const allRecipes = document.getElementById('allRecipes')
const vegRecipes = document.getElementById('vegRecipes')
const nonVegRecipes = document.getElementById('nonVegRecipes')
const ratingAbove4 = document.getElementById('ratingAbove4')
const ratingBelow4 = document.getElementById('ratingBelow4')

appendData(cardDetails)

function appendData(cardDetails){
    
    cardContainer.innerHTML = ""
    cardDetails.forEach(card => {
        cardContainer.append(createCard(card));
    });
    
}

function createCard(card){
    const cardBody = document.createElement('div');
    cardBody.classList.add('card');

    const imageElement = document.createElement('img');
    imageElement.src = card.imageSrc;
    imageElement.alt = card.name;
    cardBody.appendChild(imageElement);

    const typeElement = document.createElement('div');
    typeElement.classList.add('type');
    typeElement.textContent = `${card.type}`;
    cardBody.appendChild(typeElement);

    const titleElement = document.createElement('div');
    titleElement.classList.add('titleside');
    const titleElem = document.createElement('h3');
    titleElem.textContent = `${card.name}`;
    titleElement.appendChild(titleElem);
    const ratingElem = document.createElement('p');
    ratingElem.innerHTML = `<img src="assets/Star.png"> ${card.rating}`;
    titleElement.appendChild(ratingElem);
    cardBody.appendChild(titleElement);

    const timeElement = document.createElement('div');
    timeElement.classList.add('timeStamp');
    const timeMin = document.createElement('div');
    timeMin.textContent = `${card.time}`; 
    timeElement.appendChild(timeMin);

    const likeCom = document.createElement('div');
    likeCom.innerHTML = `<img src="assets/like (1).png"> <img src="assets/comments.png">`
    timeElement.appendChild(likeCom);

    cardBody.appendChild(timeElement);


    cardContainer.appendChild(cardBody);
    return cardBody;
}

searchBtn.addEventListener("click", function(){
    let title = searchInput.value;
    let filteredData = cardDetails.filter((el)=>{
        if(title === el.name){
            return true
        }
        else{
            return false
        }
    })

    appendData(filteredData)
});

allRecipes.addEventListener("click", function(){
    appendData(cardDetails)
})

vegRecipes.addEventListener("click", function(){
    
    let filteredData = cardDetails.filter((el)=>{
        if("veg" === el.type){
            return true
        }
        else{
            return false
        }
    })
    appendData(filteredData)
});


nonVegRecipes.addEventListener("click", function(){
    let filteredData = cardDetails.filter((el)=>{
        if("non-veg" === el.type){
            return true
        }
        else{
            return false
        }
    })
    appendData(filteredData)
});

ratingAbove4.addEventListener("change", function(){
    let filteredData = cardDetails.filter((el)=>{
        if(el.rating >= 4){
            return true
        }
        else{
            return false
        }
    })
    appendData(filteredData)
});


ratingBelow4.addEventListener("change", function(){
    let filteredData = cardDetails.filter((el)=>{
        if(el.rating <= 4){
            return true
        }
        else{
            return false
        }
    })

    appendData(filteredData)
});