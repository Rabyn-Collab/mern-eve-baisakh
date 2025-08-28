'use server';
import axios from "axios";



export async function addEmployee(formData) {
  try {

    await axios.post('https://60f3af443cb0870017a8a007.mockapi.io/employees', {
      fullname: formData.get('fullname'),
      position: formData.get('position'),
      age: formData.get('age')
    });



    return { success: true, message: 'Employee added successfully' };

  } catch (err) {
    return { success: false, message: err.message };

  }

}