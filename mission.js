let missions = []
let priorities =[]
let dangers = []

function myMission() {
    let mission = document.querySelector("#mission").value;
    missions.push(mission)
    let priority = document.querySelector('#priority').value
    priorities.push(priority)
    let dangerlevel = document.querySelector('#danger').value
    dangers.push(dangerlevel)
    console.log('Mission is', mission , ', priority is', priority , ', and danger level is', dangerlevel )

    document.querySelector(".empty").innerHTML += "<br>"+'mission is ' + mission + ', priortiy ' + priority +', danger level is ' + dangerlevel
}




function showPriorities(){
    for(i = 0; i < priorities.length; i++){
        console.log(priorities[i])
    }
}

function deleteMission(){

    // get input value
    const ToDeleteMission = document.querySelector("#deleteInput").value
    console.log('deleting mission:', ToDeleteMission)

    // find the index of that input
    const theIndex = missions.indexOf(ToDeleteMission)
    console.log('index is:', theIndex)

    // remove the mission from all arrays
    missions.splice(theIndex, 1)
    priorities.splice(theIndex, 1)
    dangers.splice(theIndex, 1)

    // clear the missions on screen
    document.querySelector(".empty").innerHTML = ""

    // show the updated missionse
    for (i=0; i<missions.length; i++) {
        document.querySelector(".empty").innerHTML += "<br>"+'mission is ' + missions[i] + ', priortiy ' + priorities[i] +', danger level is ' + dangers[i]
    }
}

function showMissions(){
    for(n = 0; n < missions.length; n++) {
        console.log(missions[n])
    }

}



