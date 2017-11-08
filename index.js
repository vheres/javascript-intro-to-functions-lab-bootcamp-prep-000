function shout(string) {
  return string.tuUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  return
}

function logWhisper(string) {
  console.log(string.toLowerCase())
  return
}

function sayHiToGrandma (string) {
  if (string === '')
  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  }
}