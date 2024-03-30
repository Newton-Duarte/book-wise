export const ellipsisText = (text: string, maxLength = 35) => {
  if (text?.length < maxLength) return text
  return `${text.substring(0, maxLength)}...`
}
