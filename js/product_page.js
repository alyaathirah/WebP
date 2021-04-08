var vegFruit_imgs = [
    'images/products/Vegetables and Fruits/apple.png',
    'images/products/Vegetables and Fruits/apricot.png',
    'images/products/Vegetables and Fruits/grapefruit.png',
    'images/products/Vegetables and Fruits/orange.png',
    'images/products/Vegetables and Fruits/mango.png',
    'images/products/Vegetables and Fruits/strawberry.png',
    'images/products/Vegetables and Fruits/watermelon.png',
    'images/products/Vegetables and Fruits/broccoli.png',
    'images/products/Vegetables and Fruits/cabbage.png',
    'images/products/Vegetables and Fruits/cauliflower.png',
    'images/products/Vegetables and Fruits/cucumber.png',
    'images/products/Vegetables and Fruits/garlic.png',
    'images/products/Vegetables and Fruits/kiwi.png',
    'images/products/Vegetables and Fruits/pepper.png',
    'images/products/Vegetables and Fruits/spinach.png',
    'images/products/Vegetables and Fruits/tomato.png'
]

var vegFruit_names = [
    'Apple 12pcs', 'Appricot 6pcs', 'Grapefruit 6pcs', 'Orange 10pcs',
    'Mango', 'Strawberry', 'Watermelon', 'Broccoli',
    'Cabbage', 'Cauliflower', 'Cucumber', 'Garlic',
    'Kiwi', 'Pepper', 'Spinach', 'Tomato'
]

var vegFruit_prices =[
    'RM 10.99', 'RM 10.99', 'RM 12.99', 'RM 9.99',
    '10.99/kg', 'RM 10.99/packet', 'RM 5.99/kg', 'RM 9.99/kg',
    'RM 10.99/kg', 'RM 10.99/kg', 'RM 12.99/kg', 'RM 9.99/kg',
    'RM 10.99/packet', 'RM 10.99/kg', 'RM 12.99/kg', 'RM 9.99kg',

]

var title = document.getElementById("page_title").textContent;

if (title == 'Fruits and Vegetables'){
    window.onload = function(){

        var m = 1;
        for (i = 0; i < 16; i++) {

            var img = "prdimg" + m;
            document.getElementById(img).src = vegFruit_imgs[i];

            var name = "prd_name" + m;
            document.getElementById(name).innerText = vegFruit_names[i];

            var price = "prd_price" + m;
            document.getElementById(price).innerText = vegFruit_prices[i];
            m++;
          }
    }
}





