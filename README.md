# Welcome to personal website!

## Feel free to look through the code
### I am always updating this site, and constantly improving!

The `github.html` page is a small client-side integration with the GitHub REST API. It displays public profile statistics and recently updated owned repositories for `@hamedrabah`.

## Preview locally

Serve the repository over HTTP so the browser loads it the same way as GitHub Pages:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. The GitHub activity page requests only public API data and does not require a token.
