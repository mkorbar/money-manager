import { useState } from "react";
import { addExpense } from "../../db/firebase";

function AddExpense() {

    let [showSuccessMsg, setShowSuccessMsg] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        let expense = {
            "date": e.target.date.value,
            "amount": e.target.amount.value,
            "category": e.target.category.value,
            "type": e.target.type.value,
            "title": e.target.title.value,
            "description": e.target.description.value,
        }
        setShowSuccessMsg(true)
        e.target.reset();

        addExpense(expense);
    }

    return (
        <div>
            {showSuccessMsg ? (<>
                <div className="alert alert-success" role="alert">
                    Data successfuly saved.
                </div>
            </>) : ''}


            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-3">
                        <label htmlFor="date">Date</label>
                    </div>
                    <div className="col-9">
                        <input className="form-control" type="date" name="date" id="name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <label htmlFor="category">Category</label>
                    </div>
                    <div className="col-9">
                        <select className="form-select" id="category" name="category">
                            <option value="groceries">Groceries</option>
                            <option value="transportation">Transportation</option>
                            <option value="salary">Salary</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <label htmlFor="amount">Amount</label>
                    </div>
                    <div className="col-9">
                        <input className="form-control" type="number" name="amount" id="amount" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <label htmlFor="type">Type</label>
                    </div>
                    <div className="col-9">
                        <input type="radio" className="btn-check mx-3" name="type" value="expense" id="typeExpense" autoComplete="off" />
                        <label className="btn btn-outline-danger me-1" htmlFor="typeExpense">Expense</label>

                        <input type="radio" className="btn-check mx-3" name="type" value="income" id="typeIncome" autoComplete="off" />
                        <label className="btn btn-outline-primary me-1" htmlFor="typeIncome">Income</label>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="col-9">
                        <input className="form-control" type="text" name="title" id="title" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <label htmlFor="description">Description</label>
                    </div>
                    <div className="col-9">
                        <textarea name="description" id='description' className="form-control"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary form-control" type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddExpense;