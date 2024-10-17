import Image from "next/image";

const getUsers = async () => {
  try {
    const users = await fetch("http://localhost:8000/api/v1/users", {
      cache: 'no-cache',
    })
    const data = await users.json();
    return data.users;
  } catch (err) {
    console.log(err);
  }
}

type User = {
  id: number;
  name: string;
}

const Home = async () => {
  const data: User[] = await getUsers();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5">
      {data?.map((user) => (
        <p className="border border-gray-100 p-2 rounded-md text-3xl" key={user.id}>
          {user.name}
        </p>
      ))}
    </div>
  );
}

export default Home;
