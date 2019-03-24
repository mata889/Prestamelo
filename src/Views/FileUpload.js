import React from "react"
import { storage } from "../firebase"
import { Button, Input, Card,  CardImg } from 'reactstrap'


class FileUpload extends React.Component {
    constructor(props) {
        super();
        super(props);
        this.state = {
            url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    onChange = e => {
        return this.nombreFoto;
    }
    handleChange = e => {
        if (e.target.files[0]) {
            console.log(e.target.files[0]);
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    handleUpload = () => {
        const { image } = this.state;
        console.log(this.state);
        const uplaodTask = storage.ref(`images/${image.name}`).put(image);
        console.log(uplaodTask)
        uplaodTask.on('state_changed',
            (snapshot) => {
                //progress function
            },
            (error) => {
                //error function
                console.log(error);
            },
            () => {
                //completion function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    this.nombreFoto = url;
                    console.log(this.nombreFoto);
                    this.setState({ url });
                })
            });
    }

    onChangeURL (){
        this.setState({
            url:this.url
        });
    }
    render() {
        /*const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justificyContent: 'center'
        };*/
        return (
            <div>
                <Input type="file" onChange={this.handleChange} />
                <Button color="link" size="sm" onClick={this.handleUpload}>Subir</Button>
                <br></br>
                <Card>
                    <CardImg top height="50%" width="25%" alt="Subiendo Imagen" src={this.state.url || 'http://www.wallpaperama.com/post-images/forums/200903/07p-6606-loading-photo.gif'}></CardImg>
                </Card>
            </div>
        )
    }
}

export default FileUpload  