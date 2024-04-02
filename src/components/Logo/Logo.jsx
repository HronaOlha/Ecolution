import Emblem from "../../images/Emblem.png";
import Ecosolution from "../../images/Ecosolution.png";
import EcosolutionHover from "../../images/Ecosolution-hover.png";
import Slogan from "../../images/Slogan.png";

import { LogoContainer, ImgHover, Img } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoContainer href="#main" aria-label="logo">
      <img src={Emblem} alt="" />
      <Img>
        <ImgHover src={EcosolutionHover} alt="" />
        <img src={Ecosolution} alt="" />
      </Img>
      <img src={Slogan} alt="" />
    </LogoContainer>
  );
};

export default Logo;
