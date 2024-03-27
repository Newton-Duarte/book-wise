export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

export const getSizeInRem = (size: AvatarSize) => {
  switch (size) {
    case 'sm':
      return '1.5rem'
    case 'md':
      return '2rem'
    case 'lg':
      return '2.5rem'
    case 'xl':
      return '4.5rem'
    default:
      return '2rem'
  }
}

export const getSizeInNumber = (size: AvatarSize) => {
  switch (size) {
    case 'sm':
      return 24
    case 'md':
      return 32
    case 'lg':
      return 40
    case 'xl':
      return 72
    default:
      return 32
  }
}
