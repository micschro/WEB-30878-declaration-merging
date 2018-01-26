declare module 'subpath/module' {
  export interface Foo {}
  /**
   * The Foo class
   */
  export class Foo {
    /**
     * Does foo stuff
     * @param {IBar} the bar
     */
    doFooStuff(bar:IBar):IBar
  }

  /**
   * This is an IBar
   */
  export interface IBar {
    /**
     * Does bar stuff
     */
    doBarStuff():void
  }
  var IBar: {
    isInstance(o:any):o is IBar;
  }

  /**
   * Hi, I'm just an interface.
   */
  export interface IBaz {}
}