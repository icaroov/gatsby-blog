export interface PaginationProps {
  isFirst: boolean
  isLast: boolean
  currentPage: number
  numPages: number
  prevPage?: string
  nextPage?: string
}
