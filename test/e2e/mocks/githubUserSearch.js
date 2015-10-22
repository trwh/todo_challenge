module.exports = [
{
  request: {
             path: 'https://api.github.com/search/users',
             method: 'GET'
           },
  response: {
    data: {
      "total_count": 1,
      "incomplete_results": false,
      "items": [
        {
          "login": "spike01",
          "id": 7307631,
          "avatar_url": "https://avatars.githubusercontent.com/u/7307631?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/spike01",
          "html_url": "https://github.com/spike01",
          "followers_url": "https://api.github.com/users/spike01/followers",
          "following_url": "https://api.github.com/users/spike01/following{/other_user}",
          "gists_url": "https://api.github.com/users/spike01/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/spike01/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/spike01/subscriptions",
          "organizations_url": "https://api.github.com/users/spike01/orgs",
          "repos_url": "https://api.github.com/users/spike01/repos",
          "events_url": "https://api.github.com/users/spike01/events{/privacy}",
          "received_events_url": "https://api.github.com/users/spike01/received_events",
          "type": "User",
          "site_admin": false,
          "score": 91.97505
        }
      ]
    }
  }
}
]