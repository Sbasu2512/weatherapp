import Head from "next/head";
import React from "react";

export default function Dashboard() {
  return (
      <>
    <div className="flex" >
      <span>
          <p>Home</p>
      </span>
      <span> <p>To Do App</p> </span>
      <span> <p>Contacts</p> </span>
      <span> <p>Diary</p> </span>
    </div>
      </>
  );
}
