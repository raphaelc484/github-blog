import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { DefaultLayout } from './layout/Default-layout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
      </Route>
    </Routes>
  )
}
