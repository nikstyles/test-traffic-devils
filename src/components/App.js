import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import styled from 'styled-components';
import { useState } from 'react';
import { GlobalStyles } from 'utilities/styles/global.styles';
import Loading from './Loading/Loading';

const WrapApp = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  background-size: 100%;

  filter: ${props => (props.blur ? 'blur(10px)' : 'blur(0)')};
`;

const Homepage = lazy(() => import('pages/Homepage'));
const Sweepstake = lazy(() => import('pages/Sweepstake/Sweepstake'));
// const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));

export const App = () => {
  const [blur, setBlur] = useState(false);

  return (
    <WrapApp blur={blur}>
      <GlobalStyles />
      <Navigation setBlur={setBlur} />
      <Suspense fallback={<Loading />}>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sweepstake" element={<Sweepstake />} />
            {/* <Route path="/about" element={<div>hello</div>} /> */}
            <Route path="*" element={<Homepage />} />
          </Routes>
        </main>
      </Suspense>
    </WrapApp>
  );
};
