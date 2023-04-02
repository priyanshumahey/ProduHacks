import { useReducer } from 'react';
import ChatList from './ChatList';
import AddChat from './AddChat';

export default function Chat() {
  const [chats, dispatch] = useReducer(
    chatsReducer,
    initialChats
  );

  function handleAddChat(text: any) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddChat
        onAddChat={handleAddChat}
      />
      <ChatList
        chats={chats}
      />
    </>
  );
}

function chatsReducer(chats: any[], action: any) {
  switch (action.type) {
    case 'added': {
      return [...chats, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialChats = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
