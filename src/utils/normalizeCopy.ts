const REPLACEMENTS: Array<[string, string]> = [
  ['Â·', ' · '],
  ['â†’', '->'],
  ['â€”', '-'],
  ['â€“', '-'],
  ['âˆž', 'infinity'],
  ['âœ“', '->'],
]

export function normalizeCopy(value: string) {
  return REPLACEMENTS.reduce((current, [from, to]) => current.split(from).join(to), value)
}
