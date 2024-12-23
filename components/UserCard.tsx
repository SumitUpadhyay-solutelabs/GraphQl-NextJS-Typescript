import { userProps } from "@/constants";

export const UserCard = ({ id, name, age, isMarried }: userProps) => {
  return (
    <>
      <div key={id} className="p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{age} years old</p>
        <div className="text-center">
          <span className={`text-${isMarried ? "green-500" : "red-500"}-500`}>
            {isMarried ? "👫 Married" : "🚫 Not Married"}
          </span>
        </div>
      </div>
    </>
  );
};
