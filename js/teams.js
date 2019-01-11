const container = document.querySelector('.container');

document.addEventListener("DOMContentLoaded", function() {
    init();
    document.addEventListener("click", callback);
    document.addEventListener("touchstart", callback);
});

const callback = (event) => {
    const teamHeaders = document.querySelectorAll('h2');
    if ([...teamHeaders].indexOf(event.target) >= 0) {
        const roster = event.target.parentElement.querySelector('.roster');
        if (window.getComputedStyle(roster).display === 'none') {
            roster.style.display = 'block';
        } else {
            roster.style.display = 'none';
        }
    };
};

const init = () => {
    console.log(Object.keys(teams).length, teams);
    console.log(Object.keys(players).length, players);

    document.getElementById('number-of-teams').innerHTML = "(" + Object.keys(teams).length + ")";

    for (var key in teams) {
        const newTeam = document.createElement('div');
        newTeam.setAttribute('id', key);
        newTeam.setAttribute('class', 'team');
    
        const teamName = document.createElement('h2');
        teamName.innerHTML = teams[key];
    
        const teamRoster = document.createElement('div');
        teamRoster.setAttribute('class', 'roster');
    
        newTeam.append(teamName, teamRoster);
        container.append(newTeam);
    };
    
    for (var key in players) {
        const player = players[key];
        if (teams[player.team]) {
            const newPlayer = document.createElement('p');
            newPlayer.innerHTML = key;
            document.getElementById(player.team).querySelector('.roster').append(newPlayer);
        }
    };
};
