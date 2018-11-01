import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { addGenre } from '../redux/appState/actions'
import { ListGroup, ListGroupItem, Badge, Label, Pager } from 'react-bootstrap'
import genres from '../data/genrelist.json'

import * as connector from '../utilities/connector'

const getGenre = id => genres.genres.find(genre => genre.id === id)

class PagePicker extends Component {

    handlePreviousPage = () => {
        const page = this.props.page - 1
        connector.getMovies(page) 
    }

    handleNextPage = () => {
        const page = this.props.page + 1
        connector.getMovies(page)
    }

    render () {
        return (
            <div>
            page: {this.props.page}
            <Pager>
                <Pager.Item href="#" disabled={this.props.page === 1} onClick={this.handlePreviousPage}>Previous</Pager.Item>{' '}
                <Pager.Item href="#" onClick={this.handleNextPage}>Next</Pager.Item>
            </Pager>
            </div> 
        )
    }
}

class MovieList extends Component  {

    componentDidMount () {
        connector.getMovies(2)
    }
    componentDidUpdate(prevProps) {
        console.log('props changed: ', prevProps, this.props)
    }
    handleAddGenre = (genreId) => {
        const genre = getGenre(genreId);
        this.props.addGenre({
            value: genre.id,
            label: genre.name
        })
    }

    render () {
        const filterGenreIds = this.props.filterGenres.map(genre => genre.value)

        const movies = this.props.movies.filter(movie => {
            const movieGenreIds = movie.genre_ids
            const filteredIdList = movieGenreIds.filter(id => filterGenreIds.includes(id))
            return filteredIdList.length === filterGenreIds.length || filterGenreIds.length === 0
        }).filter(movie => {
            const regex = new RegExp(this.props.searchTitle, 'gi')
            return !!movie.title.match(regex)
        })



        const movieList = movies.map(movie => {
            const genres = movie.genre_ids.map((genreId, index) => {
                const style = (filterGenreIds.includes(genreId))? "primary":"default"
                return (
                    <Fragment key={index}>
                        <Label bsStyle={style} onClick={()=> this.handleAddGenre(genreId)}>
                            {getGenre(genreId).name}
                        </Label>
                        {'  '}
                    </Fragment>
                    
                )
            })
            const MovieTitle = <h2>
                {movie.title}{' '}  
                <Badge style={{backgroundColor: '#f5ba0e'}}>
                    {movie.vote_average}
                </Badge>
            </h2>
            
            return (
                <ListGroupItem key={movie.id} header={MovieTitle}>
                    {movie.overview}<br />
                    {genres}
                </ListGroupItem>
            )
        })

        return (
            <div>
                <h2>
                    Movies <Badge>{movies.length}/{this.props.movies.length}</Badge>
                    <PagePicker page={this.props.page} />
                </h2>
                <ListGroup>
                    {movieList}
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movieList,
    page: state.movies.page,
    filterGenres: state.movieFilter.genres,
    searchTitle: state.movieFilter.searchTitle
})

const mapDispatchToProps = dispatch => ({
    addGenre: (genre) => dispatch (addGenre(genre))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList)