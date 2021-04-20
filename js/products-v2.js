var vegFruit = [{link:"images/products/Vegetables and Fruits/apple.png", name: "Apple 12pcs", price: "RM 10.99"},
                {link:"images/products/Vegetables and Fruits/apricot.png", name: "Appricot 6pcs", price: "RM 10.99"},
                {link:"images/products/Vegetables and Fruits/grapefruit.png", name: "Grapefruit 6pcs", price: "RM 12.99"},
                {link:"images/products/Vegetables and Fruits/orange.png", name: "Orange 10pcs", price: "RM 9.99"},
                {link:"images/products/Vegetables and Fruits/mango.png", name: "Mango", price: "RM 10.99"}]
                

window.onload = function(){

    var m = 1;
    for(var i = 0; i < vegFruit.length; i++) {
        var prd_item = document.createElement("div");
        var prdItem_num = "prdItem" + m;
        prd_item.className = "product";
        prd_item.id = prdItem_num;
        document.getElementById("product-items").appendChild(prd_item);
    
        var prd_content = document.createElement("div");
        var prdCont_num = "prdCont" + m;
        prd_content.className = "product-content";
        prd_content.id = prdCont_num;
        document.getElementById(prdItem_num).appendChild(prd_content);
    
        var prd_img = document.createElement("div");
        var prdImg_num = "prdimg" + m;
        prd_img.className = "product-img";
        prd_img.id = prdImg_num;
        document.getElementById(prdCont_num).appendChild(prd_img);
    
        var img = document.createElement("img");
        img.id = "prdimg";
        img.src = vegFruit[i].link;
        img.alt = "product image"
        document.getElementById(prdImg_num).appendChild(img);
    
        var prd_btns = document.createElement("div");
        var prdBtn_num = "prdBtn" + m;
        prd_btns.className = "product-btns";
        prd_btns.id = prdBtn_num;
        document.getElementById(prdCont_num).appendChild(prd_btns);

        var a = document.createElement("a");
        var addToList_num = "addToList" + m;
        a.id = addToList_num;
        a.setAttribute("href", "login.html");
        document.getElementById(prdBtn_num).appendChild(a);
    
        var btnA = document.createElement("button");
        var btnA_num = "btn-cart" + m;
        btnA.className = "btn-cart";
        btnA.id = btnA_num;
        btnA.textContent = "add to list";
        document.getElementById(addToList_num).appendChild(btnA);

        var b = document.createElement("a");
        var viewItem_num = "viewItem" + m;
        b.id = viewItem_num;
        b.setAttribute("href", "product_desc.html");
        document.getElementById(prdBtn_num).appendChild(b);
        
        var btnB = document.createElement("button");
        var btnB_num = "btn-buy" + m;
        btnB.className = "btn-buy";
        btnB.id = btnB_num;
        btnB.textContent = "view item";
        document.getElementById(viewItem_num).appendChild(btnB);

        var prd_info = document.createElement("div");
        var prdInfo_num = "product-info" + m;
        prd_info.className = "product-info";
        prd_info.id = prdInfo_num;
        document.getElementById(prdItem_num).appendChild(prd_info);

        var prd_name = document.createElement("a");
        var prdName_num = "product-name" + m;
        prd_name.id = prdName_num;
        prd_name.className = "product-name";
        prd_name.setAttribute("href", "#");
        prd_name.textContent = vegFruit[i].name;
        document.getElementById(prdInfo_num).appendChild(prd_name);

        var prd_price = document.createElement("p");
        var prdPrice_num = "product-price" + m;
        prd_price.id = prdPrice_num;
        prd_price.className = "product-price";
        prd_price.textContent = vegFruit[i].price;
        document.getElementById(prdInfo_num).appendChild(prd_price);
        m++;
    }
                
}