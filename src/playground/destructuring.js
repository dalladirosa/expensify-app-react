const person = {
  name: 'Andrew',
  age: 27,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
}

const { name: firstName = 'Anonymous', age } = person
// const name = person.name
// const age = person.age
console.log(`${firstName} is ${age}.`)

const { city, temp: temperature } = person.location
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {}
}

const { name: publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)

// Array destructuring

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147'
]

const [, city, state = 'New York'] = address
console.log(`You are in ${state}.`)

const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75']
const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumprice}`)
