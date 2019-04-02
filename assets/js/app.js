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

window.onload = function () {
    getEducation();
    getExperience();
    getSkills();
};

function getEducation() {
    fetch('http://demo9495980.mockable.io/education').then(response => {
        return response.json()
    })
        .then(data => {
            updateEducation(data)
        });
}

function updateEducation(data) {
    var education = document.getElementById("education-list")
    var list = data.education.map((e) => {
        var html =
            `<div class="CV-timeline CV-education-group">
                    <h3 class="CV-timeline-heading">
                        <span class="CV-timeline-heading-title">${e.nome} (${e.tipo})</span><small
                            class="CV-timeline-heading-duration">${e.curso}
                           </small>
                    </h3>
                    <ul class="CV-timeline-details">
                        <li class="CV-timeline-details-item">
                          ${e.periodo}
                        </li>
                    </ul>
                </div>`

        return html
    })

    education.innerHTML = list.join('')
}


function getExperience() {
    fetch('http://demo9495980.mockable.io/companies').then(response => {
        return response.json()
    })
        .then(data => {
            updateExperience(data)
        });
}

function updateExperience(data) {
    var experience = document.getElementById("experience-list")
    var list = data.company.map((e) => {
        var html =
            `<div class="CV-timeline CV-experience-group">
                    <h3 class="CV-timeline-heading">
                        <span class="CV-timeline-heading-title">${e.nome}</span><small
                            class="CV-timeline-heading-duration">${e.cargo}
                           </small>
                        <p class = "fs-14 mb--15"> ${e.atividades}</p>
                    </h3>
                    <ul class="CV-timeline-details">
                        <li class="CV-timeline-details-item">
                          ${e.periodo}
                        </li>
                    </ul>
                </div>`

        return html
    })

    experience.innerHTML = list.join('')
}


function getSkills() {
    fetch('http://demo9495980.mockable.io/skills').then(response => {
        return response.json()
    })
        .then(data => {
            updateSkills(data)
        });
}

function updateSkills(data) {
    var skill = document.getElementById("skill-list")
    var list = data.company.map((e) => {
        var html =
            `<div class="CV-timeline CV-experience-group">
                    <h3 class="CV-timeline-heading">
                        <span class="CV-timeline-heading-title">${e.nome}</span><small
                            class="CV-timeline-heading-duration">${e.nivel}
                           </small>
                    </h3>
                </div>`

        return html
    })

    skill.innerHTML = list.join('')
}

