<<<<<<< e00d4a96ff8409b03c536dfd8cc24d47937feea5
import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${(props) => props.color}, 0.8);
=======
import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  /* border-radius: 5px; */
  background: rgba(${props => props.color}, 0.8);
>>>>>>> final
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-bottom-color: rgba(${props => props.color}, 0.1);
  border-right-color: rgba(${props => props.color}, 1);
  border-top-color: rgba(${props => props.color}, 1);
  border-left-color: rgba(${props => props.color}, 0.3);
`;
