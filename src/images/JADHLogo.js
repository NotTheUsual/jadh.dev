import React from "react"
import "./JADHLogo.css"

const JADHLogo = ({ onClick, className }) => (
  <svg
    onClick={onClick}
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 415 415"
    className={className}
  >
    <defs>
      <style>{".cls-1{fill:#003;}.cls-2{fill:#fff;}"}</style>
    </defs>
    <title>JADHLogo</title>
    <rect className="jadh-logo__bg" x="-14" y="-14" width="443" height="443" />
    <polygon
      className="jadh-logo__letter"
      points="96.61 65 96.61 96.61 159.83 96.61 159.83 159.83 96.61 159.83 96.61 144.78 65 144.78 65 191.44 191.44 191.44 191.44 65 96.61 65"
    />
    <path
      className="jadh-logo__letter"
      d="M224.56,65V191.44h31.61V159.83h63.22v31.61H351V65Zm31.61,63.22V96.61h63.22v31.61Z"
    />
    <path
      className="jadh-logo__letter"
      d="M65,224.56V351H174.78l16.66-16.72V224.56Zm94.83,94.83H96.61V256.17h63.22Z"
    />
    <polygon
      className="jadh-logo__letter"
      points="319.39 224.56 319.39 271.22 256.17 271.22 256.17 224.56 224.56 224.56 224.56 351 256.17 351 256.17 302.83 319.39 302.83 319.39 351 351 351 351 224.56 319.39 224.56"
    />
  </svg>
)

export default JADHLogo
