namespace T1_3 {

  type IsPositiveFunc = (num:number)=>boolean

  const isPositive: IsPositiveFunc = num => num >= 0;

  // 使用例
  isPositive(5);

  // エラー例
  // @ts-expect-error
  isPositive('foo');
  // @ts-expect-error
  const res: number = isPositive(123);

}
