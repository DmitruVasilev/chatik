import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "./Avatar";

const styles = (theme) => ({
  activeItem: {
    backgroundColor: theme.palette.grey[200],
  },
});

const ChatListItem = ({classes, disabled, title, chatId, active, createdAt}) => (
  <ListItem
    button
    component={Link}
    to={`/chat/${chatId}`}
    className={active ? classes.activeItem : ""}
    disabled={disabled}
  >
    <Avatar test="123" colorFrom={chatId}>
      {title}
    </Avatar>
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
  </ListItem>
);

ChatListItem.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  // disabled, title, chatId, active, createdAt
  disabled: PropTypes.bool,
  title: PropTypes.string,
  chatId: PropTypes.string,
  active: PropTypes.bool,
  createdAt: PropTypes.string,
};

export default withStyles(styles)(ChatListItem);
