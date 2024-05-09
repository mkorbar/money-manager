import Entry from "./entry";

function DailyGroup({expenseData, date}) {

    const expensesByDate = [expenseData]

    return (
        <li className='list-group-item'>
            <div className="row">
                <div>
                    {date}
                </div>
                <div>
                    <ul>
                    {expensesByDate.map((d,n) => {
                        return <Entry key={n} expenseData={d} />
                        })}
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default DailyGroup;
