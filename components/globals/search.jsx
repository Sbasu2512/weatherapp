import React,{useState} from "react";

export default function SearchBar(props) {

  const {handleLocation} = props ;

const [location, setLocation] = useState('')
  
  const handleLocationChange = (e) => {
    const value = e.target.value;
    // console.log(value)
    setLocation(value)
  }

const handleSubmit = (e) => {
  handleLocation(location)
}

  return (
    <div style={{padding:'5px 50px'}} >
      <input type="text" placeholder="search for a location" className="basic font-15" style={{ borderRadius: "20px", width: "600px", padding:'5px', margin:'5px' }} onChange={handleLocationChange} />
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
