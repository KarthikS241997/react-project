import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSE = [
  {
    id: Math.random().toString(),
    title: "Car Insurance",
    amount: 12000,
    date: new Date(2021, 9, 24),
  },
  {
    id: Math.random().toString(),
    title: "Groceries",
    amount: 2000,
    date: new Date(2021, 4, 13),
  },
  {
    id: Math.random().toString(),
    title: "Bike Insurance",
    amount: 1800,
    date: new Date(2021, 0, 20),
  },
  {
    id: Math.random().toString(),
    title: "Desktop",
    amount: 18000,
    date: new Date(2021, 3, 18),
  },
  {
    id: Math.random().toString(),
    title: "Phone",
    amount: 18000,
    date: new Date(2019, 3, 18),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
