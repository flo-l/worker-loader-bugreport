A Bug report repo for worker-loader (webpack)
=======================

### Steps to reproduce:

- clone this repo and cd into it
- `yarn install`
- `yarn start`
- open http://localhost:4000 in your browser
- check network tab of dev tools
- notice the 404, see screenshot

### Screenshot

![Screenshot](screenshot.png?raw=true "Screenshot")

### Expected outcome

No 404, I expected dynamic import to work in the worker.
