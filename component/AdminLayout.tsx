import { ReactNode } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Wrapper from '../component/Wrapper';

type Props = {
  children: ReactNode;
};

export default function AdminLayout(props: Props) {
  return (
    <>
      <Header />
      <Wrapper>{props.children}</Wrapper>
      <Footer />
    </>
  );
}
