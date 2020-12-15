import React from 'react'
import '../Cadastro/index.css'
import Menu from "../../components/Menu"
import Rodape from "../../components/Rodape"

function Cadastro() {

    function handleSubmit() {
        console.log()
        console.log(document.getElementById("bloco-cadastro"))
    }

    return (
        <div>
            <Menu />
            <div className="cadastro">
                <h3>Olá, Deseja Receber Nosso Produto?</h3>
                <h3>É bem simples, basta preencher os dados a seguir</h3>
                <form onSubmit={handleSubmit} id="bloco-cadastro">
                    <label>
                        <a>Digite seu Nome:</a>
                        <input type="text" placeholder="Nome" />
                    </label>
                    <label>
                        <a>Digite seu Email:</a>
                        <input type="text" placeholder="Email" />
                    </label>
                    <label>
                        <a>Seu Telefone:</a>
                        <input type="tel" placeholder="Telefone" />
                    </label>
                    <a>Data De Nascimento:</a>
                    <input type="date"></input>
                    <a>Aceita Receber Nossas Ofertas? ()</a>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
            <Rodape />
        </div>
    )
}

export default Cadastro;