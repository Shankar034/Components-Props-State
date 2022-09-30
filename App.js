
// import React from 'react'

// function App(){
//     return React.createElement(
//         'div',
//          {className: 'container'}, 
//     React.createElement('h1', {}, 'My App')
//     )
// }


// function App(){
//     const title = 'Blog Post'
//     const body = 'This is my blog post'
//     const comments = [
//         {id:1, text: 'Comment one'},
//         {id:2, text: 'Comment two'},
//         {id:3, text: 'Comment three'},
//     ]

//     const  loading = false
//     const showComments = true

//     if(loading) return <h1> Loading...</h1>

//     const commentBlock = (
//         <div className="comments">
//             <h3> Comments ({comments.length})</h3>
//             <ul>
//                 {comments.map((comment, index) => (
//                     <li key={index}>{comment.text}</li>
//                 ))}
//             </ul>
//         </div>
//     )
//     return (
//         <>
//         <Header/>
//         <div className="container">
//         <h1> {title.toUpperCase()}</h1>
//         <p> {body}</p>

//         {showComments && commentBlock}


//         </div >
//         </>
//  )
// }

// export default App
import FeedbackItem from "./components/FeedbackItem"

import { useState } from 'react'
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import Card from "./components/shared/Card"
import FeedbackStats from './components/FeedbackStats'
function App(){

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }


    return (
        <>
        <Header />
        <div className="container">
        <FeedbackStats feedback= {feedback}/>

            <FeedbackList feedback={feedback}
                handleDelete = {deleteFeedback}
            />
            <Card>
                Hello
            </Card>
       
        </div>
        </>
 )
}
export default App

