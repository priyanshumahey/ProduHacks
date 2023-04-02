import { Key, useState } from 'react';

export default function ChatList({
  chats,
}: {chats: any[],}) {
  return (
    <ul>
      {chats.map((chat: { id: Key | null | undefined; }) => (
        <li key={chat.id}>
          <Chat
            chat={chat}
          />
        </li>
      ))}
    </ul>
  );
}

function Chat({ chat }: {chat: any}) {
  const chatContent = (
      <>
        {chat.text}
      </>
    );

  return (
    <label>
      <input
        type="checkbox"
        checked={chat.done}
      />
      {chatContent}
    </label>
  );
}
