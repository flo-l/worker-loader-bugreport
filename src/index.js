import Worker from './worker'
const worker = new Worker();
worker.addEventListener('message', e => console.log(e));
