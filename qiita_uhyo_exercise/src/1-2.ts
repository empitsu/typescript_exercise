namespace T1_2 {

  type User = {
      name:string,
      age:number,
      private:boolean
  }

  function showUserInfo(user: User) {
      // 省略
  }

  // 使用例
  showUserInfo({
      name: 'John Smith',
      age: 16,
      private: false,
  });

  // エラー例
  // @ts-expect-error
  showUserInfo({
      name: 'Mary Sue',
      private: false,
  });
  // @ts-expect-error
  const usr: User = {
      name: 'Gombe Nanashino',
      age: 100,
  };
}
