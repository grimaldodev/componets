import "./Modal.css";

export const Modal = ({ children, isOpen, toggle }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={toggle}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
