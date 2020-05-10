<<<<<<< e00d4a96ff8409b03c536dfd8cc24d47937feea5
import React from 'react'
import { StyledDisplay } from './styles/StyledDisplay'

const Display = ({gameOver, text}) => {
    return (
        <StyledDisplay gameOver={gameOver}>
            {text}
        </StyledDisplay>
    )
}

export default Display
=======
import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
>>>>>>> final
