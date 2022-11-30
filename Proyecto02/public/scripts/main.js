var urlAPI = "https://v3.football.api-sports.io/"
var jsonUrl = "public/resources/"
var fetchOptions = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "576a56d04d67566d241abdf338284bd3"
    }
}

window.onload = function () {
    loadDashboard()
    let btnApply = document.getElementById("btnApply")
    btnApply.addEventListener("click", () =>{
        let selectLeague = document.getElementById("selectLeague")
        let league = selectLeague.options[selectLeague.selectedIndex].value
        let textLeague = selectLeague.options[selectLeague.selectedIndex].text
        let selectSeason = document.getElementById("selectSeason")
        let season = selectSeason.options[selectSeason.selectedIndex].value
        document.getElementById("topScorer-title").innerHTML = "Top Scorers - "+ textLeague +" - Season " + season
        document.getElementById("topAssister-title").innerHTML = "Top Assisters - "+ textLeague +" - Season " + season

        updateTopScorers(league, season)
        updateTopAssisters(league, season)
    })
    
}

/*
"https://v3.football.api-sports.io/players/topscorers?league=2&season=2022"
*/
async function loadDashboard(){
    updateTopScorers("CL","2022")
    updateTopAssisters("CL","2022") 
}


async function updateTopScorers(leagueID, season){
    var topScorers = document.getElementById("topScorer")
    var dataScorers = await checkStatusAPI(urlAPI+"players/topscorers?league="+leagueID+"&season="+season)
    
    if(dataScorers == undefined | Object.keys(dataScorers['errors'])!=0){
        dataScorers = await loadFromJSON(jsonUrl+"topscorers" + "-" + season + ".json")
        dataScorers = dataScorers[leagueID]
    }
    loadGraph(dataScorers, topScorers, 'scores')
    updateImg(dataScorers.response[0].player.photo, "scorer")
    updateDescription(dataScorers.response[0],"scorer")
}
async function updateTopAssisters(leagueID, season){
    var topAssisters = document.getElementById("topAssister")
    var dataAssisters = await checkStatusAPI(urlAPI+"players/topassists?league="+leagueID+"&season="+season)
    
    if(dataAssisters == undefined | Object.keys(dataAssisters['errors'])!=0){
        dataAssisters = await loadFromJSON(jsonUrl+"topAssisters" + "-" + season + ".json")
        dataAssisters = dataAssisters[leagueID]
    }
    loadGraph(dataAssisters, topAssisters, 'assists')
    updateImg(dataAssisters.response[0].player.photo, "assister")
    updateDescription(dataAssisters.response[0],"assister")
}

async function checkStatusAPI(url){
    return new Promise((resolve, reject) => {
        fetch(url, fetchOptions)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
                console.log("EFE")
                reject("API REJECTED - " + response.status)
            })
        .then((json)=>resolve(json))
        .catch((err)=> reject(err))
    })
}
async function loadFromJSON(jsonFile){
    return new Promise((resolve, reject) => {
        fetch(jsonFile)
            .then((response) => {
                if(response.ok){
                    return response.json()
                }
                reject("JSON WITH ERRORS - " + response.status) 
            })
        .then((json)=>resolve(json))
        .catch((err)=> reject(err))
    })
}

function loadGraph(data, graph, search){
    var ctx = graph.getContext("2d")
    if(Chart.getChart(graph.id)!=undefined)Chart.getChart(graph.id).destroy()
    let labels = []
    let values = []
    for (let player of data.response){
        let name = player['player'].name
        if (name >= 18) name.substring(0,17) + "..."
        labels.push(name)
        if(search == "scores") values.push(player.statistics[0].goals.total)
        if(search == "assists") values.push(player.statistics[0].goals.assists)
    }
    const options = {
        labels:labels,
        datasets:[{
            label: search.toUpperCase(),
            data: values
        }]
    }
    let chartito = new Chart(ctx, {
        type:'bar',
        data:options,
        options:{
            y:{
                beginAtZero: true
            },
            animation: false,
            responsive: true,
            maintainAspectRatio: false
        }
    })

}
function updateImg(photoURL, type){
    if (photoURL){
        document.getElementById(type+"Photo").setAttribute("src", photoURL)
    }
}
function updateDescription(topPlayer, type){
    if (topPlayer){
        let player = topPlayer.player
        document.getElementById("player-name-"+type).textContent = player.name.toUpperCase()
        document.getElementById("player-desc-"+type).innerHTML=`<li><b>Age:</b> ${player.age}</li>
        <li><b>Nationality:</b> ${player.nationality}</li>
        <li><b>Current Team:</b> ${topPlayer.statistics[0].team.name.toUpperCase()}</li>`
    }
}