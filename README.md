# solid-router-formdata

Example repo for `@solidjs/router` defect: *FormData does not include submit button value and name*

Defect location: In the vicinity of https://github.com/solidjs/solid-router/blob/9755b8d478c3c7270885da12528818ef43c52485/src/data/events.ts#L114 

Compare to previous implementation: https://github.com/solidjs/solid-start/blob/443955f7fe677f558f613d80bafd78b570c136f6/packages/start/data/Form.tsx#L283-L287 

Supporting background: [FormData doesn't include value of buttons](https://stackoverflow.com/questions/48322876/formdata-doesnt-include-value-of-buttons#answer-48322934)

```shell
$ cd solid-router-formdata
solid-router-formdata$ pnpm install
Lockfile is up to date, resolution step is skipped
Packages: +537
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Progress: resolved 537, reused 534, downloaded 0, added 537, done

dependencies:
+ @solidjs/router 0.10.6
+ @solidjs/start 0.4.4
+ solid-js 1.8.8
+ vinxi 0.1.1

Done in 1.5s
solid-router-formdata$ pnpm run dev

> solid-router-formdata@ dev solid-router-formdata
> vinxi dev

vinxi 0.1.1
The CJS build of Vite's Node API is deprecated. See https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated for more details.
vinxi Found vite.config.js with app config
vinxi starting dev server

  ➜ Local:    http://localhost:3000/
  ➜ Network:  use --host to expose

```

Clicking on the `Log In` button when client side JS is **enabled** produces on the server side:

```
(email, kody@example.com)
(password, twixrox)
```

Clicking on the `Log In` button when client side JS is **disabled** produces on the server side:
```
(email, kody@example.com)
(password, twixrox)
(kind, login)
```

i.e. the JS **enabled** version is lacking the `"kind"`, `"login"` `name`/`value` pair from the (clicked) `button` element inside the `<form>`.   

