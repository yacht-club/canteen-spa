import styled from 'styled-components';

const ItemImageContainer = styled.button`
  position: relative;
  overflow: hidden;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;

  img {
    max-width: 100%;
  }
  span {
    left: 0;
    position: absolute;
    bottom: 20%;
    padding: 4px 16px;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    background-color: #f76424;
  }
`;

export default ItemImageContainer;
