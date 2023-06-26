import * as React from 'react';
import Button from "@mui/material/Button";




export default function HomeComponent() {
    return(
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 " style={{fontFamily: 'Monoton', color: "#E85A4F"}}>Bienvenue !</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4" style={{fontFamily: 'Lulo Clean', color: "#8E8D8A"}}>"Dites adieu aux files d'attente, bonjour à la commande en ligne facile."</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Button href="/menu" variant="contained" style={{ backgroundColor: '#E85A4F'}}>{['Commander']}</Button>
                   {/* <a href="/menu" type="button" className="btn btn-lg px-4 me-sm-3" style={{backgroundColor: "#E85A4F"}}>Commander</a>*/}
                </div>
            </div>
            {/*<div className="overflow-hidden" style={{maxHeight: '30vh'}}>
                <div className="container px-5">
                    <img src="http://localhost:3000/images/LUNCH.png" className="img-fluid border rounded-3 shadow-lg mb-4"
                         alt="Example image" width="700" height="500" loading="lazy"/>
                </div>
            </div>*/}
        </div>
    )
}