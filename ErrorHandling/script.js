console.log('Hello World!');

console.log(`The value of PI is ${Math.PI}`);

console.log('LOG');

let myObj = { name: 'Jon', age: 30 };
console.log(myObj);

let myArr = [1, 2, 3, 4, 5];
console.log(myArr);

console.info('INFO');

console.warn('WARNING');

console.error('ERROR');

let name = 'John Wick';
console.log('Hello my name is ' + name);
console.log(`Hello my name is ${name}`);
console.log(`My age is ${20 + 10}`);

console.log('%o', { name: 'Oliver Queen', age: 32 });
console.log('%O', { name: 'Felicity Smoak', age: 27 });

console.log('%i', 123);
console.log('%d', 456);

console.log('%s', 'Black cats are not bad luck!');

console.log('%f', 98.6);

console.log(
    'My name is %s and I am %i years old. View my info here: %o', 
    'Barry Allen', 
    28,
    { name: 'Barry Allen', age: 28}
    );

console.log('%c Greetings from New York City!', 'color: red; font-size: 20px; font-weight: bold; font-family: New York');

console.log(
    'My name is %cJohn %cConstantine',
    'color: red; font-size: 20px; font-family: New York',
    'color: #4B0082; font-size 2em',
    'I am 35',
);

console.assert(1 === 1, '1 is equal to 1');
console.assert(1 === 2, '1 is not equal to 2');

console.log('This is a message');
console.clear();

console.count('First Counter');
console.count('First Counter');
console.count('Second Counter');
console.count('Second Counter');

console.group('Group 1');
console.log('Hello!');
console.group('Group 2');
console.log('Hello Again!');
console.groupEnd();
console.groupEnd();

console.time('Time');
console.timeEnd('Time');

const func1 = () => {
    const func2 = () => {
        console.trace();
    };
    func2();
};

func1();

const teamFlash = [
    { name: 'Barry Allen', age: 28},
    { name: 'Iris West-Allen', age: 28},
    { name: 'Caitlyn Snow', age: 25},
    { name: 'Cisco Ramon', age: 27},
    { name: 'Joe West', age: 49},
    { name: 'Harrison Wells', age: 45},
    { name: 'Ralph Dibny', age: 32},
];

console.table(teamFlash);

// throw new Error('Something broke!');

let newName = 'Morgaan';
document.getElementsByClassName('heading')[0].innerHTML = `Hello ${newName}!`;

try {
    // throw new Error('Something broke!');
    console.log('Trying something');
} catch (e) {
    console.log(e.message);
} finally {
    console.log('This always runs!');
};

const messageMe = () => {
    alert('Hello! This is a message.');
};

