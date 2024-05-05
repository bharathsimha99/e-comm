import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews(99)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An ecommerce platform contains software for
          building and running an online store, and performing
          other retail tasks such as marketing, inventory management,
          and payment processing. The best ecommerce platforms allow
          merchants to design unique websites and manage their businesses as they grow and evolve</p>
        <p>Ecommerce is a method of buying and selling goods
          and services online. The definition of ecommerce business can also
          include tactics like affiliate marketing. You can use ecommerce
          channels such as your own website, an established selling website like Amazon,
          or social media to drive online sales</p>
      </div>
    </div>
  )
}

export default DescriptionBox
