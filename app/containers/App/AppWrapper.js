import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-height: inherit;
  // flex business
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
`;

export default AppWrapper;
