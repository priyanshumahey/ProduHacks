import { useState } from "react";

export default function AddChat({ onAddChat }: { onAddChat: any }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        placeholder="Add chat"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddChat(text);
        }}
      >
        Add
      </button>
    </>
  );
}
