const person = {
    // name: 'Julien',
    age: 30,
    location: {
        city: 'Montpellier',
        temp: '24'
    }
};

// Old syntax
// const name = person.name;
// const age = person.age;

// New syntax
const {name = 'John Doe', age} = person;
console.log(`${name} is ${age} years old`);

// Exemple
const {city, temp: temperature} = person.location;
if(city && temperature){
    console.log(`It's ${temperature} at ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const {name: publisherName = 'Self published'} = book.publisher;
console.log(publisherName);