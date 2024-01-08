# solid-router-formdata

Example repo for `@solidjs/router` defect: *FormData does not include submit button value and name*

Defect location: In the vicinity of https://github.com/solidjs/solid-router/blob/9755b8d478c3c7270885da12528818ef43c52485/src/data/events.ts#L114 

Supporting background: [FormData doesn't include value of buttons](https://stackoverflow.com/questions/48322876/formdata-doesnt-include-value-of-buttons#answer-48322934)


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

