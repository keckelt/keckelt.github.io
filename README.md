### My website ⇨ https://eckelt.info/

**Develop**

1. `npm install`
2. `npm start` and open the printed URL
3. `npm run build` to check the production build

Every push to `main` builds the site and deploys it to the `gh-pages` branch.

**Releases**

Releases use date tags (`YYYY.MM.DD`, add `.1`, `.2` … for a second release on the same day):

```sh
git tag -a 2026.09.30 -m "Short description"
git push origin 2026.09.30
gh release create 2026.09.30 --verify-tag --generate-notes
```
