import React from "react"
import  { storage } from "../firebase"

class FileUpload extends React.Component{
    constructor(props){
        super(props);
        this.state = { }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

    }

    handleChange = e =>{
        if(e.target.files[0]){
            console.log(e.target.files[0]);
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleUpload = () =>{
        const {image} = this.state;
        console.log(this.state);
        const uplaodTask = storage.ref('images/${image.name}').put(image);
        uplaodTask.on('state_changed',
            (snapshot)=>{
                //progress function
            },
            (error) => {
                //error function
                console.log(error);
            },
            ()=>{
                //completion function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                })
            });
    }

    render(){
        const style = {
            height:'100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justificyContent: 'center'
        };
        return(
            <div style={style}>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Subir</button>
                <br/>
                <img src={this.state.url} alt="Prueba" height="300" width="400"/>
            </div>
        )
    }
}

export default FileUpload  