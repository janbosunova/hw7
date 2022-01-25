import {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpensesItem.css'

function ExpensesItem(props){
    // console.log(useState());
    const [title, setTitle] = useState(props.title)
  
    // console.log(props);
    //let h2 = document.createElement('h2')
    //h2.textAppend = Expense Item
    //return h2  это императивный подход
    //тут можно писать js код


    // const expenseDate = new Date(2021, 2, 28)
    //const expenseTitle = props.title
    const expenseAmout = props.amout

    const updateTitleHandler = ()=>{
        // expenseTitle= 'update';
        setTitle('update')
    };
  

    return(
        <div className='expense-item'>
          <ExpenseDate date= {props.date}/>
          {/* {console.log(expenseTitle)} */}
            {/* <div>{String(props.date)}</div> */}
            <h2 className='expense-item__description'>{title}</h2>
            <div className='expense-item__price'>${expenseAmout}</div>
            <button onClick={updateTitleHandler}>Update Title</button>
        </div>//это декларативный подход
    );
}
export default ExpensesItem