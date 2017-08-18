// @flow
import expect from 'expect';
import deepFreeze from 'deep-freeze';

interface Todo {
  id: number,
  text: string,
  completed: boolean
}

const toggleTodo = (todo: Todo) => ({
  ...todo,
  completed: !todo.completed,
});

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false,
    ts: '1',
  };

  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true,
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore),
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed.');
