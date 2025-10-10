import delay from "../../../../utils/delay";

export const metadata = {
  title: "Users",
  description: "Users",
};

const Users = async () => {
  await delay(2000);

  return <div className="box">Users</div>;
};

export default Users;
