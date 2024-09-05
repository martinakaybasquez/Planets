function planetAverager(){
    let average = 0;
    for (let p = 0; p < planets.length; p++){
        average += planets[p].diameter;
    }
    return average;
}

let planetsAverager = planetAverager();
console.log(`Average Diamter: ${planetsAverager}`);

let itemNode = document.querySelector("#index");
let index = 0;
let inNOutNode = document.querySelector("#inNOutNode")
planets[index].indexp = index;

// function for Previous button
function moveBackward(){
    if (index === 0){
        previousB.disabled;
    }
    else if (index != 0){
        index--;
    }
    itemNode.innerText = "Index: " + index;
}

// function for Next button
function moveForward(){
    if (index != 7){
        index++;
        if (planets[index].inner === true){
            inNOutNode = "Inner Plannet"
        }
        else{
            inNOutNode = "Outter Plannet"
        }
    }
    itemNode.innerText = "Index: " + index;
    
}

function updatePlanetDisplay(){

}