import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'


const Vida = props => (
  <Layout>
    <Helmet>
      <title>Elements - Landed by HTML5 UP</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <iframe width="100%" height="100"id="calculator-vida" src="https://projeto25.netlify.app/"></iframe>
      </div>
    </div>
  </Layout>
)

export default Vida