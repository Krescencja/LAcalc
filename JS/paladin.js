function display_paladin() {
    var bard = document.getElementById('class-Bard');
    var paladin = document.getElementById('class-Paladin');
    if (window.getComputedStyle(paladin, null).getPropertyValue("display") !== "none") {
        paladin.style.display = 'none';
    } else {
        bard.style.display = 'none';
        paladin.style.display = 'flex';
    }
};

function get_values() {
    var specpaladin = document.getElementById('specpaladin');
    var swifpaladin = document.getElementById('swifpaladin');
    var dpspaladin = document.getElementById('dpspaladin');
    var specpaladin_right = document.getElementById('specpaladin_right');
    var swifpaladin_right = document.getElementById('swifpaladin_right');
    var dpspaladin_right = document.getElementById('dpspaladin_right');
    var specpaladin_footer = document.getElementById('specpaladin_footer');
    var swifpaladin_footer = document.getElementById('swifpaladin_footer');
    var dpspaladin_footer = document.getElementById('dpspaladin_footer');
};

function paladin_spec() {

    get_values();

    if (window.getComputedStyle(specpaladin, null).getPropertyValue("display") !== "none") {
        specpaladin.style.display = 'none';
        specpaladin_right.style.display = 'none';
        specpaladin_footer.style.display = 'none';
    } else {
        swifpaladin.style.display = 'none';
        dpspaladin.style.display = 'none';
        swifpaladin_right.style.display = 'none';
        dpspaladin_right.style.display = 'none';
        swifpaladin_footer.style.display = 'none';
        dpspaladin_footer.style.display = 'none';
        specpaladin_footer.style.display = 'flex';
        specpaladin_right.style.display = 'flex';
        specpaladin.style.display = 'flex';
    }
};

function paladin_swif() {

    get_values();

    if (window.getComputedStyle(swifpaladin, null).getPropertyValue("display") !== "none") {
        swifpaladin.style.display = 'none';
        swifpaladin_right.style.display = 'none';
        swifpaladin_footer.style.display = 'none';
    } else {
        specpaladin.style.display = 'none';
        dpspaladin.style.display = 'none';
        specpaladin_right.style.display = 'none';
        dpspaladin_right.style.display = 'none';
        specpaladin_footer.style.display = 'none';
        dpspaladin_footer.style.display = 'none';
        swifpaladin_footer.style.display = 'flex';
        swifpaladin_right.style.display = 'flex';
        swifpaladin.style.display = 'flex';
    }
};

function paladin_dps() {

    get_values();

    if (window.getComputedStyle(dpspaladin, null).getPropertyValue("display") !== "none") {
        dpspaladin.style.display = 'none';
        dpspaladin_right.style.display = 'none';
        dpspaladin_footer.style.display = 'none';
    } else {
        specpaladin.style.display = 'none';
        specpaladin_right.style.display = 'none';
        swifpaladin.style.display = 'none';
        swifpaladin_right.style.display = 'none';
        swifpaladin_footer.style.display = 'none';
        specpaladin_footer.style.display = 'none';
        dpspaladin_footer.style.display = 'flex';
        dpspaladin.style.display = 'flex';
        dpspaladin_right.style.display = 'flex';
    }
};

