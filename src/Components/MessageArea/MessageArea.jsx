import React from "react";
import { MessageAreaWrapper } from "./Message.style";
import Scroller from "react-scroll-to-bottom";
import Message from "Components/Message/Message";

const MessageArea = (props) => {
  return (
    <MessageAreaWrapper>
      <Scroller>
        {props.messages.map((message, index) => (
          <React.Fragment key={index}>
            <Message message={message} userName={props.userName} />
          </React.Fragment>
        ))}
      </Scroller>
    </MessageAreaWrapper>
  );
};

export default MessageArea;
