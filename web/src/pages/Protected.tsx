import { Navbar } from "../components/Navbar";

export const Protected = () => {
  return (
    <div>
      <Navbar />
      <p className="text-center p-5">
        You can only see this page if you are authenticated
      </p>
    </div>
  );
};
