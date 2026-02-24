document.getElementById("submitBtn").addEventListener("click", function() {

    const ClassAttended = Number(document.getElementById("ClassAttended").value)
    const TotalClasses = Number(document.getElementById("TotalClasses").value)
    const MissClasses = Number(document.getElementById("MissClasses").value)
    const TargetAttendence = Number(document.getElementById("TargetAttendence").value)

    // console.log((ClassAttended / TotalClasses) * 100)
    const currentPerc = (ClassAttended / TotalClasses) * 100;
    document.getElementById("current").value = currentPerc.toFixed(0
    );

    const predicedAttend = (ClassAttended / (TotalClasses + MissClasses) * 100)
    document.getElementById("predicted").value = predicedAttend.toFixed(0)

    // const RecoveryClasses = (TotalClasses * TargetAttendence)/(ClassAttended * 100 * 25)
    const RecoveryClasses = (((TargetAttendence * TotalClasses)-ClassAttended * 100)/(100-TargetAttendence))
    document.getElementById("Recovery").value = RecoveryClasses.toFixed(0)


})