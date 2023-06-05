const products = [
    {
        image:"./images/product-image.png",
        title:"title",
        description:"description",
        category:shoes,
        activePrice:"12 980" ,
        inactivePrice :"11 033",
        new:"./images/new.png"
    },
    {
        image:"./images/product-image.png",
        title:"title",
        description:"description",
        category:shoes,
        activePrice:"12 980" ,
        inactivePrice :"11 033",
        new:"./images/new.png"
    },
    {
        image:"./images/product-image.png",
        title:"title",
        description:"description",
        category:shoes,
        activePrice:"12 980" ,
        inactivePrice :"11 033",
        new:"./images/new.png"
    },{
        image:"./images/product-image.png",
        title:"title",
        description:"description",
        category:shoes,
        activePrice:"12 980" ,
        inactivePrice :"11 033",
        new:"./images/new.png"
    },{
        image:"./images/product-image.png",
        title:"title",
        description:"description",
        category:shoes,
        activePrice:"12 980" ,
        inactivePrice :"11 033",
        new:"./images/new.png"
    },{
        image:"./images/product-image.png",
        title:"title",
        description:"description",
        category:shoes,
        activePrice:"12 980" ,
        inactivePrice :"11 033",
        new:"./images/new.png"
    }
]


const productsContainer = document.getElementById('products__row')
products.map((el) => {
    const  productItem = document.createElement('div')
    productItem.classList.add('product-item');
    productItem.innerHTML = `
    <div class="product-item-img"><img class="product-image" src="${el.image}"><img class="new-img" src="${el.new}"><i class="fa-regular fa-heart fa-2xl"></i></div>
    <div class="product-item-description">
      <p class=" description-title text-p-16px-600-montserrat ">${el.title}</p>
      <p class=" description-paragraph text-p-14px-500-montserrat-gray ">Lorem ipsum dolor sit amet, consectetur</p>
      <div class="product-item-price">
        <p class="active-price text-p-15px-600-montserrat-white">${el.activePrice} ₽</p>
        <div class="line"></div>
        <p class="inactive-price text-p-15px-600-montserrat-gray">${el.inactivePrice} ₽</p>
      </div>
    </div>
    `
    productsContainer.appendChild(productItem)
})