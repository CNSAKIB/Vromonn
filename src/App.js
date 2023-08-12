import React from 'react';
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import Header from './Component/Navbar/Header';
import Banner from './Component/Banner/Banner';
import Packages from './Component/Packages/Packages';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Packages />
      <Login />
      <Footer />

    </React.Fragment>
  );
}

export default App;
