# -*- coding:utf-8 -*-
# https://ygp.gdzwfw.gov.cn/#/44/jygg

import requests
import json
import execjs
ctx = execjs.compile(open('./d1.js','r',encoding='utf-8').read())


headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://ygp.gdzwfw.gov.cn",
    "Pragma": "no-cache",
    "Referer": "https://ygp.gdzwfw.gov.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
    # "X-Dgi-Req-App": "ggzy-portal",
    # "X-Dgi-Req-Nonce": "81gONxTS0IJyt76x",
    # "X-Dgi-Req-Signature": "e115af5e229e41af706e88db9f7587e5c9b2739c349bf6fcbc9c1085e7e23382",
    # "X-Dgi-Req-Timestamp": "1693470197042",
    "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    # "_horizon_sid": "4723ba66-b735-4832-80fe-1598d6b81980",
    # "_horizon_uid": "5865d266-91ff-4824-aa8c-75e097aec4c9"
}
url = "https://ygp.gdzwfw.gov.cn/ggzy-portal/search/v2/items"
data = {
    "type": "trading-type",
    "openConvert": False,
    "keyword": "",
    "siteCode": "44",
    "secondType": "A",
    "tradingProcess": "",
    "thirdType": "[]",
    "projectType": "",
    "publishStartTime": "",
    "publishEndTime": "",
    "pageNo": 2,
    "pageSize": 10
}
s = f"type=trading-type&openConvert=false&keyword=&siteCode=44&secondType=A&tradingProcess=&thirdType=%5B%5D&projectType=&publishStartTime=&publishEndTime=&pageNo={data['pageNo']}&pageSize=10"
h = ctx.call('getHeaders',s)
headers.update(h)

response = requests.post(url, headers=headers, json=data)

print(response.text)
print(response)