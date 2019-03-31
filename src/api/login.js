import request from '@/utils/request';

export function loginByUsername(account, password) {
  const data = {
    account,
    password,
  };
  return request({
    url: '/login/login',
    method: 'post',
    data,
  });
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post',
  });
}

export function getUserInfo(data) {
  return request({
    url: '/login/info',
    method: 'post',
    data,
  });
}

