import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("parisa1996.ataollahi@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <section className="section" id="contact">
      <div className="contact-info">
        <h2>
          Find Me <i className="uil uil-corner-right-down"></i>
        </h2>
        <div className="email">
          <p>
            <i className="uil uil-envelope"></i> Email:
            parisa1996.ataollahi@gmail.com
          </p>
          <Tooltip
            PopperProps={{
              disablePortal: true
            }}
            open={showTooltip}
            onClose={() => setShowTooltip(false)}
            title="Copied!"
            TransitionComponent={Zoom}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement="bottom"
          >
            <IconButton onClick={copyToClipboard}>
              <MdContentCopy
                size={25}
                style={{ cursor: "pointer", color: "#151418" }}
              />
            </IconButton>
          </Tooltip>
        </div>
        <p>
          <i className="uil uil-phone"></i> 0937 672 62 45
        </p>
      </div>
    </section>
  );
}

export default Contact;
