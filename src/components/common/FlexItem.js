import styled from 'styled-components';

const FlexItem = styled.div`
  margin: 10px 10px;
  width: calc(33% - 10 * 2px);

  @media (max-width: 800px) and (min-width: 500px) {
    width: calc(50% - 3 * 2px);
  }

  @media (max-width: 500px) {
    width: calc(100% - 2 * 2px);
  }
`;

export default FlexItem;
