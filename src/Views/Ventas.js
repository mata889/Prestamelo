import React, { Component } from 'react';
import {JuegosP} from './JuegosP.json';
import '../App.css';

class Ventas extends Component {
    constructor(){
        super();
        this.state = {JuegosP}
    }
    render(){
        const JuegosP = this.state.JuegosP.map((JuegosP,i) => {
            return(
                <div className = "col-md-4"  className = "tarjeta" key={i}>
                    <div className = "card mt-4">
                        <div className = "card-header">
                            <h4>{JuegosP.Titulo}</h4>
                        </div>
                        <div className = "card-body">
                            <img src = {JuegosP.Imagen} width="200px" height="200px"></img>
                            <br/><br/>
                            <p>{JuegosP.Descripcion}</p>
                            <p>{JuegosP.Renta}</p> 
                        </div>
                        <div className = "card-footer">
                            <button className="buton">
                                <p>Rentar</p>
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <div className = "container">
                    <div className = "row mt-4">
                        {JuegosP}
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Ventas;