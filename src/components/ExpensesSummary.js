import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
  printExpenses = () => {
    const numExpenses = this.props.expenses.length;
    const stringExpenses = numeral(selectExpensesTotal(this.props.expenses) / 100).format('$0,0.00');
    return `Viewing ${numExpenses} expense${numExpenses === 1 ? '' : 's'} totalling ${stringExpenses}`;
  };
  render() {
    return (
      <div>
        {this.props.expenses.length > 0 && <h2>{this.printExpenses()}</h2>}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenses: visibleExpenses,
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
