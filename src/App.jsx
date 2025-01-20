import './App.css';
import { React, useState } from 'react';
import List_expences from './components/list_expences/list_expences';
import AddExpense from './components/add_expence/add_expense';

function App() {

  let [tab, setTab] = useState('add');

  // jsx
  return (
    <>
    <ul className="nav nav-tabs m-3">
      <li className="nav-item">
        <a className={"nav-link" + (tab == 'list' ? ' active': '')} onClick={() => {setTab('list')}}>List</a>
      </li>
      <li className="nav-item">
        <a className={"nav-link" + (tab == 'add' ? ' active': '')} onClick={() => {setTab('add')}}>Add</a>
      </li>
    </ul>
    <div className='container'>
      {
      tab == 'add' ? <AddExpense /> : <List_expences />
      }
    </div>
    </>
  );
}

export default App;
