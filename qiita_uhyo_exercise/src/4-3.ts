namespace T4_3 {
  interface EventPayloads {
    start: {
      user: string;
    };
    stop: {
      user: string;
      after: number;
    };
    end: {};
  }

  // type Exact<T, R> = T extends R
  //   ? R extends T
  //     ? T
  //     : never
  //   : never

  /**
   * EvがUnionかどうかを判定。
   *
   * Ev extends keyof EvPayLoads ?  (...) : never でEvがUnionのときにUnion distributionが発生する。else節には今回の場合絶対にこないのでneverを返している
   * OriginalEv[] extends Ev[] で、OriginalEvがUnionかどうかをチェック。
   * []をつけてUnion distributionを抑止している。
   * 尚、 Ev[] extends OriginalEv[]　だとNG。"start" extends "start" | "stop" になってしまいtrueになるため。
   *
   */
  type CheckUnion<Ev, OriginalEv, EvPayLoads> = Ev extends keyof EvPayLoads
    ? OriginalEv[] extends Ev[]
      ? EvPayLoads[Ev]
      : never
    : never;

  class EventDischarger<E> {
    emit<Ev extends keyof E>(eventName: Ev, payload: CheckUnion<Ev, Ev, E>) {
      // 省略
    }
  }

  // 使用例
  const ed = new EventDischarger<EventPayloads>();
  ed.emit("start", {
    user: "user1",
  });
  ed.emit("stop", {
    user: "user1",
    after: 3,
  });
  ed.emit("end", {});

  // エラー例
  ed.emit<"start" | "stop">("stop", {
    //@ts-expect-error
    user: "user1",
  });

  // エラー例
  ed.emit("start", {
    user: "user2",
    //@ts-expect-error
    after: 0,
  });
  //@ts-expect-error
  ed.emit("stop", {
    user: "user2",
  });
  //@ts-expect-error
  ed.emit("foobar", {
    foo: 123,
  });
}
