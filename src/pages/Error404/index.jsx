import React from 'react'
import Menu from '../../components/Menu'
import Rodape from '../../components/Rodape'
import '../Error404/index.css'

function Error() {
    return (
        <div>
            <Menu />
            <div className="error-404">
            <h1>ERROR 404</h1>
            <a>Você Digitou o Link Errado</a>
            </div>
            <Rodape />
        </div>
    )
}

export default Error;