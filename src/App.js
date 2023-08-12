import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Header from './Component/Navbar/Header';
import Banner from './Component/Banner/Banner';
import Packages from './Component/Packages/Packages';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Packages />
    </React.Fragment>
  );
}

export default App;
