import React from 'react'
import './HomeSection.css'
import requests from '../Requests'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Row from '../components/Row'

function HomeSection() {
  return (
    <div className='homesection'>
        <Nav />
        <Banner />
        <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title='Popular' fetchUrl={requests.fetchPopular} />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        {/* <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  )
}

export default HomeSection