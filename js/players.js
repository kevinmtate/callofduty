const container = document.querySelector('.container');
const title = document.getElementById('number-of-players');

document.addEventListener("DOMContentLoaded", function() {
    init();
});

const init = () => {
    console.log(Object.keys(players).length, players);
    document.getElementById('number-of-players').innerHTML = "(" + Object.keys(players).length + ")";

    for (key in players) {
        const div = document.createElement('div');
        div.setAttribute('id', key);
        div.setAttribute('class', 'player');
        const playerName = document.createElement('span');
        playerName.innerHTML = key;
        div.append(playerName);
        container.append(div);
    };
};
