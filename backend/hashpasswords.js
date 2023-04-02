const bcrypt = require('bcryptjs');
const saltRounds = 10;

const passwords = ['123', '234', '345', '456', '567'];

const hashPasswords = async () => {
  const hashedPasswords = [];
  for (const password of passwords) {
    const hash = await bcrypt.hash(password, saltRounds);
    hashedPasswords.push(hash);
  }
  return hashedPasswords;
};

hashPasswords().then(hashedPasswords => {
  console.log(`-- Insert sample users`);
  console.log(`INSERT INTO \`User\` (username, passwordHash) VALUES`);
  console.log(`('John', '${hashedPasswords[0]}'),`);
  console.log(`('Jane', '${hashedPasswords[1]}'),`);
  console.log(`('Alice', '${hashedPasswords[2]}'),`);
  console.log(`('Bob', '${hashedPasswords[3]}'),`);
  console.log(`('Charlie', '${hashedPasswords[4]}');`);

});
