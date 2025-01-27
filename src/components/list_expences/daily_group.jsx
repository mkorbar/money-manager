import Entry from "./entry";
import FormatDate from "../formaters/format_date";

function dailyBalance(expenseData) {

    const dailyBalances = expenseData
        .map((obj) => obj.type === 'expense' ? -obj.amount : obj.amount)
        .reduce((sum, amount) => sum + amount, 0);
    
    return dailyBalances;
        
};


function DailyGroup({expenseData, date}) {
    // TODO: figure out how to get multiple objects inside of a single array!
    const balanceForDate = dailyBalance(expenseData);

    return (
        <li className='list-group-item p-0'>
            <div className="row">
                <div>
                    <FormatDate date_str={date} />
                </div>
                <div>
                    <ul className="p-0">
                    { expenseData.map((d,n) => {
                        return <Entry key={n} expenseData={d} />
                        })}
                    </ul>
                </div>
            </div>
            <div className={balanceForDate > 0 ? 'text-primary' : 'text-danger'}>
                Daily Balance: {balanceForDate}
            </div>
        </li>
    )
}

export default DailyGroup;
