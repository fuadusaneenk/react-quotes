import "./homepage.css"
import {
    useGetRandomQuery, useGetTagsQuery, useGetCategory
} from "../api/apiSlice"
import { useState } from "react"
const Homepage = () => {
    

    const [selTag, setSelTag] = useState("")
     const {
        data: quotes,
        isLoading,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetRandomQuery(selTag)
    const handleTagChange = (e) => {
        setSelTag(e)
        refetch()
    }

    const {
        data: tags,
        isSuccess: success
    } = useGetTagsQuery()


    function handleRefetch() {

        refetch()
    }
    let content;
    if (isLoading) {
        content = <p className="loading">Loading...</p>
    } else if (isSuccess) {

        content =
            <div className="quote-box">
                <div className="quote">
                    <p className="quote-text">{quotes.content}</p>
                    <p className="author">-{quotes.author}</p>
                    <i className="fas fa-bookmark fa-2x ms-5" onClick={handleBookmark}></i>

                </div>
                <select name="tags" id="tags" value={selTag} onChange={(e) => handleTagChange(e.target.value)}>
                    <option value="">Select tag</option>
                    {success ? (tags.map(tag => {
                        return (

                            <option key={tag._id} value={tag.name}>{tag.slug}</option>

                        )
                    })) : "null"}
                </select>
                <button className="nxt-quote" onClick={handleRefetch} >Next Quote</button>

            </div>

    } else if (isError) {
        content = <p>{error}</p>
    }

    function handleBookmark() {
        var bookMarkArray = []
        bookMarkArray = JSON.parse(localStorage.getItem('quotes')) || [];
        bookMarkArray.push(quotes)
        localStorage.setItem("quotes", JSON.stringify(bookMarkArray))
    }






    return (
        <>

            {content}
        </>
    )
}
    export default Homepage;