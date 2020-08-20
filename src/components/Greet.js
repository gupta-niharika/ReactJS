import React from 'react'

const Greet = props => {
    console.log(props)
return (
    <div>
        <h1>Hello { props.name} {props.heroname}</h1>
        {props.children}
    </div>
)
}

// export const Greet = (props) => {
//     return React.createElement( 
//         'div', 
//         {id:'hello', className:'dummy'}, 
//         React.createElement('h1',null,'Booyah'))
// }

export default Greet