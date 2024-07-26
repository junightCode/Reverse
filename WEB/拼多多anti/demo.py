# -*- coding:utf-8 -*-
import requests
import execjs
ctx = execjs.compile(open('./d2.js','r',encoding='utf-8').read())

headers = {
    "authority": "mobile.yangkeduo.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://mobile.yangkeduo.com/",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36"
}
cookies = {
    "api_uid": "Ck107mSRXzG2NgBxGOGKAg==",
    "_nano_fp": "XpEJl09qn09oX5Xjno_TCUOLpw0mXTFDhUFT3o6p",
    "jrpl": "ZK9l4g9JUyahRoNrpANSXEdxUKBSXvFB",
    "njrpl": "ZK9l4g9JUyahRoNrpANSXEdxUKBSXvFB",
    "dilx": "23euOeXJyJzrZyvBXhTH1",
    "webp": "1",
    "pdd_vds": "gaLLNOOEbnyQGbyPQIPtonPPyQIPmOtmyQtGIbGIQNmymQooibOEImaoNboa"
}
url = "https://mobile.yangkeduo.com/proxy/api/api/alexa/cells/hub/v3"
params = {
    "pdduid": "0",
    "platform": "H5",
    "page_sn": "10002",
    "page_id": "index_list.html",
    "engine_version": "3.0",
    "offset": "20",
    "count": "20",
    "list_id": "308b116qrg",
    "anti_content":ctx.call('qe_')
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)

print(response.text)
print(response)