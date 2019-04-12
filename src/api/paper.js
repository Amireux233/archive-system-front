import request from '@/utils/request';

export function fetchPaper(data) {
  return request({
    url: '/paper/find',
    method: 'post',
    data,
  });
}

export function modifyPaper(data) {
  return request({
    url: '/paper/modify',
    method: 'post',
    data,
  });
}
