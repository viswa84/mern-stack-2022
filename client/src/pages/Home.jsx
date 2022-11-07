import { Container } from '@mui/material'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import TransactionForm from '../components/TransactionFoem'
import TransactionsList from '../components/TransactionList'

export const Home = () => {
    const [transaction, settransactions] = useState([]);
    const [editTransaction, setEditTransaction] = useState({});

    async function fetchTransactions() {

      const token =Cookies.get("token");
        console.log(`token = ${token}`);
        console.log(`${process.env.REACT_APP_API_URL} url`)
        const res = await fetch(`http://localhost:4000/transaction`,{
          headers:{
           Authorization:`Bearer ${token}`
          }
        });
        const { data } = await res.json();
    
        settransactions(data);
      }
      useEffect(() => {
        fetchTransactions();
      }, []);
  return (
    <Container>
     
    <TransactionForm fetchTransactions={fetchTransactions}     editTransaction={editTransaction}/>
    <TransactionsList transaction={transaction}  fetchTransactions={fetchTransactions
    }   setEditTransaction={setEditTransaction}                   />
  </Container>
  )
}
