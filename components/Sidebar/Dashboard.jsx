import Head from "next/head";
import React from "react";

export default function Dashboard() {
  return (
      <>
    <div className="flex" >
      <span>
          <a href='/'>Home</a>
      </span>
      <span> <a href='/todo'>Tasks</a> </span>
    </div>
      </>
  );
}
