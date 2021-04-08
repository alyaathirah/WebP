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
    'RM 10.99/packet', 'RM 10.99/kg', 'RM 12.99/kg', 'RM 9.99/kg',

]

var instantFood_imgs = [
    'images/products/Instant Food/ayamasBall.png',
    'images/products/Instant Food/ayamasDrumet.png',
    'images/products/Instant Food/ayamasNugget.png',
    'images/products/Instant Food/ayamasSosej.png',
    'images/products/Instant Food/campbellChickenBox.png',
    'images/products/Instant Food/campbellChickenCan.png',
    'images/products/Instant Food/campbellOriBox.png',
    'images/products/Instant Food/campbellOriCan.png',
    'images/products/Instant Food/maggiAyam.png',
    'images/products/Instant Food/maggiCup.png',
    'images/products/Instant Food/maggiTomyam.png',
    'images/products/Instant Food/maggi.png',
    'images/products/Instant Food/ramenDouble.png',
    'images/products/Instant Food/samyangCarbo.png',
    'images/products/Instant Food/samyangCheese.png',
    'images/products/Instant Food/samyangOri.png',
]

var instantFood_names = [
    'Ayamas Ball', 'Ayamas Drumet', 'Ayamas Nugget', 'Ayamas Sosej',
    'Campbell Chicken Box', 'Campbell Chicken Can', 'Campbell Ori Box', 'Campbell Ori Can',
    'Maggi Ayam', 'Assorted Maggi Cup', 'Maggi TomYam', 'Maggi Kari', 'Ramen Double',
    'Samyang Carbonara', 'Samyang Cheese', 'Samyang Original',
]

var instantFood_prices = [
    'RM 10.99', 'RM 10.99', 'RM 12.99', 'RM 9.99',
    '10.99', 'RM 10.99', 'RM 5.99', 'RM 9.99',
    'RM 10.99', 'RM 10.99', 'RM 12.99', 'RM 5.95',
    'RM 10.99', 'RM 10.99', 'RM 12.99', 'RM 9.99',
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
else if (title == 'Instant Food'){
    window.onload = function(){

        var m = 1;
        for (i = 0; i < 16; i++) {

            var img = "prdimg" + m;
            document.getElementById(img).src = instantFood_imgs[i];

            var name = "prd_name" + m;
            document.getElementById(name).innerText = instantFood_names[i];

            var price = "prd_price" + m;
            document.getElementById(price).innerText = instantFood_prices[i];
            m++;
          }
    }
}





