import React from 'react'
import styles from '../SearchBar/searchBar.module.css'

const SearchBar = () => {
  return (
    <input className={styles['search']} type="search"
    placeholder='search' />
  )
}

export default SearchBar