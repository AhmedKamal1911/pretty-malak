import { MessagesDialog } from "./index";
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const AdminTable = ({ data }) => {
  return (
    <Table className="max-w-[900px] mx-auto border-2">
      <TableHeader className="bg-black text-white">
        <TableRow>
          <TableHead className="whitespace-nowrap">No</TableHead>
          <TableHead className="whitespace-nowrap">Trip Name</TableHead>
          <TableHead className="whitespace-nowrap">Email</TableHead>
          <TableHead className="whitespace-nowrap">Full Name</TableHead>
          <TableHead className="whitespace-nowrap">Hotel Name</TableHead>
          <TableHead className="whitespace-nowrap">Phone Number</TableHead>
          <TableHead className="whitespace-nowrap">Check Date</TableHead>
          <TableHead className="whitespace-nowrap">Country</TableHead>
          <TableHead className="whitespace-nowrap">Child</TableHead>
          <TableHead className="whitespace-nowrap">Adult</TableHead>
          <TableHead className="whitespace-nowrap">Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((order, idx) => (
          <TableRow key={idx}>
            <TableCell className="p-1 text-center whitespace-nowrap text-main text-xl">
              {idx + 1}
            </TableCell>
            <TableCell className="p-1 pl-4  whitespace-nowrap">
              {order.tripSlug}
            </TableCell>
            <TableCell className="pl-4 whitespace-nowrap">
              {order.email}
            </TableCell>
            <TableCell className="pl-4 whitespace-nowrap">
              {`${order.firstName} ${order.lastName}`}
            </TableCell>
            <TableCell className="pl-4 whitespace-nowrap">
              {order.hotelName}
            </TableCell>
            <TableCell className="pl-4 whitespace-nowrap">
              {order.phoneNumber}
            </TableCell>
            <TableCell className="pl-4 whitespace-nowrap">
              {order.checkDate}
            </TableCell>
            <TableCell className="pl-4 whitespace-nowrap">
              {order.country}
            </TableCell>
            <TableCell className="p-2 text-center">
              {order.childCount}
            </TableCell>
            <TableCell className="p-2 text-center">
              {order.adultCount}
            </TableCell>
            <TableCell className="pl-4">
              <MessagesDialog
                dialogTitle={"Customer Message"}
                desc={order.message}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminTable;
