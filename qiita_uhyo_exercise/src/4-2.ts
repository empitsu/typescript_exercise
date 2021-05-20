namespace T4_2 {
  type MyPick<T, U extends keyof T> = { [K in U]: T[K] };
  type MyExclude<U, K> = U extends K ? never : U;
  type MyOmit<T, U extends keyof T> = MyPick<T, MyExclude<keyof T, U>>;
  type MyOmit2<T, U extends keyof T> = { [K in MyExclude<keyof T, U>]: T[K] };

  type TestExclude = MyExclude<"hoge" | "foo" | "fuga", "fuga" | "foo">;
  type TestPick = MyPick<{ foo: true; hoge: string; huga: number }, "hoge">;
  type TestOmit = MyOmit<{ foo: true; hoge: string; huga: number }, "foo">;
  type TestOmit2 = MyOmit2<{ foo: true; hoge: string; huga: number }, "foo">;

  function giveId<T extends { [k: string]: unknown }>(
    obj: T
  ): MyOmit<T, "id"> & { id: string } {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
      ...obj,
      id,
    };
  }

  // 使用例
  /*
   * obj1の型は { foo: number; id: string } 型
   */
  const obj1 = giveId({ foo: 123 });
  /*
   * obj2の型は { num : number; id: string } 型
   */
  const obj2 = giveId({
    num: 0,
    id: 100,
  });
  // obj2のidはstring型なので別の文字列を代入できる
  obj2.id = "";
}
