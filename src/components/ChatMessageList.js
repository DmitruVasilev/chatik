import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import ChatMessage from "./ChatMessage";

const styles = (theme) => ({
  messagesWrapper: {
    overflowX: "scroll",
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: "120px",
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
});

class ChatMessageList extends React.Component {
  constructor(props) {
    super(props);
    this.messagesWrapperRef = React.createRef();
  }

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.messagesWrapperRef.current;
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const {classes, messages, match, activeUser} = this.props;

    // If there's no active chat, then show a tip
    if (!match.params.chatId) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            Start messaging…
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Global</strong> to explore communities around here.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Recents</strong> to see your recent conversations.
          </Typography>
        </Paper>
      );
    }

    return messages && messages.length ? (
      <div className={classes.messagesWrapper} ref={this.messagesWrapperRef}>
        {messages.map((message) => (
          <ChatMessage key={message._id} activeUser={activeUser} {...message} />
        ))}
      </div>
    ) : (
      <Typography variant="display1">There is no messages yet...</Typography>
    );
  }
}

ChatMessageList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  activeUser: PropTypes.object,
  match: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles)(ChatMessageList);
