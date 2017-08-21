/**
 * Created by moon on 2017/8/20.
 * Writing a Todo List Reducer (Adding a Todo)
 */

// @flow
import deepFreeze from 'deep-freeze';
import expect from 'expect';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
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

testAddTodo();

// eslint-disable-next-line
console.log('lesson-11 All tests passed.');
