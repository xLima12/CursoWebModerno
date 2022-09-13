import React from "react";

import Filho from "./Filho";

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, {...props, ...child.props})
            })}
            {/* {React.cloneElement(props.children, {...props, ...props.children.props})} */}
        </ul>
    </div>

{/* <Filho nome="Júlia" sobrenome={props.sobrenome}/> 
<Filho {...props} />
<Filho {...props} nome="Júlia" />*/}