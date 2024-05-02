import React from 'react'
import Row from '../Row'
import requests from '../../../../utils/request'

const RowList = () => {
  return (
    <>

      <Row title='Originals' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Top Rated Movies' fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies ' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
      <Row title='TV Show' fetchUrl={requests.fetchTvShow}/>
    </>
  )
}

export default RowList
