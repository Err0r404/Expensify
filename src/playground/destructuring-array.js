const adress = [ '777 Bergamotes street', 'Montpellier', 'France', '34000' ];

// Old syntax
console.log(`You are located in ${adress[1]} ${adress[2]}`);

// New syntax
const [, city, country] = adress;
console.log(`You are located in ${city} ${country}`);
const [streetName = 'unknown'] = adress;
console.log(`You are live at ${streetName}`);




const item = ['Hot Coffee', '2.00€', '2.50€', '3.00€'];

const [itemName, , itemMediumPrice] = item;
console.log(`Medium ${itemName} cost ${itemMediumPrice}`);