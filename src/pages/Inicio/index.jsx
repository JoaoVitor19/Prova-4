import React from "react"
import "../../pages/Inicio/index.css"
import Menu from "../../components/Menu"
import Rodape from "../../components/Rodape"
import ftHeader from "../../assets/foto Header.jpg"
import valores from '../../valores.json'


function Inicio() {

    const pvalor = valores;

    return (

        <div>
            <Menu />
            <div>
                <header className="inicio-geral">
                    <img src={ftHeader} width="500px" />
                    <div className="sobre-restaurante">
                        <h1>Restaurante Caipirão Em Urupá RO</h1>
                        <p>O Melhor da comida Caipira, Aqui no Caipirão Você encontra tudo que precisa</p>
                        <p>para ter um ótimo almoço, com até 13 tipos de opções de comida disponiveis,</p>
                        <p>e também temos o nosso famoso Churrasco Livre, que acompanha os Self-Services</p>
                        <p>e nossas Marmitex que são de ótima Qualidade, venha conferir</p>
                    </div>
                        <table >
                            <thead>
                                <tr>
                                    <th>*</th>
                                    <th>Produtos</th>
                                    <th>Valores</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1-</td>
                                    { pvalor.map((comida, index) => 
                                    <td key={index}> {comida.produto} </td>,
                                    )}
                                    { pvalor.map((comida, index) => 
                                    <td key={index}> {comida.valor} </td>,
                                    )}
                                </tr>
                                <tr>
                                    <td>2-</td>
                                    <td>Marmitex G = </td>
                                    <td>12 Reais</td>
                                </tr>
                                <tr>
                                    <td>3-</td>
                                    <td>Marmitex P = </td>
                                    <td>8 Reais</td>
                                </tr>
                                <tr>
                                    <td>4-</td>
                                    <td>Coca-Cola 2L = </td>
                                    <td>10 Reais</td>
                                </tr>
                                <tr>
                                    <td>5-</td>
                                    <td>Coca-Cola 1L = </td>
                                    <td>6 Reais</td>
                                </tr>
                            </tbody>
                        </table>
                </header>
            </div>
            <Rodape />
        </div>
    )
}

export default Inicio;