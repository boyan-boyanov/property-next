import Link from "next/link";
import React from "react";

const PropertiesPage = () => {
  console.log("server component");
  return (
    <div>
      <h1 className="text-3xl">Properties</h1>
      <Link href="/">Go home</Link>
      <Link href="/properties/123">Go Prperty</Link>
    </div>
  );
};

export default PropertiesPage;
