namespace T2_5 {

  type UpdateFunction<T> = (args:T)=>T
  declare function useState<T>(state:T | (()=>T)):[T,(args:T |UpdateFunction<T>)=>void]

  // 使用例
  // number型のステートを宣言 (numStateはnumber型)
  const [numState, setNumState] = useState(0);
  // setNumStateは新しい値で呼び出せる
  setNumState(3);
  // setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
  const newValue = setNumState(state => state + 10);

  // 使用例2
  // 初期値を関数で設定する
  const [flgState, setFlgState] = useState<boolean>(()=>{
    return true
  })

  setFlgState(false)

  // 型引数を明示することも可能
  const [anotherState, setAnotherState] = useState<number | null>(null);
  setAnotherState(100);

  // エラー例
  //@ts-expect-error
  setNumState('foobar');
}
