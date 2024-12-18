import { useState, useEffect } from "react";
import "./App.css";
// import soal from "./soal";
import axios from "axios";
import "../tailwind.css";
import Modal from "./Modal";

function convertToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours} jam ${minutes} menit ${remainingSeconds} detik`;
}

function App() {
  const [nomor, setNomor] = useState(0);
  const [data, setData] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [selectRadio, setSelectRadio] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleNext = () => {
    if (nomor < data[0].questions.length - 1) {
      setNomor(nomor + 1);
    }

    setAnswer((prev) => ({ ...prev, [nomor + 1]: selectRadio }));
  };

  console.log(answer);

  const handleBack = () => {
    if (data[0].questions[nomor].questionNo > 1) {
      setNomor(nomor - 1);
    }
  };

  const handleChangeRadio = (e) => {
    setSelectRadio(e.target.value);
    console.log("cek : ", e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5045/api/Quiz/getall")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        style={{
          padding: "0",
          margin: "0",
          fontFamily: "Arial, sans-serif",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold">Ini Modal!</h2>
          <p className="mt-2 text-gray-600">
            Jawaban 

            
            <ul>
              {answer != null &&
                Object.entries(answer).map(([key, value]) => {
                  console.log(`Key: ${key}, Value: ${value}`);
                  return (
                    <li key={key}>
                      {key} : {value}
                    </li>
                  );
                })}
            </ul>
          </p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </Modal>

        <div
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            Soal : {data != null && data[0].questions[nomor].questionNo}
          </div>
          <div>Sisa Waktu: {data != null && convertToTime(data[0].time)}</div>
        </div>

        <div
          style={{
            backgroundColor: "navy",
            color: "white",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h2>{data != null && data[0].questions[nomor].questionText}</h2>
        </div>

        <div
          style={{
            backgroundColor: "darkolivegreen",
            color: "white",
            padding: "20px",
          }}
        >
          <form>
            <table
              style={{
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              <tr>
                <td>
                  {" "}
                  <input
                    type="radio"
                    id="option1"
                    name="answer"
                    value="A"
                    onChange={handleChangeRadio}
                  />
                  <label htmlFor="option1">
                    {" "}
                    A. {data != null && data[0].questions[nomor].options[0]}
                  </label>
                </td>
                <td>
                  {" "}
                  <input
                    type="radio"
                    id="option2"
                    name="answer"
                    value="B"
                    onChange={handleChangeRadio}
                  />
                  <label htmlFor="option1">
                    {" "}
                    B. {data != null && data[0].questions[nomor].options[1]}
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input
                    type="radio"
                    id="option3"
                    name="answer"
                    value="C"
                    onChange={handleChangeRadio}
                  />
                  <label htmlFor="option2">
                    {" "}
                    C. {data != null && data[0].questions[nomor].options[2]}
                  </label>
                </td>
                <td>
                  {" "}
                  <input
                    type="radio"
                    id="option4"
                    name="answer"
                    value="D"
                    onChange={handleChangeRadio}
                  />
                  <label htmlFor="option1">
                    {" "}
                    D. {data != null && data[0].questions[nomor].options[3]}
                  </label>
                </td>
              </tr>
            </table>
          </form>
        </div>

        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button
            style={{ backgroundColor: "#555", color: "white", padding: "10px" }}
            onClick={handleBack}
          >
            &lt; Before
          </button>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px",
            }}
            onClick={handleNext}
          >
            Next &gt;
          </button>
          <button
            style={{
              backgroundColor: "brown",
              color: "white",
              padding: "10px",
            }}
            onClick={openModal}
          >
            Tampilkan Seluruh Jawaban
          </button>
          <button
            style={{
              backgroundColor: "pink",
              color: "black",
              padding: "10px",
            }}
          >
            Submit All Answer
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
