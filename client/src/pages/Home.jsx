import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TransactionForm from '../components/TransactionFoem'
import TransactionsList from '../components/TransactionList'

export const Home = () => {
    const [transaction, settransactions] = useState([]);
    const [editTransaction, setEditTransaction] = useState({});

    async function fetchTransactions() {
        const res = await fetch("http://localhost:4000/transaction");
        const { data } = await res.json();
    
        settransactions(data);
      }
      useEffect(() => {
        fetchTransactions();
      }, [transaction]);
  return (
    <Container>
     
    <TransactionForm fetchTransactions={fetchTransactions}     editTransaction={editTransaction}/>
    <TransactionsList transaction={transaction}  fetchTransactions={fetchTransactions
    }   setEditTransaction={setEditTransaction}                   />
  </Container>
  )
}
