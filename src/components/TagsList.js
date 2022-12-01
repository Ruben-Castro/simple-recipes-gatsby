import { Link } from 'gatsby'
import React from 'react'
import setupTags from '../utils/setupTags'


const TagsList = ({ recipes }) => {
    const newTags = setupTags(recipes)

    return (
        <div className='tag-container'>
            <h4>recipes</h4>
            <div className='tag-list'>
                {newTags.map((tag, index) => {
                    const [text, value] = tag
                    return <Link key={index} to={`/${text}`}>
                        {text}: {value}
                    </Link>
                })}
            </div>
        </div>
    )
}

export default TagsList