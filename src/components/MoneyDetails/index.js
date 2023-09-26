import './index.css'

const MoneyDetails = props => {
  const {moneyDetails} = props
  const {income, expenses} = moneyDetails
  const i = income.toString()
  const e = expenses.toString()
  const b = (income - expenses).toString()

  return (
    <ul className="money-details-container">
      <li className="balance-money-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="amount-image"
        />
        <div className="name-amount-container">
          <p className="amount-para" data-testid="balanceAmount">
            Your Balance
          </p>
          <p className="amount" data-testid="balanceAmount">
            Rs {b}
          </p>
        </div>
      </li>
      <li className="income-money-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="amount-image"
        />

        <div className="name-amount-container">
          <p className="amount-para" data-testid="incomeAmount">
            Your Income
          </p>
          <p className="amount" data-testid="incomeAmount">
            Rs {i}
          </p>
        </div>
      </li>
      <li className="expenses-money-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="amount-image"
        />

        <div className="name-amount-container">
          <p className="amount-para" data-testid="expensesAmount">
            Your Expenses
          </p>
          <p className="amount" data-testid="expensesAmount">
            Rs {e}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
