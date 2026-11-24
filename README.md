# Perspectiva

Compares versions of causal loop diagrams from participatory workshops. Pick a participant, then view their first and final diagrams side by side with matching nodes in the same place, or switch between them on one graph.

This independent application uses the versioned [Cytocausal library](https://github.com/SonghaiFan/cytocausal) as installed dependencies:

```sh
npm ci
npm run dev
```

Open `http://localhost:3100`. Add `?dataset=expert_9` to open a dataset, and `?debug=1` to show the dataset selector.

## Data

`data/datasets.json` is generated from the original Perspectiva project:

```sh
CYTOCAUSAL_PERSPECTIVA=/path/to/perspectiva npm run import-data
```

## Tests

`npm run test:e2e` runs the browser tests against a production build, so run `npm run build` first. They need Chrome installed.

## Library dependency

The three `@cytocausal/*` packages are pinned to the public Cytocausal `v0.1.0-alpha.1` GitHub Release tarballs. The lockfile records their integrity and overrides keep transitive Cytocausal dependencies on the same release. No sibling checkout, workspace link, or copied library source is needed. These packages are not yet published on npm.

## Deployment

Production: https://perspectiva.songhai.site

Vercel builds this repository from its root with Node 22, `npm ci`, and `npm run build`. The documentation link defaults to https://cytocausal.songhai.site; `NEXT_PUBLIC_DOCS_URL` can override it.

## History

Extracted with `git subtree split` from `SonghaiFan/cytocausal` at `e3c8c8fbef81a8a3c40dff539c02c8cccef9abf4`, preserving this application's commit history, data and browser tests.
