import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
      {expenses.map((e, i) => (
        <ExpenseItem date={e.date} key={i} amount={e.amount} title={e.title} />
      ))}
    </Card>
  );
};

export default Expenses;
