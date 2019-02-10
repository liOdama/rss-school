import React, { Component } from 'react';
import TasksRow from './tasksRow/row';
import './table.css';

class Table extends Component {
  render() {
    return (
      <section className="table">
        <table>
          <tbody id="table">
            <TasksRow />
          </tbody>
        </table>
      </section>
    );
  }
}

export default Table;
