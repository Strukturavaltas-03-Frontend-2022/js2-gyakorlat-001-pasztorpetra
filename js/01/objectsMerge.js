
const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
}


const objectsMerge = (...objects) => ({...objects});

console.log(objectsMerge(johnDoe, janeDoe));

export default objectsMerge;
