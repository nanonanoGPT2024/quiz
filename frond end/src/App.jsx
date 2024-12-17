import { useState } from "react";
import "./App.css";
import soal from "./soal";

function convertToTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours} jam ${minutes} menit ${remainingSeconds} detik`;
}

function App() {
  const handleNext = () => {
    if (nomor < soal[0].questions.length - 1) {
      setNomor(nomor + 1);
      console.log(soal[0].questions.length);
    }
  };

  const handleBack = () => {
    console.log(nomor);
    if (soal[0].questions[nomor].questionNo > 1) {
      setNomor(nomor - 1);
      console.log(soal[0].questions.length);
    }

  };

  const [nomor, setNomor] = useState(0);

  console.log("nomor : ", nomor);

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
        <div>Soal : {soal[0].questions[nomor].questionNo}</div>
        {/* {console.log(soal.questions[0] )} */}
        {/* {console.log(soal[0].questions[0].options[0])}; */}
        <div>Sisa Waktu: {convertToTime(soal[0].time)}</div>
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
        <h2>{soal[0].questions[nomor].question}</h2>
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
          {/* <div style={{ marginBottom: "10px" }}> */}
          <table
            style={{
              // border: "1px solid black",
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
                  A. {soal[0].questions[nomor].options[0]}
                </label>
              </td>
              <td>
                {" "}
                <input type="radio" id="option1" name="answer" value="1" />
                <label htmlFor="option1">
                  {" "}
                  A. {soal[0].questions[nomor].options[1]}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="radio" id="option2" name="answer" value="2" />
                <label htmlFor="option2">
                  {" "}
                  B. {soal[0].questions[nomor].options[2]}
                </label>
              </td>
              <td>
                {" "}
                <input type="radio" id="option1" name="answer" value="1" />
                <label htmlFor="option1">
                  {" "}
                  A. {soal[0].questions[nomor].options[3]}
                </label>
              </td>
            </tr>
          </table>

          {/* </div>
          <div style={{ marginBottom: "10px" }}> */}

          {/* </div> */}
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
          style={{ backgroundColor: "#555", color: "white", padding: "10px" }}  onClick={handleBack}
          
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
