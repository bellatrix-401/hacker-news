import { Pages } from '@component/types/pages'
import Image from 'next/image'
import React from 'react'
import { usePagination } from '../../hooks/usePagination'
import styles from './Pagination.module.css'

type PagProps = {
  pages: Pages
  onPageChange: (arg: number) => void
}

const Pagination: React.FC<PagProps> = ({ onPageChange, pages }) => {
  const paginationRange = usePagination({
    currentPage: pages.page,
    totalPages: pages.totalPages,
  })

  if (paginationRange === undefined || paginationRange?.length < 2) {
    return null
  }

  const onNext = () => {
    if (pages.page === +lastPage - 1) return
    onPageChange(pages.page + 1)
  }

  const onPrevious = () => {
    if (pages.page === 0) return
    onPageChange(pages.page - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul className={styles.main}>
      <li
        className={`${styles.item} ${pages.page === 0 ? styles.disabled : ''}`}
        onClick={onPrevious}
      >
        <Image src="/icons/arrow-left.svg" width={16} height={16} alt="Left" />
      </li>
      {paginationRange.map((page: number | string, index: number) => {
        if (typeof page === 'string') {
          return (
            <li
              key={`dots-${paginationRange[index - 1]}`}
              className={`${styles.paginationItem} ${styles.dots}`}
            >
              {page}
            </li>
          )
        }

        return (
          <li
            className={`${styles.item} ${
              pages.page === page ? styles.selected : ''
            }`}
            key={page}
            onClick={() => onPageChange(page - 1)}
          >
            {page}
          </li>
        )
      })}
      <li
        className={`${styles.item} ${
          pages.page === lastPage ? styles.disabled : ''
        }`}
        onClick={onNext}
      >
        <Image
          src="/icons/arrow-right.svg"
          width={16}
          height={16}
          alt="Right"
        />
      </li>
    </ul>
  )
}

export default Pagination
