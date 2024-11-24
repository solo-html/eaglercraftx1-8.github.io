var gamesDiv = document.getElementById("gamescontainer")
var ireallyhateasyncprogrammingpulhhhh = await fetch("./15versions.html")
var rfr = await fetch("./18versions.html")
async function set15() {
    //wooooo more awaits i love waiting 
    gamesDiv.innerHTML = await ireallyhateasyncprogrammingpulhhhh.text
}
async function set18() {
    gamesDiv.innerHTML = await rfr.text
}
