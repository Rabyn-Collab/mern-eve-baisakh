'use server';
import axios from "axios";
import { revalidatePath } from "next/cache.js";



export async function addEmployee(formData) {
  try {

    await axios.post('https://60f3af443cb0870017a8a007.mockapi.io/employees', {
      fullname: formData.get('fullname'),
      position: formData.get('position'),
      age: formData.get('age')
    });


    revalidatePath('/');
    return { success: true, message: 'Employee added successfully' };

  } catch (err) {
    return { success: false, message: err.message };

  }

}

export async function editEmployee({ id, fullname, position, age }) {
  try {

    await axios.put(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`, {
      fullname: fullname,
      position: position,
      age: age
    });
    revalidatePath('/');
    return { success: true, message: 'Employee updated successfully' };

  } catch (err) {
    return { success: false, message: err.message };

  }



}


export async function removeEmployee(id) {
  try {

    await axios.delete(`https://60f3af443cb0870017a8a007.mockapi.io/employees/${id}`);

    return { success: true, message: 'Employee updated successfully' };

  } catch (err) {
    return { success: false, message: err.message };

  }

}