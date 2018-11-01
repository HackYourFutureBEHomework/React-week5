import React, { Component } from 'react';
import './App.css';
import genreList from './data/genrelist.json'
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import MovieList from './components/MovieList'
import Filter from './components/Filter'
import SearchMovieTitle from './components/SearchMovieTitle';

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      genreList : genreList.genres,
      selectedGenreId : '',

    }
  }

  selectGenre = (event) => {
    //console.log(event.target.value)
    this.setState({selectedGenreId: parseInt(event.target.value)});
  }

  render() {

    return (
      <Grid>
          <Row>
            <Col md={12}>
              <PageHeader>
                Movie list <small>based on Redux</small>
              </PageHeader>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <SearchMovieTitle />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <Filter />
            </Col>
            <Col md={9}>
              <MovieList/>
            </Col>
          </Row>
      </Grid>
    );
  }
}

export default App;
