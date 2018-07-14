import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  const expensesWord = expensesCount === 1 ? 'expenses' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <h1>
        Viewing {expensesCount} {expensesWord} expenses totalling
        {formattedExpensesTotal}
      </h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)

  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
