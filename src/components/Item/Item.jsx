import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({item}) => {
    return (
        <article>
			<Link to={`/item/${item.id}`}>
			    <p>{item.category}</p>
			    <img src={item.image} alt={item.title}/>
			    <p>{item.title}</p>
			    <p>{item.description}</p>
			    <p>$ {item.price}</p>
			</Link>
		</article>
    )
}