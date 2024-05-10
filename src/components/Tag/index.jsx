import React from 'react'
import '../../Styles/app.css'

function Tags(props) {
  return (
    <div className="crfl-global-container">
      {/* Map through the tag prop array and render each tag */}
      {props.taglist.map((tag, index) => (
        <div key={index} className="tag-container">
          {tag}
        </div>
      ))}
    </div>
  )
}

export default Tags
