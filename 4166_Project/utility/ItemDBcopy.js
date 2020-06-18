let Item = require('../models/item');
let appItems = [];

//item 1
let itemObj = new Item();
itemObj.setItemCode(1);
itemObj.setItemName("OK Computer");
itemObj.setArtist("Radiohead");
itemObj.setType("Album");
itemObj.setCatalogCategory("Alternative Rock");
itemObj.setRating("10");
itemObj.setDescription("OK Computer is Radiohead's third studio album. Released in 1997, this is album has made a big impact on music as a whole. Radiohead's style has bled into the alternative rock genre because of infulence from OK Computer.");
itemObj.setImageURL("/assets/images/okcomputer.jpg");

appItems.push(itemObj);

//item 2
itemObj = new Item();
itemObj.setItemCode(2);
itemObj.setItemName("Nevermind");
itemObj.setArtist("Nirvana");
itemObj.setType("Album");
itemObj.setCatalogCategory("Alternative Rock");
itemObj.setRating("7");
itemObj.setDescription("Nevermind is the second studio album by American rock band Nirvana, released on September 24, 1991 by DGC Records. Nevermind not only popularized the Seattle grunge movement but also brought alternative rock as a whole into the mainstream, establishing its commercial and cultural viability.");
itemObj.setImageURL("/assets/images/nevermind.jpg");

appItems.push(itemObj);
console.log(appItems.length);

//item 3
itemObj = new Item();
itemObj.setItemCode(3);
itemObj.setItemName("The Queen Is Dead");
itemObj.setArtist("The Smiths");
itemObj.setType("Album");
itemObj.setCatalogCategory("Alternative Rock");
itemObj.setRating("9");
itemObj.setDescription("The Queen Is Dead is the third studio album by English rock band the Smiths. The Queen Is Dead received critical acclaim, and is considered to be a defining album of the 1980s, as well as one of the greatest albums of all time.");
itemObj.setImageURL("/assets/images/thequeenisdead.png");

appItems.push(itemObj);

//item 4
itemObj = new Item();
itemObj.setItemCode(4);
itemObj.setItemName("Kind Of Blue");
itemObj.setArtist("Miles Davis");
itemObj.setType("Album");
itemObj.setCatalogCategory("Jazz");
itemObj.setRating("10");
itemObj.setDescription("Kind of Blue is a studio album by American jazz trumpeter Miles Davis. It was recorded on March 2 and April 22, 1959, at Columbia's 30th Street Studio in New York City, and released on August 17 of that year by Columbia Records. Kind of Blue has been regarded by many critics as the greatest jazz record, Davis's masterpiece, and one of the best albums of all time. Its influence on music, including jazz, rock, and classical genres, has led writers to also deem it one of the most influential albums ever recorded.");
itemObj.setImageURL("/assets/images/kindofblue.jpg");

appItems.push(itemObj);

//item 5
itemObj = new Item();
itemObj.setItemCode(5);
itemObj.setItemName("A Love Supreme");
itemObj.setArtist("John Coltrane");
itemObj.setType("Album");
itemObj.setCatalogCategory("Jazz");
itemObj.setRating("10");
itemObj.setDescription("A Love Supreme is an album by American jazz saxophonist John Coltrane. A Love Supreme is a suite with four parts: Acknowledgement, (which includes the oral chant that gives the album its name), Resolution, Pursuance, and Psalm. Coltrane plays tenor saxophone on all parts.");
itemObj.setImageURL("/assets/images/alovesupreme.jpg");

appItems.push(itemObj);

//item 6
itemObj = new Item();
itemObj.setItemCode(6);
itemObj.setItemName("Moon Beams");
itemObj.setArtist("Bill Evans");
itemObj.setType("Album");
itemObj.setCatalogCategory("Jazz");
itemObj.setRating("10");
itemObj.setDescription("Moon Beams is a 1962 album by jazz musician Bill Evans, and the first trio album recorded by Evans after the death of Scott LaFaro. Moon Beams contains a collection of ballads recorded during 1962.");
itemObj.setImageURL("/assets/images/moonbeams.jpg");

appItems.push(itemObj);
console.log(appItems);

var category1 = [appItems[0], appItems[1], appItems[2]];
var category2 = [appItems[3], appItems[4], appItems[5]];

var itemsPerCategory = [{
  categoryName: "Alternative Rock",
  items: category1
}, {
  categoryName: "Jazz",
  items: category2
}];

var getItems = function() {
  return itemsPerCategory;
};

var getItem = function(itemID) {
  //this is hardcoded should be updated find item from items list with specified item ID
  return appItems[itemID - 1];
};

var exists = function(itemID) {
  //this is hardcoded should be updated find item from items list with specified item ID
  if (getItem)
    return true;
  else
    return false;
};

module.exports.getItems = getItems;
module.exports.getItem = getItem;
module.exports.exists = exists;
