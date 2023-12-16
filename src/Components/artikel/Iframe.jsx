import React from "react";
import Modal from "../Utility/modal/Modal";
import "./iframe.css";
function Iframe({ iframe }) {
  const embeddedString = iframe;
  return (
    <Modal>
      <div className="iframe">
        <div dangerouslySetInnerHTML={{ __html: embeddedString }} />;
      </div>
    </Modal>
  );
}

export default Iframe;
