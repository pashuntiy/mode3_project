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
    let reviewsUl = document.createElement('UL')

    let form = document.createElement('form')
    let reviewAuthorLabel = document.createElement('label')
    let reviewText = document.createElement('textarea')
    let reviewTextLabel = document.createElement('label')
    let reviewAuthor = document.createElement('textarea')

    let reviewSubmit = document.createElement('input')

    let retingSelectLabel = document.createElement('label')
    let retingSelect = document.createElement('select')
    let optionOne = document.createElement('option')
    let optionTwo = document.createElement('option')
    let optionThree = document.createElement('option')
    let optionFour = document.createElement('option')
    let optionFive = document.createElement('option')

    h1.innerText  = respond.name
    p.innerText = respond.description
    pCost.innerText = `Cost: ${respond.cost}`
    pOrigin.innerText = `Origin: ${respond.origin}`
    pRating.innerText = `Overage rating: ${respond.average_rating}`

    img.setAttribute('src', respond.image)
    img.setAttribute('height', '500')
    img.setAttribute('width', '500')

    reviewsUl.setAttribute('id', 'reviews-list')

    form.setAttribute('id', respond.id)
    form.addEventListener('submit',  event => {submitReview(event)})

    reviewTextLabel.setAttribute('name', 'review')
    reviewTextLabel.innerText = 'Review'
    reviewText.setAttribute('name', 'review')

    reviewAuthor.setAttribute('name', 'author')
    reviewAuthorLabel.innerText = 'Author'
    reviewAuthorLabel.setAttribute('name', 'author')

    reviewSubmit.setAttribute('type', 'submit')

    retingSelectLabel.setAttribute('name', 'rating')
    retingSelectLabel.innerText = 'Rating'
    retingSelect.setAttribute('name', 'rating')
    optionOne.setAttribute('value', '1')
    optionOne.innerText = '1'
    optionTwo.setAttribute('value', '2')
    optionTwo.innerText = '2'
    optionThree.setAttribute('value', '3')
    optionThree.innerText = '3'
    optionFour.setAttribute('value', '4')
    optionFour.innerText = '4'
    optionFive.setAttribute('value', '5')
    optionFive.innerText = '5'

    retingSelect.append(optionOne, optionTwo, optionThree, optionFour, optionFive)
    form.append(reviewTextLabel, reviewText, reviewAuthorLabel, reviewAuthor, retingSelectLabel, retingSelect, reviewSubmit)

    respond.reviews.forEach(review => {
      let reviewLi = document.createElement('li')
      let reviewText = document.createElement('p')
      let reviewAuthor = document.createElement('p')

      reviewText.innerText = review.text
      reviewAuthor.innerText = review.author

      reviewLi.append(reviewText, reviewAuthor)
      reviewsUl.append(reviewLi)
    })

    productDiv.append(h1, p, img, pCost, pOrigin, pRating, form, reviewsUl)
  })
}

function submitReview(event){
  event.preventDefault()
  fetch(`http://localhost:3000/reviews/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      author: event.target['author'].value,
      text: event.target['review'].value,
      rating: event.target['rating'].value,
      product_id: event.target.id
    })
  })
  .then(r => r.json())
  .then(respond => {
    let productDiv = document.querySelector('#display-product')
    let reviewsUl = productDiv.querySelector('#reviews-list')
    let newReview = document.createElement('span')

    newReview.innerText = respond.text
    reviewsUl.append(newReview)
    productDiv.append(reviewsUl)
  })

}

// debugger