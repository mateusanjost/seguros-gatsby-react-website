import React from 'react'
import pic01 from '../assets/images/tudo-sobre-seguros-300x268.png'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Lorem Ipsum </h2>
        <p>
Lorem ipsum lorem ipsum dolor sit amet nullam
          <br />
         lorem ipsum dolor sit am dolor amet ipsum dolor sit 
        </p>
      </header>
      <span className="image">
        <img src={pic01} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
