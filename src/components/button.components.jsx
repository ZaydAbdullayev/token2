import "./index.scss";

export const Button1 = ({ icon, text, onclick, ...props }) => {
  return (
    <button class="btn btn-3 hover-border-2" onClick={onclick} {...props}>
      <span>
        {icon} {text}
      </span>
    </button>
  );
};

export const Button6 = ({ icon, text, onclick, ...props }) => {
  return (
    <button class="btn btn-5 hover-border-11" onClick={onclick} {...props}>
      <span>
        {icon} {text}
      </span>
    </button>
  );
};

export const Signal = () => {
  return <span class="signal"></span>;
};
