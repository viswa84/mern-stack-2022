import { useState } from "react";

// import './App.css';
const initial = {
  amount: 0,
  description: "",
  date: "",
};

function App() {
  const [fom, Setform] = useState(initial);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(fom);
    const res = await fetch("http://localhost :4000/transaction", {
      method: "POST",
      body: fom,
    });
  };
  const handelechange = (e) => {
    const { name, value } = e.target;

    Setform({ ...fom, [name]: value });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          name="amount"
          onChange={handelechange}
          type="number"
          value={fom.amount}
          placeholder="Enter trasaction amount"
        />
        <input
          name="description"
          onChange={handelechange}
          type="text"
          value={fom.description}
          placeholder="Enter trasaction details"
        />
        <input
          onChange={handelechange}
          name="date"
          value={fom.date}
          type="date"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
