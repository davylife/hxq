/******************************
⚠️如果放远程，请把hxq.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:hxq
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]


http://hxqapi.hiyun.tv/api/user/mine url script-response-body hxq2.js


[mitm]
hostname = hxqapi.hiyun.tv
%¥
*******************************/




var body = $response.body;


body = body.replace(/"at":\d+/g, '"at":1,"expireDate":"2099-12-12"');



$done({ body });
