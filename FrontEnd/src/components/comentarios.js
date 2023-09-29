import React, { useState } from "react";
import './styles/comentarios.css';

function Comentarios() {


    return (

        <div className="comentarios-container"> 
             <h1 className="title text-white centered-title">Comentarios</h1>
             <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="{usuario.imagen}" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
                </div>
        </div>
        
    )
}

export default Comentarios;