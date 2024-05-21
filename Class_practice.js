class Media {
    constructor(title, price) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
      this._price = price
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    set isCheckedOut(value) {
      if (typeof value === 'boolean') {
        this._isCheckedOut = value
      }
      else {
        console.log('Expected boolean, instead got ' + typeof value + '.')
      }
    }
  
    get ratings() {
    return this._ratings;
    }
  
    get price() {
      return this._price;
    }
  
    getAverageRating() {
      let sum = 0;
      let amt = 0;
      this.ratings.forEach((rating) => {
        sum += rating;
        amt++
      })
      return sum / amt;
    }
  
    toggleCheckOutStatus() {
      if(this.isCheckedOut) {
        this.isCheckedOut = false;
      }
      else if (!this.isCheckedOut) {
        this.isCheckedOut = true;
      }
    }
  
    addRating(rating) {
      if (rating <= 10 && rating >= 0) {
        this.ratings.push(rating);
      }
      else {
        console.log('Please enter a value ranging from 0 to 10.')
      }
    }
  
    valueMeter() {
      if (!this.price) {
        return 'Just take it already...'
      }
      else if (!this.ratings[0]) {
        return 'No ratings available.'
      }
      else {
        let value = (this.getAverageRating()/this.price) * 100;
        return Math.floor(value);
      }
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages, price) {
      super(title, price);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
      return this._author;
    }
  
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime, price) {
      super(title, price);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title, songs, price) {
      super(title, price);
      this._artist = artist;
      this._songs = songs;
    }
  
    get artist() {
      return this._artist;
    }
  
    get songs() {
      return this._songs;
    }
    // shuffle accepts an optional user input to specify the length of the playlist, else it shuffles every song. 
    shuffle(length = this.songs.length) {
      // It first checks if the album has 2 or more songs.
      if (this.songs.length < 2) {
        console.log('not enough songs in album.');
      }
      //  And checks if the eventual user input is in range of the album length.
      else if (length > this.songs.length || length < 2) {
        console.log('Please enter a number between 2 and ' + this.songs.length + '.');
      }
      // If these checks pass, the actual function will be returned.
      else {
        // create a copy of the original array so that we can remove elements as we please.
        let orderedSongs = [];
        for (let i = 0; i < this.songs.length; i++) {
          orderedSongs.push(this.songs[i])
        }
        // Then we append step by step and remove one by one
        let shuffledSongs = [];
        for (let j = length; j > 0; j--) {
          let num = orderedSongs.length;
          // console.log('nth length is ' + num);
          let rand = Math.floor(Math.random() * num);
          // console.log('nth rand is ' + rand);
          shuffledSongs.push(orderedSongs[rand]);
          orderedSongs.splice(rand, 1);
        }
        return shuffledSongs;
      }
    }
  }
  
  const lion = new CD('Elevation', 'Lion', ['1 - Lion', '2 - Same God', '3 - Graves into Gardens', '4 - What I See', '5 - Dancing', '6 - Welcome Resurrection', '7 - Forever YHWH'], 25);
  lion.addRating(4);
  
  console.log(lion.shuffle());
  