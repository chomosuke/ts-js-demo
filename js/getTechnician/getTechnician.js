let { Technician } = require("./classes/Technician");

function getTechnician() {
    let technician = new Technician({ id: 1, name: "John Doe" });

    let userDetails = technician.getDetails();

    // you don't know what the object will be like
    // userDetails.skills[0].xxx

    return userDetails;
}

module.exports.getTechnician = getTechnician;
