import 'bootstrap-icons/font/bootstrap-icons.css';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { credetailsStyle } from '../util/styles';

const LoginPage: NextPage = () => {
  const [identifierOption, setIdentifierOption] = useState();
  const [keyOption, setKeyOption] = useState();

  async function handleSubmit() {
    let inputArr = document.getElementsByTagName('input');

    const response = await fetch('/api/user/authenticate', {
      method: 'POST',
      body: JSON.stringify({
        identifierOption: identifierOption,
        keyOption: keyOption,
      }),
    });

    const result = response.json();

    for (let index = 0; index < inputArr.length; index++) {
      inputArr[index].value = '';
    }
  }

  return (
    <>
      <Head>
        <title>SgtFloW - Sign In</title>
        <meta name="author" content="Florian Weismann" />
        <meta name="description" content="A simple forum app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={credetailsStyle}>
        <div className="root">
          <div className="topIcon">
            <i className="bi bi-lock"></i>
          </div>
          <h1 className="heading">Sign in</h1>
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
          <button className="button" onClick={() => handleSubmit()}>
            Sign in
          </button>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
