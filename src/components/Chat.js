import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';

const styles = () => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
});

const Chat = ({
  classes,
  messages,
  activeChat,
  activeUser,
  joinChat,
  sendMessage,
  isConnected,
  match,
}) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} activeUser={activeUser} match={match} />
    {activeChat && (
      <MessageInput
        disabled={!isConnected}
        sendMessage={sendMessage}
        showJoinButton={!activeUser.isChatMember}
        // eslint-disable-next-line
        onJoinButtonClick={() => joinChat(activeChat._id)}
        activeUser={activeUser}
      />
    )}
  </main>
);

Chat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    chatId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sender: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
  })).isRequired,
  activeChat: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  joinChat: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

Chat.defaultProps = {
  activeChat: null,
};
export default withRouter(withStyles(styles)(Chat));
