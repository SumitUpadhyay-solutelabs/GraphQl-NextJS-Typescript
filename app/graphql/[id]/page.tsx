import { UserCard } from "@/components/UserCard";
import { GetServerSideProps } from "next";
import Image from "next/image";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const userId = (await params).id;

  const data = await fetch("http://localhost:3000/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query getUser($getUserById: ID!) {
   getUserById(id: $getUserById) {
    id
    age
    name
    isMarried
   }
}`,
      variables: {
        getUserById: userId,
      },
    }),
  });
  const res = await data.json();
  //console.log(res);
  return (
    <>
      <div>Graphql Users detail page</div>
      <div>
        <UserCard {...res.data.getUserById} />
      </div>
    </>
  );
}
