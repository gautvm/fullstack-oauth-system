const colorClassnames = {
  blue: "border-blue-500 bg-blue-500 hover:bg-blue-600",
  black: "border-gray-800 bg-gray-800 hover:bg-gray-900",
};

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  color?: keyof typeof colorClassnames;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  color = "black",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`font-semibold border ${colorClassnames[color]}  text-white rounded-lg px-3 py-1 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
