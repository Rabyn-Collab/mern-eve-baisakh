'use client';
import { toast } from 'react-hot-toast';

import React from 'react'
import { Button } from './ui/button.jsx'
import { removeEmployee } from '../lib/action.js';

export default function RemoveEmployee({ id }) {

  const handleRemove = async () => {
    try {
      const res = await removeEmployee(id);
      toast.success(res.message);
    } catch (err) {
      toast.error(err.message);
    }
  }
  return (
    <div>

      <Button onClick={handleRemove} size={"sm"}>Remove</Button>

    </div>
  )
}
