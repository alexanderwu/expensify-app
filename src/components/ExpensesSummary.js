import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
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
        {this.props.expenses.length > 0 && <p>{this.printExpenses()}</p>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  expenses: state.expenses,
});

export default connect(mapStateToProps)(ExpensesSummary);
