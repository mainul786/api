const shop = {
    owner:'najia',
    address:{
        street:'charlabangola',
        city:'bhagwangola',
        country:'India'
    },
    porducts:['laptop','monitor','microphone', 'watch', 'mobile'],
    revenu:45000,
    isOpen:true,
    isNew:false
};
console.log(shop);

// JSON FULL form JavaScript Object Notation
// stringfy convert string to json string
const stringfied = JSON.stringify(shop);
console.log(stringfied);

// JSON.parse convert string to object
const parseString = JSON.parse(stringfied);
console.log(parseString);