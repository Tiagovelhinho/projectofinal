let products = {
  data: [
    {
      productName: "blue bang bang",
      category: "sports",
      price: "15000",
      fuel:"gasoline",
      image: "img/car-1.png",
    },
    {
      productName: "white swanky",
      category: "supercar",
      price: "25000",
      fuel:"diesel",
      image: "img/car-2.png",
    },
    {
      productName: "slow yellow",
      category: "compact",
      price: "9999",
      fuel:"gasoline",
      image: "img/car-3.png",
    },
    {
      productName: "sea velvet",
      category: "sports",
      price: "20000",
      fuel:"diesel",
      image: "img/car-4.png",
    },
    {
      productName: "flash",
      category: "hypercar",
      price: "60000",
      fuel:"gasoline",
      image: "img/car-5.png",
    },
    {
      productName: "burning black",
      category: "supercar",
      price: "29000",
      fuel:"diesel",
      image: "img/vehicle-5.png",
    },
    {
      productName: "greenish power",
      category: "hypercar",
      price: "31000",
      fuel:"diesel",
      image: "img/car-7.png",
    },
    {
      productName: "grey shot",
      category: "supercar",
      price: "28000",
      fuel:"gasoline",
      image: "img/car-8.png",
    },
    {
      productName: "pow pow",
      category: "compact",
      price: "13000",
      fuel:"diesel",
      image: "img/vehicle-6.png",
    },
  ],
};






let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active')
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active')
}

window.onscroll = () =>{
    
    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');

    }else{
        document.querySelector('header').classList.remove('active');
    }
    
    menu.classList.remove('fa-times');


}

window.onload = () =>{
    
    if(window.scrollY > 0){
        document.querySelector('header').classList.add('active');

    }else{
        document.querySelector('header').classList.remove('active');
    }
    
}

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden 
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = i.price + "$" ;
  container.appendChild(price);
  //fuel
  let fuel = document.createElement("h7");
  fuel.classList.add("fuel");
  fuel.innerText = i.fuel.toUpperCase();
  container.appendChild(fuel);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}


function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
 
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});


window.onload = () => {
  filterProduct("all");
};

var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

 