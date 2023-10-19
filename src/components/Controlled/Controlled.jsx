import React, { useState } from 'react';
// import "./shopform.css";

export default function ShopForm() {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Name: ${formData.name}, Description: ${formData.description})
    alert('Name and Description saved')
    // Handle form submission here
    console.log('Name and Description saved:', formData);
    setFormData({ name: '', description: '' });
  };

  const handleCancel = () => {
    // Handle cancel action here
    alert('registration Cancled')
    console.log('Form canceled');
    setFormData({ name: '', description: '' });
  };

  return (
    <div>
      {/* <h1>New Shop</h1> */}
      <button className='App' type="button">New Shop</button>
      <form onSubmit={handleSubmit}>
        <div>
          <textPath htmlFor="name">Name:</textPath>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <div>

          </div>
        </div>
        <div className='AppStyle'>
          <button type="submit" onClick={handleSubmit}>SUBMIT</button>
          <button type="button" onClick={handleCancel}>CANCEL</button>
        </div>
      </form>
    </div>
  );
}

// export default ShopForm;





