import { News, NewsData } from '@component/types/news'
import { isEmpty } from '@component/utils/intes'

export const dataToNews = (data: NewsData) => {
  if (
    isEmpty(data.author) ||
    isEmpty(data.story_title) ||
    isEmpty(data.story_url) ||
    isEmpty(data.created_at)
  )
    return null

  let fav = false
  if (typeof window !== 'undefined') {
    fav = JSON.parse(localStorage.getItem('favs') || '[]')?.find(
      (it: News) => it.id === data.objectID
    )
      ? true
      : false
  }

  return {
    id: data.objectID,
    author: data.author,
    date: data.created_at,
    title: data.story_title,
    url: data.story_url,
    fav,
  }
}
