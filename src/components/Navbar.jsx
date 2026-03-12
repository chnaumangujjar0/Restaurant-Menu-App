import React from 'react'

const Navbar = ({ filterItems, menuBar }) => {

  return (
    <>
      <div className="filters">
        {
          menuBar.map((curr, index) => {
            return (
              <button
                key={index}
                className="filter-btn"
                onClick={() => filterItems(curr)}
              >
                {curr}
              </button>
            )
          })
        }
      </div>
    </>
  )
}

export default Navbar