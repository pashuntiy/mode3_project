let categoriesUl = document.querySelector('#categories')
let productsUl = document.querySelector('#products')


fetch('http://localhost:3000/categories')
.then(r => r.json())
.then(respond => {
  respond.forEach(item => {
    let li = document.createElement('LI')
    li.innerText = item.name
    li.setAttribute('data-id' , item.id)
    li.addEventListener('click', event => {renderProduct(event)})
    categoriesUl.append(li)
  })
})

function renderProduct(event){
  fetch(`http://localhost:3000/categories/${event.target.dataset.id}`)
  .then(r => r.json())
  .then(respond => {

    while (productsUl.firstChild){
      productsUl.removeChild(productsUl.firstChild)
    }
    
    respond.products.forEach(product => {
      let p = document.createElement('P')
      p.innerText = product.name
      productsUl.append(p)
    })
  })
}

// debugger