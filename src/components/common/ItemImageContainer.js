import styled from 'styled-components';

const ItemImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  img {
    background: 50% 50% no-repeat;
    height: 300px;
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
