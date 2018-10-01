A Bug report repo for worker-loader (webpack)
=======================

### System info

Linux Fedora 28

```
$ node -v
v8.9.1

yarn -v
1.10.1

firefox -v
Mozilla Firefox 62.0.2
```

For package versions please see yarn.lock.

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

### Issue

https://github.com/webpack-contrib/worker-loader/issues/164
