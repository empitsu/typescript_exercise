namespace T1_4 {

  function sumOfPos(arr:number[]):number {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
  }

  // 使用例
  const sum: number = sumOfPos([1, 3, -2, 0]);

  // エラー例
  // @ts-expect-error
  sumOfPos(123, 456);
  // @ts-expect-error
  sumOfPos([123, "foobar"]);
}
