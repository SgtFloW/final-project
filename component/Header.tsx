import 'bootstrap-icons/font/bootstrap-icons.css';
import withRouter, { WithRouterProps } from 'next/dist/client/with-router';
import Head from 'next/head';
import Link from 'next/link';
import { headerStyle } from '../util/styles';
import { User } from '../util/types';

type NavItem = {
  name: string;
  href: string;
  icon: string | null;
};

type Props = {
  user: User | null;
};

const navItems: NavItem[] = [
  {
    name: 'Home',
    href: '/thread',
    icon: 'bi bi-house',
  },

  {
    name: 'Members',
    href: '/members',
    icon: 'bi bi-person',
  },
  {
    name: 'Chatrooms',
    href: '/chats',
    icon: 'bi bi-chat',
  },
];

function Header({ router }: WithRouterProps, props: Props) {
  const activeItem = navItems.filter((item) => item.href === router.asPath)[0];

  return (
    <>
      <Head>
        <title>SgtForum - {activeItem.name}</title>
        <meta name="author" content="Florian Weismann" />
        <meta
          name="description"
          content="A simple forum app written in nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav css={headerStyle}>
        <ul>
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.href}>
                  <a>
                    <i className={String(item.icon)}></i>
                    {item.name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default withRouter(Header);
