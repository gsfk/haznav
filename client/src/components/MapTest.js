import React, { useRef } from "react";
import styled from "styled-components";
import { DisplayMapClass } from "./DisplayMapClass";
import DisplayMap from "./DisplayMap";

const MapTest = () => {
  const map = { height: 500, width: 1000 };

  return (
    <Wrapper>
      <DisplayMap height={map.height} width={map.width} />
    </Wrapper>
  );
  // given TO and FROM data, call routes API
  // call backend for relevant bike crashes
  // draw map accordingly
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default MapTest;
