const { use, on } = require("@authfunctions/express");
let USERS = [];
let TOKENS = [];

//store a user in a database (here array)
use("store-user", (user) => {
  const newUser = {
    id: +new Date(),
    mail: user.mail,
    name: user.name,
    hashedPassword: user.hashedPassword,
  };
  USERS.push(newUser);
  return [false, newUser];
});

//check if mail is used in database
use("check-mailused", (mail) => {
  const user = USERS.find((user) => user.mail === mail);
  if (user) {
    return [false, true];
  } else {
    return [false, false];
  }
});

//check if name is used in database
use("check-nameused", (name) => {
  return [false, false];
});

//get user from database by name
use("getuser-mail", (mail) => {
  const user = USERS.find((user) => user.mail === mail);
  return [false, user];
});

//get user from database by mail
use("getuser-name", (name) => {
  const user = USERS.find((user) => user.name === name);
  return [false, user];
});

//store token in our database
use("store-token", (token) => {
  TOKENS.push(token);
  return [false];
});

//delete token in from our database
use("delete-token", (token) => {
  if (!TOKENS.includes(token)) {
    return [false, true];
  } else {
    TOKENS = TOKENS.filter((item) => item !== token);
    return [false, false];
  }
});

//check if token is in our database
use("check-token", (token) => {
  let check = TOKENS.includes(token);
  return [false, check];
});

//callback when user checks token
on("check", (user) => console.log(`Check:    ${user.mail}`));

//callback when user logins
on("login", (user) => console.log(`Login:    ${user.mail}`));

//callback when user logs out
on("logout", (user) => console.log(`Logout:   ${user.mail}`));

//callback when user refreshes token
on("refresh", (user) => console.log(`Refresh:  ${user.mail}`));

//callback when user registers
on("register", (user) => console.log(`Register: ${user.mail}`));
