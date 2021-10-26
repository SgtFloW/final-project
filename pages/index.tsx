import type { NextPage } from 'next';
import Image from 'next/image';
import { landingPageStyle } from '../util/styles';

const Home: NextPage = () => {
  return (
    <div css={landingPageStyle}>
      <Image
        src="/logo_large.png"
        alt="Logo picture"
        width={200}
        height={200}
        className="image"
      />
      .heading
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const { login } = await import('../util/authentication');

  login('', '');

  return {
    props: {},
  };
}
