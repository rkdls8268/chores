// destructuring 

const name2 = 'Jerry';
const age = 25;
const address = 'Seoul';

const printInfo = ({
    name2,
    age,
    address,
}) => {
    return `My name is ${name2}. I'm ${age} years old. I live in ${address}.`;
};

console.log(printInfo({ age, name2, address }));