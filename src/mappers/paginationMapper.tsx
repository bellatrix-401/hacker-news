import { PagesData } from '@component/types/pages'

export const dataToPagination = (data: PagesData) => {
  return {
    page: data.page,
    totalPages: data.nbPages,
  }
}
