// eslint-disable-next-line
import Mock from 'mockjs';
import loginAPI from './login';
import orderAPI from './order';
import userAPI from './user';

Mock.mock('/api/login/login', 'post', loginAPI.loginByUsername);
Mock.mock('/api/login/logout', 'post', loginAPI.logout);
Mock.mock('/api/login/info', 'post', loginAPI.getUserInfo);

Mock.mock('/api/order', 'post', orderAPI.getOrderList);
Mock.mock('/api/order/redistrubute', 'post', orderAPI.reDistrubute);

Mock.mock('/api/user', 'post', userAPI.getUser);
Mock.mock('/api/user/modify', 'post', userAPI.modifyUser);

export default Mock;
