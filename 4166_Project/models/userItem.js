class UserItem {
  constructor(item, rating, listened) {
    this.item = item;
    this.rating = rating;
    this.listened = listened;
  }

  getItem() {
    return this.item;
  };

  setItem(item) {
    this.item = item;
  };

  getRating() {
    return rating;
  };

  setRating(rating) {
    this.rating = rating;
  };

  getListened() {
    return this.listened;
  };

  setListened(listened) {
    this.listened = listened;
  };
}

module.exports = UserItem;
