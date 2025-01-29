// import './App.css';
import { React, useEffect, useState } from 'react';
import DailyGroup from './daily_group';
import { getExpenses } from '../../db/firebase';

function List_expences() {

    let [data, setData]  = useState([]);

    useEffect(() => {
      getExpenses()
        .then((data) => {
          if (data) {
            setData(Object.values(data));
            Object.keys(data).forEach(key => {
              data[key].id = key;
            })
          } else {
            console.log('No data available');
            setData([]);
          }
        })
        .catch((err) => {
          console.log('Error fetching data:', err);
          setData([]); 
        });
    }, []);
      
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
        <p className={data.length === 0 ? '' : 'hidden'}>Your list is empty!</p>
        {/* iterate over object */}
        {Object.entries(groupedByDay).map(([date, events], n) =>  <DailyGroup key={n} expenseData={events} date={date} /> )}
    </ul>
  );
}

export default List_expences;
