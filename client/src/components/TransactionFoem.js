import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  CalendarPicker,
  LocalizationProvider,
  bgBG,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
const initial = {
  amount: 0,
  description: "",
  date: new Date(),
};

export default function TransactionForm({
  fetchTransactions,
  editTransaction,
}) {
  const [fom, Setform] = useState(initial);
  const [transaction, settransactions] = useState([]);

  useEffect(() => {
    // console.log(editTransaction)

    if (editTransaction.amount !== undefined) {
      Setform(editTransaction);
    }
  }, [editTransaction]);

  const handlechange = (e) => {
    const { name, value } = e.target;

    Setform({ ...fom, [name]: value });
  };

  function handleDate(newValue) {
    Setform({ ...fom, date: newValue });
  }

 async function create(){

    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(fom),
      headers: {
        "content-type": "application/json",
      },
    });

    reload(res)
  }
  async function update (){

    const res = await fetch(`http://localhost:4000/transaction/${editTransaction._id}`, {
      method: "PATCH",
      body: JSON.stringify(fom),
      headers: {
        "content-type": "application/json",
      },
    });

   reload(res)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = editTransaction.amount === undefined ? create()  : update();
   

  };

  function reload(res){
    if (res.ok) {
      Setform(initial);
      fetchTransactions();
    }
  }
  async function fetchTransactions() {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    //  console.log(data)
    settransactions(data);
  }

  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6">Add New Transaction</Typography>
          <TextField
            name="amount"
            value={fom.amount}
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            size="small"
            onChange={handlechange}
          />
          <TextField
            name="description"
            value={fom.description}
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Descripition"
            variant="outlined"
            size="small"
            onChange={handlechange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="DD/MM/YYYY"
              onChange={handleDate}
              value={fom.date}
              renderInput={(params) => (
                <TextField sx={{ marginRight: 5 }} size="small" {...params} />
              )}
            />
          </LocalizationProvider>

          {editTransaction.amount !== undefined  && (
            <Button size="small" type="submit" variant="secondary">
              Update
            </Button>
          )}
          {editTransaction.amount === undefined && (
            <Button size="small" type="submit" variant="contained">
              Submit
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
