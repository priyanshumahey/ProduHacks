import { useQuery } from "@tanstack/react-query";
import { Key, useState } from "react";

export default function ChatList({ chats }: { chats: any[] }) {
  // if the last chat was made by the user:
  //    1) trigger loading <li> item
  //    2) start fetching response from server
  //    3) populate the chats list context

  return (
    <ul>
      {chats.map((chat: { id: Key | null | undefined }) => (
        <li key={chat.id}>
          <ChatBox chat={chat} />
        </li>
      ))}
      <li>
        <ResponseBox message={"a"} />
      </li>
    </ul>
  );
}

function ChatBox({ chat }: { chat: any }) {
  return <label>{chat.text}</label>;
}

function ResponseBox({ message }: { message: string }): JSX.Element {
  const { isLoading, error, data } = useQuery({
    queryFn: () =>
      postData("http://localhost:3001/askgpt", { message }).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <>{"Loading..."}</>;

  if (error instanceof Error)
    return <>{"An error has occurred: " + error.message}</>;

  return <ChatBox chat={data.answer} />;
}

async function postData(url = "", data: { message: string }) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}
