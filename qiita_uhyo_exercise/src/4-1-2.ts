//別解2
namespace T4_1_2 {
  function getFoo<T extends Record<string, any>>(
    obj: T
  ): T extends { foo: infer U } ? U : unknown {
    return obj.foo;
  }

  // 使用例
  // numはnumber型
  const num = getFoo({
    foo: 123,
  });
  // strはstring型
  const str = getFoo({
    foo: "hoge",
    bar: 0,
  });
  // unkはunknown型
  const unk = getFoo({
    hoge: true,
  });

  // エラー例
  //@ts-expect-error
  getFoo(123);
  //@ts-expect-error
  getFoo(null);
}
