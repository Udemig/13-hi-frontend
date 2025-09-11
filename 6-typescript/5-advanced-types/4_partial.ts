/*
 ! Partial
 * Typescript içeriisnde varsayılan olarak bulunan bir type'dır.
 * Generic olarak aldığı nesnenin tüm property'lerini optional yapar.
 */

type User = {
  username: string;
  age: number;
  password: string;
};

const createUser = (user: User) => {
  // axio.post
};

const updateUser = (user: Partial<User>) => {
  // axios.patch
};

createUser({ username: "John", age: 23, password: "123" });

updateUser({ username: "Jake" });
