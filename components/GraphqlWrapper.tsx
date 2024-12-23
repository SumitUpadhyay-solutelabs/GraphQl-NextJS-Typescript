import { useQuery, useMutation, gql } from "@apollo/client";
import { UserCard } from "./UserCard";
import { userFormData } from "@/constants/form";
import { useState } from "react";

export const GraphqlWrapper = () => {
  const [newUser, setNewUser] = useState<{ name: string; age: string }>({
    name: "",
    age: "",
  });
  const GET_USERS = gql`
    query GetUsers {
      getUsers {
        id
        age
        name
        isMarried
      }
    }
  `;
  const CREATE_USER = gql`
    mutation createUser($name: String!, $age: Int!, $isMarried: Boolean!) {
      createUser(name: $name, age: $age, isMarried: $isMarried) {
        id
        name
        age
        isMarried
      }
    }
  `;
  const { data, loading, error, refetch } = useQuery(GET_USERS);
  const [createUser, { error: createUserError }] = useMutation(CREATE_USER);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    setNewUser({ ...newUser, [name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //console.log(newUser);
      createUser({
        variables: {
          name: newUser.name,
          age: Number(newUser.age),
          isMarried: true,
        },
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div>GraphQL Fetching</div>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl">Post Request using GraphQL</h2>
            {userFormData?.map((item, index) => (
              <input
                key={index}
                type={item.inputType}
                placeholder={item.placeholder}
                className={item.classes}
                name={item.name}
                onChange={(e) => handleChange(e, item.name)}
                required
              />
            ))}
          </form>
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {createUserError && (
          <div>Error Ocured in creating user: {createUserError.message}</div>
        )}
        <div className="grid grid-cols-2 gap-4">
          {data?.getUsers.map((user: any) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
};
