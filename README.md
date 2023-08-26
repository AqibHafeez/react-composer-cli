# 🚀 🚀  React Composer CLI 🚀 🚀 

Create React components effortlessly with React Composer CLI! This open-source package offers a command-line interface (CLI) for generating React components, making it easier and faster to kickstart your React projects. While it's the initial release and there is a lot more coming to enhance your component generator, such as different component templates, tests, State and Props support and more. This tool is designed to simplify component creation and boost your productivity.


# Why React Composer CLI?

As a React developer, you might have noticed the lack of a built-in CLI for generating components similar to Angular. React Composer CLI fills this gap by providing you with the following key features:

* Rapidly generate functional or class components with a single command.
* Simple and intuitive CLI for component generation.
* Customizable component templates for future expansions.
* Saves you valuable time by automating the boilerplate code.
* A perfect companion for your React projects.



## Installation and Usage

 #### 1. Install the package globally and provide details in the CLI.

```sh
npm install -g react-composer-cli
```

```sh
react-composer-cli generate
```

#### 2.  Using 'npx' to Run Without Global Installation:

``` sh
npx react-composer-cli generate
```
### Available Options in Interactive Mode
- **Component Name:** Enter the desired name for your component..
- **Component Language:**  Select the preferred programming language for your component (JS or TSX).
- **Component Type:** Choose between generating a functional component or a class component.
- **Component Styling:** Decide on the styling approach for your component (CSS or SCSS).

# Changelog
## [1.0.1] - 2023-08-25
- **Lifecycle Methods for Class Components:** Now you can take advantage of the power of class components with added lifecycle methods. This allows you to efficiently manage component initialization, updates, and cleanup.
- **Hooks for Functional Components:** Embrace the modern approach to React development by utilizing Hooks in functional components. Enjoy streamlined state management and effects without the need for class structures.

## [1.0.0] - 2023-08-15

- **Interactive Mode:** React Composer CLI now supports an interactive mode that makes component generation even more user-friendly and intuitive. Instead of typing commands, you can simply run the utility and interactively provide input for component generation.

- **Language Support:** The utility now supports both JavaScript (JS) and TypeScript (TS) when generating components, providing you with the flexibility to choose the language that best fits your project's requirements.

- **Styling Options:** You can now opt for traditional CSS or the more advanced SCSS for styling your components. The utility supports both CSS and SCSS files, allowing you to maintain consistent and organized styles throughout your project.

- **Organized Structure:** Components generated using the utility are now placed within their own separate folders. This structural enhancement promotes cleaner project organization, making it easier to locate and work with specific components as your project scales.

- **Automatic Capitalization:** We've introduced a feature that automatically capitalizes the first letter of generated component names. This adheres to the common practice of starting component names with a capital letter.

## [0.0.3] - 2023-08-14

### Initial Release

- Basic functionality for generating React components.
- Support for generating functional and class-based components.
- Basic support for CSS styling.

## What's incoming next?

* Improved State and Props support
* Customs Paths
* Tests
* Much More

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.



## License

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
