import "../components/ExpenseItem.css";

function ExpenseItem(props) {
    let day = props.date.toLocaleString('en-US', { day: '2-digit' })
    let month = props.date.toLocaleString('en-US', { month: 'long' })
    return (
        <div className="expense-item">
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{props.date.getFullYear()}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
