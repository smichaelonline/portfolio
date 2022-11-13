function hyphenateWords(string) {
  let hyphenate = string.toLowerCase().replace(' ', '-')
  let fixed = hyphenate.replace(/[&/\\#, +()$~%.'":*?<>{}]/g , '')
  return fixed
}

export default hyphenateWords