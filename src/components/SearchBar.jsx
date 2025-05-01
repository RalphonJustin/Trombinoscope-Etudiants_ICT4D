import React, { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'

function SearchBar() {
  const { searchQuery, setSearchQuery } = useContext(StudentContext)

  return (
    <input
      type="text"
      placeholder="Rechercher par nom..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ marginBottom: '20px', padding: '10px', width: '100%', maxWidth: '400px' }}
    />
  )
}

export default SearchBar
