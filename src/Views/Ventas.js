import React, { Component } from 'react';
import {JuegosP} from './JuegosP.json';

class Ventas extends Component {
    constructor(){
        super();
        this.state = {JuegosP}
    }
    render(){
        const JuegosP = this.state.JuegosP.map((JuegosP,i) => {
            return(
                <div className = "col-md-4" key={i}>
                    <div className = "card mt-4">
                        <div className = "card-header">
                            <h4>{JuegosP.Titulo}</h4>
                        </div>
                        <div className = "card-body">
                            <img src = {JuegosP.Imagen}></img>
                            <p>{JuegosP.Descripcion}</p>
                            <p>{JuegosP.Renta}</p> 
                        </div>
                        <div className = "card-footer">
                            <button>
                                <p>Rentar</p>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        
    }
}
export default Ventas;