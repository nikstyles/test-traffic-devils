// import s from './Hero.module.css';
import styled from 'styled-components';
import dyson from '../../images/20190930_172901.png';
import { useEffect } from 'react';

const HeroBanner = styled.div`
  box-sizing: border-box;

  background-color: #fff;
  border-radius: ${props => props.theme.radii.big};
  position: relative;
  margin-top: 30px;
  width: 100%;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.089);
  padding: 30px;

  @media (min-width: 768px) {
    padding: 45px;
    margin-top: 50px;
    height: 450px;
    margin-top: 60px;
  }
  @media (min-width: 1100px) {
    padding: 80px;
    margin-top: 60px;
    height: 700px;
  }
  /* @media ${p => p.theme.media.desktop} {
  } ; */
`;

const WrapText = styled.div`
  color: ${p => p.theme.colors.text};
  /* padding-left: 70px; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 768px) {
    display: block;
    padding-top: 0;
    flex-direction: column;
  }
  @media (min-width: 1100px) {
    flex-direction: row;
    /* padding-left: 130px; */
  }
`;
// const WelcomText = styled.h3`
//   font-size: ${p => p.theme.fontSizes.ll};
//   font-weight: ${p => p.theme.fontWeights.lite};
//   color: ${p => p.theme.colors.yellow};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 350px;
//   border-top-right-radius: ${p => p.theme.radii.big};
//   border-bottom-right-radius: ${p => p.theme.radii.big};
//   padding: 15px 30px 15px 30px;
//   margin-left: -70px;

//   background: #00000026;

//   /* margin-top: -195px; */
//   @media (min-width: 768px) {
//     display: inline-block;
//     padding: 15px 30px 15px 70px;
//     margin-left: -117px;

//     margin-left: -70px;
//     margin-top: 0;

//     font-size: ${p => p.theme.fontSizes.xl};
//   }
//   @media (min-width: 1100px) {
//     margin-left: -130px;
//     padding: 15px 30px 15px 130px;
//   }
// `;

const HeroText = styled.h2`
  max-width: 500px;
  font-weight: 900;
  font-size: 28px;
  line-height: ${p => p.theme.lineHeights.heading};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0;
  line-height: 42px;
  text-align: center;

  @media (min-width: 360px) {
    font-size: 32px;
  }
  @media (min-width: 400px) {
    font-size: 40px;
  }
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0;
    text-align: left;
  }
  @media (min-width: 1100px) {
    max-width: 460px;
    line-height: 62px;

    font-size: 64px;
  }
`;

const SecondText = styled.p`
  font-weight: 400;

  line-height: 26px;
  letter-spacing: 0.05em;
  line-height: ${p => p.theme.lineHeights.heading};
  padding-top: 30px;
  text-align: center;

  /* text-align: end;
  text-transform: uppercase;
  letter-spacing: 0.2em; */

  @media (min-width: 360px) {
    font-size: 18px;
  }
  @media (min-width: 400px) {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    text-align: start;
    padding-top: 30px;
    max-width: 320px;

    margin-top: 0;
  }
  @media (min-width: 1100px) {
    max-width: 400px;
    padding-top: 50px;
    font-size: 24px;
  }
`;
const NameText = styled.span`
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0.1em;
  @media (min-width: 400px) {
    font-size: 22px;
  }
  @media (min-width: 768px) {
    font-size: 25px;
  }
  @media (min-width: 1100px) {
    font-size: 40px;
  }
`;

const Photo = styled.img`
  position: absolute;
  bottom: 110px;
  right: 16vw;
  z-index: 2;
  max-height: 240px;

  @media (min-width: 768px) {
    right: -15px;
    bottom: 40px;

    max-height: 430px;
  }
  @media (min-width: 1100px) {
    max-height: 675px;
    right: -32px;
    bottom: 48px;
  }
`;
const CircleOne = styled.div`
  position: absolute;
  bottom: 145px;
  right: 120px;
  z-index: 1;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  background-color: ${props => props.theme.colors.accent};
  @media (min-width: 440px) {
    right: 150px;
  }
  @media (min-width: 768px) {
    bottom: 85px;
    right: 70px;
    width: 240px;
    height: 240px;
  }
  @media (min-width: 1100px) {
    bottom: 110px;
    right: 110px;
    width: 420px;
    height: 420px;
  }
`;
const CircleSecond = styled.div`
  position: absolute;
  bottom: 300px;
  right: 55vw;
  z-index: 1;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  background-color: ${props => props.theme.colors.accent};

  @media (min-width: 440px) {
    right: 40vw;
    bottom: 300px;
  }
  @media (min-width: 768px) {
    bottom: 300px;
    right: 300px;
    width: 40px;
    height: 40px;
  }
  @media (min-width: 1100px) {
    bottom: 500px;
    right: 480px;
    width: 70px;
    height: 70px;
  }
`;

const CircleThird = styled.div`
  position: absolute;
  bottom: 60px;
  right: 45vw;
  z-index: 1;
  width: 130px;
  border-radius: 50%;

  background-color: ${props => props.theme.colors.accent};

  @media (min-width: 440px) {
    right: 35vw;
  }
  @media (min-width: 768px) {
    bottom: 260px;
    right: 330px;
    width: 15px;
    height: 15px;
  }
  @media (min-width: 1100px) {
    bottom: 415px;
    right: 570px;
    width: 30px;
    height: 30px;
  }
`;

const Button = styled.button`
  margin-top: 280px;
  background-color: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 50px;

  padding: 20px 40px;

  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: #fff;
  transition: 0.3s;
  :hover {
    background-color: #512cc0;
    box-shadow: 0px 0 20px 0 #9470ff;
  }
  @media (min-width: 440px) {
  }
  @media (min-width: 768px) {
    margin-top: 30px;
    padding: 15px 35px;

    font-size: 20px;
  }
  @media (min-width: 1100px) {
    font-size: 32px;
    margin-top: 50px;
    padding: 20px 40px;
  }
`;

const Hero = () => {
  useEffect(() => {
    document.addEventListener('mousemove', e => {
      document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const setX = (window.innerWidth - e.pageX * speed) / 400;
        const setY = (window.innerHeight - e.pageY * speed) / 300;
        // console.log(setX, setY);
        layer.style.transform = `translateX(${setX}px) translateY(${setY}px)`;
      });
    });
  }, []);

  return (
    <>
      <HeroBanner>
        <WrapText>
          <HeroText>
            Розіграш
            <br />
            <NameText>пилососу Dyson</NameText>
          </HeroText>
          <SecondText>
            Друзі! Всього 3 хвилини вашого часу – і ви учасник розіграшу нового
            пилесосу Dyson! <br />
            <br />
            Для участі у розіграші потрібно заповнити невелике опитування.
          </SecondText>
          <Button type="button">Взяти участь </Button>
        </WrapText>

        <Photo data-speed={1} className="layer" src={dyson} alt="dyson" />
        <CircleOne data-speed={5} className="layer" />
        <CircleSecond data-speed={-7} className="layer" />
        <CircleThird data-speed={10} className="layer" />
      </HeroBanner>
    </>
  );
};

export default Hero;
