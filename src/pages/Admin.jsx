import { AdminTable, Login } from "@/components/index";
import { useState } from "react";

const Admin = () => {
  const [user, setUser] = useState(null);
  const onSubmit = (data) => {
    setUser(data);
  };
  return (
    <div className="min-h-screen py-36 flex items-center justify-center">
      {!user ? <Login onSubmit={onSubmit} /> : <AdminTable />}
    </div>
  );
};

export default Admin;
