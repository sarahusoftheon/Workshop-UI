function changeTheme(color) {
    var themeElement = document.getElementById('theme');

    if (themeElement) {
        switchTheme(color);
        updateCDN(color);
    } else {
        addTheme(color);
        updateCDN(color);
    }
    updateHeaderBanner(color);
}

function switchTheme(color) {
    var theme = "https://softheonworkshop.azureedge.net/beta-5/workshop." + color + ".min.css";
    link.href = theme;
}

function addTheme(color) {
    link = document.createElement('link');
    var theme = "https://softheonworkshop.azureedge.net/beta-5/workshop." + color + ".min.css";

    link.href = theme;
    link.rel ='stylesheet';
    link.id ='theme';

    document.getElementsByTagName('head')[0].appendChild(link);
}

function updateCDN(color) {
    var theme = "https://softheonworkshop.azureedge.net/beta-5/workshop." + color + ".min.css";
    document.querySelector('#__code_0 > pre').innerText = theme;
}

function updateHeaderBanner(color) {
    var banner = document.getElementsByClassName('md-main')[0];
    banner.classList.add("themed-bg");
}