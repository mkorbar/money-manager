import Entry from "./entry";
import FormatDate from "../formaters/format_date";

function DailyGroup({expenseData, date}) {

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
        </li>
    )
}

export default DailyGroup;
