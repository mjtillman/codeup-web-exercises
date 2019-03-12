const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// const name = 'Mindy';
// const email = 'mjtillman@gmail.com';
// const languages = ['JavaScript', 'HTML', 'CSS'];

// name = 'Not Mindy';

users.push({name, email, languages});

let emails = [];
let names = [];


// users.forEach(function(user) {
//   return emails.push(user.email);
// });

// users.forEach = user => emails.push(user.email);

users.forEach((user) => {
  return emails.push(user.email);
});

// users.forEach(function(user) {
//   return names.push(user.name);
// });

// users.forEach = user => names.push(user.name);

users.forEach((user) => {
  return names.push(user.name);
});



let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //  note that you can also use destructuring assignment in the function
  //  parameter definition
  const name = user.name;
  const email = user.email;
  const languages = user.languages;

  const {name, email, languages} = user;


  // developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));

  developers.push(`${name}\'s email is ${email}. ${name} knows ${languages.join(', ')}`);

});


let list = '<ul>';

for (let developer of developers) {
  // list += '<li>' + developer + '</li>';
  list += `<li>${developer}</li>`;
}
list += '</ul>';

console.log(list);

//
// developers.forEach(function (developer) {
//   list += '<li>' + developer + '</li>';
// });
// list += '</ul>';
