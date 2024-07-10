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
        // isLargeRow="true"
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        // isLargeRow={true}
      />
      <Row
        title="Action Movie"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
}
