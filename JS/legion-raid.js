function display_valtan() {
    var valtan = document.getElementById('raid-valtan');
    var vykas = document.getElementById('raid-vykas');
    var kakul = document.getElementById('raid-kakul');
    if (window.getComputedStyle(valtan, null).getPropertyValue("display") !== 'none') {
        valtan.style.display = 'none';
    } else {
        vykas.style.display = 'none';
        kakul.style.display = 'none';
        valtan.style.display = 'flex';
    }
};

function display_vykas() {
    var valtan = document.getElementById('raid-valtan');
    var vykas = document.getElementById('raid-vykas');
    var kakul = document.getElementById('raid-kakul');
    if (window.getComputedStyle(vykas, null).getPropertyValue("display") !== "none") {
        vykas.style.display = 'none';
    } else {
        valtan.style.display = 'none';
        kakul.style.display = 'none';
        vykas.style.display = 'flex';
    }
};

function display_kakul() {
    var valtan = document.getElementById('raid-valtan');
    var vykas = document.getElementById('raid-vykas');
    var kakul = document.getElementById('raid-kakul');
    if (window.getComputedStyle(kakul, null).getPropertyValue("display") !== "none") {
        kakul.style.display = 'none';
    } else {
        valtan.style.display = 'none';
        vykas.style.display = 'none';
        kakul.style.display = 'flex';
    }
};
