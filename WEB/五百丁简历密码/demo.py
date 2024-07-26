# -*- coding:utf-8 -*-
import requests
import execjs
import time
# https://www.500d.me/

ctx = execjs.compile(open('./demo.js','r',encoding='utf-8').read())

res = requests.get(f'https://www.500d.me/common/public_key/?_={int(time.time()*1000)}').json()
modulus = res['modulus']
exponent = res['exponent']

enPwd = ctx.call('encryptPwd',modulus,exponent,'123123123')


headers = {
    "Accept": "application/json, text/javascript, */*; q=0.01",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://www.500d.me",
    "Pragma": "no-cache",
    "Referer": "https://www.500d.me/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "token": "1b5ec012-257d-4009-8854-185c19b25734"
}
cookies = {
    "token": "1b5ec012-257d-4009-8854-185c19b25734",
    "rememberMobile": "123",
    "SESSION": "a4595c8c-4c3f-40ba-96e4-7edc4b028ce8"
}


url = 'https://www.500d.me/login/submit/'
data = {
    "username": "123",
    "enPassword": enPwd,
    "service": "",
    "remember": "true"
}

response = requests.post(url, headers=headers, cookies=cookies, data=data).text
print(response)