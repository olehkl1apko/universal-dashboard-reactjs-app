import { useState } from "react";

import "./users.scss";
import { DataTable, AddItem } from "../../components";
import { userListData, usersColumns } from "../../modules";
// import { useQuery } from "@tanstack/react-query";

const Users = () => {
  const [open, setOpen] = useState(false);

  // Using API
  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={usersColumns} rows={userListData} />
      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={usersColumns} rows={data} />
      )} */}
      {open && <AddItem slug="user" columns={usersColumns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
