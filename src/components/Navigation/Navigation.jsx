import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './Navigation.module.css';
import Container from '../Container/Container';
import logo from '../../images/logo.png';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useEffect, useCallback } from 'react';
import MobileBtn from '../MobileBtn/MobileBtn';

const WrapNav = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const StyledLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: 0.05em;

  color: ${props => props.theme.colors.text};
  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;

const WrapWrapLinkNav = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    right: 0;
    left: -100%;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    overflow: auto;

    z-index: 10;
    transition: left 1s;
    padding-top: 150px;

    &.active {
      left: 0;
      z-index: 10;
    }
  }
`;

const WrapLinkNav = styled.div`
  @media (min-width: 1100px) {
    display: flex;
    align-items: center;
  }
`;

// const Button = styled.button`
//   font-weight: ${p => p.theme.fontWeights.normal};
//   font-size: ${p => p.theme.fontSizes.m};
//   line-height: ${p => p.theme.lineHeights.heading};
//   color: #ffffff8d;
//   margin-left: 50px;
//   background-color: ${props => props.theme.colors.background};
//   border: 1px solid #ffffff8d;
//   border-radius: ${props => props.theme.radii.big};
//   padding: 10px 20px;
//   :hover {
//     color: ${props => props.theme.colors.text};
//     border: 1px solid ${props => props.theme.colors.text};
//   }
//   @media (max-width: 1100px) {
//     margin-left: 0;
//     margin-top: 20px;
//   }
// `;

const LogoLink = styled(NavLink)`
  cursor: pointer;
  margin-right: 70px;
`;
const Logo = styled.img`
  height: 45px;
  fill: ${props => props.theme.colors.text};

  @media (min-width: 1100px) {
    height: 55px;
  }
`;

const WrapLink = styled.div`
  display: flex;
  gap: 70px;
  align-items: left;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export default function Navigation({ setBlur }) {
  const [showModal, setshowModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleModal = () => {
    setshowModal(!showModal);
    setBlur(!showModal);
  };

  // const toggleModalAndOpenMenu = () => {
  //   setshowModal(!showModal);
  //   setBlur(!showModal);
  //   !matches && setOpenMenu(!openMenu);
  // };

  const keyPress = useCallback(
    e => {
      if (e.code === 'Escape') {
        setshowModal(!showModal);
        setBlur(!showModal);
      }
    },
    [setBlur, showModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1100px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1100px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  useEffect(() => {
    openMenu || showModal
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [openMenu, showModal]);

  return (
    <nav className={s.nav}>
      <Container>
        <WrapNav>
          <LogoLink to="/">
            <Logo src={logo} />
          </LogoLink>

          <WrapWrapLinkNav className={openMenu ? 'active' : ''}>
            <WrapLinkNav>
              <WrapLink>
                <StyledLink
                  to="/"
                  onClick={() => !matches && setOpenMenu(!openMenu)}
                  end
                >
                  PRE-LANDING
                </StyledLink>
                <StyledLink
                  to="/sweepstake"
                  onClick={() => !matches && setOpenMenu(!openMenu)}
                >
                  SWEEPSTAKE
                </StyledLink>
              </WrapLink>
            </WrapLinkNav>
          </WrapWrapLinkNav>
        </WrapNav>
        {!matches && (
          <MobileBtn openBtn={setOpenMenu} openMenuBoolin={openMenu} />
        )}
        {showModal && <Modal toggleModal={toggleModal} />}
      </Container>
    </nav>
  );
}
