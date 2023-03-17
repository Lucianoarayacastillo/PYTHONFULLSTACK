function hide(element) {
    element.remove();
}
/*cambiandon login a logout*/ 
function turnlogout(element) {
    console.log(element);

    if (element.innerText == "login"){
        console.log;
        element.innerText = "logout";
    }
    else {
        element.innerText = "login";
        console.log;

    }
}


function showAlert(msg) {
    alert(msg)
}