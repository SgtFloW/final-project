import { css } from '@emotion/react';

const darkBackgroundPrimary = '#491cad';
const darkBackgroundSecondary = '#4306ac';

export const globalStyleSheet = css`
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${darkBackgroundPrimary};
    padding: 0;
    margin: auto;
    width: 95%;
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const headerStyle = css`
  margin-top: 2rem;
  ul {
    display: flex;
    list-style-type: none;
    li {
      margin-right: 1.75rem;
    }
  }
  i {
    margin-right: 0.5rem;
  }
`;

export const footerStyle = css`
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
`;

export const landingPageStyle = css`
  height: 50vh;
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .image {
    width: 200px;
    height: 200px;
  }
  .heading {
    font-size: 2.5rem;
  }
  button {
    background-color: transparent;
  }
`;

export const wrapperStyle = css`
  min-width: 100%;
  display: flex;
  .wrapper {
    margin: 0.5rem;
    border-radius: 15px;
    width: 80%;
    padding: 2rem;
    background-color: ${darkBackgroundSecondary};
  }
  .widget-container {
    width: 20%;
  }
  .widget {
    margin: 0.5rem;
    border-radius: 15px;
    padding: 2rem;
    background-color: ${darkBackgroundSecondary};
  }
  .widget-header {
    display: flex;
    align-items: center;
    padding: 15px;
    font-size: 1.25rem;
    font-weight: 600;
    border-bottom: 0 solid #e0e0e0;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    text-transform: uppercase;
  }
  .widget-header:after {
    content: '';
    width: 20%;
    height: 2px;
    background: #de00a7;
    margin-top: 15px;
    display: table;
    clear: both;
    text-align: center;
  }
  .avatar-card {
    display: flex;
    margin: 1rem;
  }
  .avatar-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .avatar-info {
    margin-left: 1rem;
    display: grid;
    .banner-administrator {
      background-color: #f55;
      border: 1px solid #190707;
      border-radius: 4px;
      padding: 4px;
      margin: 4px 0;
      width: 100px;
      height: 26px;
      text-align: center;
      color: white;
      font-size: 11px;
      display: inline-block;
      margin-left: 0px;
      max-width: 100px;
    }
    .banner-developer {
      background-color: #55c9ff;
      border: 1px solid #190707;
      border-radius: 4px;
      padding: 4px;
      margin: 4px 0;
      width: 100px;
      height: 26px;
      text-align: center;
      color: white;
      font-size: 11px;
      display: inline-block;
      margin-left: 0px;
      max-width: 100px;
    }
    .banner-moderator {
      background-color: #16e991;
      border: 1px solid #190707;
      border-radius: 4px;
      padding: 4px;
      margin: 4px 0;
      width: 100px;
      height: 26px;
      text-align: center;
      color: white;
      font-size: 11px;
      display: inline-block;
      margin-left: 0px;
      max-width: 100px;
    }
  }
`;

export const credetailsStyle = css`
  width: 440px;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;

  .root {
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .topIcon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-size: 1.25rem;
    line-height: 1;
    border-radius: 50%;
    overflow: hidden;
    user-select: none;
    color: #fff;
    margin: 8px;
    background-color: #9c27b0;
  }

  .heading {
    margin: 1rem 0;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
  }

  .loginInput {
    display: block;
    width: 100%;
    padding: 0.75rem;
    margin: 10px 0;
    font-size: 1rem;
    line-height: 2;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .loginInput:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    color: inherit;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: #fff;
    background-color: #1976d2;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    width: 100%;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  .inputGroup {
    display: inline-flex;
  }

  .inlineText {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

export const threadStyle = css`
  .thread-container {
    padding: 10px;
    .thread-header {
      font-size: 1.5rem;
      font-weight: 700;
    }
    .thread-header:after {
      content: '';
      width: 100%;
      height: 2px;
      background: #de00a7;
      margin-top: 15px;
      display: table;
      clear: both;
      text-align: center;
    }
  }
`;
