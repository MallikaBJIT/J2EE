//display sessions
const sessions = [
    { topic: "New Tools & Technologies", speaker: "Sarwar Miral", date: "14-08-2023", time: "9:00 AM" },
    { topic: "J2EE Session", speaker: "Ujjal Kumar Saha", date: "18-08-2023", time: "10:00 AM" },
    { topic: "AI Technologies", speaker: "Nani Gopal Barai", date: "20-08-2023", time: "10:00 AM" },
];

function displaySessions() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    let i = 1;
    sessions.forEach((session) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <th scope="row">${i}</th>
        <td><a href="#" data-toggle="modal" data-target="#sessionModal-${i}">${session.topic}</a></td>
        <td>${session.speaker}</td>
        <td>${session.date}</td>
        <td>${session.time}</td>
      `;
        tableBody.appendChild(row);
        i++;
    });
}

displaySessions();

function createModal() {
    const createModal = document.querySelector("modal-display");
    sessions.forEach((session) => {
        const modal = document.createElement("div");
    });
}



// Form validation
(function() {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    event.preventDefault();
                    //display message
                    document.getElementById("show-message").style.display = "block";
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

window.addEventListener("scroll", function() {
    var loadingContent = document.querySelectorAll(".reveal");
    var windowheight = window.innerHeight;
    let revealpoint = 100;

    for (let i = 0; i < loadingContent.length; i++) {
        let revealTop = loadingContent[i].getBoundingClientRect().top;
        if (revealTop < windowheight - revealpoint) {
            loadingContent[i].classList.add('active');
        } else {
            loadingContent[i].classList.remove('active');
        }
    }
})