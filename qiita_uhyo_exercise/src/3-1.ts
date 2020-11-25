namespace T3_1 {
  function mapFromArray<T extends { [k:string]:unknown}, K extends keyof T>(arr:T[], key:K):Map<T[K],T> {
    const result= new Map<T[K],T>();
    for (const obj of arr) {
      result.set(obj[key], obj);
    }
    return result;
  }

  // 使用例
  const data = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
  ];
  const dataMap = mapFromArray(data, "id");

  /*
  dataMapは
  Map {
    1 => { id: 1, name: 'John Smith' },
    2 => { id: 2, name: 'Mary Sue' },
    100 => { id: 100, name: 'Taro Yamada' }
  }
  というMapになる
  */

  // エラー例
  //@ts-expect-error
  mapFromArray(data, "age");
}
