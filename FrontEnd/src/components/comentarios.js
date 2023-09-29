import React, { useState } from "react";
import './styles/comentarios.css';

function Comentarios() {


    return (

        <div className="comentarios-container"> 
             <h1 className="title text-white centered-title">Comentarios</h1>
             <div className="card1 w-96 bg-base-100 shadow-xl">
                <figure><img src="{usuario.imagen}" alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title"></h2>
                    <p></p>
                    <div className="card-actions justify-end">
                    <button class="btn btn-accent btn-outline">Three</button>
                    </div>
                </div>
                </div>
        </div>
        
    )
}

export default Comentarios;