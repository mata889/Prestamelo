import React from "react"
import  { storage } from "../firebase"
import {Button,Input} from 'reactstrap'

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
        const uplaodTask = storage.ref(`images/${image.name}`).put(image);
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
            <div>
                <Input type="file" onChange={this.handleChange}/>
                <Button color="link" size ="sm" onClick={this.handleUpload}>Subir</Button>
            </div>
        )
    }
}

export default FileUpload  