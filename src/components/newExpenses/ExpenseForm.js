import { useState } from 'react/cjs/react.development'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmout] = useState('')
	const [date, setDate] = useState('')

	const inputChangeHandler = (event) => {
		// console.log(event.target);
		const currentInput = event.target.name
		if (currentInput === 'title') {
			setTitle(event.target.value)
		} else if (currentInput === 'amount') {
			setAmout(event.target.value)
		} else if (currentInput === 'date') {
			setDate(event.target.value)
		}
	}

	const SubmitHandler = (event) => {
		event.preventDefault()

		const currentData = {
			title,
			amount,
			date: new Date(date),
		}
		props.onSaveExpenseData(currentData)

		/* 	console.log(title)
		console.log(amout)
		console.log(date) */
	}
	return (
		<form onSubmit={SubmitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						onChange={inputChangeHandler}
						value={title}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amout</label>
					<input
						name='amount'
						type='number'
						min='0.1'
						step='1'
						onChange={inputChangeHandler}
						value={amount}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date'
						type='date'
						min='2022-01-01'
						onChange={inputChangeHandler}
						value={date}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}
export default ExpenseForm
