import React from 'react'
import './index.css'
import Logo from '../../assets/Logo.png'

function Rodape(){
    return(
    <div className="Rodape">
      <div className="rodape-left"> 
        <ul>
            <h3>Nossos Contatos</h3>
            <li>Ligação e Whatsapp : (69)993803677</li>
            <li>Email : restaurantecaipiraoup@gmail.com</li>
            <li>Instagram : @rcaipirao</li>
        </ul>

      </div>
      <div className="rodape-right">
      <img src={Logo} width="200px"/>
      </div>    
    </div>
    )
}

export default Rodape;