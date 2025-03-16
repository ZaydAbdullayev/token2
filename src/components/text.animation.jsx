import "./index.scss";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export const FlotiongText = ({ text, ...props }) => {
  return (
    <h2 data-splitting className="headline headline--float" {...props}>
      {text}
    </h2>
  );
};

export const JoggingText = ({ text, ...props }) => {
  return (
    <h2 data-splitting className="headline headline--jog" {...props}>
      {text}
    </h2>
  );
};

export const FlippingText = ({ text, ...props }) => {
  return (
    <h2 data-splitting className="headline headline--flip" {...props}>
      {text}
    </h2>
  );
};

export const FallingText = ({ text, ...props }) => {
  return (
    <h2 data-splitting className="headline headline--fall" {...props}>
      {text}
    </h2>
  );
};

export const BreezingText = ({ text, ...props }) => {
  return (
    <span data-splitting className="headline headline--breeze" {...props}>
      {text}
    </span>
  );
};
