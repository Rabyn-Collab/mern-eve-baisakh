import axios from "axios";



export async function GET(request, { parmas }) {
  // console.log(await request.json());

  // const searchParams = request.nextUrl.searchParams;
  // console.log(searchParams.get('a'));

  try {
    const response = await axios.get('https://60f3af443cb0870017a8a007.mockapi.io/employees');
    return Response.json(response.data);
  } catch (err) {
    throw new Error(err.message);
  }

  // return Response.json({ data: 'hello' })
}


export async function POST(request) {

  try {

  } catch (er) {

  }

}