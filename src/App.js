import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="0bc903a7-3465-428d-ba20-fa7a443a5923"
      userName="dhruv2201"
      userSecret="ghamandkar"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
