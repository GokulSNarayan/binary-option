import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

const NavSection = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: black;
  height: 50px;
`;
const NavSectionUl = styled.ul`
  display: inline-block;
  list-style-type: none;
  height: 4em;
  font-style: normal;
  font-weight: 100;
  line-height: 4em;
  & li {
    display: inline-block;
    letter-spacing: 4px;
  }
  & a {
    position: relative;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding-left: 0px;
    padding-right: 0px;
    margin: 0px 2em;
    font-size: 14px;
    line-height: 2.1;
  }
  & a:after {
    position: absolute;
    bottom: -10px;
    left: 50%;
    width: 0;
    height: 1px;
    margin-left: 0;
    background-color: red;
    content: "";
    transition-duration: 0.3s;
  }
  & a:hover {
    text-decoration: none;
  }
  & a:hover:after {
    /*because letter-spacing on li is set to 4px the width on animation is set to less than 100% to compensate for the extra letter width on the last letter in each <a> item */
    width: 96%;
    margin-left: -50%;
  }
`;
const MainSection = styled.div`
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <>
      <NavSection>
        <NavSectionUl>
          <li>
            <Link to="/converter"> Converter</Link>
          </li>
          <li>
            <Link to="/exchangeRate"> Exchange Rates</Link>
          </li>
        </NavSectionUl>
      </NavSection>
      <MainSection>{children}</MainSection>
    </>
  );
}
