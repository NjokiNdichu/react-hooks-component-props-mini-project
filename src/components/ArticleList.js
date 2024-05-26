import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <div>
      <main>
       {posts.map((post) => (
        <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        </article>

       )) }
      </main>
    </div>
  )
}

export default ArticleList
