export const config = {
  /**
   *公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wx16743fdfb05030b2",

  // 公众号APP_SECRET
  APP_SECRET: "9f1c2f7fa8d1e00f58be4d886f86a9ea",
  //模板消息id
  TEMPLATE_ID:"3JQ50FXgrBKrnVOFkB2_x1uTdkwJUVNM5uVKV-1AXYE"
  //接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1","wx2"]
  USERS:["ozVNR6e65Dx_9S-mI2SoccgNHddk"]
  
  /**
   *信息配置
   */
  
  /**天气相关*/
  
  //所在省份
  PROVINCE: "浙江",
  //所在城市
  CITY: "嘉兴",

  /**重要节日相关*/
    
     FESTIVALS: [
       
        {
          type: '生日', name: '瑶瑶女士', year: '2004', date: '01-04',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '10-27',
        },

       /**每日一言*/
       
       LITERARY_PREFERENCE:"每天都要开心呀   大哥"


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',



}
//今天是：{{date.DATA}}
//不管那一天，每一天都是爱你的一天
//当前城市：{{city.DATA}}
//今天的天气：{{weather.DATA}}
//最低气温：{{min_temperature.DATA}}
//最高气温：{{max_temperature.DATA}}
//今天距离我们认识已经过去{{love_day.DATA}}天了

//{{note_en.DATA}}
//{{note_cn.DATA}}
 
//共推送{{success_post_num.DATA}}人
//成功：{{success_post_num.DATA}}|失败:{{fail_post_num.DATA}}
//成功用户：{{{success_post_ids.DATA}}
//失败用户：{{fail_post_ids.DATA}}






