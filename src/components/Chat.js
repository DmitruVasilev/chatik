import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import ChatMessageList from "./ChatMessageList";
import MessageInput from "./MessageInput";

const styles = () => ({
  chatLayout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "64px",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

const Chat = ({classes, messages, activeChat, activeUser, joinChat, sendMessage, match}) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} activeUser={activeUser} match={match} />
    {activeChat && (
      <MessageInput
        sendMessage={(content) => sendMessage(activeChat._id, content)}
        showJoinButton={!activeUser.isChatMember}
        onJoinButtonClick={() => joinChat(activeChat._id)}
        activeUser={activeUser}
      />
    )}
  </main>
);

Chat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  activeChat: PropTypes.object,
  activeUser: PropTypes.object,
  match: PropTypes.object,
  joinChat: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default withRouter(withStyles(styles)(Chat));
