//import React from 'react'
import Card from './UI/Card'
// import ExpensesItem from './ExpensesItem'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesCart from './Charts/ExpensesCart'
import './Expenses.css'
function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022')
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = props.item.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})


	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesCart expenses = {filteredExpenses}/>
			<ExpensesList expenses={filteredExpenses} selected={filteredYear} item={props.item}/>
	
		</Card>
	)

}
export default Expenses
