namespace T3_2 {
  type MyPartial<T extends {[k:string]:unknown}> = { [K in keyof T]?: T[K]}
  
  // 使用例
  /*
   * T1は { foo?: number; bar?: string; } となる
   */
  type T1 = MyPartial<{
    foo: number;
    bar: string;
  }>;
  
  const hoge:T1 = {
    bar: "hoge"
  }
  
  /*
   * T2は { hoge?: { piyo: number; } } となる
   */
  type T2 = MyPartial<{
    hoge: {
      piyo: number;
    };
  }>;
}
