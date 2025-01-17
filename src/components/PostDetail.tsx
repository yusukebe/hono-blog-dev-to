import Nano, { Fragment, withStyles } from 'nano-jsx'
import type { PostDetailType } from '../types'

export default function PostDetail({ post }: { post: PostDetailType }) {
  const css = `
    h1 {
      margin-bottom: var(--gap);
    }

    button {
      margin-top: calc(var(--gap) * 2);
    }
  `

  return withStyles(css)(
    <>
      <h1>{post.title}</h1>
      <div innerHTML={{ __dangerousHtml: post.body_html }} />
      <a href="/">
        <button>Back</button>
      </a>
      <a href={post.url}>
        <button>Read on dev.to</button>
      </a>
    </>
  )
}
