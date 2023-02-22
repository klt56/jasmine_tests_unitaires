export class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
	updateQuality() {}
}


export class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality()
    }
    return this.items;
  }
}

export class Legendary extends Item {

}

export class Ager extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
	updateQuality() {
    this.sellIn > 10 ? this.quality += 1 : this.quality ;
		this.sellIn <= 10 && this.sellIn > 5 ? this.quality += 2 : this.quality ;
    this.sellIn < 5 ? this.quality += 3 : this.quality ;
		this.sellIn <= 0 ? this.quality = 0 : this.quality ;
    this.quality >= 50 ? this.quality = 50 : this. quality
		this.sellIn -= 1
	}
}

export class Standard extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
	updateQuality() {
		this.sellIn > 0 && this.quality > 0 ? this.quality -= 1 : this.quality;
    this.sellIn <= 0 && this.quality > 0 ? this.quality -=2 : this.quality;
		this.quality < 0 ? this.quality = 0 : this.quality;
		this.sellIn -= 1
	}
}

export class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
		this.sellIn > 0 ? this.quality -= 2 : this.quality ;
		this.sellIn <= 0 ? this.quality -= 4 : this.quality
    this.quality <= 0 ? this.quality = 0 : this. quality
		this.sellIn -= 1
	}
}
