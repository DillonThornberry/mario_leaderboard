var timeInSeconds = time => {
    if (time === "") {
        return 99999999;
    }
    var timeArray = time.split(":");
    return parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
}

var players = {
    sixsix229: {
        name: "Sixsix229",
        time: "18:52",
        url: "https://www.twitch.tv/sixsix229"
    },
    nation_live: {
        name: "Nation_LIVE",
        time: "17:26",
        url: "https://www.twitch.tv/nation_live",
        pb_url: "https://www.youtube.com/watch?v=CfLqCFijMLg"
    },
    smithjrblaqualuigi: {
        name: "SmithJrBlaquaLuigi",
        time: "17:59",
        url: "https://www.twitch.tv/smithjrblaqualuigi",
        pb_url: "https://www.twitch.tv/videos/572520587"
    },
    louisspog: {
        name: "louissPog",
        time: "18:39",
        url: "https://www.twitch.tv/louisspog"
    },
    t0nybasil: {
        name: "T0NYBASIL",
        time: "",
        url: "https://www.twitch.tv/t0nybasil"
    },
    yardmeat: {
        name: "YardMeat",
        time: "18:12",
        url: "https://www.twitch.tv/yardmeat",
        pb_url: "https://www.twitch.tv/videos/2370685308"
    },
    dubbskii: {
        name: "dubbskii",
        time: "17:07",
        url: "https://www.twitch.tv/dubbskii",
        pb_url: "https://www.twitch.tv/videos/2354640284"
    },
    milk: {
        name: "Milk",
        time: "17:59",
        url: ""
    },
    syn: {
        name: "Syn",
        time: "20:06",
        url: ""
    },
    ajames_30: {
        name: "aJames_30",
        time: "18:07",
        url: "https://www.twitch.tv/ajames_30",
        pb_url: "https://www.twitch.tv/videos/2194676691"
    },
    nascar_316: {
        name: "Nascar_316",
        time: "18:51",
        url: "https://www.twitch.tv/nascar_316",
        pb_url: "https://www.twitch.tv/videos/1563678869"
    },
    pignickel: {
        name: "Pignickel",
        time: "17:47",
        url: "https://www.twitch.tv/Pignickel",
        pb_url: "https://www.youtube.com/watch?v=R2dnmV6lCR8"
    },
    sliazx: {
        name: "Sliazx",
        time: "17:00",
        url: ""
    },
    tsrstormed: {
        name: "TSRStormed",
        time: "20:29",
        url: "https://www.twitch.tv/tsrstormed",
    },
    americanape: {
        name: "AmericanApe",
        time: "17:48",
        url: "https://www.twitch.tv/americanape",
        pb_url: "https://www.twitch.tv/videos/2367532449"
    },
}

var sortedPlayers = Object.keys(players).sort((a, b) => timeInSeconds(players[a].time) - timeInSeconds(players[b].time));
//console.log(sortedPlayers.map(player => players[player].name + " - " + players[player].time + " - " + players[player].url).join("\n"));

for (var i = 0; i < sortedPlayers.length; i++) {
    console.log(i + 1 + ". " + players[sortedPlayers[i]].name + " - " + players[sortedPlayers[i]].time + " - " + players[sortedPlayers[i]].url);
}

// Make html table for the leaderboard
var table = "<table border='1'><tr><th>Rank</th><th>Name</th><th>Time</th></tr>";
for (var i = 0; i < sortedPlayers.length; i++) {
    // Wrap player name with link to their twitch
    var name = players[sortedPlayers[i]].name;
    if (players[sortedPlayers[i]].url) {
        name = "<a target='blank' href='" + players[sortedPlayers[i]].url + "'>" + name + "</a>";
    }

    var time = players[sortedPlayers[i]].time;
    if (players[sortedPlayers[i]].pb_url) {
        time = "<a target='blank' href='" + players[sortedPlayers[i]].pb_url + "'>" + time + "</a>";
    }
    table += "<tr><td>" + (i + 1) + "</td><td>" + name + "</td><td>" + time + "</td></tr>";
    
}
table += "</table>";

// Add table to the document
document.getElementById("leaderboard").innerHTML = table;
