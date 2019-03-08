import React from "react"
import firebase from "firebase"

class FileUpload extends React.Component{
    constructor(){
        super();
        this.state = {
            uploadValue: 0,
            picture: null
        }
        this.handleUpload = this.handleUpload.bind(this);

    }

    handleUpload(event){
        const file = event.target.files[0];
        const storageRef = firebase.storeage().ref(`/fotos/${file.name}`)
        const task = storageRef.put(file);
        task.on("state_changed",snapshot => {
            let percentage = (snapshot.bytestTransferred / snapshot.totalBytes) * 100;
            this.setState({
                uploadValue: percentage
            })
        }, error => {console.log(error.message)
        }, () => {
            this.setState({
                uploadValue: 100, picture: task.snapshot.downloadURL
            });
        });
    }

    render(){
        return(
            <div>
                <progress value={this.state.uploadValue} max="100"></progress>
                <br></br>
                <input type="file" onChange={this.handleUpload}></input>
                <br></br>
                <img src={this.state.picture} alt="foto"></img>
            </div>
        )
    }
}

export default FileUpload  