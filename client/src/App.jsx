import  { useState } from "react";
import axios from "axios";
import "./index.css"; // CSS file for styling

const App = () => {
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/query", {
        name,
        query,
      });
      alert("Query submitted successfully!");
      setName("");
      setQuery("");
    } catch (error) {
      console.error("Error submitting query:", error);
      alert("Failed to submit query.");
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Your Query</h2>
      {/* onSubmit={handleSubmit} */}
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Your Query:</label>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;