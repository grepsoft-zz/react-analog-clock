import styled from "styled-components";
import { Frame } from "./frame";
import { Markings } from "./markings";
import { Second } from "./second";
import { Hour } from "./hour";
import { Minute } from "./minute";
import Emitter from "../Context/Emitter";

const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Clock = ({ dimens, viewBox }) => {
  return (
    <Container>
      <Markings />
      <Emitter>
        <svg viewBox={viewBox} width={dimens.w} height={dimens.h}>
          <Hour dimens={dimens} viewBox={viewBox} />
          <Minute dimens={dimens} viewBox={viewBox} />
          <Second dimens={dimens} viewBox={viewBox} />
          <Frame dimens={dimens} viewBox={viewBox} />
        </svg>
      </Emitter>
    </Container>
  );
};
