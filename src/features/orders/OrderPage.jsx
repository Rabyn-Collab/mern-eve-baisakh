import { useNavigate } from "react-router";
import { useGetOrdersQuery } from "./orderApi.js"
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["OrderId", "TotalAmount", "View More"];



export default function OrderPage({ user }) {
  const nav = useNavigate();

  const { isLoading, error, data } = useGetOrdersQuery(user.token);
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data}</h1>


  return (
    <div>
      {data &&
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(({ _id, totalAmount, }, index) => (
                <tr key={_id} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {_id}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      Rs.{totalAmount}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Button
                      onClick={() => nav(`/order-detail/${_id}`)}
                      variant="text" size="sm">View More</Button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      }

    </div>
  )
}


