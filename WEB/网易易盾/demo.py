# -*- coding:utf-8 -*-
import re
import json
import requests
import execjs
import ddddocr

# https://dun.163.com/trial/sense

ctx = execjs.compile(open('./d1.js', 'r', encoding='utf-8').read())


def getToken():
    param = ctx.call('getCb')
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://dun.163.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "__root_domain_v": ".163.com",
        "_qddaz": "QD.864692602098046",
        "wyy_uid": "6e5a3121-d74f-40a2-ae15-924ca4148b7d",
        "locale": "zh_CN"
    }
    url = "https://c.dun.163.com/api/v3/get"
    params = {
        "referer": "https://dun.163.com/trial/sense",
        "zoneId": "CN31",
        "id": "5a0e2d04ffa44caba3f740e6a8b0fa84",
        "fp": ctx.call('getFp'),
        "https": "true",
        "type": "undefined",
        "width": "0",
        "sizeType": "10",
        "version": "2.22.1",
        "dpr": "1",
        "dev": "1",
        "cb": param['cb'],
        "acToken": "",
        "ipv6": "false",
        "runEnv": "10",
        "group": "",
        "scene": "",
        "sdkVersion": "undefined",
        "iv": "1",
        "smsVersion": "v3",
        "callback": param['callback']
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params).text
    res = re.findall('\((\{.*\})\)', response, re.S)[0]
    res_ = json.loads(res)
    token = res_['data']['token']
    return token


def getImg(token):
    param = ctx.call('getCb')
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://dun.163.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "__root_domain_v": ".163.com",
        "_qddaz": "QD.265492786257305"
    }
    url = "https://c.dun.163.com/api/v3/get"
    params = {
        "referer": "https://dun.163.com/trial/sense",
        "zoneId": "CN31",
        "acToken": "",
        "id": "5a0e2d04ffa44caba3f740e6a8b0fa84",
        "fp": "\\A1puW15crrs3LtOAR5XPLehbveUr9SMSx/fczPCURD+OyjoV7kwYgN0X774dXsl64hLMjvYWX5RLGz\\gq+TAfE5oylfOT0MiV4qDavcxRyoDNLNxQARphgnKUTm\\eBO/avzawHBp4L0def2iMVzCJv0/Yn9Bg3Of+vl8u69tUPBIRE/:1692950470878",
        "https": "true",
        "type": "undefined",
        "version": "2.22.1",
        "dpr": "1",
        "dev": "1",
        "cb": param['cb'],
        "ipv6": "false",
        "runEnv": "10",
        "group": "",
        "scene": "",
        "lang": "zh-CN",
        "sdkVersion": "undefined",
        "iv": "1",
        "width": "300",
        "audio": "false",
        "sizeType": "10",
        "smsVersion": "v3",
        "token": token,
        "callback": param['callback']
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params).text
    res = re.findall('\((\{.*\})\)', response, re.S)[0]
    res_ = json.loads(res)
    bg_url = res_['data']['bg'][0]
    front_url = res_['data']['front'][0]
    bg_byte = requests.get(bg_url).content
    front_byte = requests.get(front_url).content
    with open('./bg.png', 'wb') as fp:
        fp.write(bg_byte)
    with open('./front.png', 'wb') as fp:
        fp.write(front_byte)


def getLocus():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open('./front.png', 'rb') as fp:
        target_byte = fp.read()
    with open('./bg.png', 'rb') as fp:
        background_byte = fp.read()
    res = det.slide_match(target_byte, background_byte, simple_target=True)
    res = int(res['target'][0] / 1.064)
    return res


def check(token, x):
    param = ctx.call('getCb')
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://dun.163.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "__root_domain_v": ".163.com",
        "_qddaz": "QD.265492786257305"
    }
    url = "https://c.dun.163.com/api/v3/check"
    params = {
        "referer": "https://dun.163.com/trial/sense",
        "zoneId": "CN31",
        "id": "5a0e2d04ffa44caba3f740e6a8b0fa84",
        "token": token,
        "acToken": "undefined",
        "data": ctx.call('getData', token, x),
        "width": "300",
        "type": "2",
        "version": "2.22.1",
        "cb": param['cb'],
        "extraData": "",
        "bf": "0",
        "runEnv": "10",
        "sdkVersion": "undefined",
        "iv": "1",
        "callback": param['callback']
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    print(response.text)


if __name__ == '__main__':
    token = getToken()
    getImg(token)
    x = getLocus()
    check(token, x)
