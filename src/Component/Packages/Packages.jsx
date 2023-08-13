import React from 'react';
import {
    MDBContainer, MDBRow, MDBCol, MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBIcon
} from 'mdb-react-ui-kit';
import bandarban from '../../Bandarban.jpg'
import sajek from '../../Sajek.jpg'
export default function Packages() {
    return (
        <MDBContainer>
            <h1 class="m-5 text-center">Our Packages</h1>
            <MDBRow className='mb-3'>
                <MDBCol md='4'>
                    <MDBCard className='hover-shadow'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Saint Martin</MDBCardTitle>
                            <MDBCardText>
                                St. Martin is generally known as “Narikel Zinzira” in Bengali, means 'Coconut Island' and this is the only coral reef island in Bangladesh. It is a small island in the north eastern part of the Bay of Bengal, created the southernmost part of our country.
                            </MDBCardText>
                            <MDBBtn href='#'><MDBIcon fas icon="shopping-cart" /> Book now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard className='hover-shadow'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={bandarban} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Bandarban</MDBCardTitle>
                            <MDBCardText>
                                Bandarban has been the most beautiful tourist destination of Bangladesh in recent years. Nature has adorned this region with its magnificent and splendid green ornaments. Beauty is scattered everywhere of Bandarban in magnanimous mood.
                            </MDBCardText>
                            <MDBBtn href='#'><MDBIcon fas icon="shopping-cart" /> Book now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard className='hover-shadow'>
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={sajek} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <MDBCardTitle>Sajek Valley</MDBCardTitle>
                            <MDBCardText>
                                ajek Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.The valley is 2,000 feet above sea level.
                            </MDBCardText>
                            <MDBBtn href='#'><MDBIcon fas icon="shopping-cart" /> Book now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}