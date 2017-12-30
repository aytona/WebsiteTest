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
function codeButton(name, id) {
    var parentNode = document.getElementById(id);

    var buttonNode = document.createElement("button");
    buttonNode.type = "button";
    buttonNode.className = "btn btn-info btn-xs hvr-bounce-in";
    parentNode.appendChild(buttonNode);

    var imgNode = document.createElement("img");
    imgNode.src = "imgs/btnicons/code.png";
    buttonNode.appendChild(imgNode);

    var nameNode = document.createTextNode(" " + name);
    buttonNode.appendChild(nameNode);
}

// Shortcut to generate the engine button with param of the engine name
function engineButton(name, id) {
    var parentNode = document.getElementById(id);

    var buttonNode = document.createElement("button");
    buttonNode.type = "button";
    buttonNode.className = "btn btn-info btn-xs hvr-bounce-in";
    parentNode.appendChild(buttonNode);

    var imgNode = document.createElement("img");
    imgNode.src = "imgs/btnicons/engine.png";
    buttonNode.appendChild(imgNode);

    var nameNode = document.createTextNode(" " + name);
    buttonNode.appendChild(nameNode);
}

// Shortcut to generate the build button with different icons depending on the build
function buildButton(name, id) {
    var parentNode = document.getElementById(id);

    var buttonNode = document.createElement("button");
    buttonNode.type = "button";
    buttonNode.className = "btn btn-info btn-xs hvr-bounce-in";
    parentNode.appendChild(buttonNode);

    var imgNode = document.createElement("img");
    name = name.replace(/\s+/g, '');
    switch (name) {
        case 'Mobile':
            imgNode.src = "imgs/btnicons/mobile.png";
            break;
        case 'Console':
            imgNode.src = "imgs/btnicons/console.png";
            break;
        case 'PC':
        default:
            imgNode.src = "imgs/btnicons/keyboard.png";
            break;
    }
    buttonNode.appendChild(imgNode);

    var nameNode = document.createTextNode(" " + name);
    buttonNode.appendChild(nameNode);
}

// Shortcut to generate the group button with the role in the group
function groupButton(role, id) {
    var parentNode = document.getElementById(id);

    var buttonNode = document.createElement("button");
    buttonNode.type = "button";
    buttonNode.className = "btn btn-info btn-xs hvr-bounce-in";
    buttonNode.title = "Role: " + role;
    parentNode.appendChild(buttonNode);

    var dataToggle = document.createAttribute("data-toggle");
    dataToggle.value = "tooltip";
    buttonNode.setAttributeNode(dataToggle);

    var dataPlacement = document.createAttribute("data-placement");
    dataPlacement.value = "bottom";
    buttonNode.setAttributeNode(dataPlacement);

    var imgNode = document.createElement("img");
    imgNode.src = "imgs/btnicons/group.png";
    buttonNode.appendChild(imgNode);

    var textNode = document.createTextNode(" Group");
    buttonNode.appendChild(textNode);
}

// Shortcut to generate the open source button with the link to the source
function openSourceButton(link, id) {
    var parentNode = document.getElementById(id);

    var buttonNode = document.createElement("button");
    buttonNode.type = "button";
    buttonNode.onclick = "newWindow(\"" + link + "\"";
    buttonNode.className = "btn btn-info btn-xs hvr-bounce-in";
    parentNode.appendChild(buttonNode);

    var imgNode = document.createElement("img");
    imgNode.src = "imgs/btnicons/public.png";
    buttonNode.appendChild(imgNode);

    var textNode = document.createTextNode(" Source");
    buttonNode.appendChild(textNode);
}

// Shortcut to generate the school button with the name of the course
function schoolButton(course, id) {
    var parentNode = document.getElementById(id);

    var buttonNode = document.createElement("button");
    buttonNode.type = "button";
    buttonNode.className = "btn btn-info btn-xs hvr-bounce-in";
    buttonNode.title = course;
    parentNode.appendChild(buttonNode);

    var dataToggle = document.createAttribute("data-toggle");
    dataToggle.value = "tooltip";
    buttonNode.setAttributeNode(dataToggle);

    var dataPlacement = document.createAttribute("data-placement");
    dataPlacement.value = "bottom";
    buttonNode.setAttributeNode(dataPlacement);

    var imgNode = document.createElement("img");
    imgNode.src = "imgs/btnicons/school.png";
    buttonNode.appendChild(imgNode);

    var textNode = document.createTextNode(" School");
    buttonNode.appendChild(textNode);
}

// Opens a new tab using the url param
function newWindow(link) {
    window.open(link);
}

// Basic modal shortcut that includes a download
function modalDownload(id, title, body, dlFile) {
    document.body.innerHTML += '<div class=\"modal fade\" id=\"' + id + '\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog modal-lg\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h3 class=\"modal-title\" id=\"ModalLabel\">' + title + '</h3></div><div class=\"modal-body\">' + body + '</div><div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button><a type=\"button\" class=\"btn btn-primary\" href=\"' + dlFile + '\" download>Download</a></div></div></div></div>';
}

// Toggle system for skills [Education, Professional]
var progressArray = [false, false];

// Toggles a boolean using the param as index
function toggleSkill(index) {
    progressArray[index] = !progressArray[index];

    // Turns off the previous index, and turns on the current index
    if (progressArray.every(checkProgress)) {
        for (i = 0; i < progressArray.length; i++) {
            if (i == index) {
                progressArray[i] = true;
            } else {
                progressArray[i] = false;
            }
        }
    }

    // Changes the styling of active and inactive buttons
    for (i = 0; i < progressArray.length; i++) {
        if (progressArray[i]) {
            document.getElementById("progressLegend" + i).classList.add("custom-legend-active");
        } else {
            document.getElementById("progressLegend" + i).classList.remove("custom-legend-active");
        }
    }

    skillUpdate();
    updateProjects();
}

// Returns if all elements are true
function checkProgress(bool) {
    return bool == true;
}

// Updates the skills bar
function skillUpdate() {
    var eduLength = document.getElementsByClassName('skill-edu').length;
    var proLength = document.getElementsByClassName('skill-pro').length;

    if (progressArray[0]) { // Educational
        for (i = 0; i < eduLength; i++) {
            document.getElementsByClassName('skill-edu')[i].style.display = "block";
        }
        for (j = 0; j < proLength; j++) {
            document.getElementsByClassName('skill-pro')[j].style.display = "none";
        }
    } else if (progressArray[1]) { // Professional
        for (i = 0; i < eduLength; i++) {
            document.getElementsByClassName('skill-edu')[i].style.display = "none";
        }
        for (j = 0; j < proLength; j++) {
            document.getElementsByClassName('skill-pro')[j].style.display = "block";
        }
    } else { // Default
        for (i = 0; i < eduLength; i++) {
            document.getElementsByClassName('skill-edu')[i].style.display = "block";;
        }
        for (j = 0; j < proLength; j++) {
            document.getElementsByClassName('skill-pro')[j].style.display = "block";
        }
    }
}

// The highest combined number of years from 1 skill
var maxYears = 0;

// Generates a skill bar that requires name, edu year length and pro year length
function generateSkillBar(name, edu, pro) {
    var totalYears = edu + pro;

    if (totalYears > maxYears) {
        maxYears = totalYears;
    }

    var eduPercent = edu / maxYears * 100;
    var proPercent = pro / maxYears * 100;
    var eduYears, proYears;
    eduYears = proYears = " Year";

    if (parseInt(edu) > 1) {
        eduYears += "s";
    }

    if (parseInt(pro) > 1) {
        proYears += "s";
    }

    var parentNode = document.getElementById("skillBars");

    var nameNode = document.createElement("p");
    nameNode.value = name;
    parentNode.appendChild(nameNode);

    var progressNode = document.createElement("div");
    progressNode.className = "progress";
    parentNode.appendChild(progressNode);

    var proNode = document.createElement("div");
    proNode.className = "progress-bar custom-bg-pro skill-pro";
    proNode.style.width = proPercent + "%";
    progressNode.appendChild(proNode);

    var proValueNow = document.createAttribute("aria-valuenow");
    proValueNow.value = pro;
    proNode.setAttributeNode(proValueNow);

    var proRole = document.createAttribute("role");
    proRole.value = "progressbar";
    proNode.setAttributeNode(proRole);

    var proValueMin = document.createAttribute("aria-valuemin");
    proValueMin.value = "0";
    proNode.setAttributeNode(proValueMin);

    var proValueMax = document.createAttribute("aria-valuemax");
    proValueMax.value = maxYears;
    proNode.setAttributeNode(proValueMax);

    var proTextNode = document.createTextNode(pro + proYears);
    proNode.appendChild(proTextNode);

    var eduNode = document.createElement("div");
    eduNode.className = "progress-bar custom-bg-edu skill-edu";
    eduNode.style.width = eduPercent + "%";
    progressNode.appendChild(eduNode);

    var eduValueNow = document.createAttribute("aria-valuenow");
    eduValueNow.value = edu;
    eduNode.setAttributeNode(eduValueNow);

    var eduRole = document.createAttribute("role");
    eduRole.value = "progressbar";
    eduNode.setAttributeNode(eduRole);

    var eduValueMin = document.createAttribute("aria-valuemin");
    eduValueMin.value = "0";
    eduNode.setAttributeNode(eduValueMin);

    var eduValueMax = document.createAttribute("aria-valuemax");
    eduValueMax.value = maxYears;
    eduNode.setAttributeNode(eduValueMax);

    var eduTextNode = document.createTextNode(edu + eduYears);
    eduNode.appendChild(eduTextNode);
}

// Lists of all educational and professional projects
var projEdu = [];
var projPro = [];
var projTotal = [];

// Initializes the project thumbnails
function initProject() {
    Array.prototype.push.apply(projEdu, document.getElementsByClassName('proj-edu'));
    Array.prototype.push.apply(projPro, document.getElementsByClassName('proj-pro'));
    Array.prototype.push.apply(projTotal, projPro);
    Array.prototype.push.apply(projTotal, projEdu);

    projectSetup(projTotal);
}

// Project setup
function projectSetup(projArray) {
    var currentRow;

    for (var i = 0; i < projArray.length; i++) {
        if (i % 3 == 0) {
            var row = document.createElement("div");
            row.className = "row";
            document.getElementById("projects").appendChild(row);
            currentRow = row;
        }
        currentRow.appendChild(projArray[i]);
    }
}

// Updates the project thumbnails
function updateProjects() {
    var projects = document.getElementById("projects");
    while (projects.firstChild) {
        projects.removeChild(projects.firstChild);
    }

    if (progressArray[0]) { // Education
        projectSetup(projEdu);
    } else if (progressArray[1]) { // Professional
        projectSetup(projPro);
    } else { // Default
        projectSetup(projTotal);
    }
}