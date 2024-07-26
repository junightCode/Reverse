# -*- coding:utf-8 -*-
import requests
import execjs

ctx = execjs.compile(open('./demo.js','r',encoding='utf-8').read())

def getContent():
    headers = {
        "authority": "www.kanzhun.com",
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        "href": "https://www.kanzhun.com/search/?query=%E4%BA%92%E8%81%94%E7%BD%91&type=0",
        "pragma": "no-cache",
        "referer": "https://www.kanzhun.com/search/?query=%E4%BA%92%E8%81%94%E7%BD%91&type=0",
        "reqsource": "fe",
        "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "x-requested-with": "XMLHttpRequest"
    }
    cookies = {
        "__c": "1691742527",
        "wd_guid": "c4bf6aa9-99bc-4d16-928d-723654e493c0",
        "__g": "-",
        "historyState": "state",
        "AB_T": "abvb",
        "__l": "r=https%3A%2F%2Fwww.baidu.com%2Flink%3Furl%3DB7x33jTTwPTrRDZ209JPqkd5pwWqCtuyJX2wSSKwBvDFL3W7I-iWfipgtrGctXmG%26wd%3D%26eqid%3Ddf7ad1420000a9ab0000000464d5f13c&l=%2Fapi_to%2Fhome%2Frec.json%3Fb%3DEGOTj-ZavEIGt1rdTAt-mA~~%26kiv%3Dalv8531Z4dRqnKlK",
        "JSESSIONID": "\"\"",
        "W_CITY_S_V": "1",
        "__a": "6878838.1691742527..1691742527.20.1.20.20"
    }

    url = "https://www.kanzhun.com/api_to/search/comprehensive.json"
    data = {"query":"计算机","pageNum":1,"limit":15}
    params = ctx.call('getParam',data)
    print(params)
    response = requests.get(url,headers=headers, cookies=cookies, params=params).text
    res = ctx.call('decryptContent',response,params['kiv'])
    print(res)


if __name__ == '__main__':
    getContent()