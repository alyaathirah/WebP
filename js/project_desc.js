function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity1").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

window.onload = function(){
    document.getElementById("product_name").innerHTML = localStorage.getItem("name_storage");
    document.getElementById("product_price").innerHTML = localStorage.getItem("price_storage");
    document.getElementById("prdimg").src = localStorage.getItem("image_storage"); 
}

//------------------------JS for Modal----------------------------//

    //Delete ShoppingList
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
  
  
     