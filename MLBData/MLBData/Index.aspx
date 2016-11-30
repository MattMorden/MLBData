<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="MLBData.Index" %>

<!DOCTYPE html>

<html>
<head>
    <title></title>
	<meta charset="utf-8" />
    <script src="scripts/MLBScripts.js"></script>
    <link href="Styles/MLBStyles.css" rel="stylesheet" />
</head>
<body>
    <!--Create three html text boxes for Year, Month, Day-->
    <!--Also give each box a default value to return game data-->


    <form id="form">
        <div id="myForm">
            <h1>Matt Morden's Project 2: MLB data with JSON</h1>
            <div id="yeararea">
                <label>
                    <span>Year:</span><input id="yearbox" type="text" name="year" value="2011" />
                </label>
            </div>

            <div id="montharea">
                <label>
                    <span>Month:</span><input id="monthbox" type="text" name="month" value="07" />
                </label>
            </div>


            <div id="dayarea">
                <label>
                    <span>Day:</span><input id="daybox" type="text" name="day" value="09" />
                </label>
            </div>

        </div>
        
        <div id="buttonarea">
            <input type="button" id="myButton" value="Get Baseball Data" onclick="getBaseballData()" />
        </div>
        
    </form>

    <!--Output is to be a list of games played for a given year/month/day and displayed using DHTML-->
    <!--The details should include home team, and away team for each game, with Blue Jays games showing first in the list.-->

</body>
</html>
