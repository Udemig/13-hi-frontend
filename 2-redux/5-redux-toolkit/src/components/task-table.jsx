import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import TableRow from "./table-row";

const TaskTable = () => {
  const { tasks } = useSelector((store) => store.crudReducer);

  return (
    <Table striped hover bordered responsive>
      <tr>
        <th>Görev</th>
        <th>Yazan</th>
        <th>Atanan</th>
        <th>Tarih</th>
        <th>İşlemler</th>
      </tr>

      <tbody>
        {tasks.map((task) => (
          <TableRow task={task} key={task.id} />
        ))}
      </tbody>
    </Table>
  );
};

export default TaskTable;
