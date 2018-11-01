import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSearchTitle } from '../redux/appState/actions'
import { FormGroup, FormControl, InputGroup } from 'react-bootstrap'

class SearchMovieTitle extends Component {
    changeHandler = (e) => {
        this.props.setSearchTitle(e.target.value)
    }
    render () {
        return (
            <form>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>search</InputGroup.Addon>
                        <FormControl 
                            type="text" 
                            value={this.props.searchTitle} 
                            onChange={this.changeHandler} />
                    </InputGroup>
                </FormGroup>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    searchTitle: state.movieFilter.searchTitle
})

const mapDispatchToProps = dispatch => ({
    setSearchTitle: (searchTitle) => dispatch(setSearchTitle(searchTitle))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchMovieTitle)





