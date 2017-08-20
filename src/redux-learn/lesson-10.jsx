/**
 * Created by moon on 2017/8/18.
 * Avoiding Object Mutations with Object.assign() and ...spread
 */

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
console.log('lesson-10 All tests passed.');
