// Updates the copyright date to the current date
function showCopyright() {
    var currentYear = new Date().getFullYear();
    var output = '<p style=\"font-family: Roboto Light !important; overflow: auto; white-space: nowarp;\"><strong>Copyright © ' + currentYear + '</strong> Christopher Aytona. All Rights Reserved.</p>';

    document.getElementById("copyright").innerHTML = output;
}

// Scrolling to the top of the page function
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 30) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

// Shortcut to generate the code button with param of the language name
function codeButton(name) {
    document.write('<button type=\"button\" class=\"btn btn-info btn-xs hvr-bounce-in\"><img src=\"imgs/btnicons/code.png\">' + ' ' + name + '</button>');
}

// Shortcut to generate the engine button with param of the engine name
function engineButton(name) {
    document.write('<button type=\"button\" class=\"btn btn-info btn-xs hvr-bounce-in\"><img src=\"imgs/btnicons/engine.png\">' + ' ' + name + '</button>');
}

// Shortcut to generate the build button with different icons depending on the build
function buildButton(name) {
    name = name.replace(/\s+/g, '');
    var output = '<button type=\"button\" class=\"btn btn-info btn-xs hvr-bounce-in\">';
    var mobile = '<img src=\"imgs/btnicons/mobile.png\">';
    var console = '<img src=\"imgs/btnicons/console.png\">';
    var pc = '<img src=\"imgs/btnicons/keyboard.png\">';
    switch (name) {
        case 'Mobile':
            output += mobile;
            break;
        case 'Console':
            output += console;
            break;
        case 'PC':
        default:
            output += pc;
            break;
    }
    output += ' ' + name + '</button>';
    document.write(output);
}

// Shortcut to generate the group button with the role in the group
function groupButton(role) {
    document.write('<button type="button" class="btn btn-info btn-xs hvr-bounce-in" data-toggle="tooltip" data-placement="bottom" title="Role: ' + role + '"><img src="imgs/btnicons/group.png"> Group</button>');
}

// Shortcut to generate the open source button with the link to the source
function openSourceButton(link) {
    document.write('<button onclick="newWindow(\'' + link + '\')" type="button" class="btn btn-info btn-xs hvr-bounce-in"><img src="imgs/btnicons/public.png"> Source</button>');
}

// Shortcut to generate the school button with the name of the course
function schoolButton(course) {
    document.write('<button type="button" class="btn btn-info btn-xs hvr-bounce-in" data-toggle="tooltip" data-placement="bottom" title="' + course + '"><img src="imgs/btnicons/school.png"> School</button>');
}

// Opens a new tab using the url param
function newWindow(link) {
    window.open(link);
}

// Basic modal shortcut that includes a download
function modalDownload(id, title, body, dlFile) {
    document.write('<div class=\"modal fade\" id=\"' + id + '\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog modal-lg\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h3 class=\"modal-title\" id=\"ModalLabel\">' + title + '</h3></div><div class=\"modal-body\">' + body + '</div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button><a type=\"button\" class=\"btn btn-primary\" href=\"' + dlFile + '\" download>Download</a></div></div></div></div>')
}