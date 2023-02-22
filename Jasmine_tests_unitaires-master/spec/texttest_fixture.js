import {Shop, Standard, Ager, Legendary, Conjured } from "../src/main.js";

const items = []

const itemsToAdd = [
  {name: "+5 Dexterity Vest", sellIn: 10, quality: 20},
  {name: "Aged Brie", sellIn: 22, quality: 0},
  {name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80},
  {name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80},
  {name: "Backstage passes to a Miles Davis concert",sellIn: 15,quality: 20},
  {name: "Backstage passes to a Miles Davis concert",sellIn: 10,quality: 49},
  {name: "Backstage passes to a Miles Davis concert", sellIn: 5, quality: 49},
  {name: "Conjured Mana Cake", sellIn: 3, quality: 6},
  {name: "Elixir of the Mongoose", sellIn: 5, quality: 7},
]

itemsToAdd.forEach((item) => {
  let thisItem = null
  if (item.name == "Aged Brie" || item.name.includes('Backstage')) {
    thisItem = new Ager(item.name, item.sellIn, item.quality)
  } else if (item.name.toLowerCase().includes('conjured')) {
    thisItem = new Conjured(item.name, item.sellIn, item.quality)
  } else if (item.name.toLowerCase().includes('sulfuras')) {
    thisItem = new Legendary(item.name, item.sellIn, item.quality)
  } else {
    thisItem = new Standard(item.name, item.sellIn, item.quality)
  }
  items.push(thisItem)
})
	

const days = 30;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, jours restant pour vendre: ${item.sellIn}, cota precieux: ${item.quality}`));
  gildedRose.updateQuality();
}