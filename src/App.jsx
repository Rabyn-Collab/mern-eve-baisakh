import User from "./components/User";
import { data, users } from "./data/data";

export default function App() {

  const persons = [
    'ram',
    'hari',
    'shyam',
    'sita'
  ];


  const objects = [
    { id: 1, name: 'ram', address: 'lalitpur' },
    { id: 2, name: 'sita', address: 'bhaktapur' },
    { id: 3, name: 'hari', address: 'kathmandu' },
  ];


  return (
    <div className='p-5'>


      {/* {users.map((user) => {
        return <User key={user.id} user={user} />

      })} */}

      <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {data.map((obj, index) => {
          return <img className="h-[200px] w-full object-cover  rounded-lg" key={index} src={obj.imageLink} alt="" />
        })}
      </div>






    </div>
  )
}


