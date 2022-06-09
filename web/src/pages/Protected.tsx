import { Navbar } from "../components/Navbar";

export const Protected = () => {
  return (
    <div>
      <Navbar />
      <p className="text-center">
        You can only see this page if you are authenticated
      </p>
    </div>
  );
};
