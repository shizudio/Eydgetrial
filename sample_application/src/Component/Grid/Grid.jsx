import React from 'react';
const generateWidthFromNumber = (number) => {
    return Math.floor((number/12) * 10000)/100  + '%'
}
const Grid = ({size, children,container, justify, style, ...props}) => {

    const customStyle = {
        width: generateWidthFromNumber(size),
        display: container && 'flex',
        justifyContent: justify,
        ...style
    }
    return <div style={customStyle} {...props}>
        {children}
    </div>
}


export default Grid