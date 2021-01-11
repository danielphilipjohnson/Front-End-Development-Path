import { users } from "./db";

const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + ":" + root.lastName;
  },
};

const resolvers = {
  Query: {
    greeting: () => {
      return "hello from  Dans world !!!";
    },
    user: (parent, { id }, context, info) => {
      console.log(users);
      // need to check it exists
      return users.find((user) => user.id === id);
    },
    userByUniversity: (parent, { univeristy }, context, info) => {
      console.log(univeristy);
      // need to check it exists
      return users.find((user) => user.univeristy === univeristy);
    },

    users: (parent, args, context, info) => {
      return users;
    },
  },

  Mutation: {
    createUser: (
      parent,
      {
        id,
        first_name,
        last_name,
        email,
        gender,
        language,
        race,
        job_title,
        skills,
        university,
      },
      context,
      info
    ) => {
      const newUser = {
        first_name,
        last_name,
        email,
        gender,
        language,
        race,
        job_title,
        skills,
        university,
      };

      users.push(newUser);

      return newUser;
    },

    updateUser: (
      parent,
      {
        first_name,
        last_name,
        email,
        gender,
        language,
        race,
        job_title,
        skills,
        university,
      },
      context,
      info
    ) => {
      let newUser = users.find((user) => user.id === id);

      newUser.first_name = first_name;
      newUser.last_name = last_name;
      newUser.email = email;
      newUser.gender = gender;
      newUser.language = language;
      newUser.race = race;
      newUser.job_title = job_title;
      newUser.skills = skills;
      newUser.university = university;

      return newUser;
    },

    deleteUser: (parent, { id }, context, info) => {
      const userIndex = users.findIndex((user) => user.id === id);

      if (userIndex === -1) throw new Error("User not found.");

      const deletedUsers = users.splice(userIndex, 1);

      return deletedUsers[0];
    },
  },
};

export default resolvers;
