import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { withRouter } from 'react-router'
import './style.css'

class SearchBar extends PureComponent {
state = {
    value: this.props.value
}

handleKeyDown = e => {
    if (e.key === 'Enter') this.onSearch()
}

onChangeSearch = e => {
    this.setState({
        value: e.target.value
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
            <input type='text' value={value} onChange={this.onChangeSearch} onKeyDown={this.handleKeyDown}/>
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