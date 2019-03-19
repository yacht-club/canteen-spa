import React from 'react';
import styled from 'styled-components';

const CartTable = ({ className, items }) => (
  <div className={className}>
    <table>
      <tbody>
        <tr>
          <th width="99%">Блюдо</th>
          <th>Цена</th>
        </tr>
        {items.map((item, index) => (
          <tr key={String(index)}>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const StyledCartTable = styled(CartTable)`
  max-width: 400px;
  width: 100%;
  border-spacing: 0 1em;

  th {
    text-align: left;
    font-size: 1.1rem;
  }

  tr {
    line-height: 30px;
  }

  margin-bottom: 20px;
`;

export default StyledCartTable;
