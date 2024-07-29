# -*- coding:utf-8 -*-
# @Time: 2024-07-29 15:46
# @Description: webpack 返回结果加密
import re
import json
import requests
import execjs

ctx = execjs.compile(open('./demo.js','r',encoding='utf-8').read())

headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://36kr.com/",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "Hm_lvt_1684191ccae0314c6254306a8333d090": "1722222360",
    "HMACCOUNT": "13600B394172A47D",
    "Hm_lvt_713123c60a0e86982326bae1a51083e1": "1722222360",
    "sajssdk_2015_cross_new_user": "1",
    "sensorsdata2015jssdkcross": "%7B%22distinct_id%22%3A%22190fc73b62986e-0a34a61eae245c-26001f51-2304000-190fc73b62a899%22%2C%22%24device_id%22%3A%22190fc73b62986e-0a34a61eae245c-26001f51-2304000-190fc73b62a899%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%7D%7D",
    "Hm_lpvt_1684191ccae0314c6254306a8333d090": "1722238987",
    "Hm_lpvt_713123c60a0e86982326bae1a51083e1": "1722238987",
    "SERVERID": "6754aaff36cb16c614a357bbc08228ea|1722239082|1722238969"
}
url = "https://36kr.com/p/2882720771068546"
response = requests.get(url, headers=headers, cookies=cookies)
initialState = re.search('window.initialState=(.*)</script>',response.text).group(1)
initialState = json.loads(initialState)
result = ctx.call('decrypt_',initialState)
print(result['articleDetail']['articleDetailData'])