function display_bard() {
    var bard = document.getElementById('class-Bard');
    var paladin = document.getElementById('class-Paladin');
    if (window.getComputedStyle(bard, null).getPropertyValue("display") !== 'none') {
        bard.style.display = 'none';
    } else {
        paladin.style.display = 'none';
        bard.style.display = 'flex';
    }
};

function get_values() {
    var specbard = document.getElementById('specbard');
    var swifbard = document.getElementById('swifbard');
    var dpsbard = document.getElementById('dpsbard');
    var specbard_right = document.getElementById('specbard_right');
    var swifbard_right = document.getElementById('swifbard_right');
    var dpsbard_right = document.getElementById('dpsbard_right');
    var specbard_footer = document.getElementById('specbard_footer');
    var swifbard_footer = document.getElementById('swifbard_footer');
    var dpsbard_footer = document.getElementById('dpsbard_footer');
    var toggle_bard_spec = document.getElementById('toggle_bard_spec');
    var toggle_bard_dps = document.getElementById('toggle_bard_dps');
    var toggle_bard_swif = document.getElementById('toggle_bard_swif');
};

function bard_spec() {

    get_values();

    if (window.getComputedStyle(specbard, null).getPropertyValue("display") !== "none") {
        specbard.style.display = 'none';
        specbard_right.style.display = 'none';
        specbard_footer.style.display = 'none';
        toggle_bard_spec.style.textShadow = "none";
    } else {
        swifbard.style.display = 'none';
        dpsbard.style.display = 'none';
        swifbard_right.style.display = 'none';
        dpsbard_right.style.display = 'none';
        swifbard_footer.style.display = 'none';
        toggle_bard_swif.style.textShadow = "none";
        dpsbard_footer.style.display = 'none';
        toggle_bard_dps.style.textShadow = "none";
        specbard_footer.style.display = 'flex';
        specbard_right.style.display = 'flex';
        specbard.style.display = 'flex';
        toggle_bard_spec.style.textShadow = "0px 0px 15px red";
    }
};

function bard_swif() {

    get_values();

    if (window.getComputedStyle(swifbard, null).getPropertyValue("display") !== "none") {
        swifbard.style.display = 'none';
        swifbard_right.style.display = 'none';
        swifbard_footer.style.display = 'none';
        toggle_bard_swif.style.textShadow = "none";
    } else {
        specbard.style.display = 'none';
        dpsbard.style.display = 'none';
        specbard_right.style.display = 'none';
        dpsbard_right.style.display = 'none';
        specbard_footer.style.display = 'none';
        toggle_bard_spec.style.textShadow = "none";
        dpsbard_footer.style.display = 'none';
        toggle_bard_dps.style.textShadow = "none";
        swifbard_footer.style.display = 'flex';
        swifbard_right.style.display = 'flex';
        swifbard.style.display = 'flex';
        toggle_bard_swif.style.textShadow = "0px 0px 15px red";
    }
};

function bard_dps() {

    get_values();

    if (window.getComputedStyle(dpsbard, null).getPropertyValue("display") !== "none") {
        dpsbard.style.display = 'none';
        dpsbard_right.style.display = 'none';
        dpsbard_footer.style.display = 'none';
        toggle_bard_dps.style.textShadow = "none";
    } else {
        specbard.style.display = 'none';
        specbard_right.style.display = 'none';
        toggle_bard_spec.style.textShadow = "none";
        swifbard.style.display = 'none';
        swifbard_right.style.display = 'none';
        swifbard_footer.style.display = 'none';
        swifbard_footer.style.display = 'none';
        toggle_bard_swif.style.textShadow = "none";
        dpsbard_footer.style.display = 'flex';
        dpsbard.style.display = 'flex';
        dpsbard_right.style.display = 'flex';
        toggle_bard_dps.style.textShadow = "0px 0px 15px red";
    }
};

