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
^http?:\/\/hxqapi\.hiyun\.tv\/api\/series\/rslvV4.*? url script-request-header hxq.js

http://hxqapi.hiyun.tv/api/user/mine url script-response-body hxq2.js


[mitm]
hostname = hxqapi.hiyun.tv
%¥
*******************************/



const headers = Object.fromEntries(Object.entries($request.headers).map(([key, value]) => [key.toLowerCase(), value]));
Object.assign(headers, {
    'auth-uid': '213269909',
    'auth-token': '8a5469bb9d18b650a3deb05813b0bfaa',
});

//delete headers.platform;



$done({ headers });


