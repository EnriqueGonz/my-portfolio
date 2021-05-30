import { Component } from "react";
import gitImg from '../assets/image/github.png';
import telImg from '../assets/image/llamada.png';
import emailImg from '../assets/image/email.png';

class Contact extends Component{
    render(){
        return(
            <div>
                <a name="contact" href="/"> </a>
                <br></br>
                <h3>- Contact -</h3>
                <hr></hr>
                <div className="container contact">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="col">
                            <img src={gitImg} alt="github img" className="imgExampleSkillSet" ></img>
                            <h5>@enriquegonz</h5>
                        </div>
                        <div className="col">
                            <img src={telImg} alt="contact img" className="imgExampleSkillSet" ></img>
                            <h5>+52 961 669 9075</h5>
                        </div>
                        <div className="col">
                            <img src={emailImg} alt="emailimg" className="imgExampleSkillSet" ></img>
                            <h5>enriquegonz1323@gmail.com</h5>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}
export default Contact;