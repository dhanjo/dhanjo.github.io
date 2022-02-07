function clearScreen(){
    document.getElementById("result").value = "";

}
function liveScreen(value){ // 1
    document.getElementById("result").value += value; 
}

function switchTheme() {
    let darkmode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "light.css"){
        theme.href = "dark.css";
        darkmode.innerHTML = "Light Mode"
    }else {
        theme.href = "light.css"
        darkmode.innerHTML = "Dark Mode"
    }

}

// git init
// git add .
// git commit -m "first commit"
// git remote add origin https://github.com/dhanjo/dhanjo.github.io.git
// git push