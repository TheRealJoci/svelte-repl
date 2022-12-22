# @joci/svelte-repl

This is the guts of https://svelte.dev/repl, extracted into its own package so that it can be used elsewhere, modified from the official packages to be self-contained and work out of the box.

As of the time of writing this the README official versions of software published by the Svelte team are:

- @sveltejs/repl - 0.0.1
- @sveltejs/site-kit - 3.0.3

This package was created in the following way:

- included the "repl" package from the svelte/sites repo
- included "fonts" folder, "base.css" and "code.css" files from the "site-kit" package from the svelte/sites repo
- added the following packages to dependencies
  - "marked": "^4.2.2"
  - "sourcemap-codec": "^1.4.8"
- modified the css import to the index page

No copyright infingement was intended, if you think I was in the wrong please contact me so I can sort it out.

## License

[MIT](LICENSE)
