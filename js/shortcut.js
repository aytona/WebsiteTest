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