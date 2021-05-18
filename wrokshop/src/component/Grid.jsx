import React from 'react'

// Takes in number from 1 to 12 
// returns a percentage string
const generateWidthPercentage = (number) => {
    return (number/12 * 100 + '%')
}

// default props: --> Children
const Grid = (props) => {
    return <div style={{display: 'flex', width: generateWidthPercentage(props.size), justifyContent: (props.justify)}}>
        {props.children}
      </div>
}


export default Grid