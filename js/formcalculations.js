 var prices = new Array();
 prices["t-shirt"]=10;
 prices["shorts"]=12;
 prices["jeans"]=15;
 var QuantityP= new Array();
 QuantityP["None"]=0;
 QuantityP["1"]=1;
 QuantityP["2"]=2;
 QuantityP["3"]=3;
function getProductPrice()
{  
    var productPrice=0;
    var theForm = document.forms["Clothes"];
    var selectedclothe = theForm.elements["selectedclothe"];
    for(var i = 0; i < selectedclothe.length; i++)
    {
        if(selectedclothe[i].checked)
        {
            productPrice = prices[selectedclothe[i].value];
            break;
        }
    }
    return productPrice;
}
function getQuantityPrice()
{
    var QuantityPrice=0;
    var theForm = document.forms["Clothes"];
    var selectedQuantity = theForm.elements["quantity"];
    QuantityPrice = QuantityP[selectedQuantity.value];
    return QuantityPrice;
}       
function calculateTotal()
{
    var productTotalPrice = getProductPrice() * getQuantityPrice();
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price: $"+productTotalPrice;
}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
function myFunction() {
    alert("Purchase Completed! Thank you!");
}