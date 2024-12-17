import { useState, useEffect } from "react";
import "./App.css";
// import soal from "./soal";
import axios from "axios";

function convertToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours} jam ${minutes} menit ${remainingSeconds} detik`;
}

function App() {
  const handleNext = () => {

    // conso
    if (nomor < data[0].questions.length - 1) {
      setNomor(nomor + 1);

    }
  };

  const handleBack = () => {
    console.log(nomor);
    if (data[0].questions[nomor].questionNo > 1) {
      setNomor(nomor - 1);

    }
  };

  const [nomor, setNomor] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5045/api/Quiz/getall")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
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
      {/* Bagian Header */}

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
        <div>Soal : {data != null && data[0].questions[nomor].questionNo}</div>
        <div>Sisa Waktu: {data != null &&  convertToTime(data[0].time)}</div>
      </div>

      {/* Bagian Pertanyaan */}
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
        <h2>{data != null && data[0].questions[nomor].questionText }</h2>
      </div>

      {/* Bagian Jawaban Pilihan Ganda */}
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
                <input type="radio" id="option1" name="answer" value="1" />
                <label htmlFor="option1">
                  {" "}
                  A. {data != null &&  data[0].questions[nomor].options[0]}
                </label>
              </td>
              <td>
                {" "}
                <input type="radio" id="option1" name="answer" value="1" />
                <label htmlFor="option1">
                  {" "}
                  B. {data != null && data[0].questions[nomor].options[1]}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="radio" id="option2" name="answer" value="2" />
                <label htmlFor="option2">
                  {" "}
                  C. {data != null && data[0].questions[nomor].options[2]}
                </label>
              </td>
              <td>
                {" "}
                <input type="radio" id="option1" name="answer" value="1" />
                <label htmlFor="option1">
                  {" "}
                  D. {data != null && data[0].questions[nomor].options[3]}
                </label>
              </td>
            </tr>
          </table>

        </form>
      </div>

      {/* Bagian Navigasi */}
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
  );
}

export default App;
