import withGlobalProps from './withGlobalProps'
const sleep = (ms) => new Promise((res)=>setTimeout(()=>res()), ms)
export {
  withGlobalProps,
  sleep
}