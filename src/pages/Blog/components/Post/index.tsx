import { PostContainer } from './styled'

export function Post() {
  return (
    <PostContainer to="/post/1">
      <div>
        <strong>Javascript data types and data structure</strong>
        <span>Há 1 dia</span>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostContainer>
  )
}
