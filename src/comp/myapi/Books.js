import React, { useEffect, useState } from 'react'

export default function () {
  const [books, setbooks] = useState([])
  const url = 'http://localhost/qhaysky.com/wp-json/wp/v2/book'


  return (
    <div>
      <h1>List of Books</h1>
    </div>
  )
}
  