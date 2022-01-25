import { useState } from 'react/cjs/react.development'
import './App.css'
import Expenses from './components/Expenses'
import NewExpenses from './components/newExpenses/NewExpenses'
const initState = [
	{
		id: 'el1',
		title: 'Toilet Paper',
		amount: 200,
		date: new Date(2022, 7, 14),
	},
	{
		id: 'el2',
		title: 'Car Insuranse',
		amount: 1.2,
		date: new Date(2022, 2, 28),
	},
	{
		id: 'el3',
		title: 'Flowers',
		amount: 3,
		date: new Date(2025, 3, 23),
	},
	{
		id: 'el4',
		title: 'Cake',
		amount: 1,
		date: new Date(2024, 2, 1),
	},
	{
		id: 'el5',
		title: 'Paper',
		amount: 2.5,
		date: new Date(2022, 6, 18),
	},
]

const App = () => {
	//DATA FROM BACKEND
	const [expenses, SetExpenses] = useState(initState)

	const addExpenseDataHandler = (expense) => {
		SetExpenses((prevState) => {
			return [expense, ...prevState]
		})
	}

	return (
		//let div = document.createElement('div') болуп тузулот под капотом
		//div.className = 'App'
		//div.append()
		<div className='App'>
			<NewExpenses onAddExpense={addExpenseDataHandler} />
			<Expenses item={expenses} />
		</div>
	)
}

export default App
