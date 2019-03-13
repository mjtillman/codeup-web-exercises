const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threePlusLang = users.filter(user => user.languages.length > 2);

// console.log(`\nUsers who know at least 3 languages:`);
// threePlusLang.forEach(user => console.log(`\t ${user.name}`));

///////////////////////////////////////////////////////////////////////////

const emails = users.map(user => user.email);

// console.log(`\nUser emails:`);
// emails.forEach(email => console.log(`\t ${email}`));

///////////////////////////////////////////////////////////////////////////

const totalYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);

const average = totalYears / users.length;

// console.log(`\nYears of experience combined between users: ${totalYears}`);
// console.log(`Average experience: ${average}`);

// Sophie's Code
// const sumOfYears = (total, user) => total + user.yearsOfExperience;
// const totalYears2 = users.reduce(sumOfYears, 0);


///////////////////////////////////////////////////////////////////////////

const longEmail = emails.reduce((longest, email) => {
   return (email.length > longest.length) ? email : longest;
}, '');

// console.log(`\nThe longest email is: ${longEmail}`);

///////////////////////////////////////////////////////////////////////////

const instructors = users.reduce((list, user) => {
    return list + user.name + ' ';
}, '');

console.log(`\nThe instructors in the array are: ${instructors}`);

const names = users.map(user => user.name);
console.log(`\nInstructors as a joined string: ${names.join(', ')}`);

//  .flat - flattens multidimensional arrays
//  new Set(languages) - only takes unique entries (Math oriented array)
//  Array.from -
//  .add -
