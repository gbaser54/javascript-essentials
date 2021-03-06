// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "product1.jpeg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "product2.jpeg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "product3.png",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "product4.jpeg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "product5.jpeg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "product6.jpg",
    description: "Good looking Traditional Dress",
  },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

//function addProduct(e) {
 // e.preventDefault();
  //let p = {};
  //let id = document.getElementById("id").value;
  //let name = document.getElementById("name").value;
  //let size = document.getElementById("size").value;
  //let color = document.getElementById("color").value;
  //let price = document.getElementById("price").value;
  //let height = document.getElementById("height").value;
  //function upload()
  //{
    //var fileinput = document.getElementById("img");
    //var filename = fileinput.value;
  //}
  //let description = document.getElementById("description").value;
  //p.id = id;
  //p.name = name;
  //p.size = size;
  //p.color = color;
  //p.price = price;
  //p.img=filename;
  //p.description=description;

  //   superheroes.push(superhero);

  //let superheroes = JSON.parse(localStorage.getItem("superheroes"));
  //products.push(p);
  //localStorage.setItem("superheroes", JSON.stringify(superheroes));

  //displayProducts(products);

  //document.getElementById("id").value = "";
  //document.getElementById("name").value = "";
  //document.getElementById("size").value = "";
  //document.getElementById("color").value = "";
  //document.getElementById("price").value = "";
  //document.getElementById("img").value="";
  //document.getElementById("description").value="";
//}

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}
//function minProduct() {
  //let searchedProducts = products.filter(function (product, index) {
    //let searchString =
     // product.price;

   // return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  //});

  //displayProducts();
//}
//function maxProduct() {
  //let searchedProducts = products.filter(function (product, index) {
    //let searchString =
      //product.price;

    //return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  //});

  //displayProducts();
//}
// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);
  if(cart.length==0)
  {noitems=0;}
  //   putting in cart
  if(cart.indexOf(pro)!=-1)
  { document.getElementById("message").innerHTML="PRODUCT IS ALREADY IN THE CART"
    }
  else
  {document.getElementById("message").innerHTML=" "
  cart.push(pro);
  noitems++;
  document.getElementById("count").innerHTML=noitems;
  }
  // noitems++;
  //document.getElementById("count").value=noitems;
  //document.write(noitems);
  displayProducts(cart, "cart");
  //document.getElementById("message").innerHTML=" "
  //document.write(noitems);
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index

  cart.splice(index, 1);
  noitems--;
  document.getElementById("count").innerHTML=noitems;
  displayProducts(cart, "cart");
}