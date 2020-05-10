<<<<<<< e00d4a96ff8409b03c536dfd8cc24d47937feea5
import React from "react";
import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../tetrominos'
const Cell = ({type}) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />
};

export default Cell;
=======
import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

// React.memo makes sure we only re-render the changed cells
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log('rerender cell')}
  </StyledCell>
);

export default React.memo(Cell);
>>>>>>> final
