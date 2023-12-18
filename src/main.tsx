import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  RouterProvider, createBrowserRouter
} from 'react-router-dom'
import './index.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HomePage from './pages/home.tsx'
import RecipePage from './pages/recipe.tsx'
import SearchPage from './pages/search.tsx'
import BookmarkPage from './pages/bookmark.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/recipe/:id',
        element: <RecipePage />
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/bookmark',
        element: <BookmarkPage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
