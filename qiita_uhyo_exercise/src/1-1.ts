namespace T1_1 {
  function isPositive(num:number):boolean {
      return num >= 0;
  }

  // 使用例
  isPositive(3);

  // エラー例
  // @ts-expect-error
  isPositive('123');

  // @ts-expect-error
  const numVar: number = isPositive(-5);
}
