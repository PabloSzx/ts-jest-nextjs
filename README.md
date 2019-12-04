# Minimal repo showing Next.js incompatibility with ts-jest


[Here is the issue in ts-jest repository](https://github.com/kulshekhar/ts-jest/issues/1308)


## Test it

First install dependencies

```shell
yarn
```

Then test it

```shell
yarn test
```

## Use case

Next.js has an [example](https://github.com/zeit/next.js/tree/canary/examples/with-jest-typescript) using Jest and Typescript, but it's using Babel, and Babel as a horrible support for decorators and metadata emit, so it's not an option for me because i have a mono repo project with an API using [TypeGraphQL](https://typegraphql.ml/) and the client using [Next.js](https://nextjs.org/).