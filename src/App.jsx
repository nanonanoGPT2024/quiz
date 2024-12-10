import "./App.css";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
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
        <div>Soal ${"{Data.No}"}</div>
        <div>Sisa Waktu: HH:MM:SS</div>
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
        <h2>Pertanyaan</h2>
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
          <div style={{ marginBottom: "10px" }}>
            <input type="radio" id="option1" name="answer" value="1" />
            <label htmlFor="option1"> A. 1</label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <input type="radio" id="option2" name="answer" value="2" />
            <label htmlFor="option2"> B. 2</label>
          </div>
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
          disabled
        >
          &lt; Before
        </button>
        <button style={{ backgroundColor: "#007bff", color: "white", padding: "10px" }}>
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
};

export default App;
