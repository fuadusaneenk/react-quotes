import React from 'react'
import "./bookmark.css"

const Bookmark = () => {
    const quotes=JSON.parse(localStorage.getItem("quotes"))
    console.log(quotes)
let content;

content= 

quotes?(quotes.map(quote=>{
    return(
       

<div className="quote-box">
<div className="quote">

    <p className="quote-text">{quote.content}</p>
    <p className="author">-{quote.author}</p>
</div>
</div>
)
})):<div class="loader"></div>
  
 

    return (
        <div>
     {content}
            
          
            
        </div>
    )
}

export default Bookmark