function temps_reel(){
    let champ = document.getElementById('text');
    let date = new Date;
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    champ.value = heure+':'+minute+':'+seconde;
}

setInterval(() => {
    temps_reel()
}, 1000);



