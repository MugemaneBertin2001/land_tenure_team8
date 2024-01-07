import React from 'react'
import { StaticImageData } from "next/image"
import { Image } from 'next/dist/client/image-component'
type CardProps = {
    imageSource: string | StaticImageData;
    header: string;
    description: string;
    imageName:string
  };


  const FeatureCard: React.FC<CardProps> = ({ imageSource, header, description, imageName }) => {
    return (
      <div className="md:w-1/4 flex rounded-lg p-6 mx-5 mb-10  border">
        <div className="flex flex-col justify-between w-full">
          <Image
            src={imageSource}
            alt={imageName}
            className="w-40 h-40 rounded-md mb-4 mx-auto"
          />
          <h2 className="text-md font-bold mb-2 text-pink-500 text-center">{header}</h2>
          <p className="text-white text-center">{description}</p>
        </div>
      </div>


    )
  }
  



export default FeatureCard