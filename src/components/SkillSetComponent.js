import { Component } from "react";
import Data from './data/ImageLogo.json';

class SkillSetComponent extends Component{
    
    render(){
        return (
            <div>
                <a name="skillset" href="/"> </a>
                <br></br>
                <h3>- Skill Set -</h3>
                <hr></hr>
                <div className="grid-container">
                    {
                    Data.map(data =>{
                        return (
                            <>
                            <center>
                                <div className="grid-item">
                                    <div className="column">
                                            <div>
                                                <div>
                                                    <img src={data.ubication} alt="imglogo" className="imgExampleSkillSet"/>
                                                </div>
                                                <div>
                                                    <h5>{data.name_image}</h5>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </center>
                            </>
                            )
                    })
                    }
                </div>
         </div>
        )
    }

}
export default SkillSetComponent;