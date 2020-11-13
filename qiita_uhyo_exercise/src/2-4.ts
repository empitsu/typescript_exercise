namespace T2_4 {

  function giveId<T extends {[k:string]:unknown}>(obj:T):T & {id:string} {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
      ...obj,
      id
    };
  }

  // 使用例
  const obj1: {
    id: string;
    foo: number;
  } = giveId({ foo: 123 });
  const obj2: {
    id: string;
    num: number;
    hoge: boolean;
  } = giveId({
    num: 0,
    hoge: true
  });

  // エラー例
  // @ts-expect-error
  const obj3: {
    id: string;
    piyo: string;
  } = giveId({
    foo: "bar"
  });
}
