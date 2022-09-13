import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(<Pai nome="Felipe" sobrenome="Lima">
    {/* Como passar os filhos aqui? */}
    <Filho nome="Júlia" />
    <Filho nome="Theo" />
</Pai>, document.getElementById('root'))