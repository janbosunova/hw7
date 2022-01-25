import ExpensesItem from './ExpensesItem'
import './ExpensesList.css'
const ExpensesList = (props) => {
	if (props.selected === 'All') {
		return props.item.map((el) => {
			return (
				<ExpensesItem
					key={el.id}
					title={el.title}
					amount={el.amount}
					date={el.date}
				/>
			)
		})
	}else if (props.expenses.length === 0) {
		return <h2 className='expenses-list__fallback'>No expenses Found</h2>
	}
	return (
		<ul className='expenses-list'>
			{props.expenses.map((expense) => {
				return (
					<ExpensesItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				)
			})}
		</ul>
	)
}
export default ExpensesList
