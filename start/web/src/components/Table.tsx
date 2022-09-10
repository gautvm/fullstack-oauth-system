export const Table = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <tbody>
            <TableRow name="ID" value={"ID"} />
            <TableRow name="Email" value={"Email"} />
            <TableRow name="Name" value={"Name"} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableRow: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => {
  return (
    <tr className="border">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900">
        {name}
      </th>
      <td className="px-6 py-4">{value}</td>
    </tr>
  );
};
