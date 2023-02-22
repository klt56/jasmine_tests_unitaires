import {Shop, Standard, Ager, Conjured, Legendary}  from '../src/main.js';

describe("Gilded Rose", function() {

  it("test the rules for standard items", function() {
    const gildedRose = new Shop([ 
      new Standard("standard", 2, 2), 
      new Standard("standardOutDated", -1, 20),
      new Standard("standardLowQuality", 20, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
    expect(items[1].quality).toEqual(18);
    expect(items[2].quality).toEqual(0);
  });

  it("test the rule for Agers", function() {
    const gildedRose = new Shop([  
      new Ager("ager", 20, 2), 
      new Ager("ager5day", 4, 2),
      new Ager("ager10days", 9, 2),
      new Ager ("agerLastDay", 0, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(3);
    expect(items[1].quality).toEqual(5);
    expect(items[2].quality).toEqual(4);
    expect(items[3].quality).toEqual(0);
  });

  it("test the rules for legendaries", function() {
    const gildedRose = new Shop([ 
      new Legendary("Legendary", 2, 80), 
      new Legendary("LegendaryOutDated", -1, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
    expect(items[1].quality).toEqual(80);
  });
  
  it("test the rules for conjured items", function() {
    const gildedRose = new Shop([ 
      new Conjured("Conjured", 2, 2), 
      new Conjured("ConjuredOutDated", -1, 20),
      new Conjured("ConjuredLowQuality", 20, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
    expect(items[1].quality).toEqual(16);
    expect(items[2].quality).toEqual(0);
  });
});
