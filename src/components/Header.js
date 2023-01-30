import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

const Header = () => {
  return (
    <Head>
      <ProfileDiv>
        <ProfilePic src="img/Profile-picture.png" />
      </ProfileDiv>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  background: url("img/Header-bg.png");
  position: absolute;
  z-index: 1;
  height: 80px;
  width: 100vw;
`;
const ProfilePic = styled.img``;
const ProfileDiv = styled.div`
  height: 80px;
  padding-left: 93%;
  padding-top: 8px;
`;
