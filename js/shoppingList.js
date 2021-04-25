    //------------------------JS for Modal----------------------------//

    //Delete ShoppingList
    function myFunction2() {
      var result = confirm("Confirm Deletion?");
      if (result) {
        var buttonID = "shoppinglist" + event.srcElement.id;
        var myobj = document.getElementById(buttonID);
        myobj.remove();
      }
    }

      //modal addSL
      $(document).ready(function(){
          $("#editForm").hide();
          $("#btn").click(function(e) {
              $("#editForm").show();
              $("#btn").hide();
          });
      });

      $(document).ready(function(){
          $("#btnClose").click(function(e) {
              $("#editForm").hide();
              $("#btn").show();
          });
      });

      //addSL
      var id = 3; 
      function addSL(){
        var input = document.getElementById("input").value;
        var old = document.getElementById("shoppinglist1");
        var newDiv = old.cloneNode(true);
        newDiv.id = "shoppinglist" + id;
        newDiv.querySelector(".deletebtn").id = id;
        newDiv.querySelector("#titleList").innerHTML = input;
        document.getElementById("newSL").appendChild(newDiv);
        id++;
        
      }
      //snackbar
      function snack() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      //------------------------JS for Modal----------------------------//


var vegFruit = [{link:"images/products/Vegetables and Fruits/apple.png", name: "Apple 12pcs", price: 10.99, inCart: 0},
                {link:"images/products/Vegetables and Fruits/apricot.png", name: "Appricot 6pcs", price: 10.99, inCart: 0},
                {link:"images/products/Vegetables and Fruits/grapefruit.png", name: "Grapefruit 6pcs", price: 12.99, inCart: 0},
                {link:"images/products/Vegetables and Fruits/orange.png", name: "Orange 10pcs", price: 9.99, inCart: 0},
                {link:"images/products/Vegetables and Fruits/mango.png", name: "Mango", price: 10.99, inCart: 0},
                {link:"images/products/Vegetables and Fruits/strawberry.png", name: "Strawberry", price: 10.99, inCart: 0},
                {link:"images/products/Vegetables and Fruits/watermelon.png", name: "Watermelon", price: 5.99, inCart: 0},
                {link:"images/products/Vegetables and Fruits/broccoli.png", name: "Brocolli", price: 9.99, inCart: 0},
                {link:"images/products/Vegetables and Fruits/cabbage.png", name: "Brocolli", price: 10.99, inCart: 0}]

let carts = document.querySelectorAll('.btn-cart');

for(let i = 0; i<carts.length; i++){
  carts[i].addEventListener('click', () => {
  //  console.log('clicked');
  //  console.log(vegFruit[i]);
    setItem(vegFruit[i]);
    totalCost(vegFruit[i]);
  })
}

function setItem(product){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  

  if(cartItems != null){

      if(cartItems[product.name] == undefined){
        cartItems = {
          ...cartItems,
          [product.name]:product
      }
        
      }

  cartItems[product.name].inCart += 1;

  }
  else{
    product.inCart = 1;
    cartItems = {
      [product.name]: product
    }
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  if(cartCost != null){
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
  } else {
      localStorage.setItem("totalCost", product.price);
  }
  
}

function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let mainList = document.querySelector(".mainList");
  let productContainer = document.querySelector(".appendList");
  let loggedIn = localStorage.getItem("status");
  let total = parseFloat(localStorage.getItem('totalCost'));
    if(cartItems && productContainer){
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        var id = 1;
        productContainer.innerHTML += `
        <br>
        <div class = "row md">
        <div class = "col-md-1">
                <div class = "buttons">
                <span class="deletebtn" onclick="myFunction()" id ="deletebtn${id}"></span>
                </div>
            </div>
    
            <div class = "col-md-2">
              <div class = "images">
              <img src="${item.link}" alt="" width="120" height="120"/>
              </div>
            </div>
    
            <div class = "col-md-3">
              <div class = "description" id = "nameProd">
                <span>${item.name}</span>
              </div>
            </div>
    
               <div class = "col-md-3">
              <div class="quantity">
                <button class="plus-btn button" type="button" name="button" id = "btn2">
                  <img src="images/plus.svg" alt="" />
                </button>
                <input type="text" name="name" value="${item.inCart}" id = "quantity1"></input>
                <button class="minus-btn button" type="button" name="button" id = "btn2">
                  <img src="images/minus.svg" alt="" />
                </button>
              </div>
            </div>
    
            <div class = "col-md-1">
              <div class="total-price" id = "price1">RM ${item.price * item.inCart} 
              </div>
            </div>
    
            <div class = "col-md-1">
                <div class="stock-avail">
                Available
            </div>
              </div>
              </div>`
              id = id+1;
      });
      productContainer.innerHTML+= `
      <div class = "sumPrice">
       <div class = "row md">
          <div class = "col-md-1">
            </div>
    
            <div class = "col-md-2">
            </div>
    
            <div class = "col-md-3">
            </div>
    
            <div class = "col-md-3">
            Total Price
            </div>
            
            <div class = "col-md-1" id = "sumPrice">RM${total} 
            </div>
        </div>
      </div>`;
    }
    else if (mainList && loggedIn){
      mainList.innerHTML = '';
      mainList.innerHTML = `
      <div class = "row md"><img src="images/happyshopping.png" alt="" width="300" height="300" class="center"/> </div> 
      <div class = "row md"><h5 class="center" style="font-family:Candara; color: black;">Your list is currently empty.
      Start listing your item(s) now!</h5></div><br>
      <div class="center">
        <a href = "homepage.html"><button style = "width: 50%" class= "buttonz">Return to Shop</button></a>
      </div><br>`;
    }

    else if (mainList){
      mainList.innerHTML = '';
      mainList.innerHTML = `
      <div class = "row md"><img src="images/happyshopping.png" alt="" width="300" height="300" class="center"/> </div>
      <div class = "row md"><h5 class="center" style="font-family:Candara; color: black;">You need to login first before using our shopping list(s)!</h5></div><br>
      <div class="center">
        <a href = "login.html"><button style = "width: 50%; margin-bottom: 5px;" class= "buttonz">Login</button></a>
      </div>
      <div class="center">
        <a href = "homepage.html"><button style = "width: 50%" class= "buttonz">Return to Shop</button></a>
      </div><br>`;
    }
}

displayCart();


