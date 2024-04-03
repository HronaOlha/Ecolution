import Emblem from "../../images/Emblem.png";
import Ecosolution from "../../images/Ecosolution.png";
import EcosolutionHover from "../../images/Ecosolution-hover.png";
import Slogan from "../../images/Slogan.png";

import { LogoContainer, LogoImgWrap, LogoHover, LogoImg } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoContainer href="#main" aria-label="logo">
      <img src={Emblem} alt="Ecosolution emblem" />
      <LogoImgWrap>
        <LogoHover src={EcosolutionHover} alt="" />
        <LogoImg src={Ecosolution} alt="Ecosolution" />
      </LogoImgWrap>
      <img src={Slogan} alt="Slogan 'Greenergy for life' " />
    </LogoContainer>
  );
};

export default Logo;
