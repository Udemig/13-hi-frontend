import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";
import { useState } from "react";
import TaskModal from "./task-modal";

const TableRow = ({ task }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleDelete = () => {
    // kullanıcının onayını al
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // reducer'a haber ver
    dispatch(deleteTask(task.id));
  };

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <tr>
        <td>{task.title}</td>
        <td>{task.author}</td>
        <td>{task.assigned}</td>
        <td>
          {new Date(task.end_date).toLocaleDateString("tr", {
            day: "2-digit",
            month: "short",
          })}
        </td>

        <td className="d-flex">
          <Button onClick={handleOpen} size="sm" className="me-1">
            Dzn
          </Button>
          <Button onClick={handleDelete} size="sm" variant="danger">
            Sil
          </Button>
        </td>
      </tr>

      <TaskModal task={task} show={show} handleClose={handleClose} />
    </>
  );
};

export default TableRow;
