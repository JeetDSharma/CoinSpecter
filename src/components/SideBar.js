import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Transactions from "./Transactions";
import { createGlobalStyle } from "styled-components";
const sideBar = () => {
  return (
    <ParentSideBar>
      {/* <SideBarBg src="img/SideBar-bg.png" /> */}
      <InternalSideBar>
        <Ia className="fig">
          <img src="img/Home-icon.png" />
          <figcaption>Home</figcaption>
        </Ia>
        <Ia className="fig">
          <img src="img/Wallet-icon.png" />
          <figcaption>Wallet</figcaption>
        </Ia>
        <Ia className="fig">
          <img src="img/Transactions-icon.png" />
          <figcaption>Transactions</figcaption>
        </Ia>
        <Ia className="fig">
          <img src="img/Support-System-icon.png" />
          <figcaption>Support System</figcaption>
        </Ia>
        <Ia>
          <img src="img/Settings-icon.png" />
          <figcaption className="fig">Setting</figcaption>
        </Ia>
      </InternalSideBar>
    </ParentSideBar>
  );
};

export default sideBar;

const ParentSideBar = styled.div`
  left: 0px;
  width: 20%;
  height: 100vh;
  /* background-color: red; */
  background: url("img/SideBar-bg.png") no-repeat;
  background-size: contain, cover;
  display: flex;
  z-index: -1;
`;

// const SideBarBg = styled.img`
//   width: 20%;
//   flex: 1;
//   overflow: hidden;
//   height: 100vh;
//   z-index: -1;
// `;

const InternalSideBar = styled.div`
  /* height: 100vh; */
  z-index: 1;
  display: grid;
  grid-gap: 5rem;
  padding: 100px 0px 300px 0px;
  justify-content: center;
  flex: 1;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 24px;
  /* padding: 50px 30px 20px 30px; */
  background-color: transparent;
  text-decoration: none;
`;
const Ia = styled.a`
  align-items: center;
  text-align: center;
  line-height: 100%;
`;
const GlobalStyle = createGlobalStyle`
 
`;
