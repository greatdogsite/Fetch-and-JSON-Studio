// TODO: add code here
window.addEventListener("load", function () {
    async function getData() {
        let response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
        let data = await response.json();
        console.log("getData");
        console.log(data[0].firstName);
    }

    //getData();

    let container = document.getElementById("container");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            json.sort((a, b) => b.hoursInSpace - a.hoursInSpace); //bubble sort
            let template = "";
            for (let i in json) {
                template +=
                    `<div class="astronaut">
            <div class="bio">
               <h3>${json[i].firstName} ${json[i].lastName}</h3>
               <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>`
                if (json[i].active === true) {
                    template += `<li class = "green">Active: ${json[i].active}</li>`
                } else {
                    template += `<li>Active: ${json[i].active}</li>`
                }

                template += `<li>Skills: `;
                for (let j in json[i].skills) {
                    template += `${json[i].skills[j]}`;
                    if (j < json[i].skills.length - 1) {
                        template += `, `;
                    }
                }

                template += `</li>
               </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            </div>
         `;
                container.innerHTML = template;
            }
        });
    });
});