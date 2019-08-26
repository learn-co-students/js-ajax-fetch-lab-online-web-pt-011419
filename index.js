const baseURL = 'https://api.github.com';
const user = 'A-Glazer';
const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
const repo2 = 'js-ajax-fetch-lab';

function getToken() {
  const token = '<TOKEN HERE>';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return token;
  return '';
}

function forkRepo() {
  //use fetch to fork it!
  fetch(
    `${baseURL}/repos/${repo}/forks`,
    {
      method: 'POST',
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(response => response.json())
    .then(json => showResults(json))

}

function showResults(json) {
  //use this function to display the results from forking via the API
  const url = `<a href = ${json.html_url}> ${json.html_url} </a>`
  document.getElementById("results").innerHTML = url
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const bodyText = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }
  fetch(
    `${baseURL}/repos/${user}/${repo2}/issues`,
    {
      method: 'POST',
      body: JSON.stringify(bodyText),
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(response => response.json())
    .then(response => getIssues())
 
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(
    `${baseURL}/repos/${user}/${repo2}/issues`,
    {
      headers: {
        Authorization: `token ${getToken()}`
      }
    }
  )
    .then(response => response.json())
    .then(json => console.log(json))

}
