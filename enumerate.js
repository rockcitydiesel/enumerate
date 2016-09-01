// (words: string[], cutoff: number, placeholder: string) => string
const enumerate = (words, cutoff = 4, placeholder) => {
  if (words.length === 0) return ''
  else if (words.length === 1) return words[0]
  else if (words.length >= cutoff) return `${words.length} ${placeholder}`
  else return `${words.slice(0, words.length-1).join(', ')} and ${[...words].pop()}`
}

module.exports = enumerate