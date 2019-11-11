let categoriesUl = document.querySelector('#categories')
let productsUl = document.querySelector('#products')
let productDiv = document.querySelector('#display-product')

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

// debugger