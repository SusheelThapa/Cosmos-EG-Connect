import { getPolicy } from "../api/policy";
import PetitionCard from "./common/PetitionCard";
import { useEffect, useState } from "react";

const PolicyContent = ({ isLogin }) => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    getPolicy().then((response) => {
      console.log(response);
      setPolicies(response);
    });
    return () => {};
  }, []);

  return (
    <div className="mx-48 my-10">
      <div className="grid grid-cols-2 gap-4">
        {policies.map((policy) => {
          return (
            <PetitionCard key={policy.id} isLogin={isLogin} detail={policy} />
          );
        })}
      </div>
    </div>
  );
};

export default PolicyContent;
