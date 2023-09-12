import { useState } from 'react';
import {useAddTransaction} from '../../hooks/useAddTransaction';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';

export const ExprenseTracker = () => {
  const {addTransaction} = useAddTransaction();
  const {transactions,transactionTotal} = useGetTransactions();
  const {userName,userPhoto} = useGetUserInfo();
  const navigate = useNavigate();

  const [description,setDescription] = useState('');
  const [transactionAmount,setTransactionAmount] = useState('');
  const [transactionType,setTransactionType] = useState('expense');

  const {balance,income,expenses} = transactionTotal;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof addTransaction)
    addTransaction({transactionAmount,transactionType,description});
    setDescription('');
    setTransactionAmount('');
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='expense-tracker-container'>
    <div className="expense-tracker">
      <div className="container">
        <h1>{userName}'s Expense Tracker</h1>
        <div className="balance">
          <h3>Your balance: </h3>
          {
            balance >=0 ? <h2> ${balance}</h2> : <h2>-${balance*-1}</h2>
          }
          
        </div>
        <div className="summary">
          <div className="income">
            <h4>Income</h4>
            <p>${income}</p>
          </div>  
          <div className="expenses">
            <h4>Expenses</h4>
            <p>${expenses}</p>
          </div>
        </div>
        <form className="add-transaction" onSubmit={handleSubmit}>
          <input type="text" placeholder="Description" value={description} required onChange={e => setDescription(e.target.value)} />
          <input type="number" placeholder="Amount" value={transactionAmount} required onChange={e => setTransactionAmount(e.target.value)}/>
          <input type="radio" id="expense" value='expense' checked={transactionType==='expense'} onChange={e => setTransactionType(e.target.value)} />
          <label htmlFor="expense">Expense</label>
          <input type="radio" id="income" value='income' checked={transactionType==='income'} onChange={e => setTransactionType(e.target.value)} />
          <label htmlFor="income">Income</label>
          <button type="submit">Add Transaction</button>
        </form>
      </div>
      {
        userPhoto && 
        <div className='user-desc'>
          <img src={userPhoto} alt={userName} />
          <button onClick={signUserOut}>Sign Out</button>
        </div>
      }
    </div>
    <div className="transactions">
      <h3>Transactions</h3>
      <ul>
        {
          transactions.map((transaction) => {
            const {description,transactionAmount,transactionType} = transaction;
            return (
              <li key={transaction.id}>
                <h4>{description}</h4>
                <p>${transactionAmount} • <label style={{color: transactionType==='expense' ? 'red' : 'green'}}>{transactionType}</label> </p>
              </li>
            )
          })
        }
      </ul>
    </div>
    </div>
  )
}