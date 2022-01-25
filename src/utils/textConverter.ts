const convertText = (text: string | undefined) => {
  if (text) {
    return text.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
      return str.toUpperCase()
    })
  } else {
    return '-'
  }
}

export default convertText
