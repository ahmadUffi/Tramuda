import "./history.css";

const History = () => {
  return (
    <div className="history">
      <div className="history_wrapper">
        <div className="saved">
          <h2>Disimpan</h2>
          <span>4</span>
        </div>
        <hr />
        <div className="requested">
          <h2>Permintaan Alat</h2>
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default History;
