// eslint-disable-next-line
import Mock from 'mockjs';

const OrderData = [];
const count = 100;

for (let i = 0; i < count; i += 1) {
  OrderData.push(Mock.mock({
    order_id: '@increment', // 订单 ID
    number: '@increment', // 订单编号
    staff_id: '@increment', // 技术员 ID
    staff_name: '@cword(2, 3)', // 技术员姓名
    user_id: '@increment', // 用户 ID
    user_name: '@cword(2, 3)', // 用户姓名
    user_phone_number: '@natural(10000000000, 99999999999)', // 用户电话
    time: '@time("T")', // 用户下单时间戳
    'status|1': [0, 1, 2, 3, 4], // 订单状态
    'vip|1': [0, 1], // VIP 标志
    user_confirm_time: '@time("T")', // 订单完成时间
    staff_confirm_time: '@time("T")', // 技术员确认接单接单时间
    distribute_time: '@time("T")', // 系统分配订单的时间
    computer_id: '@increment', // 关联电脑 ID
    'mode|1': [0, 1], // 模式, 普通为 0, 私活为 1
    description: '@cword(50, 150)', // 故障描述
  }));
}

export default {
  getOrderList(request) {
    const {
      currentPage,
      pageSize,
      staffName,
      userName,
      userPhoneNumber,
    } = JSON.parse(request.body);
    let orders = JSON.parse(JSON.stringify(OrderData));
    if (staffName) {
      orders = orders.filter(order => order.staff_name.includes(staffName));
    }
    if (userName) {
      orders = orders.filter(order => order.user_name.includes(userName));
    }
    if (userPhoneNumber) {
      orders = orders.filter(order => order.user_phone_number.toString().includes(userPhoneNumber));
    }
    const total = orders.length;
    // 分页
    orders = orders.filter((order, index) =>
      index >= (currentPage - 1) * pageSize && index < pageSize * currentPage);
    return { orders, total };
  },
  reDistrubute(request) {
    const {
      orderId,
    } = JSON.parse(request.body);
    OrderData.forEach((order) => {
      if (order.order_id === orderId) {
        order.status = 0;
      }
    });
    return 'success';
  },
};
