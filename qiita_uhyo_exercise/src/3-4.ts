namespace T3_4 {
  const reducer = (
    state: number,
    action:
      | { type: "increment"; amount: number }
      | { type: "decrement"; amount: number }
      | { type: "reset"; value: number }
  ) => {
    switch (action.type) {
      case "increment":
        return state + action.amount;
      case "decrement":
        return state - action.amount;
      case "reset":
        return action.value;
    }
  };

  // 使用例
  reducer(100, {
    type: "increment",
    amount: 10,
  }) === 110;
  reducer(100, {
    type: "decrement",
    amount: 55,
  }) === 45;
  reducer(500, {
    type: "reset",
    value: 0,
  }) === 0;

  // エラー例

  reducer(0, {
    type: "increment",
    //@ts-expect-error
    value: 100,
  });
  // エラー例追加
  reducer(0, {
    type: "decrement",
    //@ts-expect-error
    value: 100,
  });
}
