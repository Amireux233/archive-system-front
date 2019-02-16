const userMap = {
  admin: {
    roles: ['admin'],
    token: 'editor',
    name: 'Super Admin',
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    name: 'Normal Editor',
  },
};

export default {
  loginByUsername(config) {
    const { username } = JSON.parse(config.body);
    console.log('Hello');
    return userMap[username];
  },
  getUserInfo() {
    return {
      roles: ['admin'],
      name: 'Super Admin',
    };
  },
  logout() {
    return 'success';
  },
};
