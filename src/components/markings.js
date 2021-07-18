import { Fragment } from "react";
import styled, { css } from "styled-components";
import { RADIUS } from "../constants";

const DialMarkings = styled.div`
  position: absolute;
  width: 16px;
  border-radius: 3px;
  background: #fff;
  transform: translate(${(p) => `${p.x}px`}, ${(p) => `${p.y}px`})
    rotate(${(p) => `${p.angle}deg`});

  ${({ angle }) => {
    switch (angle) {
      case 0:
      case 90:
        return css`
          width: 30px;
          height: 4px;
        `;
      default:
        return css`
          height: 2px;
        `;
    }
  }}
`;

const MarkingsText = styled.h4`
  position: absolute;
  color: #fff;
  font-size: 1.5rem;
  transform: translate(${(p) => `${p.x}px`}, ${(p) => `${p.y}px`})
    rotate(${(p) => `${p.angle}deg`});
`;

export const Markings = () => {
  const dots = [0, 30, 60, 90].map((deg) => {
    const x = Math.floor(RADIUS * Math.cos((deg * Math.PI) / 180));
    const y = Math.floor(RADIUS * Math.sin((deg * Math.PI) / 180));
    return (
      <Fragment key={deg}>
        <DialMarkings x={x} y={y} angle={deg} />
        <DialMarkings x={x} y={-y} angle={-deg} />
        <DialMarkings x={-x} y={y} angle={-deg} />
        <DialMarkings x={-x} y={-y} angle={deg} />
      </Fragment>
    );
  });
  return (
    <>
      {dots}
      <MarkingsText x={0} y={-RADIUS - 40} angle={0}>
        12
      </MarkingsText>
      <MarkingsText x={RADIUS + 40} y={0} angle={0}>
        3
      </MarkingsText>
      <MarkingsText x={0} y={RADIUS + 40} angle={0}>
        6
      </MarkingsText>
      <MarkingsText x={-RADIUS - 40} y={0} angle={0}>
        9
      </MarkingsText>
    </>
  );
};
