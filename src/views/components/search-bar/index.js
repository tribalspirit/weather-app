import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { withRouter } from 'react-router'

class SearchBar extends PureComponent {
state = {
    value: this.props.value
}

onChangeSearch = event => {
    this.setState({
        value: event.target.value
    })
}

onSearch = () => {
    const { value } = this.state
    const { history } = this.props
    history.push(`?city=${value}`)
}
    
render () {
    const { value } = this.state

    return (<div className='search-bar'>
            <input type='text' value={value} onChange={this.onChangeSearch}/>
            <button onClick={this.onSearch}>Search</button>
        </div>)
    }
}

SearchBar.propTypes = {
    value: propTypes.string
}

SearchBar.defaultProps = {
    value: ''
}

export default withRouter(SearchBar)