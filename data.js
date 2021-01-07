fetch ("exp.json")
    .then(res => res.json())
    .then(res => {
        console.log(res)
        for (i in res) {
            const skill = document.getElementById("skillTable")
            const addSkill = document.createElement("tr")
            addSkill.innerHTML=`
                <th scope="row">${res[i].experience}</th>
                <td><img src="img/${res[i].niveau}.svg" class="mr-2"><span>${res[i].competence}</span></td>
                <td>${res[i].preuve}</td>
                <td>${res[i].action}</td>`
            skill.appendChild(addSkill)
        }
    })

fetch ("qlt.json")
    .then(res => res.json())
    .then(res => {
        console.log(res)
        for (i in res) {
            const quality = document.getElementById("qualityTable")
            const addQuality = document.createElement("tr")
            addQuality.innerHTML=`
                <th scope="row">${res[i].qualite}</th>
                <td>${res[i].description}</td>`
            quality.appendChild(addQuality)
        }
    })