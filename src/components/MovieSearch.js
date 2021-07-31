import { useState } from 'react';
import { connect } from 'react-redux';
import { addMovieToList } from '../redux/actions/movieList.actions';
import Pagination from './Pagination';
import MovieApiService from '../services/movieApi.service';
import SearchBar from './SearchBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from  'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

let MovieSearch = ({ addMovieToList }) => {
  const movieApiService = new MovieApiService();
  const [searchResults, setSearchResults] = useState(); 

  const onSearch = async (title) => {
    const results = await movieApiService.getMoviesByTitle(title);
    setSearchResults(results);
  }

  const addToMovieList = async (id) => {
    const result = await movieApiService.getMovieById(id);
    addMovieToList(result);
  }

  return (
    <Container>
      <SearchBar onSearch={onSearch}/>
        { searchResults
          ? <>
            <Row>
              { searchResults.Search.map((movie) => (
                <Col xs={12} md={6} lg={3} key={movie.imdbID} className="mb-4">
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={movie.Poster !== 'N/A' ? movie.Poster : '/redux-movie-list/images/popcornPoster.jpg'}
                      alt={`${movie.Title} poster`}
                    />
                    <Card.Body className="pb-0">
                      <Card.Title>{ movie.Title }</Card.Title>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0 pt-0 pb-3">
                      <Button
                        variant="success"
                        onClick={() => addToMovieList(movie.imdbID)}
                      >
                        <i className="bi bi-bookmark-plus"></i>&nbsp;
                        Add To List
                      </Button>

                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              <Pagination searchResults={searchResults} currentPage={0} setCurrentPage={() => 0} />
            </Row>
          </>
          : <Row>
              <Col className="text-center">
              <p className="text-secondary">Use the search bar above to begin</p>
              <img src="/redux-movie-list/images/popcornPoster.jpg" alt="" style={{maxWidth:'300px'}} />
            </Col>
          </Row>
        }
    </Container>
  )
}

MovieSearch = connect(
  null,
  { addMovieToList }
)(MovieSearch)

export default MovieSearch;