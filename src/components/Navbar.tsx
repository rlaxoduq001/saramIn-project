import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


interface ToggleProps {
  toggle: boolean;
}

export const Navbar:React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleBtn = () => {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <>
      <NavbarContiner>
        <MainLogoWrapper>
          <FontAwesomeIcon icon={faAccusoft} />
          <a href=''>사람인</a>
        </MainLogoWrapper>
        <NavMenuList toggle={toggle}>
          <li><a href="">채용정보</a></li>
          <li><a href="">기업정보</a></li>
        </NavMenuList>
        <ul>
          <SearchLogo toggle={toggle}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </SearchLogo>
        </ul>
        <ToggleWrapper toggle={toggle} onClick={() => toggleBtn()}>
          <FontAwesomeIcon icon={faBars} />
        </ToggleWrapper>
      </NavbarContiner>
    </>
  )
}


const NavbarContiner = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  padding: 8px 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    li{
      width: 100%;
    }
`

const MainLogoWrapper = styled.div`
  font-size: 24px;
  color: #d49466;
`

const NavMenuList = styled.ul<ToggleProps> `
  display: flex;
  li {
    padding: 8px 12px;
  }
  li:hover {
    background-color: #d49466;
    border-radius: 4px;
  }
  @media screen and (max-width: 768px) {
    display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
  }
`

const ToggleWrapper = styled.div<ToggleProps>`
  display: none;
  position: absolute;
  right: 32px;
  font-size: 24px;
  color: white;
  @media screen and (max-width: 768px) {
     display: block;
  }
`

const SearchLogo = styled.div<ToggleProps>`
  color: white;
  display: flex;
  padding: 8px 12px;
  
  @media screen and (max-width: 768px) {
    display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
  }
`