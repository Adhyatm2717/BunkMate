document.getElementById("submitBtn").addEventListener("click", function() {
    document.getElementById("current").style.color = "#384353"
    document.getElementById("predicted").style.color = "#384353"
    document.getElementById("Recovery").style.color = "#384353"
    document.getElementById("classesText").innerText = "Classes"

    const ClassAttended = Number(document.getElementById("ClassAttended").value)
    const TotalClasses = Number(document.getElementById("TotalClasses").value)
    const MissClasses = Number(document.getElementById("MissClasses").value)
    const TargetAttendence = Number(document.getElementById("TargetAttendence").value)

    if(TotalClasses >= ClassAttended){

    // console.log((ClassAttended / TotalClasses) * 100)
    const currentPerc = (ClassAttended / TotalClasses) * 100;
    document.getElementById("current").value = currentPerc.toFixed(0);

    const predicedAttend = (ClassAttended / (TotalClasses + MissClasses) * 100)
    document.getElementById("predicted").value = predicedAttend.toFixed(0)

    // const RecoveryClasses = (TotalClasses * TargetAttendence)/(ClassAttended * 100 * 25)
    const RecoveryClasses = ((TargetAttendence * (TotalClasses + MissClasses)) - (ClassAttended * 100))/(100-TargetAttendence)
    if (RecoveryClasses <= 0){
        document.getElementById("Recovery").style.color = "Green"
        document.getElementById("Recovery").value = "You are safe"
        document.getElementById("classesText").innerText = ""
    } else {
            document.getElementById("Recovery").value = RecoveryClasses.toFixed(0)
    }
    console.log(`current:${currentPerc}, predict: ${predicedAttend}, recovery: ${RecoveryClasses}`)
}else {
    document.getElementById("current").style.color = "Red"
    document.getElementById("predicted").style.color = "Red"
    document.getElementById("Recovery").style.color = "Red"
    document.getElementById("classesText").innerText = ""

    document.getElementById("current").value = "Error"
    document.getElementById("predicted").value = "Error"
    document.getElementById("Recovery").value = "Error"
}
})