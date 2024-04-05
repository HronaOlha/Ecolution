import Emblem from "../../images/Emblem3x.png";
import Ecosolution from "../../images/Ecosolution3x.png";
import EcosolutionHover from "../../images/Ecosolution-hover3x.png";
import Slogan from "../../images/Slogan3x.png";

import { LogoContainer, LogoImgWrap, LogoHover, LogoImg } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoContainer href="#main" aria-label="logo">
      <img src={Emblem} width={31} alt="Ecosolution emblem" />
      <LogoImgWrap>
        <LogoHover src={EcosolutionHover} alt="" />
        <LogoImg src={Ecosolution} alt="Ecosolution" />
      </LogoImgWrap>
      <img src={Slogan} width={70} alt="Slogan 'Greenergy for life' " />
    </LogoContainer>
  );
};

export default Logo;
