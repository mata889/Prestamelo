import React, { Component } from 'react';
import Carousel from './Carousel'
import Cards from './Cards'

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Cards/>
            </div>

        )
    }
}

export default Home;
