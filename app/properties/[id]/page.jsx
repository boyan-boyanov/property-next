"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = useParams();

  return (
    <>
      <div>PropertyPage</div>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="bg-blue-500 p-2"
      >
        Go home {id} or {params.id}
      </button>
    </>
  );
};

export default PropertyPage;
