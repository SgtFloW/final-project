import 'bootstrap-icons/font/bootstrap-icons.css';
import type { NextPage } from 'next';
import Head from 'next/head';
import { credetailsStyle } from '../util/styles';

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>SgtFloW - Sign Up</title>
        <meta name="author" content="Florian Weismann" />
        <meta name="description" content="A simple forum app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={credetailsStyle}>
        <div className="root">
          <div className="topIcon">
            <i className="bi bi-lock"></i>
          </div>
          <h1 className="heading">Sign up</h1>
          <input
            className="loginInput"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="loginInput"
            type="text"
            placeholder="Fullname"
            required
          />
          <input
            className="loginInput"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="loginInput"
            type="password"
            placeholder="Password"
            required
          />
          <button className="button">Sign up</button>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
