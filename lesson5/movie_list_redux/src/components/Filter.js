import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterMovies } from '../redux/appState/actions'
import { FormGroup, ControlLabel } from 'react-bootstrap'
import Select from 'react-select'
import genres from '../data/genrelist.json'

class Filter extends Component {
    handleChange = (newValue) => {
        const filter = {...this.props.filter}
        filter.genres = newValue
        this.props.filterMovies(filter)
    }
    render () {
        const genreOptions = genres.genres.map((genre) => ({
                value: genre.id, 
                label: genre.name
            })
        )
        const genreFilter = this.props.filter.genres

        return (
            <FormGroup controlId="formControlsSelectMultiple">
                <ControlLabel>Genre selector</ControlLabel>
                <Select 
                    options={genreOptions} 
                    isMulti
                    onChange={this.handleChange}
                    value={genreFilter} />
            </FormGroup>
        )
    }
}

const mapStateToProps = state => ({
    filter: state.movieFilter
})

const mapDispatchToProps = dispatch => ({
    filterMovies: (filter) => dispatch (filterMovies(filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)