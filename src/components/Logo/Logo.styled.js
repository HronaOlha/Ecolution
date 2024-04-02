import styled from "styled-components";

export const LogoContainer = styled.a`
  grid-area: logo;

  display: flex;
  align-items: end;
  gap: 4px;
`;

export const Img = styled.div`
  position: relative;

  & > :nth-child(2) {
    opacity: 1;
    transition: opacity 400ms ease;
  }

  &:hover > :nth-child(2) {
    opacity: 0;
  }
`;

export const ImgHover = styled.img`
  position: absolute;

  opacity: 0;
  transition: opacity 400ms ease;

  ${LogoContainer}:focus &, ${LogoContainer}:hover & {
    opacity: 1;
  }
`;
