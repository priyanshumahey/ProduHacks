import { useQuery } from "@tanstack/react-query";
import { Key, useState } from "react";
import { If, Then } from "react-if";

export default function ChatList({ chats }: { chats: any[] }) {
  return (
    <ul>
      {chats.map((chat: { id: Key | null | undefined }) => (
        <li key={chat.id}>
          <ChatBox chat={chat} />
        </li>
      ))}
      {/* <li>
        <ChatBox chat={}/>
      </li> */}
      {/* <If condition={lastChat.sender === 'user'}>
        <Then>
          <li>
            <ResponseBox message={lastChat.message} />
          </li>
        </Then>
      </If> */}
    </ul>
  );
}

function ChatBox({ chat }: { chat: any }) {
  return <label>{chat.text}</label>;
}

// function ResponseChatBox({ chats }: { chats: any[] }) {
//   const lastChat = chats[chats.length - 1];
//   console.log(lastChat)
//   console.log(lastChat.sender);
//   if (lastChat.sender === 'user') {
//     const response = postData("http://localhost:3001/askgpt", { message: lastChat })
//     console.log(Promise.resolve(response))
//   }
//   return (
//       <If condition={lastChat.sender === 'user'}>
//         <Then>
//           <li>
//             <ResponseBox message={lastChat.message} />
//           </li>
//         </Then>

//       </If>
//   )
// }

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

  console.log(data);

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
