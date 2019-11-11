let categoriesUl = document.querySelector('#categories')
let productsUl = document.querySelector('#products')
let productDiv = document.querySelector('#display-product')
let newProductBTN = document.getElementById("new-product")
let addProductDIV = document.getElementById("add-product")

fetch('http://localhost:3000/categories')
.then(r => r.json())
.then(respond => {
  
  respond.forEach(item => {
    let li = document.createElement('LI')
    li.innerText = item.name
    li.setAttribute('data-id' , item.id)
    li.addEventListener('click', event => {renderProductsList(event)})
    categoriesUl.append(li)   
  })
  addNewProduct(respond)
})


function renderProductsList(event){
  fetch(`http://localhost:3000/categories/${event.target.dataset.id}`)
  .then(r => r.json())
  .then(respond => {

    while (productsUl.firstChild){
      productsUl.removeChild(productsUl.firstChild)
    }
    // while (productDiv.firstChild){
    //   productDiv.removeChild(productDiv.firstChild)
    // }

    respond.products.forEach(product => {
      let p = document.createElement('P')
      p.innerText = product.name
      p.setAttribute('data-id' , product.id)
      p.addEventListener('click', event => {renderProduct(event)})
      productsUl.append(p)
    })
  })
}

function renderProduct(event){
  fetch(`http://localhost:3000/products/${event.target.dataset.id}`)
  .then(r => r.json())
  .then(respond => {

    while (productDiv.firstChild){
      productDiv.removeChild(productDiv.firstChild)
    }

    let h1 = document.createElement('H1')
    let p = document.createElement('P')
    let pCost = document.createElement('P')
    let pOrigin = document.createElement('P')
    let pRating = document.createElement('P')
    let img = document.createElement('IMG')

    h1.innerText  = respond.name
    p.innerText = respond.description
    pCost.innerText = `Cost: ${respond.cost}`
    pOrigin.innerText = `Origin: ${respond.origin}`
    pRating.innerText = `Overage rating: ${respond.average_rating}`
    img.setAttribute('src', respond.image)
    img.setAttribute('height', '500')
    img.setAttribute('width', '500')

    productDiv.append(h1, p, img, pCost, pOrigin, pRating)
    // debugger
  })
}

function addNewProduct(respond){
  
  newProductBTN.addEventListener("click", () => {
    let newProductFORM = document.createElement("form")
    // name
    let nameLabel = document.createElement("label")
    nameLabel.innerText = "Name:"
    let nameInput = document.createElement("input")
    nameInput.name = "name"
    nameInput.type = "text"
    // image
    let imageLabel = document.createElement("label")
    imageLabel.innerText = "Image:"
    let imageInput = document.createElement("input")
    imageInput.name = "image"
    imageInput.type = "text"
    // description
    let descLabel = document.createElement("label")
    descLabel.innerText = "Description:"
    let descInput = document.createElement("input")
    descInput.name = "description"
    descInput.type = "text"
    // origin
    let originLabel = document.createElement("label")
    originLabel.innerText = "Origin:"
    let originInput = document.createElement("input")
    originInput.name = "origin"
    originInput.type = "text"
    // cost
    let costLabel = document.createElement("label")
    costLabel.innerText = "Cost:"
    let costInput = document.createElement("input")
    costInput.name = "cost"
    costInput.type = "number"
    // category
    let categoryLabel = document.createElement("label")
    categoryLabel.innerText = "Category:"
    let categorySelect = document.createElement("select")
    categorySelect.name = "selectCategory"
    respond.forEach((category) => {
      let categoryOption = document.createElement("option")
      categoryOption.innerText = category.name
      categoryOption.id = category.id 
      categorySelect.append(categoryOption)
    })
    // submit
    let submitInput = document.createElement("input")
    submitInput.value = "ADD TO THE BLACK MARKET"
    submitInput.type = "submit"

    newProductBTN.remove()

    newProductFORM.append(nameLabel, nameInput, imageLabel, imageInput, descLabel, descInput, originLabel, originInput, costLabel, costInput, categoryLabel, categorySelect, submitInput)
    addProductDIV.append(newProductFORM)

    newProductFORM.addEventListener("submit", (e) => {
      debugger
      e.preventDefault()
      fetch(`http://localhost:3000/products`, {
        method:'POST',
        headers: { 
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          name: e.target.name.value,
          image: e.target.image.value,
          description: e.target.description.value,
          origin: e.target.origin.value,
          cost: e.target.cost.value,
          category_id: e.target.selectCategory.selectedIndex + 1

          
        })
      })
      debugger
    })
 })
}
// debugger