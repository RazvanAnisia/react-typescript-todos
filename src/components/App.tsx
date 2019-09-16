import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions/index';
//describes our entire redux state
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
  handleFetchTodos = (): void => {
    this.props.fetchTodos();
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => (
      <li key={todo.id}>{todo.title}</li>
    ));
  }
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.handleFetchTodos}>Get todos</button>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  };
};
//we want to export the connected version of app
export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);
