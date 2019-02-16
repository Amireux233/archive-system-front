import request from '@/utils/request';

export function getOrder(data) {
  return request({
    url: '/order',
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
