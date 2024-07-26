# -*- coding:utf-8 -*-
# @Time: 2024-07-25 16:56
# @Description:
'''
网址：https://www.mafengwo.cn/i/24464883.html
1.请求html连接获取返回结果有第一次__jsl_clearance_s，cookie中带有__jsluid_s
2.带着__jsl_clearance_s和__jsluid_s进行第二次请求，完成第二次__jsl_clearance_s加密
3.带着第二次加密生成的__jsl_clearance_s进行最终请求
'''
import re
import requests
import execjs

ctx = execjs.compile(open('./demo.js', 'r',encoding='utf-8').read())

session = requests.session()

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "Cache-Control": "max-age=0",
    "Connection": "keep-alive",
    "Referer": "https://www.mafengwo.cn/i/24464883.html",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
# 第一次cookie
url = "https://www.mafengwo.cn/i/24464883.html"
response1 = session.get(url, headers=headers)
__jsluid_s = response1.cookies['__jsluid_s']
# print(response1.text)
result1 = re.search(
    'document.cookie=(.*);',
    response1.text
).group(1)
__jsl_clearance_s = ctx.call('eval_', result1)
cookies = {
    '__jsl_clearance_s': __jsl_clearance_s.split(';')[0].replace('__jsl_clearance_s=',''),
    '__jsluid_s':__jsluid_s
}
print(cookies)
# 获取第二次cookie
while True:
    response2 = session.get(url, headers=headers,cookies=cookies)
    result2 = re.search('go\(\{(.*)\}\)',response2.text).group(1)
    params_str = ('{'+result2+'}').replace('true','True')
    params = eval(params_str)
    # print(params)
    res = ctx.call('get_cookie',params)
    if res:
        print(res)
        break
__jsl_clearance_s = res[0]
cookies.update({
    '__jsl_clearance_s':__jsl_clearance_s
})
# 最终请求
response3 = session.get(url, headers=headers,cookies=cookies)
print(response3.text)
