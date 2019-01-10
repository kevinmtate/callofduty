const tableData = document.querySelector('.table-data');

for (var key in teams) {
    var htmlString = 
        "<div id="+key+" class='team'> \
            <span>"+teams[key]+"</span> \
            <div class='roster'></div> \
        </div>"
    tableData.innerHTML += htmlString;
};

for (var key in players) {
    let player = players[key];
    if (teams[player.team]) {
        var htmlString = 
            "<span>"+key+"</span>";
        document.getElementById(player.team).querySelector('.roster').innerHTML += htmlString;
    }
}
