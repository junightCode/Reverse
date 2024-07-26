# -*- coding:utf-8 -*-
import requests
import execjs
ctx = execjs.compile(open('./d1.js','r',encoding='utf-8').read())

headers = {
    "Accept": "text/html, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "http://q.10jqka.com.cn/thshy/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    # 'Cookie':'v=A2fKTlWCz4hMqEsE4khrqAPz9pA07DKzlcG_ZjnVgI0cD4lOQbzLHqWQT5BK'
    'Cookie':ctx.call('getCookie')
}
# cookies = {
#     "v": "A2fKTlWCz4hMqEsE4khrqAPz9pA07DKzlcG_ZjnVgI0cD4lOQbzLHqWQT5BK"
# }
url = "http://q.10jqka.com.cn/thshy/index/field/199112/order/desc/page/2/ajax/1/"
response = requests.get(url, headers=headers,  verify=False)

print(response.text)
print(response)