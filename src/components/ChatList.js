import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ChatListItem from "./ChatListItem";

const styles = () => ({
  chatsList: {
    height: "calc(100% - 56px)",
    overflowY: "scroll",
  },
  noChats: {
    textAlign: "center",
  },
});

const ChatList = ({classes, chats, activeChat}) => (
  <List className={classes.chatsList}>
    {chats && chats.length ? (
      chats.map((chat) => (
        <ChatListItem key={chat._id} active={activeChat && activeChat._id === chat._id} chatId={chat._id} {...chat} />
      ))
    ) : (
      <Typography variant="subheading" className={classes.noChats}>
        There is no chats yet...
      </Typography>
    )}
  </List>
);

ChatList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  activeChat: PropTypes.object,
  chats: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles)(ChatList);
