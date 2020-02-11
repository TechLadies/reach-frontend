import React, { useState, useEffect, Component } from "react";
import Header from "../Header";
import "./DonorDetails.css";
import Modal from "../Modal";

class App extends Component {
    async postDonordetails() {
        try{
            Let result = await fetch('https://',{
                method:'post',
                mode:'no-cors',
                body:JSON.stringify({
                    Key1:''

                }),
                headers:{
                    'content-type': ""

                },
            }).then(response => {
                return response.json()
            }).then(json=> {
                this.setState({
                    
                });
            });
            
            
        } catch(e){
            console.log(e)
        }
    }
    render() {
        return (
        <div className ="App">
        <button onClick={()=> this.postDonordetails()}> press me to get some details</button>
        </div>
    );
    }
}
export default App;