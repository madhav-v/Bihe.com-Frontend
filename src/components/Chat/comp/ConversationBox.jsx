import React from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

function ConversationBox(props) {
  const dispatch = useDispatch();

  //   return props.conversations ? (
  //     <div className="w-full h-full overflow-y-auto  overflow-hidden chat-sidebar">
  //       {props.conversations &&
  //         props.conversations.map((conversation, index) => {
  //           return <ChatPerson key={index} conversation={conversation} />;
  //         })}
  //     </div>
  //   ) : (
  return (
    <>
      <div className="flex justify-center">No Conversations</div>
    </>
  );
  //   );
}

export default ConversationBox;
