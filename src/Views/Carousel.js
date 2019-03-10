import React from 'react'
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask} from
"mdbreact";
/*npm install --save mdbreact*/ 

export default class Carousel extends React.Component {
    render(){
        return(
        <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <MDBView>
                        <img className="d-block w-100" src="https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2018/11/06/6f4a579a/banner.jpg" alt="Mattonit's item" />   
                        
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
                        
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <MDBView>
                        <img className="d-block w-100" src="https://www.newstatesman.com/sites/default/files/styles/lead_image/public/Longreads_2018/09/2018_37_horizon_zero_video_game.jpg?itok=DNchHnRx" alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                      </MDBView>
                      <MDBCarouselCaption>
                        
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <MDBView>
                        <img className="d-block w-100" src="https://cdn.geekaygames.com/media/leimageslider/image/s/u/super-smash-ultimate.jpg" alt="Third slide" />
                        <MDBMask overlay="black-slight" />
                      </MDBView>
                      <MDBCarouselCaption>
                        
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                      <MDBView>
                      <img className="d-block w-100" src="https://rukminim1.flixcart.com/flap/960/960/image/ff313799f5d54ed7.jpg?q=50" alt="First slide" />
                        <MDBMask overlay="black-light" />
                      </MDBView>
                      <MDBCarouselCaption>
   
                      </MDBCarouselCaption>
                    </MDBCarouselItem>
                  </MDBCarouselInner>
        </MDBCarousel>
        
        )}
}