const tableData = document.querySelector('tbody');

for (var key in teams) {
    let newTeam = document.createElement('tr');
    newTeam.setAttribute('id', key);
    let teamName = document.createElement('td');
    teamName.innerHTML = teams[key];
    let teamRoster = document.createElement('td');
    teamRoster.setAttribute('class', 'roster');
    newTeam.append(teamName, teamRoster);
    tableData.append(newTeam);
};

for (var key in players) {
    let player = players[key];
    if (teams[player.team]) {
        let newPlayer = document.createElement('p');
        newPlayer.innerHTML = key;
        document.getElementById(player.team).querySelector('.roster').append(newPlayer);
    }
};
