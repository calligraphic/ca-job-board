const promptForURL = () => {
  let url = window && window.prompt('Enter the URL', 'https://');

  if (url && !/^https?:\/\//i.test(url)) {
    url = 'http://' + url;
  }

  return url;
}

export default promptForURL;
