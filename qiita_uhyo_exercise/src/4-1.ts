namespace T4_1 {
  type ObjectHasFoo = {
    foo: any
  }

  type SomeObject = { [k:string]: any}

  function getFoo<T extends SomeObject>(obj: T):T extends ObjectHasFoo ? T["foo"]: unknown  {
  return obj.foo;
  }

  // 使用例
  // numはnumber型
  const num = getFoo({
  foo: 123
  });
  // strはstring型
  const str = getFoo({
  foo: "hoge",
  bar: 0
  });
  // unkはunknown型
  const unk = getFoo({
  hoge: true
  });

  // エラー例
  //@ts-expect-error
  getFoo(123);
  //@ts-expect-error
  getFoo(null);
}
