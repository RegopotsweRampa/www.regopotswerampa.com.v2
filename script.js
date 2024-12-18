function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.width === "250px") {
        menu.style.width ="0";
    } else {
        menu.style.width = "250px"
    }
}

function redirectToProject01(){
    window.location.href = "project-01.html"
}
function redirectToProject02(){
    window.location.href = "project-02.html"
}
function redirectToProject03(){
    window.location.href = "project-03.html"
}


function redirectToHome(){
    window.location.href = "index.html"
}