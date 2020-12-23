namespace T4_4 {

  type MyExclude<U,K>= U extends K ? never: U;

  // type MyPartial<T extends {[k:string]:unknown}> = { [K in keyof T]?: T[K]}

  type PartiallyPartial<T, U extends keyof T> = {[K in U]?:T[K]} & {[K in MyExclude<keyof T, U>]:T[K]}


  // 使用例

  // 元のデータ
  interface Data {
    foo: number;
    bar: string;
    baz: string;
  }
  /*
  * T1は { foo?: number; bar?: string; baz: string } 型
  */
  type T1 = PartiallyPartial<Data, "foo" | "bar">;

  const hoge:T1 = {
    baz: "hoge"
  }

  const hoge1:T1 = {
    foo:1,
    baz: "hoge"
  }

  const hoge2:T1 = {
    bar: "hage",
    baz: "hoge"
  }

  // エラー例
  const peke:T1 = {
    // @ts-expect-error
    foo: "a",
    baz: "hoge"
  }
  // @ts-expect-error
  const peke2:T1 = {
    foo: 1,
  }
}
