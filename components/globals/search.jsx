import React from "react";

export default function SearchBar() {

  const handleLocation = (e) => {
    const value = e.target.value;
    console.log(value)
  }

const handleSubmit = async (e) => {
  
}

  return (
    <div style={{padding:'5px 50px'}} >
      <input type="text" placeholder="search for a location" style={{ borderRadius: "20px", width: "600px" }} onChange={handleLocation} />
      <button type="submit" style={{ border: "none", background: "#fff" }} onClick={handleSubmit} >
        <img
          src="/icons/search.svg"
          style={{
            height: "25px",
            marginLeft: "-50px",
            padding: "2px",
          }}
          />
      </button>
          </div>
  );
}
