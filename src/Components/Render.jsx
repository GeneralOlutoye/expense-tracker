import React, { useState, useRef } from "react";
import data from "./data/profile.json"

export const Render = () => {
    const [transaction, setTransaction] = useState(data);
    const [income, setIncome] = useState(3000);
    const [expense, setExpense] = useState(1725);
    const [price, setPrice] = useState(1275);
    const radiosWrapper = useRef();
    const [checked, setChecked] = useState(null)
    // const [color, setColor] = useState('black')

    const [addData, setAddData] = useState({
        text: '',
        amount: '',
    })

    const addInputHandler = (e) => {
        e.preventDefault()
        const inputs = e.target.getAttribute("name")
        const inputValue = e.target.value
        const newData = { ...addData }
        newData[inputs] = inputValue;

        setAddData(newData);
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const newInputs = {
            id: Math.floor(Math.random() * 1000) + 1,
            title: addData.title,
            amount: addData.amount,
        };
        const newInputData = [...transaction, newInputs];
        setTransaction(newInputData);
        const inputAmount = Number(`${addData.amount}`)

        const checkedInput = radiosWrapper.current.querySelector('input:checked');
        if (checkedInput.name === "income") {
            const inc = income + inputAmount
            const priceAdd = inputAmount + price
            setPrice(priceAdd)
            setIncome(inc)
            // setColor()
        }
        else if (checkedInput.name === "expense") {
            const exp = expense + inputAmount
            const nowtotal = price - inputAmount
            setExpense(exp)
            setPrice(nowtotal)
            // setColor('red')
        }

    }
    const changeHandler = (item) => {
        item === checked ? setChecked(null) : setChecked(item)
    }

    return (
        <div className="planningWrapper">
            <section className="title" >
                <h1 style={{ gap: 10, fontFamily: 'sans-serif' }}>EXPENSE TRACKER</h1>
            </section>
            <section className="section1">
                <h3>MY BALANCE</h3>
                <h2 style={{ fontSize: '27px', fontWeight: 700 }}>$ {price} </h2>
                <div className="dashboard">
                    <div className="income" >
                        <h3>INCOME</h3>
                        <span style={{ fontSize: '27px', fontWeight: 700, color: 'green' }}>${income} </span>
                    </div>
                    <div >
                        <h3>EXPENSE</h3>
                        <span style={{ fontSize: '27px', fontWeight: 700, color: 'red' }}>${expense}</span>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="AddTransaction">
                    <div className="transaction">
                        <h2 style={{textAlign: 'center', textDecoration: 'underline'}} >Make New Transaction</h2>
                        <form onSubmit={submitHandler} >
                            <span className="form">
                                <label style={{ fontSize: '20px', fontWeight: 400 }}> Title: </label>
                                <input type="text" name="title" className="forum" required
                                    onChange={addInputHandler}
                                    placeholder="Enter title..."></input>
                                <br />
                                <label style={{ fontSize: '20px', fontWeight: 400 }}> Amount: </label>
                                <input type="text" className="forum" required
                                    name="amount"
                                    onChange={addInputHandler}
                                    placeholder="Enter amount..." ></input>
                                <div ref={radiosWrapper} >
                                    <label className="radioLabel"  >
                                        <input type="radio" className="incomeRadio" key={1} checked={checked === "Income"} onChange={() => changeHandler("Income")} name="income" style={{ backgroundColor: 'green' }} /> <span style={{ color: 'green' }}> Income </span>
                                    </label>
                                    <label className="radioLabel" >
                                        <input type="radio" className="radioInput" key={2} checked={checked === "expense"} onChange={() => changeHandler("expense")} name="expense" /><span style={{ color: 'red' }}> Expense </span>
                                    </label>
                                </div>
                                <button onSubmit={submitHandler}>ADD TRANSACTION</button>
                            </span>
                        </form>
                    </div>
                </div>
                <div className="AddTransaction">
                    <div className="history">
                        <h2 style={{textDecoration: 'underline'}} >History</h2>
                        <ol>
                            {transaction.map((expense, id) => {
                                return <li style={{ marginBottom: '10px', fontWeight: 600 }} key={id}> {expense.title}: <span> ${expense.amount}</span> </li>
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
