// import './App.css';
import { React } from 'react';
import DailyGroup from './daily_group';
function List_expences() {

    let data  = [
        {
          "date": "2024-05-01",
          "amount": 50.00,
          "category": "Groceries",
          "type": "expense",
          "title": "Grocery Shopping",
          "description": "Purchased weekly groceries for the household."
        },
        {
          "date": "2024-05-02",
          "amount": 30.00,
          "category": "Transportation",
          "type": "expense",
          "title": "Gasoline",
          "description": "Filled up the car's gas tank."
        },
        {
          "date": "2024-05-03",
          "amount": 2000.00,
          "category": "Salary",
          "type": "income",
          "title": "Monthly Salary",
          "description": "Received salary for the month of May."
        },
        {
          "date": "2024-05-04",
          "amount": 100.00,
          "category": "Entertainment",
          "type": "expense",
          "title": "Movie Night",
          "description": "Tickets for a movie night out with friends."
        },
        {
          "date": "2024-05-04",
          "amount": 100.00,
          "category": "Entertainment",
          "type": "expense",
          "title": "Movie Night",
          "description": "Tickets for a movie night out with friends."
        }
      ]
      
      function groupByDay(events){
        let grouped = {}
        for(let e of events) {
            if(grouped[e.date] !== undefined) {
                grouped[e.date].push(e)
            } else {
                grouped[e.date] = [e];
            }
        }
        return grouped;
      }

      const groupedByDay = groupByDay(data);


  // jsx
  return (
    <ul className='list-group m-0'>
        {/* iterate over object */}
        {Object.entries(groupedByDay).map(([date, events], n) =>  <DailyGroup key={n} expenseData={events} date={date} /> )}
    </ul>
  );
}

export default List_expences;
