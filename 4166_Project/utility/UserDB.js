let appUsers = [];
var User = require('../models/user');
let userObj = new User();

userObj.setUserID(1);
userObj.setFirstName("Cameron");
userObj.setLastName("King");
userObj.setEmail("cking107@uncc.edu");
userObj.setAddress("5612 Saddlebrook Drive");
userObj.setCity("Lewisville");
userObj.setState("North Carolina");
userObj.setZip("27023");
userObj.setCountry("United States");

userObj
appUsers.push(userObj);

let addUser = function (userID, firstName, lastName, email, address, city, state, zip, country) {
    userObj = new User();
    userObj.setUserID(userID);
    userObj.setFirstName(firstName);
    userObj.setLastName(lastName);
    userObj.setEmail(email);
    userObj.setAddress(address);
    userObj.setCity(city);
    userObj.setState(state);
    userObj.setZip(zip);
    userObj.setCountry(country);

    appUsers.push(userObj);
    return appUsers;
};


let getUser = function (email) {
    console.log("looking for user");
    for (let i = 0; i < appUsers.length; i++){
        console.log(appUsers[i]);
        if(appUsers[i].email == email) {
            console.log("User found with email " + email);
            return appUsers[i];
        }
    }
    return null;
};

let getAllUsers = function () {
    return appUsers;
};

let emailExists = function (email) {
    let u = getUserID(email);
    return (u != null);
};

module.exports.getUser = getUser;
module.exports.getAllUsers = getAllUsers;
module.exports.emailExists = emailExists;
