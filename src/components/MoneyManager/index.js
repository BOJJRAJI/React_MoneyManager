import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    type: transactionTypeOptions[0].optionId,
    title: '',
    amount: '',
    transactionsHistoryList: [],
  }

  addTransaction = e => {
    e.preventDefault()
    const {amount, title, type} = this.state
    let displayName = ''
    if (type === 'INCOME') {
      displayName = 'Income'
    } else {
      displayName = 'Expenses'
    }
    if (amount !== '' && title !== '') {
      const data = {
        id: v4(),
        amount,
        title,
        type: displayName,
      }

      this.setState(prevState => ({
        transactionsHistoryList: [...prevState.transactionsHistoryList, data],
        amount: '',
        title: '',
        type: transactionTypeOptions[0].optionId,
      }))
    }
  }

  getTitle = e => {
    this.setState({title: e.target.value})
  }

  getAmount = e => {
    this.setState({amount: e.target.value})
  }

  getType = e => {
    this.setState({type: e.target.value})
  }

  deleteHistory = id => {
    const {transactionsHistoryList} = this.state
    const filterHistory = transactionsHistoryList.filter(item => item.id !== id)
    this.setState({transactionsHistoryList: filterHistory})
  }

  render() {
    const {transactionsHistoryList, amount, type, title} = this.state
    let income = 0
    let expenses = 0
    transactionsHistoryList.map(i => {
      if (i.type === transactionTypeOptions[0].displayText) {
        income += parseInt(i.amount)
      } else {
        expenses += parseInt(i.amount)
      }
      return 0
    })

    const moneyDetails = {income, expenses}

    console.log(transactionsHistoryList)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-card">
            <h1 className="name">Hi, Richard</h1>
            <p className="description">
              Welcome back to your{' '}
              <span className="span-ele">Money Manager</span>
            </p>
          </div>
          <MoneyDetails moneyDetails={moneyDetails} />
          <div className="form-transaction-data-container">
            <form className="form" onSubmit={this.addTransaction}>
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label className="label-element" htmlFor="title">
                TITLE
              </label>
              <br />
              <input
                className="input-element"
                value={title}
                id="title"
                placeholder="TITLE"
                onChange={this.getTitle}
              />
              <br />

              <label className="label-element" htmlFor="amount">
                AMOUNT
              </label>
              <br />
              <input
                className="input-element"
                id="amount"
                placeholder="AMOUNT"
                onChange={this.getAmount}
                value={amount}
              />
              <br />

              <label className="label-element" htmlFor="type" value={type}>
                TYPE
              </label>
              <br />
              <select
                className="select-element"
                id="type"
                onChange={this.getType}
                value={type}
              >
                {transactionTypeOptions.map(item => (
                  <option
                    className="option-element"
                    value={item.optionId}
                    key={item.optionId}
                  >
                    {item.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="add-transaction-heading">History</h1>
              <ul className="data-container">
                <li className="headings-list">
                  <p className="heading">Title</p>
                  <p className="heading">Amount</p>
                  <p className="heading">Type</p>
                  <p className="none">g</p>
                </li>
                {transactionsHistoryList.map(history => (
                  <TransactionItem
                    key={history.id}
                    history={history}
                    onDeleteHistory={this.deleteHistory}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
