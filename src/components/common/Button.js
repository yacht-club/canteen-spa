import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  outline: none;

  padding: ${props => (props.large ? '12px 60px' : '8px 30px')};
  color: #fff;
  background-color: #03b234;
  font-size: ${props => (props.large ? '1.2rem' : '0.8rem')};
  font-weight: 600;
  border-radius: 200px;

  &:hover,
  &:focus,
  &:active {
    background-color: #00992a;
  }
`;

export default StyledButton;
