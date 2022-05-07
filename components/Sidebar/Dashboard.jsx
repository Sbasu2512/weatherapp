import Head from "next/head";
import React from "react";

export default function Dashboard() {
  return (
      <>
    <div className="flex" >
      <span>
          <a href='/'>Home</a>
      </span>
      <span> <a href='/todo'>To Do App</a> </span>
      <span> <p>Contacts</p> </span>
      <span> <p>Diary</p> </span>
    </div>
      </>
  );
}
