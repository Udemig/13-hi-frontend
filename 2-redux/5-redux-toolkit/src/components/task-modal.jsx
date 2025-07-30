import { Button, Form, Modal } from "react-bootstrap";
import { inputs } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/slices/crudSlice";

const TaskModal = ({ task, show, handleClose }) => {
  const dispatch = useDispatch();

  // form gönderilince çalışır:
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki değerelere erişme (en pratik yol)
    const formData = new FormData(e.target);

    // formdaki verileri nesne haline getir
    const taskData = Object.fromEntries(formData.entries());

    // eğer güncellenicek task varsa:
    if (task) {
      // görevin güncelleniceğini reducer'a haber ver
      dispatch(updateTask({ ...taskData, id: task.id }));
    } else {
      // yeni görev ekleniceğini reducer'a haber ver
      dispatch(addTask(taskData));
    }

    // modal'ı kapat
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{task ? "Görevi Düzenle" : "Yeni Görev Oluştur"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {inputs.map((input, key) => (
            <Form.Group key={key} className="mb-3" controlId={input.name}>
              <Form.Label>{input.label}</Form.Label>
              <Form.Control name={input.name} type={input.type} defaultValue={task?.[input.name]} />
            </Form.Group>
          ))}

          <Modal.Footer>
            <Button type="button" variant="secondary" onClick={handleClose}>
              Kapat
            </Button>
            <Button type="submit" variant="primary">
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskModal;
