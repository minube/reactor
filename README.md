# reactor
Reusable presentational components
[![version](https://img.shields.io/badge/v-0.7.20-blue.svg?style=for-the-badge)]()

## Introduction
Reactor brings the platform-agnostic Components and APIs of React Native to the Web (and viceversa).

Reactor makes it easy to create fast, adaptive web UIs in JavaScript. Write once, render anywhere: Reactor interoperates with existing React DOM components and is compatible with the majority of the React Native API. You can develop new components for native and web without rewriting existing code. Reactor can also render to HTML and critical CSS on the server using Node.js (isomorphic-javascript).

Who is using this approach? Twitter, Instagram, AirBnB, Netflix, Major League Soccer, The Times, React Native's documentation.

Browser support: Chrome, Firefox, Safari >= 7, IE 10, Edge.


## Getting started

You just need these packages as global environment:

```
node@9.4.0

brew install yarn
brew install watchman
brew postintall watchman

yarn global add exp@47.4.4
yarn global add create-react-app
yarn global add create-react-native-app
```

It is time for clone the repository and get all the dependencies using our `package.json`:

```
git clone https://github.com/minube/reactor
yarn
```

After get all the dependencies you have 2 ways to start playing with **Reactor**.

### Web environment
If you wanna use the web environment just type:

```
yarn start
```

This environment is the most advisable if your purpouse is test our components or just develop new ones.

### Native environment (iOS/Android)
Otherwise, if you wanna see **Reactor** in a native device you have 2 ways. But both of them needs start the native environment so you have to type:

```
yarn start:native
```

If everything is ok we will get a screen like this:

![Native Environment](https://i.imgur.com/8TnMTjG.png)

Now we can choose how we will run the project. If you wanna test in a simulator you will need get the environment (xCode, Android) in your system. If you wanna test in real devices you must install the Expo Client for [iOS](https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8) or [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www). After that just read the QR Code with the Expo Client and done.

### Test and Lint your code
We recommend you use a linter in your IDE but If you like the old-school style you should execute the task:

```
yarn lint
```

Testing reactor components is quite easy. We use JEST and its snapshots feature. Typing:

```
yarn test
```

JEST will check if any snapshot has changed, if you get an error could be because it's a real error or just because you have changed the JSX of your component. In this case you should update your snapshot typing:

```
yarn test --u
```

### Releasing a new version of reactor
Typing `yarn release` our process of building will start:
  - Creating a new tag using mayor/minor/patch scheme
  - Building a compiled version
  - Publishing changes in the storybook minube.github.com/reactor
