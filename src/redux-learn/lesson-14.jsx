/**
 * Created by moon on 2017/8/20.
 * Reducer Composition with Objects
 */

// @flow
import deepFreeze from 'deep-freeze';
import expect from 'expect';

const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return false;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux',
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action),
  ).toEqual(stateAfter);
};

const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false,
    },
  ];
  const action = {
    type: 'TOGGLE_TODO',
    id: 1,
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false,
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true,
    },
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action),
  ).toEqual(stateAfter);
};

testAddTodo();
testToggleTodo();

// eslint-disable-next-line
console.log('lesson-13 All tests passed.');
