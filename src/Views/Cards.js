import React from 'react';
import { MDBCard, MDBCardTitle, MDBRow, MDBCol} from 'mdbreact';
import {Container} from 'reactstrap'
import "../App.css"

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
                                <p className="pp">
                                    Aquí en shareplay nos enfocamos en dar una buena experiencia
                                    a nuestros usuarios, en conectar a la mayor cantidad de personas
                                    para que encuentren facilmente los productos que están buscando,
                                    así como brindarles la seguridad de que sus artículos estarán sanos 
                                    y salvos. 
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
                                    <strong>¡Siempre lo mejor!</strong>
                                </MDBCardTitle>
                                <p className="pp">
                                    Aspiramos a ser la mejor empresa de intercambio y compra
                                    de videojuegos en la región y ser la primera opción de la 
                                    mayoría de personas que comparten el amor por los videojuegos
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
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