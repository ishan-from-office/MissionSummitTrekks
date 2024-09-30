import React from 'react'
import { Container } from 'react-bootstrap'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Link } from 'react-router-dom'




const Company = () => {
  return (
    <>
      <div className="company-detail">
        <Container>
          <h1 className='className="text-center mb-4 fw-light"' >
            <span className=''  >Mission Summit Treks And Expedition</span> - Best Travel
            <br /> and Trekking Agency in Nepal
          </h1>
          <p>
            Mission Summit Treks and Expedition, a distinguished trekking and travel company nestled in the heart of Kathmandu, Nepal, we have been crafting unforgettable journeys since 2019. Amidst the breathtaking landscapes of Nepal, our dedicated team orchestrates an array of experiences, from trekking, hiking, and cultural tours to charity treks and white-water rafting.

            Immerse yourself in the essence of Nepal's central Himalayan beauty, a symphony of diversity in people, culture, and history. Our commitment to your safety and comfort ensures that your adventure in this remarkable nation is nothing short of extraordinary.

            As an officially licensed company, we offer the Best Price Guarantee, local expertise, group discounts, and eco-friendly travel. Discover Nepal's treasures with Mission Summit, where your dream finds its destination amidst the towering peaks, serene rivers, and vibrant culture of this remarkable land of beauty and peace...
          </p>
          <p>
            As you embark on your journey with us, you'll find yourself immersed in the essence of Nepal's central Himalayan beauty – a captivating blend of diversity in people, culture, and history. Whether you seek the thrill of trekking through rugged terrain, the serenity of cultural tours, the adrenaline rush of white-water rafting, or the joy of giving through charity treks, we are here to make it all possible.

            Our promise is to ensure your safety and comfort while you explore this remarkable nation, from the towering peaks to the serene rivers, all enriched by the vivid tapestry of our culture. As an officially licensed company, we offer the Best Price Guarantee, local expertise, group discounts, and eco-friendly travel. Discover Nepal's treasures with Mission Summit, where your dream becomes reality amidst this remarkable land.
          </p>

          <div className="com-btn text-center mt-5">
            <Link to={'/blog'} >
              <button className="vew-more">
                Explore Our Blog
                <ArrowRightAltIcon className="ar-icon right-arr" />
              </button>
            </Link>
          </div>
        </Container >
      </div >
    </>
  )
}

export default Company
