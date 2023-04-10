import {menuArray} from "/data.js"
let sum = 0
let beerSum = 0
let pizzaSum = 0
let hamburgerSum = 0
let beerName = ''
let pizzaName =''
let hamburgerName=''
let orderedBeer = document.getElementById("ordered-beer")
let orderedTotal = document.getElementById("ordered-total")
let orderedPizza = document.getElementById("ordered-pizza")
let orderedHamburger = document.getElementById("ordered-hamburger")
let orderCompleteButton = document.getElementById("order-complete-button")
let completedForm = document.getElementById("completed-form")
let yourOrder = document.getElementById('your-order')
let beerTotal = document.getElementById("beer-total")
let pizzaTotal= document.getElementById("pizza-total")
let hamburgerTotal = document.getElementById("hamburger-total")
document.addEventListener("click", function(e){
    if(e.target.dataset.button){
        handleButtonClick(e.target.dataset.button)
    
    }
    })



function handleButtonClick(menuId){
    const menuObj = menuArray.filter(function(foods){
        return foods.id === menuId
       })[0]
    
    
    let order= []
    order.push(menuObj)
    
    
order.filter(function(orderedFoods){
       sum += orderedFoods.price
        if (orderedFoods.name ==="Beer")
            {beerName = orderedFoods.name
            beerSum += 12
            beerRemove.style.display="flex"
            orderedBeer.style.display="flex"
            orderedTotal.style.display="flex"
            orderedTotal.style.borderTop="1px solid  "
            orderCompleteButton.style.display="flex"
            yourOrder.style.display="flex"
            beerTotal.style.display="flex"
            
            orderedBeer.innerHTML = `
            <div id="ordered-beer" class ="food-class">
            <div id="beer-name">
            <p>${beerName}
            </p>
            </div>`
           beerTotal.innerHTML=`
            <div id ="beer-sum">
            <p class="sum">${beerSum}
            </p>
            </div>`}
        
        else if (orderedFoods.name === "Pizza"){
            pizzaName = orderedFoods.name
            pizzaSum += 14
            pizzaRemove.style.display="flex"
            orderedPizza.style.display="flex"
            orderedTotal.style.display="flex"
            orderedTotal.style.borderTop="1px solid  "
            orderCompleteButton.style.display="flex"
            yourOrder.style.display="flex"
            pizzaTotal.style.display="flex"
            
            orderedPizza.innerHTML = `
            <div class = "food-class"
            <div>
            <p>${pizzaName}
            </p>
            </div>`
            pizzaTotal.innerHTML=`
            <div>
            <p class="sum">${pizzaSum}
            </p>
            </div>
            </div>`}
            
        else if (orderedFoods.name === "Hamburger"){
            hamburgerName = orderedFoods.name
            hamburgerSum += 12
            hamburgerRemove.style.display="flex"
            orderedHamburger.style.display="flex"
            orderedTotal.style.display="flex"
            orderedTotal.style.borderTop="1px solid  "
            orderCompleteButton.style.display="flex"
            yourOrder.style.display="flex"
            hamburgerTotal.style.display="flex"
            
            orderedHamburger.innerHTML = `
            <div class = "food-class"
            <div>
            <p>${hamburgerName}
            </p>
            </div>`
            hamburgerTotal.innerHTML=`
            <div>
            <p class="sum">${hamburgerSum}
            </p>
            </div>
            </div>`}
        
        
            orderedTotal.innerHTML = `
            
            <div id = "total-price-div">
            <div id ="price-and-sum">
           
            <h1 id="total-price">Total Price:</h1>
           
           
            <h1 id="total-price-sum">$${sum}</h1>
           
            </div>
            </div>
            `
})
}




let beerRemove = document.getElementById("beer-remove-button")
beerRemove.addEventListener("click", removeBeerFromReceipt)

    function removeBeerFromReceipt(){
    if (beerSum < 13){
        orderedBeer.style.display="none"
        beerRemove.style.display="none"
        beerTotal.style.display="none"
        
      
    }    
    beerSum -= 12
    sum -= 12
   orderedBeer.innerHTML = `
        <div class="food-class">
        <div>
        <p>${beerName}
        </p>
        </div>`
    beerTotal.innerHTML=`
        
        <div id="beer-sum">
        <p class="sum">${beerSum}
        </p>
        </div>`
      
   orderedTotal.innerHTML = `
    <div id = "total-price-div">
        <div id ="price-and-sum">
            <h1 id="total-price">Total Price:</h1>
            <h1 id="total-price-sum">$${sum}</h1>
           
        </div>
    </div>
        `
        
        if (sum >=1){
            orderedTotal.style.display="flex"
            orderCompleteButton.style.display="flex"}
        else{
            orderCompleteButton.style.display="none"
            orderedTotal.style.display="none"
            yourOrder.style.display="none"
        }   
    }
    
    
let pizzaRemove = document.getElementById("pizza-remove-button")
pizzaRemove.addEventListener("click",removePizzaFromReceipt)

function removePizzaFromReceipt(){
    if (pizzaSum < 15){
        orderedPizza.style.display="none"
        pizzaRemove.style.display="none"
        pizzaTotal.style.display="none"
        
    }
           
    pizzaSum -= 14
    sum -= 14
   orderedPizza.innerHTML = `
        <div class="food-class">
        <div>
        <p>${pizzaName}
        </p>
        </div>`
        pizzaTotal.innerHTML=`
        <div id="pizza-sum">
        <p class="sum">${pizzaSum}
        </p>
        </div>`
        
   orderedTotal.innerHTML = `
       <div id = "total-price-div">
        <div id ="price-and-sum">
            <h1 id="total-price">Total Price:</h1>
            <h1 id="total-price-sum">$${sum}</h1>
           
        </div>
    </div>
        `
      if (sum >=1){
            orderedTotal.style.display="flex"
            orderCompleteButton.style.display="flex"}
        else{
            orderCompleteButton.style.display="none"
            orderedTotal.style.display="none"
            yourOrder.style.display="none"
        }   
        
    }
    
    
let hamburgerRemove = document.getElementById("hamburger-remove-button")
hamburgerRemove.addEventListener("click",removeHamburgerFromReceipt)

    function removeHamburgerFromReceipt(){
    if (hamburgerSum < 13){
        orderedHamburger.style.display="none"
        hamburgerRemove.style.display="none"
        hamburgerTotal.style.display="none"
        
       
    }    
    hamburgerSum -= 12
    sum -= 12
   orderedHamburger.innerHTML = `
        <div class="food-class">
        <div>
        <p>${hamburgerName}
        </p>
        </div>`
        hamburgerTotal.innerHTML=`
        <div id="hamburger-sum">
        <p class="sum">${hamburgerSum}
        </p>
        </div>`
        
   orderedTotal.innerHTML = `
        <div id = "total-price-div">
        <div id ="price-and-sum">
            <h1 id="total-price-p">Total Price:</h1>
            <h1 id="total-price-sum">$${sum}</h1>
           
        </div>
    </div>
        `
        if (sum >=1){
            orderedTotal.style.display="flex"
            orderCompleteButton.style.display="flex"
}
        else{
            orderCompleteButton.style.display="none"
            orderedTotal.style.display="none"
            yourOrder.style.display="none"
        }
        
    }
 let completeOrderButton= document.getElementById("order-complete-button")
     completeOrderButton.addEventListener('click', completeOrder)
function completeOrder(){
completedForm.style.display="flex"
    
}

const orderedForm = document.getElementById('ordered-form')
let payButton = document.getElementById("pay-button")
orderedForm.addEventListener('submit', function(e){
    e.preventDefault()
    payButtons()


function payButtons(){
    let nameInput = document.getElementById("name-input").value
    let orderedItemsArea = document.getElementById("entire-bottom-part")
    let completedForm=document.getElementById("completed-form")
        completedForm.style.display='none'
        orderedItemsArea.innerHTML = `<div id = "end-greeting"><p id = "p-end-greeting">
        Thanks, ${nameInput} for ordering!
        </p></div>`
}})
   
function getfeedHtml(){
   
      
    let feedHtml = ``;
    menuArray.forEach(function(food){
        
    
    feedHtml+=
    `<div class="menu">
    <div class="menu-inner" id="menu-inner">
        <div id="emoji">
        <h1  class = "food-emoji" id="food-emoji">${food.emoji}</h1>
        </div>
        <div class= "body">
        <h1>${food.name}</h1>
        <h3>${food.ingredients}</h3>
        <h2 >$${food.price}</h2>
        </div>
        <div>
        <button class = "add-button" id="add-btn" data-button = "${food.id}">+</button>
        </div>   
  
    </div>   
    </div>`
    
    
    })
    return feedHtml
    }
    
function render(){
    document.getElementById('feed').innerHTML = getfeedHtml()
}

render()

