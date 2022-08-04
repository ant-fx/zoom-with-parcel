# Demonstration of ZoomSKD error when compiling with Parcel

### Steps to reproduce

1. Clone repo
2. `npm install`
3. `npx parcel serve index.html`
4. Load the URL shown in the console (i.e. Server running at http://localhost:55303)
5. Open dev tools, you should see an error:

```
zoomus-websdk.umd.min.js:2 Uncaught TypeError: _.debounce is not a function
    at Module.<anonymous> (zoomus-websdk.umd.min.js:2:640169)
    at t (zoomus-websdk.umd.min.js:2:799)
    at Object.<anonymous> (zoomus-websdk.umd.min.js:2:583362)
    at t (zoomus-websdk.umd.min.js:2:799)
    at Object.<anonymous> (zoomus-websdk.umd.min.js:2:3460042)
    at t (zoomus-websdk.umd.min.js:2:799)
    at Object.<anonymous> (zoomus-websdk.umd.min.js:2:2685171)
    at t (zoomus-websdk.umd.min.js:2:799)
    at Object.<anonymous> (zoomus-websdk.umd.min.js:2:406708)
    at t (zoomus-websdk.umd.min.js:2:799)
```