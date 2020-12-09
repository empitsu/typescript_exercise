namespace T3_5 {
  type Func<A, R> = undefined extends A? (arg?: A) => R: (arg: A) => R;
  // ↓だとAがnumber | undefinedだったとき分配則が働いてしまって、推論結果が((arg?: undefined) => number) | ((arg: number) => number)という関数のunionになってしまいうまく行かない。
  // type Func<A, R> = A extends undefined? (arg?: A) => R: (arg: A) => R;

  // 使用例
  const f1: Func<number, number> = num => num + 10;
  const v1: number = f1(10);

  const f2: Func<undefined, number> = () => 0;
  const v2: number = f2();
  const v3: number = f2(undefined);

  const f3: Func<number | undefined, number> = num => (num || 0) + 10;
  const v4: number = f3(123);
  const v5: number = f3();

  // エラー例
  //@ts-expect-error
  const v6: number = f1();
}
