import React, {Component} from "react";
import { Players } from '../Share/ListOfPlayers'
export default class player extends Component {
    render(){
        return(
            <div className="container">
                        
                <div className="column">
                    <div className="card">
                        <img src="assets/images/cr.jpg" alt="Ronaldo" />
                        <h3>Critiano Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/images/kante.jpg" alt="Kante" />
                        <h3>Kante</h3>
                        <p className="title">Chelsea</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/images/messi.jpg" alt="Messi" />
                        <h3>Messi</h3>
                        <p className="title">PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/images/neymar.jpg"  alt="Neymar"/>
                        <h3>Neymar</h3>
                        <p className="title">PSG</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/images/kane.jpg" alt="Kane" />
                        <h3>Kane</h3>
                        <p className="title">Tottemham</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="assets/images/haaland.jpg"  alt="Haaland"/>
                        <h3>Haaland</h3>
                        <p className="title">Manchester City</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
                        
            </div>      
        )
    }
}