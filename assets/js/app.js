function invertTheme() {
    var body = document.getElementById('body')
    if (body.classList.contains("theme-light")) {
        body.className = "";
        body.className += 'theme-dark';
    } else {
        body.className = "";
        body.className += 'theme-light';
    }
}
