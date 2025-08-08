import { NavLink, useNavigate } from "react-router";
import { baseUrl } from "../../app/apiUrl.js";
import { useGetProductsQuery } from "../product/productApi.js"

import { Avatar, Button, Card, IconButton, Typography } from "@material-tailwind/react";
import RemoveProduct from "./RemoveProduct.jsx";

const TABLE_HEAD = ["Name", "Price", "Product_Id", "Edit", "Delete"];




export default function AdminPage() {
  const nav = useNavigate();
  const { isLoading, error, data } = useGetProductsQuery();
  if (isLoading) return <h1>Loading....</h1>
  if (error) return <h1>{error.data}</h1>


  return (
    <div>
      <div className="flex mb-4 justify-end">
        <NavLink to={'/product-add'}>
          <Button color="purple">Add Product</Button>
        </NavLink>

      </div>

      {data && <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
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
            {data.products.map(({ _id, title, image, price }, index) => {
              const isLast = index === data.products.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <Avatar src={`${baseUrl}/${image}`} />
                      &nbsp;&nbsp;
                      {title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Rs. {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {_id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <IconButton
                      onClick={() => nav(`/product-update/${_id}`)}
                      size="sm" color="green">
                      <i className="fas fa-edit" />
                    </IconButton>
                  </td>
                  <td className={classes}>
                    <RemoveProduct id={_id} />

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>}
    </div>
  )
}
