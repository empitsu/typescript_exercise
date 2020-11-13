namespace T2_3 {

  declare function addEventListener(eventName:string,callback:()=>void,options?:boolean | {
    capture?:boolean, once?:boolean, passive?:boolean
  }): void;


  // 使用例
  addEventListener("foobar", () => {});
  addEventListener("event", () => {}, true);
  addEventListener("event2", () => {}, {});
  addEventListener("event3", () => {}, {
    capture: true,
    once: false
  });

  // エラー例
  // @ts-expect-error
  addEventListener("foobar", () => {}, "string");

  addEventListener("hoge", () => {}, {
    capture: true,
    once: false,
    // @ts-expect-error
    excess: true
  });
}
