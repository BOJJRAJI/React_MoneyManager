import './index.css'

const TransactionItem = props => {
  const {history, onDeleteHistory} = props
  const {id, amount, type, title} = history
  return (
    <li className="history-list">
      <p className="answer">{title}</p>
      <p className="answer">{amount}</p>
      <p className="answer">{type}</p>
      <button
        onClick={() => onDeleteHistory(id)}
        type="button"
        className="delete-button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
