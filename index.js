const baseURL = 'https://api.github.com';
const user = 'maxbrooks114';

function getToken() {
  const token = '8f0bcb83cb0ea6cc1d151eb4fa1d1fad633df404';
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const user = 'maxbrooks114';
  const postData = {
  body: ''
};
  fetch(
  'https://api.github.com/repos/' + repo + '/forks',
  {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
).then(res => res.json()).then(json => showResults(json));

}

function showResults(json) {
  const fork = `<a href= ${json.html_url}> The FORK! </a>`

  document.getElementById('results').innerHTML = fork;
}

function createIssue() {
  const repo = 'maxbrooks114/js-ajax-fetch-lab';
  const user = 'maxbrooks114';
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }

  fetch(
  'https://api.github.com/repos/' + repo + '/issues',
  {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    },

  }
).then(res => res.json()).then(json => getIssues(json));
}


function getIssues() {
  const repo = 'maxbrooks114/js-ajax-fetch-lab';
  const user = 'maxbrooks114';
  const url = `${baseURL}/repos/${repo}/issues`;
  fetch(
  'https://api.github.com/repos/' + repo + '/issues',
  {url,
    headers: {
      Authorization: `token ${getToken()}`
    }
  }
).then(res => res.json()).then(json => console.log(json));
}
