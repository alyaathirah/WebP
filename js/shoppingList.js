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


var vegFruit = [{link:"images/products/Vegetables and Fruits/apple.png", name: "Apple 12pcs", price: "RM 10.99", inCart: 0},
                {link:"images/products/Vegetables and Fruits/apricot.png", name: "Appricot 6pcs", price: "RM 10.99", inCart: 0},
                {link:"images/products/Vegetables and Fruits/grapefruit.png", name: "Grapefruit 6pcs", price: "RM 12.99", inCart: 0},
                {link:"images/products/Vegetables and Fruits/orange.png", name: "Orange 10pcs", price: "RM 9.99", inCart: 0},
                {link:"images/products/Vegetables and Fruits/mango.png", name: "Mango", price: "RM 10.99", inCart: 0}]

let carts = document.querySelectorAll('.btn-cart');

for(let i = 0; i<carts.length; i++){
  carts[i].addEventListener('click', () => {
    console.log('clicked');
    console.log(vegFruit[i]);
    setItem(vegFruit[i]);
    //totalCost(products[i])
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


/*function totalCost(product) {
  
  let cartCost = localStorage.getItem('totalCost');
  if(cartCost != null){
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
  } else {
      localStorage.setItem("totalCost", product.price);
  }
  
}*/

function displayCart(){
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".appendList");
  console.log(cartItems);
    if(cartItems && productContainer){
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class = "row md">
        <div class = "col-md-1">
                <div class = "buttons">
                <span class="deletebtn" onclick="myFunction()" id ="1"></span>
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
                <button class="plus-btn button" type="button" name="button" onclick="addFx(this.id)" id = "btn2">
                  <img src="images/plus.svg" alt="" />
                </button>
                <input type="text" name="name" value="${item.inCart}" id = "quantity1"></input>
                <button class="minus-btn button" type="button" name="button" onclick="minusFx(this.id)" id = "btn2">
                  <img src="images/minus.svg" alt="" />
                </button>
              </div>
            </div>
    
            <div class = "col-md-1">
              <div class="total-price" id = "price1">${item.price}
              </div>
            </div>
    
            <div class = "col-md-1">
                <div class="stock-avail">
                Available
            </div>
              </div>
              </div>`
      });
    }
}

displayCart();


