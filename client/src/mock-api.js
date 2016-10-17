/**
 * Created by Turbo Loong on 2016/9/29.
 */
// 拦截 ajax 请求输出假数据, 相当于定义了一个假的接口
Mock.mock('/api/users.do', {
    'users|1-10': [{
        'id|+1': 1
    }]
});