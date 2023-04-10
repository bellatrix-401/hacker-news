import { News } from '@component/types/news'

export const getFavorites = () => {
  if (typeof window === 'undefined') return []

  const storage = JSON.parse(localStorage.getItem('favs') || '[]')
  return storage
}

export const setFavorites = (
  id: string,
  favs: Array<News>,
  items: Array<News>
) => {
  const index = favs.findIndex((it: News) => it.id === id)
  const newFavs = [...favs]

  if (index === -1) {
    const item = items.find((it: News) => it.id === id)
    if (item !== undefined) newFavs.push({ ...item, fav: true })
  } else {
    newFavs.splice(index, 1)
  }

  const newItems = items.map((it: News) => {
    if (it.id === id) return { ...it, fav: !it.fav }
    else return it
  })

  localStorage.setItem('favs', JSON.stringify(newFavs))

  return { newFavs, newItems }
}
