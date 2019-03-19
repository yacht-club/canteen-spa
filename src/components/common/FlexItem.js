import styled from 'styled-components';

const FlexItem = styled.div`
  margin: 0 50px 32px 0;
  width: calc(33% - 10 * 5px);

  @media (max-width: 800px) and (min-width: 500px) {
    margin: 0 16px 24px;
    width: calc(50% - 2 * 16px);
  }

  @media (max-width: 500px) {
    margin: 0 16px 16px;
    width: calc(100% - 2 * 16px);
  }
`;

export default FlexItem;
