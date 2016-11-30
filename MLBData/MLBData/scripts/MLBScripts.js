//Javascript for MLB

var asynch = false;
var baseballObject;
var divHTML = "<table id='table'>";;

// ***********************************
// AJAX XMLHttpRequest to get the JSON
// from the site defined by url
function getJSON(url) {
    var xmlHttp;

    xmlHttp = new XMLHttpRequest();

    if (xmlHttp !== null) {
        if (asynch) {
            // HTTP asynch GET request
            xmlHttp.open("GET", url, true);
            xmlHttp.onload = function (e) {
                if (xmlHttp.status === 200) {
                    procJSONRequest(xmlHttp.responseText);
                }
            }
            xmlHttp.send(null);
        }
        else {
            // HTTP synchronous GET request
            xmlHttp.open("GET", url, false);
            xmlHttp.send(null);
            procJSONRequest(xmlHttp.responseText);
        }
    }
}

// ***********************************************
// single function to process returned JSON string
function procJSONRequest(resp) {


    baseballObject = JSON.parse(resp);
    //document.write(resp);
    console.log(baseballObject);

    if (baseballObject.data.games.game == undefined) {
        console.log("NO DATA RETURNED");
        divHTML += "<tr><td>NO DATA RETURNED FOR SELECTED DAY/MONTH/YEAR</td></tr>";
    }
    else {
        for (var i = 0; i < baseballObject.data.games.game.length; i++) {
            if (baseballObject.data.games.game[i].home_team_name === "Blue Jays" ||
                baseballObject.data.games.game[i].away_team_name === "Blue Jays") {
                console.log("Home team: " + baseballObject.data.games.game[i].home_team_name +
                " and Away team: " + baseballObject.data.games.game[i].away_team_name);
                divHTML += "<tr><td>";
                divHTML += "Home Team: " + baseballObject.data.games.game[i].home_team_name + " and Away Team: " + baseballObject.data.games.game[i].away_team_name;
                divHTML += "</tr></td>";
            }
        }


        for (var i = 0; i < baseballObject.data.games.game.length; i++)
            if (baseballObject.data.games.game[i].home_team_name !== "Blue Jays" ||
                baseballObject.data.games.game[i].away_team_name !== "Blue Jays") {
                console.log("Home team: " + baseballObject.data.games.game[i].home_team_name + " and Away team: " +
                    baseballObject.data.games.game[i].away_team_name);
                divHTML += "<tr><td>";
                divHTML += "Home Team: " + baseballObject.data.games.game[i].home_team_name + " and Away Team: " + baseballObject.data.games.game[i].away_team_name;
                divHTML += "</tr></td>";
            }

        divHTML += "</table>";
    }//end else
}




// ************************************
// onload event handler creates the URL
// for a given year month and day
function getBaseballData() {
    var year = document.getElementById('yearbox').value;
    var month = document.getElementById('monthbox').value;
    var day = document.getElementById('daybox').value;

    // inspect URL
    var tempURL = "http://gd2.mlb.com/components/game/mlb/year_" + year + "/month_" + month + "/day_" + day + "/master_scoreboard.json";

    getJSON("http://gd2.mlb.com/components/game/mlb/year_" + year + "/month_" + month + "/day_" + day + "/master_scoreboard.json");
    createTable();
}


function createTable() {
    document.getElementById("form").innerHTML = addTable();
}

function addTable() {
    return divHTML;
}