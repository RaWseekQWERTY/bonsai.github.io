// js for dark mode
function mode() {
    var icon = document.getElementById("DarkButton");
    var cart_icon = document.getElementById("CartLogo");
    var bg = document.body.style.backgroundColor;
    var links = document.getElementsByTagName("a");
    var navbar = document.getElementById("Navbar");
    var search_icon = document.getElementById("searchICON");
    var search2 = document.getElementById("mainsearch");

    if(bg == "white")
    {
        document.body.style.backgroundColor= "darkslategrey";
        document.body.style.color = "white";
        search2.style.backgroundColor= "darkslategrey";
        navbar.style.backgroundColor= "darkslategrey";         
        icon.src = "/Images/sun.png";
        cart_icon.src = "/Images/white_cart_icon.png";
        search_icon.src = "/Images/whitesearch1.png";

        // Apply styles to all links
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "white";
        }
    }
    else
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        navbar.style.backgroundColor= "white";
        search2.style.backgroundColor= "white";
        icon.src = "/Images/moon.png";
        cart_icon.src = "/Images/cart_icon.png";
        search_icon.src = "Images/blacksearch.png";

        // Apply styles to all links
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = "black";
        }
    }
}


// js for cart item counter 
var cartItems=[];

var bonsai={
	name:"bonsai"

}

function addToCart(item){
	cartItems.push(item);
	document.getElementById("itemCounter").innerHTML=cartItems.length;
    alert("Added To Card Successfully");

}

/*navbar*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("Navbar").style.top = "0";
    } 
    else if(currentScrollPos == 0) {
        document.getElementById("Navbar").style.top = "45px";
    }
    else {
        document.getElementById("Navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }



