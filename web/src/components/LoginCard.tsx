import { ButtonEntity } from "../entities/ButtonEntity";

export const LoginCard = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white w-96 h-auto rounded-lg pt-8 pb-8 px-8 shadow-lg flex flex-col items-center">
        <label className="font-semibold text-3xl mb-3">Login</label>
        <p className="text-center mb-4 text-md text-gray-500">
          Please select a way to continue.
        </p>

        <LoginButton color="black">Continue With GitHub</LoginButton>
        <LoginButton color="blue">Continue With Google</LoginButton>
      </div>
    </div>
  );
};

const colorClassnames = {
    black:
      "bg-gray-800 hover:bg-gray-800/90",
    blue:
      "bg-blue-500 hover:bg-blue-500/90",
  };

interface LoginButtonProps extends ButtonEntity {
   color?: keyof typeof colorClassnames;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, color="black" }) => {
    return (
      <button className={`w-full h-12 rounded-lg ${colorClassnames[color]} text-white font-medium transition mb-4`}>
        {children}
      </button>
    )
}