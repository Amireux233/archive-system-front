// eslint-disable-next-line
import Mock from 'mockjs';

const count = 100;
const UserData = [];

for (let i = 0; i < count; i += 1) {
  UserData.push(Mock.mock({
    id: '@increment',
    'type|1': ['0', '1', '2', '3'],
    name: '@cword(2, 3)',
    phone: '@natural(10000000000, 99999999999)',
    register_time: '@time("T")',
    email: '@email',
    'status|1': ['0', '1'],
  }));
}

UserData.forEach((user) => {
  if (user.type !== '2') {
    user.status = '0';
  }
});

export default {
  getUser(request) {
    const { name, phone, pageSize, currentPage, checkedTypes } = JSON.parse(request.body);
    let users = JSON.parse(JSON.stringify(UserData));
    if (name) {
      users = users.filter(user => user.name.includes(name));
    }
    if (phone) {
      users = users.filter(user => user.phone.toString().includes(phone));
    }
    if (checkedTypes) {
      users = users.filter(user => checkedTypes.some(checkedType => checkedType === user.type));
    }
    const total = users.length;
    users = users.filter((user, index) =>
      index >= (currentPage - 1) * pageSize && index < currentPage * pageSize);
    return { users, total };
  },
  modifyUser(request) {
    const { id, type, status } = JSON.parse(request.body);
    console.log(status === '1');
    for (let i = 0; i < count; i += 1) {
      const user = UserData[i];
      if (user.id === id) {
        if (type) user.type = type;
        if (status === '0' || status === '1') {
          console.log(status);
          user.status = status;
        }
      }
    }
    return 'success';
  },
};
