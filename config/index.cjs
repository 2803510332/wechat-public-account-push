/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
/exportconst USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx16743fdfb05030b2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9f1c2f7fa8d1e00f58be4d886f86a9ea',

  PROVINCE: '浙江',
  CITY: '嘉兴',

  USERS: [
    {
      // 想要发送的人的名字
      name: '瑶瑶女士',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3JQ50FXgrBKrnVOFkB2_x1uTdkwJUVNM5uVKV-1AXYE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
       
        {
          type: '生日', name: '瑶瑶女士', year: '2004', date: '01-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '10-27',
        },

  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '吴佳龙',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'Luckily-meetingyou',
    }
  ],

}
//今天是：{{date.DATA}}
//不管那一天，每一天都是爱你的一天
//当前城市：{{city.DATA}}
//今天的天气：{{weather.DATA}}
//最低气温：{{min_temperature.DATA}}
//最高气温：{{max_temperature.DATA}}
//今天距离我们认识已经过去{{love_day.DATA}}天了

module.exports = USER_CONFIG

