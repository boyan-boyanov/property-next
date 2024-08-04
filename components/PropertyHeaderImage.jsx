import Image from "next/image";
import React from "react";

const PropertyHeaderImage = ({ image }) => {
  //check if image is from cloud or not
  const cloudImage = image.slice(0, 4) === "http";

  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={cloudImage ? `${image}` : `/images/properties/${image}`}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
