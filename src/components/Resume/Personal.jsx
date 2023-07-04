import React, { useState } from 'react';
import { Box  } from "@mui/material";

const Personal= ({onDataChange}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    onDataChange({ name: newName, email }); 
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    onDataChange({ name, email: newEmail });
  };

  return (
    <form>
    <label>
      Name:
      <input type="text" value={name} onChange={handleNameChange} />
    </label>
    <label>
      Email:
      <input type="email" value={email} onChange={handleEmailChange} />
    </label>
  </form>
  );
};

export default Personal;