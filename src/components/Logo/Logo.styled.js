import styled from "styled-components";

export const LogoContainer = styled.a`
  grid-area: logo;

  display: flex;
  align-items: end;
  gap: 4px;
`;

export const LogoImgWrap = styled.div`
  position: relative;
`;

export const LogoImg = styled.img`
  opacity: 1;
  transition: opacity 400ms ease;

  ${LogoContainer}:focus &, ${LogoContainer}:hover & {
    opacity: 0;
  }
`;

export const LogoHover = styled.img`
  position: absolute;

  opacity: 0;
  transition: opacity 400ms ease;

  ${LogoContainer}:focus &, ${LogoContainer}:hover & {
    opacity: 1;
  }
`;
