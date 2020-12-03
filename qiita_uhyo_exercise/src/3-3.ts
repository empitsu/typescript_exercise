namespace T3_3 {
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

  class EventDischarger<E> {
  emit<Ev extends keyof E>(eventName: Ev, payload: E[Ev]) {
      // 省略
    }
  }

  // 使用例
  const ed = new EventDischarger<EventPayloads>();
  ed.emit("start", {
    user: "user1"
  });
  ed.emit("stop", {
    user: "user1",
    after: 3
  });
  ed.emit("end", {});

  // エラー例
  ed.emit("start", {
    user: "user2",
  //@ts-expect-error
    after: 0
  });
    //@ts-expect-error
  ed.emit("stop", {
    user: "user2"
  });
  //@ts-expect-error
  ed.emit("foobar", {
    foo: 123
  });
}
