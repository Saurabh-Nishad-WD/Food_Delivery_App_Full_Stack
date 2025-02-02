import React from 'react'
import "./Home.css"
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
const Home = () => {
  return (
    <div className='home'>
      <Header className="header"/>
     <div className="exploreMenu">
     <ExploreMenu />
     </div>
    </div>
  )
}

export default Home
