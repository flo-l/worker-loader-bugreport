import('./dynamic.js').then(js => self.postMessage(js.fun()), fail => console.log(fail));
