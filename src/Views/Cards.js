import React from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol} from 'mdbreact';
import {Container} from 'reactstrap'

const CardsMenu = () => {
    return (
        <div>
            <br></br>
            <Container>
            <MDBRow>
                <MDBCol>
                    <MDBCard className="card-image" style={{
                        backgroundImage: "url('https://obssr.od.nih.gov/wp-content/uploads/2016/05/young-males-playing-video-games-resized.jpg')"
                    }}>
                        <div className="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>

                                <MDBCardTitle tag="h3" className="pt-2">
                                    <strong>Compañia hecha por Gamers para Gamers</strong>
                                </MDBCardTitle>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                    nam sit officia accusamus minus error nisi architecto
                                    nulla ipsum dignissimos. Odit sed qui, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                    nam sit officia accusamus minus error nisi architecto
                                    nulla ipsum dignissimos. Odit sed qui, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                    nam sit officia accusamus minus error nisi architecto
                                    nulla ipsum dignissimos. Odit sed qui, dolorum!
                                </p>

                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className="card-image" style={{
                        backgroundImage:
                            "url('https://cdn.vox-cdn.com/thumbor/wV3vt-crWiummCiV8T_zKjc13gk=/0x0:2400x1600/1200x800/filters:focal(713x1216:1097x1600)/cdn.vox-cdn.com/uploads/chorus_image/image/58839721/esrb_ratings_on_games_2_2400.0.jpg')"
                    }}>
                        <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                            <div>

                                <MDBCardTitle tag="h3" className="pt-2">
                                    <strong>Algo de Video</strong>
                                </MDBCardTitle>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                        nam sit officia accusamus minus error nisi architecto
                                        nulla ipsum dignissimos. Odit sed qui, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                        nam sit officia accusamus minus error nisi architecto
                                        nulla ipsum dignissimos. Odit sed qui, dolorum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Repellat fugiat, laboriosam, voluptatem, optio vero odio
                                        nam sit officia accusamus minus error nisi architecto
                                        nulla ipsum dignissimos. Odit sed qui, dolorum!
                                 </p>
                                
                            </div>
                        </div>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default CardsMenu;