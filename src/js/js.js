// auto check theme
document.getElementById("moon_mode").style.display = "none";
document.getElementById("sun_mode").style.display = "block";
localStorage.theme = "dark";

function dark_switch() {
    
    if(document.documentElement.classList.contains("dark")){
        localStorage.theme = "light";
        document.documentElement.classList.toggle("light");
    }else{
        localStorage.theme = "dark";
        document.documentElement.classList.toggle("dark");
    }

    location.reload();

}


a = Date.now();
console.log(new Date(a));

