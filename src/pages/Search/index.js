import React from 'react'

const Search = () => {
  const searchFrom = e => {
    e.preventDefault();
    console.log('searchFrom is working');
  }

  const logout = () => {
    const leave = window.localStorage.removeItem('token')
    window.location.reload()

    return leave
  }

  return (
    <div className="container">
      <div className="pb-2" style={{display: 'flex', justifyContent: 'space-between'}}>
        <h4>Search</h4>
        <button onClick={logout} type="button" className="btn btn-outline-danger">Log Out</button>
      </div>
      <nav className="navbar navbar-light bg-light">
        <form onSubmit={searchFrom} style={{display: "flex"}} className="form-inline">
          <input className="form-control mr-sm-2 m-1" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    </div>
  )
}

export default Search
