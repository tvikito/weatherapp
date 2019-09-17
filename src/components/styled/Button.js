import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? '#f37021' : 'transparent'};
  border-radius: 4px;
  border: 2px solid #f37021;
  color: ${props => props.primary ? '#282c34' : '#f37021'};
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`

export default Button;