import { deleteExpense } from "../../db/firebase";


function Entry({expenseData}) {
    return (
        <li className='list-group-item'>
            <div className="row">
                <div className="col-3">{expenseData.category}</div>
                <div className="col-6">
                    <div>{expenseData.title}</div>
                    <div className="text-secondary">{expenseData.description}</div>
                </div>
                <div className="col-1" >
                    {
                    expenseData.type === "income" ?
                    <span className="text-primary">{expenseData.amount}</span>
                    :
                    <span className="text-danger">{expenseData.amount}</span>
    }
                    </div>
                    <div className="col-1"><button onClick={() => {deleteExpense(expenseData.id)}}>Delete</button></div>
            </div>
        
        </li>
    )
}

export default Entry;
