class Friend {
  constructor(id, {
    firstName, lastName, gender, language, email, age, contacts,
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.language = language;
    this.email = email;
    this.age = age;
    this.contacts = contacts;
  }
}

const friendDatabase = {

};

const resolvers = {
  getFriend: ({ id }) => new Friend(id, friendDatabase[id]),
  createFriend: ({ input }) => {
    const id = require('crypto').randomBytes(10).toString('hex');
    friendDatabase[id] = input;
    return new Friend(id, input);
  },
};

export default resolvers;

