# -*- coding:utf-8 -*-
import requests
import execjs

# i4m = {"rid": "R_SO_4_1334096970","threadId": "R_SO_4_1334096970","pageNo": "3","pageSize": "20","cursor": "1674624818449","offset": "0","orderType": "1","csrf_token": ""}
i4m = {
    "moduleName": "music-web-config",
    "key": "web-comment-delete-userlist",
    "csrf_token": ""
}
ctx = execjs.compile(open('./demo.js','r',encoding='utf-8').read())
res = ctx.call('get',i4m)
params = res['encText']
encSecKey = res['encSecKey']
data = {
    'params':params,
    'encSecKey':encSecKey
}
print(data)
headers = {
  'authority': 'music.163.com',
  'accept': '*/*',
  'accept-language': 'zh-CN,zh;q=0.9',
  'cache-control': 'no-cache',
  'content-type': 'application/x-www-form-urlencoded',
  'cookie': 'NMTID=00OGgq55nui8h0PhUpLvoZRcwR2RZwAAAGI0bFb-Q; _iuqxldmzr_=32; WEVNSM=1.0.0; WNMCID=tgzdsx.1687145243871.01.0; ntes_utid=tid._.BQuyE4dCFm9FFgAQFQaEhLMDyxJ8wfNz._.0; sDeviceId=YD-Nm82uPIHd2BBA1ABFRLAKGOAm%2FZy82Ry; WM_NI=v0yYv2%2FW3aUIbSUuBiath3wlvfkwdR0fqQlT2IwHbqXO%2Bu7VIMuRzaw3m2a3M7u3Riq9naPrzNOnqNJg60o1lT39FvEpiBBm105WwqLkd2vMFXAPd9sOQwCsbTILM8mXazQ%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee9bb172fc93ac8dae748fb08aa3c55a879f8f83d43b899289d3ea52adb4f898b82af0fea7c3b92ab6f0b7baf53aed89fd82d843a28d9b96c163a3aca8d4f668b6baa598e75af4babfb2ef60f297b9a9e17b9c91e596b65e8b93bbb3f96bb5eda3d3e4398fe9bbd4d163b3e7a282d37aba92818ff4468ab9fad1ee3bb08cfddac57e87b0a7a3c167f3f0fbb8f67b90b5acd3f54786888fb1e733b1919f98c279a28c87add034af88af9bd437e2a3; WM_TID=mg3j14UwAwhEAFRBVBfE0KcWmwc8x9go; JSESSIONID-WYYY=QkJmOGBNi4UfGIu%5C8zTkPx2ie%2Fqxv%2Fq4vM6nVNEaMyro1YmuvjsIzEK6smtSQx%2Ft0S%2BhWErz0mNS0KFdxjYlfstxMbnkhdPYUuRdE%2Bw98gtSiAfhxO5YwrAVhWQcnCS2Vs2e%2BQoNTcugl%2FF7o37yCU5WY7bdlaulfO5vapIzVbr3pPzW%3A1687163203913',
  'origin': 'https://music.163.com',
  'pragma': 'no-cache',
  'referer': 'https://music.163.com/song?id=2054230018',
  'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}
response = requests.post('https://music.163.com/weapi/middle/clientcfg/config/list?csrf_token=',json=data,headers=headers).text
print(response)