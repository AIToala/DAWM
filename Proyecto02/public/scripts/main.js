window.onload = function () {
    updateTopScorers("CL","2022")        
    updateTopAssisters("CL","2022")
}

/*
fetch("https://v3.football.api-sports.io/players/topscorers?league=2&season=2022", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "576a56d04d67566d241abdf338284bd3"
        }
})
*/

function updateTopScorers(leagueName, season){
    let url = "public/resources/topscorers" + "-" + leagueName + "-" + season + ".json"
    fetch(url)
    .then(response => response.json())
    .then( data => {
        let topScorers = data.response.slice(0,5)
        //for( let scorer of topScorers) {
        //    let scorerData = scorer.player
        //    let scorerGoals = scorer.statistics[0].goals.total
        //    let scorerPhoto = scorerData["photo"]
        //    let tableElement = `
        //        <tr>
        //            <th scope="row">${scorerData["name"]}</td>
        //            <td style="--size: calc((${scorerGoals}*10)/100)"><span class="data">${scorerGoals}</span></td>
        //        </tr>`
        //    document.getElementById("topScorerTable").getElementsByTagName("tbody")[0].innerHTML += tableElement
        //}
      })
    .catch(err => console.error(err))
    
}

function updateTopAssisters(leagueName, season){
    let url = "public/resources/topassisters" + "-" + season + ".json"
    fetch(url)
    .then(response => response.json())
    .then( data => {
        let topAsissters = data.response.slice(0,5)
        //for( let assister of topAssisters) {
        //    let assisterData = assister.player
        //    let assisterStats = assister.statistics
        //    let tableElement = `
        //        <tr>
        //            <td>${assisterData["name"]}</td>
        //            <td>${assisterStats[0].team.name}</td>
        //            <td>${assisterStats[0].games.appearences}</td>
        //            <td>${assisterStats[0].goals.total}</td>
        //        </tr>`
        //    document.getElementById("topassisterTable").getElementsByTagName("tbody")[0].innerHTML += tableElement
        //}
      })
    .catch(err => console.error(err))
}