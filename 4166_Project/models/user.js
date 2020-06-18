class User {
  constructor(userID, firstName, lastName, email, address, city, state, zip, country) {
    this.userID = userID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
  }

    getUserID() {
      return this.userID;
    };

    setUserID(uID) {
      this.userID = uID;
    };

    getFirstName() {
      return this.firstName;
    };

    setFirstName(uFname) {
      this.firstName = uFname;
    };

    getLastName() {
      return this.lastName;
    };

    setLastName(uLname) {
      this.lastName = uLname;
    };

    getEmail() {
      return this.email;
    };

    setEmail(uEmail) {
      this.email = uEmail;
    };

    getAddress() {
      return this.address;
    };

    setAddress(uAddress) {
      this.address = uAddress;
    };

    getCity() {
      return this.email;
    };

    setCity(uCity) {
      this.city = uCity;
    };

    getState() {
      return this.state;
    };

    setState(uState) {
      this.state = uState;
    };

    getZip() {
      return this.zip;
    };

    setZip(uZip) {
      this.zip = uZip;
    };

    getCountry() {
      return this.country;
    };

    setCountry(uCountry) {
      this.country = uCountry;
    };
  }

  module.exports = User;
