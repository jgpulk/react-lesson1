import "../components/ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>25th September 2022</div>
            <div className="expense-item__description">
                <h2>Iphone 14 pro</h2>
                <div className="expense-item__price">$ 1600</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
