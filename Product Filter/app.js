let products = [
    {
        productName : "Regular White T-Shirt",
        category : "Topwear",
        price: "300",
        image: "./assets/white-tshirt.jpg"
    },
    {
        productName : "Beige Short Skirt",
        category : "Bottomwear",
        price: "400",
        image: "./assets/short-skirt.jpg"
    },
    {
        productName : "Smartwatch",
        category : "Watch",
        price: "300",
        image: "./assets/sporty-smartwatch.jpg"
    },
    {
        productName : "Knitted Top",
        category : "Topwear",
        price: "499",
        image: "./assets/knitted-top.jpg"
    },
    {
        productName : "Black Leather Jacket",
        category : "Jacket",
        price: "530",
        image: "./assets/black-leather-jacket.jpg"
    },
    {
        productName : "Pink Trousers",
        category : "Bottomwear",
        price: "200",
        image: "./assets/pink-trousers.jpg"
    },
    {
        productName : "Brown Jacket",
        category : "Jacket",
        price: "530",
        image: "./assets/brown-jacket.jpg"
    },
    {
        productName : "Gray Pants",
        category : "Bottomwear",
        price: "160",
        image: "./assets/comfy-gray-pants.jpg"
    },
    {
        productName : "Regular White T-Shirt RR",
        category : "Topwear",
        price: "300",
        image: "./assets/white-tshirt.jpg"
    },
    {
        productName : "Beige Short Skirt B2",
        category : "Bottomwear",
        price: "400",
        image: "./assets/short-skirt.jpg"
    },
    {
        productName : "Smartwatch XX1 A06",
        category : "Watch",
        price: "300",
        image: "./assets/sporty-smartwatch.jpg"
    },
    {
        productName : "Knitted Top xv",
        category : "Topwear",
        price: "499",
        image: "./assets/knitted-top.jpg"
    },
]

for (let el of products) {
    let card = document.createElement("div")
    card.classList.add("card", el.category, "hide")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")

    let image = document.createElement("img")
    image.setAttribute("src", el.image)

    imgContainer.append(image)
    card.append(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = el.productName.toUpperCase()
    container.append(name)

    let price = document.createElement("p")
    price.innerText = "Rp. " + el.price + "K"
    container.append(price)

    card.append(container)
    document.getElementById("products").appendChild(card)

}


const filterProduct = (val) => {
    let buttons = document.querySelectorAll(".button-value")
    buttons.forEach((button) => {
        if(val.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        } else{
            button.classList.remove("active")
        }
    })

    let allCards = document.querySelectorAll(".card")
    allCards.forEach((el) =>{
        if(val == "All"){
            el.classList.remove("hide")
        } else{
            if(el.classList.contains(val)){
                el.classList.remove("hide")
            } else{
                el.classList.add("hide")
            }
        }
    })
}

document.getElementById('search').addEventListener('click', ()=> {
    let searchInp = document.getElementById("search-input").value
    let productsList = document.querySelectorAll(".product-name")
   
    let cards = document.querySelectorAll('.card')


    productsList.forEach((list,idx) => {
    
        if(list.innerText.match(searchInp.toUpperCase())){
            cards[idx].classList.remove("hide")
        } else {
            // let notFound = document.createElement(p)
            // notFound.innerText = "Not Found"
            // document.getElementById("products").appendChild(notFound)
           
            cards[idx].classList.add("hide")
          
        }
    }) 
})


window.onload = () => {
    filterProduct("All")
}