import React, { useEffect, useState } from 'react'
import { Button, Icon, List } from 'semantic-ui-react'

export default function NewsOffset() {
    const [loading, setloading] =useState(true)
    const [x, setx] = useState(0)
    const [list, setlist] = useState([])
    useEffect(()=>{
        let data = {
            _fields: 'id,title,jetpack_featured_media_url',
            per_page:10,
            offset: x
        }
        const param = new URLSearchParams(data).toString()
        const url = 'https://telugunewsadda.com/wp-json/wp/v2/posts?'

        setloading(true)
        fetch(url + param)
        .then(res=> res.json())
        .then(json=>{
            setlist(json)
            setloading(false)
        })
    },[x])

    function handlenext(){
        setx(x + 10)
    }
    function handleprev(){
        if (x >= 10) {
            setx(x - 10)
        }
    }



  return (
    <div>
        {x > 0 ? <Button Onclick={handleprev}>Previous</Button> : '' }
        {x < 100 ? <Button Onclick={handlenext}>Next</Button>: ''}
        <hr />
        
        <list divided relaxed>
            
        {
            loading ? <Icon loading size='huge' color='blue' name='spinner'/>
            :
            list.map((item)=>{
                return(
                    <List.item style={{padding: 20}}>
                        <list.Icon name='user' size='large' verticalAlign='middle'/>
                        <list.content>
                            <list.Header>{item.title.rendered}</list.Header>
                        </list.content>
                    </List.item>
                )
            })
        }
        </list>

    </div>
  )
}
