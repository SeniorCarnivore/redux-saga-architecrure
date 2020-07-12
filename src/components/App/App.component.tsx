import React, { memo } from "react";
import { ButtonContainer } from "../../containers/Button/button.container";
import { ItemsContainer } from "../../containers/Items/Items.container";
import { PreloaderContainer } from "../../containers/Preloader/Preloader.container";

export const App = memo(() => (
  <div>
    <ButtonContainer />
    <PreloaderContainer />
    <ItemsContainer />
  </div>
));
