
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


$(document).ready(function () {

    // Show dropdown
    $('.selected').click(function () {
        $('.custom-sel').addClass('show-sel');
        $('.custom-sel a').removeClass('hidden');
    });

    // Hide dropdown when not focused
    $('.custom-sel').focusout(function () {
        $('.custom-sel').removeClass('show-sel');
        $('.custom-sel a:not(:first)').addClass('hidden');
    }).blur(function () {
        $('.custom-sel').removeClass('show-sel');
        $('.custom-sel a:not(:first)').addClass('hidden');
    });

});

