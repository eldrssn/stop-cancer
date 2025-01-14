export interface ContainerProps {
  nextPage?: string
  prevPage?: string
  onSetRef?: (ref: HTMLDivElement) => void
  pinned?: boolean
  withPin?: boolean
}
