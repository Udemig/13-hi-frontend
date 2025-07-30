import { Container } from "react-bootstrap";
import TaskForm from "../components/task-form";
import TaskTable from "../components/task-table";

const Crud = () => {
  return (
    <div className="vh-100">
      <Container>
        <TaskForm />

        <TaskTable />
      </Container>
    </div>
  );
};

export default Crud;
