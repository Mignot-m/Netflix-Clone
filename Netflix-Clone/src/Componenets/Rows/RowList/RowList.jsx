import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

export default function RowList() {
  return (
    <>
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLargeRow="true"
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={true}
      />
      <Row
        title="Action Movie"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row title="TV Show" fetchUrl={requests.fetchTvShow} isLargeRow={true} />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
    </>
  );
}
