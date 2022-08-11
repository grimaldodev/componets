import { Modal } from "./Modal/Modal";
import { useModal } from "./Modal/useModal";

function App() {
  const { isOpen, toggle } = useModal();
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} children={"this works"}></Modal>
      <button onClick={toggle}>Open Modal</button>
    </>
  );
}

export default App;
