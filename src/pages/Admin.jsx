import { AdminTable, Loading, Login } from "@/components/index";
import { fetchTripOrders } from "@/services/trips/queries";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Admin = () => {
  const [user, setUser] = useState(null);

  const {
    data: ordersResponse,
    isFetching,
    error,
  } = useQuery({
    queryFn: () => fetchTripOrders(user?.jwt),
    queryKey: ["orders", user],
    enabled: Boolean(user), // Only run query when the user is set
  });
  const orders = ordersResponse?.data;
  console.log(orders);

  const onSubmit = (data) => {
    setUser(data);
  };
  return (
    <div className="min-h-screen py-36 flex items-center justify-center">
      {!user ? (
        <Login onSubmit={onSubmit} />
      ) : (
        <Loading isFetching={isFetching} error={error}>
          <AdminTable data={orders} />
        </Loading>
      )}
    </div>
  );
};

export default Admin;
