/**
 * =======================================How Typescript works =================================>
 * 1. Transpilation = true -> TypeScript Transpiler -> JavaScript Transpiler -> JavaScript Code Compiler -> Machine Code Compiler -> Type
 */
/**
 * =======================================Why Typescript Compiles to Javascript =================================>
 * 1. Typescript is a superset of javascript.
 * 2. Javascript is the language that browsers and node.js understand natively. This means that JavaScript is not available in the browser or node.js.
 * 3. Browser cannot directly execute typescript code, so it needs to be converted into JavaScript. This process is called Transpilation.
 */

/**
 * ==============================================Key Reasons =================================>
 * 1. JavaScript compatibility
 * 2. Cross-Platform execution
 * 3. Leveraging Javascript Libraries
 * 4. Backward compatibility
 * 5. Type safety without runtime changes.
 */

/**
 * ============================================== Javascript Compatibility =================================>
 * 1. Why? Typescript is a superset of javascript, meaning it add extra features (like static typing) on top of javascript syntax. However under the hood it's still javascript.
 * example = let message: string = "Hello World";
 * console.log(message);
 * 2. How? Typescript compiler converts typescript code into javascript code. This means that the code you write in typescript will be converted into javascript code that can be executed by the browser or node.js.
 */