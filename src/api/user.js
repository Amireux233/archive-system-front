import request from '@/utils/request';

export function getUser(data) {
  return request({
    url: '/user',
    method: 'post',
    data,
  });
}

export function modifyUser(data) {
  return request({
    url: '/user/modify',
    method: 'post',
    data,
  });
}
