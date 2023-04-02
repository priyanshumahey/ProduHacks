import { useReducer } from "react";
import ChatList from "./ChatList";
import AddChat from "./AddChat";

export default function Chat() {
  const [chats, dispatch] = useReducer(chatsReducer, initialChats);

  function handleAddChat(text: any, sender: 'user' | 'server') {
    dispatch({
      type: "added",
      id: nextId++,
      text,
      sender,
    });
  }

  return (
    <>
      <AddChat onAddChat={handleAddChat} />
      <ChatList chats={chats} />
    </>
  );
}

function chatsReducer(chats: any[], action: any) {
  switch (action.type) {
    case "added": {
      return [
        ...chats,
        {
          id: action.id,
          text: action.text,
        },
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

let nextId = 3;
const initialChats = [
  { id: 0, text: "Welcome! My name is Plu", sender: 'server' },
];
