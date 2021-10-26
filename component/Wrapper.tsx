import Image from 'next/image';
import { ReactNode } from 'react';
import Widget from '../component/widget/Widget';
import { hasPower } from '../util/permissionManager';
import { getRole } from '../util/roles';
import { wrapperStyle } from '../util/styles';
import { User } from '../util/types';

type Props = {
  children: ReactNode;
};

const users: User[] = [
  {
    id: 0,
    username: 'ClientErrxr',
    fullname: 'Florian Weismann',
    email: 'f.w@gmail.com',
    password: 'test',
    avatarImage: '0_clienterrxr.png',
    role: 1,
  },
  {
    id: 2,
    username: 'ClientBot',
    fullname: 'Georg Weismann',
    email: 'g.w@gmail.com',
    password: 'test',
    avatarImage: '1_clientbot.png',
    role: 3,
  },
];

function Wrapper(props: Props) {
  const staffUsers = users.filter((user) => hasPower(getRole(user.role), 2));

  return (
    <div css={wrapperStyle}>
      <div className="wrapper">{props.children}</div>
      <div className="widget-container">
        <Widget header="Staff Online">
          {staffUsers.map((user, index) => {
            return (
              <div key={index} className="avatar-card">
                <Image
                  src={'/avatar/' + user.avatarImage}
                  width="60px"
                  height="60px"
                  className="avatar-image"
                  alt="Profile picutre"
                />
                <div className="avatar-info">
                  <span>{user.username}</span>
                  <small
                    className={
                      'banner-' + getRole(user.role).name.toLowerCase()
                    }
                  >
                    {getRole(user.role).name}
                  </small>
                </div>
              </div>
            );
          })}
        </Widget>
      </div>
    </div>
  );
}

export default Wrapper;
