import { NextPage } from "next/types";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

 return (
   <div>
     <button onClick={() => router.push("http://localhost:4000/api/auth/github")}>Continue with GitHub</button>
   </div>
 )
};

export default Home;
