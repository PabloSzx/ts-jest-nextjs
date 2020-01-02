module.exports = {
  // preset: "@pablosz/ts-jest",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsConfig: "__tests__/tsconfig.json",
      babelConfig: {
        comments: false
        // plugins: ["@babel/plugin-transform-for-of"],
        // plugins: [
        //   [
        //     require("./plugins/jsx-pragma"),
        //     {
        //       // This produces the following injected import for modules containing JSX:
        //       //   import React from 'react';
        //       //   var __jsx = React.createElement;
        //       module: "react",
        //       importAs: "React",
        //       pragma: "__jsx",
        //       property: "createElement"
        //     }
        //   ]
        // ]
      }

      // {
      //   presets: ["next/babel"]
      //   // plugins: [require("@babel/plugin-syntax-dynamic-import")]
      // }
    }
  }
};
