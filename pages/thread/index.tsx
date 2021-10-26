import type { NextPage } from 'next';
import { threadStyle } from '../../util/styles';

const ThreadHome: NextPage = () => {
  return (
    <div css={threadStyle}>
      <div className="thread-container">
        <div className="thread-header">Threads</div>
        <div className="thread-body">
          <div className="thread-item"></div>
        </div>
      </div>
    </div>
  );
};

export default ThreadHome;

export async function getServerSideProps() {
  const { login } = await import('../../util/authentication');

  login('', '');

  return {
    props: {},
  };
}
