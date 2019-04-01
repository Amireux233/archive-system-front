import request from '@/utils/request';

export function fetchPaper(data) {
  return request({
    url: '/paper/find',
    method: 'post',
    data,
  });
}

export function reDistrubuteOrder(data) {
  return request({
    url: '/order/redistrubute',
    method: 'post',
    data,
  });
}
