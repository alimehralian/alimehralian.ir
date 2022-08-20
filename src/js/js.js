// auto check theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.getElementById("moon_mode").style.display = "none";
    document.getElementById("sun_mode").style.display = "block";
} else {
    document.getElementById("moon_mode").style.display = "block";
    document.getElementById("sun_mode").style.display = "none";
}

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

