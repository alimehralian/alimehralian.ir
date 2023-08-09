console.log(localStorage.theme);

// auto check theme
if (localStorage.theme === 'dark') {
    document.getElementById("moon_mode").style.display = "none";
    document.getElementById("sun_mode").style.display = "block";
} else {
    document.getElementById("moon_mode").style.display = "block";
    document.getElementById("sun_mode").style.display = "none";
}

function dark_switch() {

    if(document.documentElement.classList.contains("dark")){
        localStorage.theme = "light";
        document.documentElement.classList.toggle("dark");

    }else{
        localStorage.theme = "dark";
        document.documentElement.classList.toggle("dark");
    }

}


a = Date.now();
console.log(new Date(a));

