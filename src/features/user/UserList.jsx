import { IconButton, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "./userSlice";

export default function UserList() {

  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  return (
    <div>
      {users.map((user, index) => {
        return <div key={user.id} className="space-y-3">
          <Typography variant="h4">{user.username}</Typography>


          <p className="italic text-purple-900">{user.email}</p>
          <Typography color="red" variant="paragraph">Gender: {user.gender}</Typography>


          <div className="flex gap-5">
            {user.habits.map((habit) => {
              return <p className="text-teal-800" key={habit}>{habit}</p>
            })}
          </div>

          <div className="flex gap-5">
            <h1 className="text-gray-600">Country:  </h1>
            <p className="font-semibold">{user.country}</p>
          </div>
          <p>{user.detail}</p>

          <div className="space-x-5">
            <IconButton size="sm">
              <i className="fas fa-edit" />
            </IconButton>
            <IconButton
              onClick={() => dispatch(removeUser(index))}
              size="sm" color="pink">
              <i className="fas fa-trash" />
            </IconButton>

          </div>

        </div>
      })}


    </div>
  )
}
