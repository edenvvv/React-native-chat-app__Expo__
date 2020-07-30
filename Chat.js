import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default function RoomScreen({ navigation }) {
  var [messages, setMessages] = useState([
    /**
     * Mock message data
     */
    // example of system message
    {
      _id: 0,
      text: "Welcome to blob chat.",
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: "blob!",
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: "Eden Dadon",
      },
    },
  ]);

  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => handleSend(newMessage)}
      user={{ _id: 1 }}
    />
  );
}
