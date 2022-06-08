import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Contact from './pages/Contact';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import WhatIUse from './pages/WhatIUse';

import { ContentWrapper } from './components/common/ContentWrapper';
import { Nav } from './components/common/Nav';
import { PhineasCredit } from './components/common/PhineasCredit';
import { Wrapper } from './components/common/Wrapper';

import { GlobalStyles } from './styles/global';
import { dark } from './styles/themes/dark';

function App() {
  return (
    <BrowserRouter>
      <Helmet defaultTitle="David ✿" titleTemplate="%s — David" />
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Wrapper>
          <Nav />
          <PhineasCredit />
          <ContentWrapper>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/what" element={<WhatIUse />} />
              <Route path="/repos" element={<Repositories />} />
            </Routes>
          </ContentWrapper>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
