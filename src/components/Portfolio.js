import React, {Component} from 'react';
import imgexample1 from '../assets/image/examplevue.png';
import imgexample2 from '../assets/image/crm.jpeg';
import imgexample3 from '../assets/image/ineeds.jpeg';
import imgexample4 from '../assets/image/examplehb.png';

class Portfolio extends Component{
    render(){
        return(
            <div>
                <a name="portfolio" href="/"> </a>
                <br></br>
                <br></br>
                <h3>- Portfolio -</h3>
                <hr></hr>
                <div className="grid-container2">
                    <center>
                        <div className="grid-item">
                            <div className="column">
                            <div className="imgContainer">
                                    <img src={imgexample1} alt="Imagen example" className="imgExample" ></img>
                                </div>
                                <br></br>
                                <button className="btn btn-outline-success buttonPortfolio">Watch</button>
                                <button className="btn btn-outline-success buttonPortfolio" ><a href="https://github.com/EnriqueGonz/VueFrontendAWS">Github</a></button>
                            </div>
                        </div>
                    </center>
                    <center>
                        <div className="grid-item">
                            <div className="column">
                            <div className="imgContainer">
                                    <img src={imgexample2} alt="Imagen example" className="imgExample" ></img>
                                </div>
                                <br></br>
                                <button className="btn btn-outline-success buttonPortfolio">Watch</button>
                                <button className="btn btn-outline-success buttonPortfolio"><a href="/home">Github</a></button>
                                
                            </div>
                        </div>
                    </center>
                    <center>
                        <div className="grid-item">
                            <div className="column">
                            <div className="imgContainer">
                                    <img src={imgexample3} alt="Imagen example" className="imgExample" ></img>
                                </div>
                                <br></br>
                                <button className="btn btn-outline-success buttonPortfolio">Watch</button>
                                <button className="btn btn-outline-success buttonPortfolio"><a href="https://github.com/EnriqueGonz/ineedsFront">Github</a></button>
                            </div>
                        </div>
                    </center>
                    <center>
                        <div className="grid-item">
                            <div className="column">
                            <div className="imgContainer">
                                    <img src={imgexample4} alt="Imagen example" className="imgExample" ></img>
                                </div>
                                <br></br>
                                <button className="btn btn-outline-success buttonPortfolio"><a href="https://hastalavistaamigo.azurewebsites.net/login" >Watch</a></button>
                                <button className="btn btn-outline-success buttonPortfolio"><a href="https://github.com/EnriqueGonz/BlazorPropuesta">Github</a></button>
                            </div>
                        </div>
                    </center>
                </div>
                
                <center>
                </center>
                
                    
                
            </div>
        )
    }

}
export default Portfolio;