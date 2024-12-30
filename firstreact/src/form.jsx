import React, { useState } from 'react';
import './form.css'; // Importing CSS for styling

const SlamBookForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    favoriteActor: '',
    favoriteColor: '',
    favoriteFruit: '',
    nickname: '',
    school: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Slam Book Submitted!\n\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="slam-book-container">
      <h1 className="title">My Slam Book</h1>
      <form onSubmit={handleSubmit} className="slam-book-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="favoriteActor">Favorite Actor:</label>
          <input
            type="text"
            id="favoriteActor"
            name="favoriteActor"
            value={formData.favoriteActor}
            onChange={handleChange}
            placeholder="Enter your favorite actor"
          />
        </div>

        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color:</label>
          <input
            type="text"
            id="favoriteColor"
            name="favoriteColor"
            value={formData.favoriteColor}
            onChange={handleChange}
            placeholder="Enter your favorite color"
          />
        </div>

        <div className="form-group">
          <label htmlFor="favoriteFruit">Favorite Fruit:</label>
          <input
            type="text"
            id="favoriteFruit"
            name="favoriteFruit"
            value={formData.favoriteFruit}
            onChange={handleChange}
            placeholder="Enter your favorite fruit"
          />
        </div>

        <div className="form-group">
          <label htmlFor="nickname">Your Nickname:</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="Enter your nickname"
          />
        </div>

        <div className="form-group">
          <label htmlFor="school">School:</label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleChange}
            placeholder="Enter your school"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SlamBookForm;
