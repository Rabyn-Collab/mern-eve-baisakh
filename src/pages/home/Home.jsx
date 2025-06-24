import { faker } from "@faker-js/faker";
import { Button } from "@material-tailwind/react";
import { useState } from "react"
import { ProfileCard } from "../../components/ProfileCard";





export default function Home() {

  const [data, setData] = useState([]);

  const randomUser = {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };

  const handleAdd = () => {
    setData((prev) => [...prev, randomUser])
  }
  console.log(data);

  return (
    <div>

      <Button onClick={handleAdd}>Add Data</Button>
      {data.map((user) => {
        return <ProfileCard key={user.userId} user={user} />;
      })}

    </div>
  )
}
