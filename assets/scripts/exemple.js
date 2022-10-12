// const people = ['glorius','diana','crystal','trisha'];

// for( const key in people){
//     console.log(`${key} => ${people[key]}`);
// }

// let name = 'Paul';

// function greet () {
//     let name = 'Timothy';
//     let age = 20;
//     console.log(name,age);
// }

// greet();
// console.log(name);

function getName () {
    return prompt ('Your name: ', '');
}

function greet () {
    const userName = getName();
    console.log(`Hello ${userName}`);
}

greet();