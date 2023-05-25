import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { SearchInput } from './components/Search-Input'
import { PostListContainer } from './styled'

export function Blog() {
  return (
    <>
      <Profile />
      <SearchInput />
      <PostListContainer>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostListContainer>
    </>
  )
}
