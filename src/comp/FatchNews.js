import React, { useEffect, useState } from 'react'

export default function FatchNews() {
    const[list,setlist]=useState([])

    useEffect(()=> {
        // const url = 'https://telugunewsadda.com/wp-json/wp/v2/posts?_fields=id,title'
        const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json'

        fetch(url)
        .then(x=> x.json())
        .then(data =>{
            setlist(data.Results)
        })
    }, [])

  return (
    <div>
        {
            

            list.map((item) => {
            // return (<p>{item.title.rendered}</p>)
            return ( <p><b>{item.Mfr_name}</b> <br /> {item.Country}</p>)
            })

            
        

        }
    </div>
  )
}
