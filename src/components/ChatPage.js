import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import Chat from "./Chat";

class ChatPage extends React.Component {
  componentDidMount() {
    const {match, fetchAllChats, fetchMyChats, setActiveChat} = this.props;

    Promise.all([fetchAllChats(), fetchMyChats()]).then(() => {
      // If we pass a chatId, then fetch messages from chat
      if (match.params.chatId) {
        setActiveChat(match.params.chatId);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {params},
      setActiveChat,
    } = this.props;
    const {params: nextParams} = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
    }
  }

  render() {
    const {
      logout,
      chats,
      activeUser,
      createChat,
      joinChat,
      leaveChat,
      deleteChat,
      sendMessage,
      messages,
      editUser,
    } = this.props;

    return (
      <React.Fragment>
        <ChatHeader
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <Sidebar chats={chats} createChat={createChat} />
        <Chat
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
      </React.Fragment>
    );
  }
}

ChatPage.propTypes = {
  logout: PropTypes.func.isRequired,
  createChat: PropTypes.func.isRequired,
  leaveChat: PropTypes.func.isRequired,
  deleteChat: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  chats: PropTypes.object,
  activeUser: PropTypes.object,
  match: PropTypes.object,
  joinChat: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  fetchAllChats: PropTypes.func.isRequired,
  fetchMyChats: PropTypes.func.isRequired,
  setActiveChat: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default ChatPage;
