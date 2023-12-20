import React from 'react'
import FeatureCard from './FeatureCard'
import securityImage from '@/Images/Secutity.png'
import decentralizationImage from '../Images/Frame 59557.png'
import communityImage from '@/Images/fi-sr-user.png'

const features = [
    {
        header:'Smart Contracts',
        description:'Landvault integrates blockchain technology for secure and tamper-proof land ownership records and transactions. with transparency, and decentralization.',
        imageSrc:securityImage,
        imageName:'security'
    },
    {
        header:'Decentralized Data Management',
        description:'Landvault integrates blockchain technology for secure and tamper-proof land ownership records and transactions. with transparency, and decentralization.',
        imageName:'decentalization',
        imageSrc:communityImage,
    },
    {
        header:'Web3 Wallet Integration',
        description:'We provide an option for users to connect their Web3 wallets (e.g. MetaMask, Trust Wallet) directly to the platform for managing their land records and transactions securely.',
        imageName:'community',
        imageSrc:decentralizationImage,
    },
  {
    header: 'Smart Contracts',
    description: 'Landvault integrates blockchain technology for secure and tamper-proof land ownership records and transactions. with transparency, and decentralization.',
    imageSrc: securityImage,
    imageName: 'security'
  },
  {
    header: 'Decentralized Data Management',
    description: 'Landvault integrates blockchain technology for secure and tamper-proof land ownership records and transactions. with transparency, and decentralization.',
    imageName: 'decentalization',
    imageSrc: communityImage,
  },
  {
    header: 'Web3 Wallet Integration',
    description: 'We provide an option for users to connect their Web3 wallets (e.g. MetaMask, Trust Wallet) directly to the platform for managing their land records and transactions securely.',
    imageName: 'community',
    imageSrc: decentralizationImage,
  },
]

function FeaturesSection() {
  return (
    <div className='py-6 text-center' id='features'>
  <div>
    <h1 className='text-3xl text-white'>
      Features
    </h1>
    <p className='text-white my-10'>
      All packed with amazing features to make your land ownership and transaction experience pleasant
    </p>
  </div>
  <div className="flex flex-wrap justify-center ">
    {features.map((feature, index) => (
      <FeatureCard
        key={index}
        header={feature.header}
        description={feature.description}
        imageSource={feature.imageSrc}
        imageName={feature.imageName}
      />
    ))}
  </div>
  <div className='px-4 md:px-8 py-6'>
    <button className="bg-transparent border-2 text-white font-bold py-2 px-4 rounded">
      Learn More
    </button>
  </div>
</div>

  )
}

export default FeaturesSection