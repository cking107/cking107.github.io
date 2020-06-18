/*
var mongoose = require('mongoose')
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var itemSchema = new mongoose.Schema({
  itemCode: Number,
  itemName: String,
  artist: String,
  type: String,
  catalogCategory: String,
  rating: String,
  description: String,
  imageURL: String
});


module.exports = mongoose.model('Item', itemSchema);
*/

class Item {
  constructor(itemCode, itemName, artist, type, catalogCategory, rating, description, imageURL) {
    this.itemCode = itemCode;
    this.itemName = itemName;
    this.artist = artist;
    this.type = type;
    this.catalogCategory = catalogCategory;
    this.rating = rating;
    this.description = description;
    this.imageURL = imageURL;
  }

  getItemCode() {
    return this.itemCode;
  };

  setItemCode(iCode) {
    this.itemCode = iCode;
  };

  getItemName() {
    return this.itemName;
  };

  setItemName(iName) {
    this.itemName = iName;
  };

  getArtist() {
    return this.artist;
  };

  setArtist(iArt) {
    this.artist = iArt;
  }

  getType() {
    return this.type;
  };

  setType(iType) {
    this.type = iType;
  }

  getCatalogCatagory() {
    return this.catalogCategory
  }

  setCatalogCategory(iCat) {
    this.catalogCategory = iCat;
  };

  getRating() {
    return this.rating;
  };

  setRating(iRate) {
    this.rating = iRate;
  }

  getDescription() {
    return this.description;
  };

  setDescription(iDesc) {
    this.description = iDesc;
  };

  getImageURL() {
    return this.imageURL;
  };

  setImageURL(iUrl) {
    this.imageURL = iUrl;
  };

}

module.exports = Item;
