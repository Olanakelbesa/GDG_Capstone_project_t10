import React, { useState } from "react";

function Form_gdg() {

  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const [notification, setNotification] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),  //coverting the JSON data to string
      });

      if (response.ok) {
        setNotification({ message: "Comment submitted successfully!", type: "success" });
        setFormData({
          comment: "",
          name: "",
          email: "",
          website: "",
          saveInfo: false,
        });
      } else {
        setNotification({ message: "Failed to submit the comment. Please try again.", type: "error" });
      }
    } catch (error) {
      console.error("Error submitting the comment:", error);
      setNotification({ message: "An error occurred. Please try again.", type: "error" });
    }
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 5000);
  };

  return (
    <div id="form-section" className="p-4 rounded-lg shadow-lg justify-start">
      <div className="mb-12 mr-0">
        <h1 className="font-bold text-4xl m-2">Leave a Comment</h1>
        <p className="m-2">Your email address will not be published. Required fields are marked *</p>
      </div>

      {/* Notification Box */}
      {notification.message && (
        <div
          className={`p-4 mb-4 rounded ${
            notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full">
        <label htmlFor="comment">Comment:</label>
        <br />
        <textarea
          id="comment"
          name="comment"
          required
          className="w-full border border-gray-300 h-32 mb-3 rounded resize-none"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>
        <br />

        <label htmlFor="name">Name*</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className="w-full h-10 mb-3 border-gray-300 border"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="email">Email*</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="w-full h-10 mb-3 border-gray-300 border"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="website">Website (optional)</label>
        <br />
        <input
          type="url"
          id="website"
          name="website"
          className="w-full h-10 mb-3 border-gray-300 border"
          value={formData.website}
          onChange={handleChange}
        />
        <br />

        <input
          type="checkbox"
          id="saveInfo"
          name="saveInfo"
          className="my-5 hover:cursor-pointer"
          checked={formData.saveInfo}
          onChange={handleChange}
        />
        <label htmlFor="saveInfo" className="m-3">
          Save my name, email, and website in this browser to the next time I comment.
        </label>
        <br />

        <input
          type="submit"
          className="bg-black text-white m-3 ml-0 rounded-3xl w-40 h-10 hover:bg-gray-900 hover:cursor-pointer"
          value="Post Comment" onClick={scrollToForm}
        />
      </form>
    </div>
  );
}

export default Form_gdg;