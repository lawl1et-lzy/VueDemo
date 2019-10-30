/* eslint-disable no-console */
// string number boolean undefined null array object symbol
/**
 * [原始数据类型]
 * 1. boolean
 * 2. number
 * 3. string
 * 4. 空值
 *    4.1 JavaScript 没有空值[void]的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
 *    4.2 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 [undefined] 和 [null]
 * 5. Null 和 Undefined
 *    5.1 可以用[null] 和 [undefined] 来定义两种类型
 *    5.2 [null] 和 [undefined] 是所有类型的子类型，也就是可以赋值给其他类型，[TypeScript2.0]中不行
 */
// // 1. boolean
// const isDone: boolean = true
// // 2. number
// const isNumber: number = 1
// // 3. string
// const myName: string = 'lawliet'
// // 4.1 JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
// function fn() :void {
//   console.log('void')
// }
// // 4.2 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 [undefined] 和 [null]
// let unusable: void = undefined
// // let unusable: void = 1 // 不能将类型“1”分配给类型“void”。
// // 5.2 [null] 和 [undefined] 是所有类型的子类型，也就是可以赋值给其他类型，[TypeScript2.0]中不行
// let x : string | number | undefined
// x = undefined
// // let a2: String = null // 不能将类型“null”分配给类型“String”。
// // let a4: String = undefined // 不能将类型“undefined”分配给类型“String”。
/**
 * [任意值]
 *  声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
 * 1. 普通类型，在赋值过程中改变[赋值类型]是[不允许]的
 * 2. 如果是[any]类型，则可以
 * 3. 变量如果在声明的时候，[未指定其类型]，那么它会被识别为[任意值类型]
 */
// // 1. 普通类型，在赋值过程中改变[赋值类型]是[不允许]的
// let c1: string = 'lawliet'
// c1 = 1 // 不能将类型“1”分配给类型“string”。
// // 2. 如果是[any]类型，则可以
// let c2: any = 'lawliet'
// c2 = 1
// // 3. 变量如果在声明的时候，[未指定其类型]，那么它会被识别为[任意值类型]
// let c3
// c3 = 'lawliet'
// c3 = 1
/**
 * [联合类型]
 * 1. 定义一个变量为多种[类型]
 * 2. 访问联合类型的属性或方法
 *  2.1 联合类型只能访问所有类型里面[共有的方法]
 */
// // 1. 定义一个变量为多种[类型]
// const d1: String | Number = 'aaa'
// const d2: String | Number = 1
// // 2.1 联合类型只能访问所有类型里面[共有的方法]
// function getLength (something: string | number): number {
//   return something.length // 2.1 联合类型只能访问所有类型里面[共有的方法]
// }
/**
 * [对象类型接口]
 * 1. 定义的属性[lawliet]是接口[Person]的子集
 * 2. 接口可以定义[可选属性]
 * 3. 接口可以定义[任意属性]
 * 4. 接口可以设置[只读属性]：只读的约束存在于给[对象赋值]的时候，并非给[只读属性]赋值的时候。
 * 5. 一旦[任意属性]值的类型值定义以后，那么接口定义的[类型]都必须是它的子集
 */
// interface Person {
//   readonly id: number,
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }
// let lawliet: Person = {
//   id: 1,
//   name: 'Lawliet',
//   age: 16,
//   gender: 'mail'
// }
// lawliet.name = 'niya'
// lawliet.id = 1 // Cannot assign to 'id' because it is a read-only property.
/**
 * [数组的类型]
 * 1. 允许数组存在多种类型
 * 2. 数组泛型
 * 3. 用接口表示数组
 * 4. 类数组：不能用普通的数组的方式来描述，而应该用接口
 *    4.1 常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
 */
// // 1. 允许数组存在多种类型
// let arr1: (number | string)[] = [1,2,3,4,'5']
// // 2. 数组泛型
// let arr2: Array<number|string> = [1,'2']
// // 3. 用接口表示数组
// interface Arr {
//   [i: number]: string | number
// }
// let newArr: Arr = ['1','2', 1]
// // 4. 类数组：不能用普通的数组的方式来描述，而应该用接口
// interface Args {
//   [index: number]: number,
//   length: number,
//   callee: Function
// }
// function sum() {
//   const args: Args = arguments
// }
/**
 * [函数]
 * 1. 输入多余的（或者少于要求的）参数，都是不被允许的
 * 2. 函数表达式
 *    2.1 普通表达式
 *    2.2 给函数添加类型
 * 3. 用接口定义函数的形状
 * 4. 可选参数
 *    4.1 使用[?]表示可选参数
 *    4.2 [可选参数] 后面不允许在出现 [必选参数],但是可以出现多个[可选参数]
 * 5. 允许使用ES6函数默认值
 * 6. 允许使用剩余参数 [...rest]
 * 7. 函数重载
 *    7.1 TypeScript 会优先从最前面的函数开始匹配
 */
// 1. 输入多余的（或者少于要求的）参数，都是不被允许的
// function fn (x: number, y: string): number {
//   return x + Number(y)
// }
// fn(1) // An argument for 'y' was not provided.
// // 2.1 普通表达式
// const fn2 = (x: number, y:number): string => {
//   return String(x + y)
// }
/**
 * [函数] 2.2 补充
 * - 上面的定义方式，实际上只对等号[右侧的匿名函数]进行了类型的定义，而等号左边的[fn2]，是通过
 * 赋值操作进行[类型推论]推断出来的，如果需要对左边的值添加类型的定义，需要如下代码.
 *
 * - ts中的[=>]和 ES6 中的 [=>]不一样，
 * ts中 [=>]用于表示函数的定义
 *    左边是输入类型，需要用括号包裹起来
 *    右边是输出类型
 */
// const fn3: (x: number, y:number) => number = (x: number, y: number): number => {
//   return x + y
// }
// // 3. 用接口定义函数的形状
// interface Fn4 {
//   (
//     x: number,
//     y: number,
//     z: number
//   ) : number
// }
// const fn4: Fn4 = (x: number, y: number, z: number): number => {
//   return x + y + z
// }
// // 4. 可选参数
// interface Fn5 {
//   (
//     x: number,
//     y?: number,
//     z?: number
//   ): number
// }
// const fn5: Fn5 = (x: number, y:number = 1, z: number = 2): number => {
//   return x + y + z
// }
// // 7. 函数重载
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: string | number): string | number {
//   const xtype = typeof x
//   switch(xtype) {
//     case 'string':
//       return String(x).split('').reverse().join('')
//     case 'number':
//       return Number(String(x).split('').reverse().join(''))
//   }
//   return 0
// }
/**
 * [类型断言]
 * [<类型>值] 或 [值as类型]
 * 在tsx语法（React的jsx语法的ts版）中必须用后一种
 */
// const getLength : (x: string | number) => number = (x: string | number) : number => {
//   return (x as string).length
//   // return (<string>x).length
// }
/**
 * [declare]
 *   只能定义，不能[赋值]或者[实现方法]
 *   通常会把声明语句放到一个单独的文件 [declare.d.ts]
 *  1. declare var: 定义全局变量的类型
 *  2. declare function: 定义函数
 *  3. declare class: 只能定义类型，不能用来定义具体的实现
 *  4. declare enum: 定义枚举
 *  5. declare namespace: 定义命名空间
 *    5.1 declare 使用接口 [interface] 和 [type]
 */
// // 1. declare var: 定义全局变量的类型
// declare var a: string
// declare const b = 1
// declare let c: Array<number>
// a = '1'
// c = [1,2,3,4]
// // 2. declare function: 定义函数
// declare function fn6 (x: number, y:number): void
// // 3. declare class 只能定义类型，不能用来定义具体的实现
// declare class Animal {
//   constructor (name: string)
//   sayHi(): string
// }
// // 4. declare enum 定义枚举
// declare enum Directions{
//   Up = 1,
//   Down = 2,
//   Left = 3,
//   Right = 4
// }
// Directions.Left
// // 5. declare namespace 定义命名空间
// interface Settings {
//   name: string
//   headders?: object
// }
// declare namespace Axios {
//   function ajax(url: string, settings?: Settings): void
//   const version = 'v1.0.0'
//   class Event {
//     blur(eventType: EventType): void
//   }
//   enum EventType {
//     type1 = '1',
//     type2 = '2',
//     type3 = '3'
//   }
// }
// Axios.ajax('https://www.baidu.com',
//   {
//     name: 'lawliet',
//     headders: {
//       tk: '123',
//       si: '456'
//     }
//   }
// )
// Axios.version
// new Axios.Event().blur(Axios.EventType.type1)
/**
 * [ECMAScript内置对象]
 * 1. ECMAScript 标准的内置对象
 */
// // 1. ECMAScript 标准的内置对象
// let e: Error = new Error('Error occurred')
// let d: Date = new Date()
/**
 * [字符串字面量类型]
 * 1. 通过[interface]定义
 * 2. 通过[type]定义
 */
// // 1. 通过[interface]定义
// interface EventNames {
//   names: 'click' | 'scroll' | 'mousemove'
// }
// function handleEvent(ele: Element, event: EventNames):void {
//   // do
// }
// handleEvent(document.querySelector('#id'), { names: 'scroll'})
// // 2. 通过[type]定义
// type EventNames2 = 'click' | 'scroll' | 'mousemove';
// function fn7(ele: Element, event: EventNames2):void {
//   // do
// }
// fn7(document.querySelector('#id'), 'mousemove')
/**
 * [元组]
 *    [数组]合并了相同类型的对象
 *    [元组]合并了不同类型的对象
 */
var tom = ['Tom', 25];
var micky = ['Micky', 25];
/**
 * [枚举]
 *    [只能在定义的时候赋值]
 *    1. 枚举成员会被[默认]赋值为从[0]开始递增的数字，同时也会对枚举值到枚举名进行反向映射
 *    2. 枚举成员也可以手动赋值
 *        2.1 未手动赋值的枚举项会接着[上一个枚举项]递增，[递增步长仍为1]
 *        2.2 未手动赋值的枚举项与手动赋值的重复了，TS 是不会觉察到这一点的
 *        2.3 手动赋值的枚举项可以不是数字，此时可以使用[类型断言]来让tsc无视类型检查或者[不使用]
 *            2.3.1 如果赋值的枚举项[不是数字] 或者 [通过计算所得项]，那么未手动赋值的枚举项将不会[自动增加]，ts 编译报错
 *    3. 常数枚举： 将枚举定义为[const]
 *        3.1 不能包含[计算成员]，如果包括，会在编译的时候报错
 */
// // 1. 枚举成员会被[默认]赋值为从[0]开始递增的数字，同时也会对枚举值到枚举名进行反向映射
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
// console.log(Days["Sun"] === 0); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// //  2. 枚举成员也可以手动赋值
// const cc = 'aaaaaa'
// enum Days2 {
//   Sun, // 0
//   Mon, // 1
//   Tue, // 2
//   Wed, // 3
//   Thu = 3, 
//   Fri, 
//   Sat = 'lawliet' as any,
//   a = 1,
//   b,
//   c = cc.length, // 通过计算所得项
// }
// // console.log('Wed', Days2.Wed) // 3
// // console.log('Thu', Days2.Thu) // 3
// // console.log('Days2[3]', Days2[3]) // Thu
// // 3. 常数枚举： 将枚举定义为[const]
// const enum Directions {
//   Up,
//   Down,
//   Left,
//   Right
// }
// console.log('Directions.Up', Directions.Up)
/**
 * 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
 *    1. 对象（Object）：类的实例，通过 new 生成
 *    2. 面向对象（OOP）的三大特性：[封装]、[继承]、[多态]
 *    3. 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
 *    4. 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 *    5. 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 Cat 和 Dog 都继承自 Animal，但是分别实现了自己的 eat 方法。此时针对某一个实例，我们无需了解它是 Cat 还是 Dog，就可以直接调用 eat 方法，程序会自动判断出来应该如何执行 eat
 *    6. 存取器（getter & setter）：用以改变属性的读取和赋值行为
 *    7. 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 public 表示公有属性或方法
 *    8. 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 *    9. 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口
 */
/**
 * [TypeScript类]
 *    1. 修饰符
 *      1.1 [public]: 修饰的[属性]或[方法]是[公有]的
 *        可以在任何地方被访问，默认所有的属性和方法都是[public]
 *
 *      1.2 [private]: 修饰的[属性]或[方法]是[私有]的
 *        1.2.1 不能在声明他的类的外部访问
 *        1.2.2 作用在[constructor]中，该类[不允许]被继承或者实例化
 *
 *      1.3 [protected]: 修饰的[属性]或[方法]是[受保护]的
 *        1.3.1 不能在声明他的类的外部访问，但是他在[子类]中允许访问
 *        1.3.2 作用在[constructor]中，该类[允许]被继承，[不允许]被实例化
 *
 *      1.4 [readonly]: 只读属性
 *        1.4.1 只允许出现在属性声明或索引签名中
 *        1.4.2 和其他修饰符同时存在的话，需要写在后面
 *
 *      1.5 [abstract]: 抽象类
 *        1.5.1 用于定义抽象类和抽象方法
 *        1.5.2 抽象类是[不允许]被实例化
 *        1.5.3 抽象类中的抽象方法[必须]被子类实现
 */
// // 1.1 [public]: 修饰的[属性]或[方法]是[公有]的
// class Animal {
//   public name: any;
//   public constructor (name: any) {
//     this.name = name
//   }
// }
// let a = new Animal('Cat')
// console.log(a.name)
// a.name = 'Dog'
// console.log(a.name)
// // 1.2 [private]: 修饰的[属性]或[方法]是[私有]的
// class Animal {
//   private name: any;
//   constructor (name: any) {
//     this.name = name
//   }
//   // 公有方法
//   public bow(): boolean {
//     return this.hasName()
//   }
//   // 公有方法
//   public bow1(): boolean {
//     return this.name
//   }
//   // 私有方法
//   private hasName(): boolean{
//     return !!this.name
//   }
//   // 受保护的方法
//   protected showName(): string {
//     return this.name
//   }
// }
// let a = new Animal('Cat')
// console.log(a.name) // 属性“name”为私有属性，只能在类“Animal”中访问。
// a.name = 'Dog' // 属性“name”为私有属性，只能在类“Animal”中访问。
// console.log(a.hasName()) // 属性“hasName”为私有属性，只能在类“Animal”中访问。
// console.log(a.showName()) // 属性“showName”受保护，只能在类“Animal”及其子类中访问。
// console.log(a.bow()) // Cat
// class Monkey extends Animal {
//   public sound: any
//   public constructor (name: any, sound?: any) {
//     super(name)
//     this.sound = sound
//   }
//   public visiteAge(): string {
//     return this.showName() // 可以访问父类的 受保护的方法
//   }
//   public canVisiteAnimal (): void {
//     // this.bow() // 可以访问
//     // this.hasName() // 属性“hasName”为私有属性，只能在类“Animal”中访问。
//     // this.showName() // 可以访问
//   }
//   public showName(): string {
//     return this.sound
//   }
// }
// let monkey = new Monkey('Monkey', '汪汪汪')
// console.log(monkey.visiteAge()) // 汪汪汪
// console.log(monkey.showName())  // 汪汪汪
// console.log(monkey.hasName()) // 性“hasName”为私有属性，只能在类“Animal”中访问。
// console.log(monkey.showName()) // 属性“showName”受保护，只能在类“Animal”及其子类中访问。
// // 1.4 [readonly]: 只读属性
// class Animal {
//   public constructor (readonly name: any) {
//     this.name = name
//   }
// }
// const dog = new Animal('Dog')
// console.log(dog.name)
// dog.name = 'cat' // Cannot assign to 'name' because it is a read-only property
// // 1.5 [abstract]: 抽象类
// abstract class Animal {
//   public name: any;
//   public constructor (name: any) {
//     this.name = name
//   }
//   public abstract sayHi(): string
//   protected abstract sayHello(): void 
// }
// class Cat extends Animal {
//   public constructor (name: string) {
//     super(name)
//   }
//   public sayHi(): string {
//     return `${this.name} hi`
//   }
//   public sayHello() : string {
//     return `${this.name} hello`
//   }
// }
// let cat = new Cat('cat')
// console.log(cat.sayHi())
/**
 * [类与接口]
 * 1. 类实现[1-*]个接口
 * 2. 接口继承接口
 * 3. 接口继承类
 * 4. 混合类型
 * 5. 声明合并
 */
// // 1. 类实现[1~*]个接口
// interface Alarm {
//   alert(): any
// }
// interface Light {
//   lightOn(): any
//   lightOff(): any
// }
// class Door{
// }
// // 类实现1个接口
// class SecurityDoor extends Door implements Alarm {
//   alert() {
//     console.log('SecurityDoor alert')
//   }
// }
// new SecurityDoor().alert()
// // 类实现多个接口
// class Car implements Alarm, Light {
//   alert() {
//     console.log('Car alert')
//   }
//   lightOn() {
//     console.log('Car lightOn')
//   }
//   lightOff() {
//     console.log('Car lightOff')
//   }
// }
// new Car().alert()
// // 2. 接口继承接口
// interface Alarm {
//   alert(): any
// }
// interface LightableAlarm extends Alarm {
//   lightOn(): any
//   lightOff(): any
// }
// class taxi implements LightableAlarm {
//   alert() {
//     console.log('Car alert')
//   }
//   lightOn() {
//     console.log('Car lightOn')
//   }
//   lightOff() {
//     console.log('Car lightOff')
//   }
// }
// // 3. 接口继承类
// class point {
//   public x: number
//   public y?: number
//   public constructor(x: number, y?: number) {
//     this.x = x
//     this.y = y
//   }
// }
// interface Point3d extends point {
//   z: number
// }
// let point3d: Point3d = {
//   x: 1,
//   y: 2,
//   z: 3
// }
// // 4. 混合类型
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }
// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) {}
//   counter.interval = 123
//   counter.reset = function () {}
//   return counter
// }
/**
 * [泛型]
 *  1. 简单的例子
 *  2. 多个类型参数
 *  3. 泛型约束
 *  4. 泛型接口
 *    4.1 简单的例子
 *    4.2 泛型例子
 *    4.3 泛型参数提前到接口名上
 *  5. 泛型类
 */
// // 1. 简单的例子
// const createArray: (length: number, text: any) => Array<any> = (length: number, text: any) => {
//   let result: Array<any> = []
//   for(let i = 0; i < length; i++) {
//     result[i] = text
//   }
//   return result
// }
// console.log(createArray(3, 'lawliet'))
// // 泛型写法1
// const createArray2: <T>(length: number, text: any) => Array<T> = <T>(length: number, text: any) => {
//   let result: Array<T> = [];
//   for(let i = 0; i < length; i++) {
//     result[i] = text
//   }
//   return result
// }
// console.log(createArray2(3, 'niya'))
// // 泛型写法2
// function createArray3<T>(length: number, text: any): Array<T> {
//   let result: Array<T> = [];
//   for(let i = 0; i < length; i++) {
//     result[i] = text
//   }
//   return result
// }
// // 2. 多个类型参数
// // 泛型写法1
// const swap: <T, U>(tuple: [T, U]) => [U, T] = <T, U>(tuple: [T, U]) => {
//   return [tuple[1], tuple[0]]
// }
// // 泛型写法2
// function swap2<T, U>(tuple: [T, U]): [U, T] {
//   return [tuple[1], tuple[0]]
// }
// // 3. 泛型约束
// interface Lengthwise {
//   length: number
// }
// function fn8<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length)
//   return arg
// }
// 4. 泛型接口
// // 4.1 简单的例子
// interface ArrayFunc {
//   (
//     length: number,
//     value: string
//   ): Array<any>
// }
// let CreateArrayFunc: ArrayFunc
// CreateArrayFunc = (length: number, value: string) => {
//   let newArr: Array<any> = []
//   for(let i = 0 ; i < length; i++) {
//     newArr[i] = value
//   }
//   return newArr
// }
// // 4.2 泛型例子
// interface ArrayFunc {
//   <T>(
//     length: number,
//     value: T
//   ): Array<T>
// }
// let CreateArrayFunc: ArrayFunc;
// CreateArrayFunc = <T>(length: number, value: T): Array<T> => {
//     let newArr: Array<T> = []
//     for(let i = 0 ; i < length; i++) {
//       newArr[i] = value
//     }
//     return newArr
// }
// // 4.3 泛型参数提前到接口名上
// interface ArrayFunc<T> {
//   (
//     length: number,
//     value: T
//   ): Array<T>
// }
// let CreateArrayFunc: ArrayFunc<any>;
// CreateArrayFunc = <T>(length: number, value: T): Array<T> => {
//     let newArr: Array<T> = []
//     for(let i = 0 ; i < length; i++) {
//       newArr[i] = value
//     }
//     return newArr
// }
// // 5. 泛型类
// class Fn9<T>{
//   x1: T
//   add: (x: T, y: T) => T
// }
// let fn9 = new Fn9<number>()
// fn9.x1 = 9
// fn9.add = (x, y) => {
//   return x + y
// }
// console.log(fn9.add(1, 2))
