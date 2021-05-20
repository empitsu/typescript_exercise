type AtLeastOne<Obj> = Partial<Obj> 

type MyExclude<U,K>= U extends K ? never: U;

type PartiallyPartial<T, U extends keyof T> = {[K in U]?:T[K]} & {[K in MyExclude<keyof T, U>]:T[K]}



type hoge<Obj> = {[k in keyof Obj]: Obj[k] extends undefined ? (): never}


// 使用例
interface Options {
  foo: number;
  bar: string;
  baz: boolean;
}
function test(options: AtLeastOne<Options>) {
  const { foo, bar, baz } = options;
  // 省略
}
test({
  foo: 123,
  bar: "bar",
});
test({
  baz: true
});

// エラー例
test({});
