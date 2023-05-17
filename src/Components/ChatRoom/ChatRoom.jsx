import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { ChatRoomWrapper } from "./ChatRoom.style";
import io from "socket.io-client";
import { Box } from "@mui/material";
import { TopBar } from "Components/TopBar";
import { MessageArea } from "Components/MessageArea";
import CustomInput from "Components/CustomInput/CustomInput";

let socket;
const BACKEND_URL = "http://localhost:5050";

const ChatRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [chatRoomName, setChatRoomName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const submitHandler = (e) => {
    if (e.keyCode === 13 && !!message.trim()) {
      socket.emit("user-msg", message);
      setMessage("");
    }
  };

  const sendMessage = () => {
    if (!!message.trim()) {
      socket.emit("user-msg", message);
      setMessage("");
    }
  };

  useEffect(() => {
    const { userName, chatRoomName } = queryString.parse(location.search);

    setUserName(userName);
    setChatRoomName(chatRoomName);

    socket = io(BACKEND_URL, {
      transports: ["websocket", "polling", "flashsocket"],
      auth: {offset: 'checkingHandshake'}
    });

    socket.emit("join-room", { userName, chatRoomName }, (error) => {
      if (error) {
        navigate("/");
        alert(error);
      }
    });

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [location.search, navigate]);

  useEffect(() => {
    socket.on("chatMessage", (chatMessage) => {
      setMessages((prev) => {
        return [...prev, chatMessage];
      });
    });
  }, []);

  return (
    <ChatRoomWrapper>
      <Box className="container">
        <TopBar chatRoomName={chatRoomName} />
        <MessageArea messages={messages} userName={userName} />
        <CustomInput
          message={message}
          setMessage={setMessage}
          submitHandler={submitHandler}
          sendMessage={sendMessage}
        />
      </Box>
    </ChatRoomWrapper>
  );
};

export default ChatRoom;
