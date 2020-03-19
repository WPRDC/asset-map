import styled from 'styled-components';

const SidePane = styled.div`
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 200px;
  -ms-flex: 0 1 200px;
  flex: 0 1 200px;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;

  display: flex;
  flex-direction: column;
`;

export default SidePane;
