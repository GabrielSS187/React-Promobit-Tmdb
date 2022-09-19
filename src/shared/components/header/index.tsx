import tmdbImage from "D:/Repositorios Remotos/React-Promobit/src/shared/assets/imgs/Vector@2x.png"

import { Header_Styles, Img_Styles } from "./styles"

export function Header () {
  return (
    <Header_Styles>
      <Img_Styles src={tmdbImage} alt="tmdb-logo" />
    </Header_Styles>
  );
}; 