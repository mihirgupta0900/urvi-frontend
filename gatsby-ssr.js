import MenuContext from "./src/components/MenuContext";
import React from 'react'

export const wrapRootElement = MenuContext;

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
    setHeadComponents([
    <script
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="urvijain"
      data-description="Support me on Buy me a coffee!"
      data-message="Hey there, thanks for dropping by! You can now treat me to a fragrant coffee :D"
      data-color="#FFDD00"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="18"
    ></script>,
  ]);
};
