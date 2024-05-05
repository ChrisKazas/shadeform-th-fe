import React from 'react'

const Pagination = ({instancesPerPage, totalInstances, paginate}) => {
  const pageNumbers = []

  for( let i = 1; i <= Math.ceil(totalInstances / instancesPerPage); i++ ){
    pageNumbers.push(i)
  }

  const listItems = pageNumbers.map(num => (
    <li key={num}>
      <a onClick={() => paginate(num)} href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-400 bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:text-white dark:bg-white dark:border-gray-300 dark:text-gray-500 dark:hover:bg-gray-100 dark:hover:text-gray-700">
        {num}
      </a>
    </li>
  ));

  const item = {}
  return (
    <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
            {listItems}
        </ul>
    </nav>
  )
}

export default Pagination
