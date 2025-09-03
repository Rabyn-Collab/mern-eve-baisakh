import axios from "axios";
import dbConnect from "../../../lib/mongodb";
import Employee from "../../../models/Employee";



export async function GET(request, { parmas }) {
  await dbConnect();

  // console.log(await request.json());

  // const searchParams = request.nextUrl.searchParams;
  // console.log(searchParams.get('a'));

  try {
    // const employees = await Employee.find({});
    const response = await axios.get('https://60f3af443cb0870017a8a007.mockapi.io/employees');
    return Response.json(response.data, { status: 200 });
  } catch (err) {
    throw new Error(err.message);
  }

  // return Response.json({ data: 'hello' })
}


export async function POST(request) {

  try {
    await dbConnect();

    const response = await Employee.create({
      fullname: 'John Doe',
      age: 90,
      position: 'Manager',
    });
    return Response.json({ message: 'Employee added successfully' });

  } catch (er) {

  }

}