import { useAuthContext } from "../contexts/AuthContext";
import { Button } from "./Button";

export const LoginCard = () => {
  const { login } = useAuthContext();

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white w-96 h-auto rounded-lg pt-8 pb-8 px-8 shadow-lg flex flex-col items-center">
        <label className="font-semibold text-3xl mb-3">Login</label>
        <p className="text-center mb-4 text-md text-gray-500">
          Please select a way to continue.
        </p>

        <Button
          className="w-full h-12"
          color="black"
          onClick={() => login("github")}
        >
          Continue With GitHub
        </Button>
        <Button
          className="w-full h-12"
          color="blue"
          onClick={() => login("google")}
        >
          Continue With Google
        </Button>
      </div>
    </div>
  );
};
