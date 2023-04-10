import { NEWS_QUERY, PAGE, QUERY } from '@component/constants/endpoints'
import { dataToNews } from '@component/mappers/newsMapper'
import { dataToPagination } from '@component/mappers/paginationMapper'
import { News } from '@component/types/news'

export const getNewsByQueryAndPage = async (page: string) => {
  const query = localStorage.getItem('query') || 'angular'
  const url = NEWS_QUERY.replace(QUERY, query).replace(PAGE, page)
  const res = await fetch(url)
  const data = await res.json()

  const pagination = dataToPagination(data)
  const hits = data.hits
    .map(dataToNews)
    .filter((it: News | null) => it !== null)

  if (typeof window !== 'undefined') localStorage.setItem('query', query)

  return {
    hits,
    pagination,
  }
}
