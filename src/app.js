/**
 * No documentation for Foo available - IBar declaration in .d.ts is merged (interface and var)
 * @type {IBar}
 */
let bar = null;

/**
 * No documentation for Foo available - Foo declaration in .d.ts is merged (class and interface)
 * @type {Foo}
 */
let foo = null;

/**
 * Documentation for IBaz available - no declaration merging in .d.ts for IBaz
 * @type {IBaz}
 */
let baz = null;