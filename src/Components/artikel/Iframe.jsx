import Modal from "../Utility/modal/Modal";
import "./iframe.css";
function Iframe({ iframe }) {
  const embeddedString = iframe;
  return (
    <Modal>
      <div className="iframeWrapp">
        <div className="iframe">
          <div dangerouslySetInnerHTML={{ __html: embeddedString }} />
        </div>
        <div />
      </div>
    </Modal>
  );
}

export default Iframe;
