import styled from 'styled-components';

function Copyright() {
    return (
      <ProducingInformation>
          Copyright © 14fret 늙은이들<br/>
          ver 1.0.0<br/>
          Updated 2022.03.04
      </ProducingInformation>
  );
}

const ProducingInformation = styled.div`
  min-height: 30px;
  align-items:center;
  margin: 0px;
  text-decoration: none;
  color: black;
  font-size: 13px;
  text-align:center;
`
export default Copyright;
