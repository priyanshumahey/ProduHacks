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
  return (
    <label>
      {chat.text}
    </label>
  );
}
