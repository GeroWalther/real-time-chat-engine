/* eslint-disable react/prop-types */
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = ({ user }) => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId='5fac749a-f7b7-4570-9b33-6053f3e9913f
        '
        username={user.username}
        secret={user.secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};
export default ChatsPage;
