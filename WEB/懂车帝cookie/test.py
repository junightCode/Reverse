# -*- coding:utf-8 -*-
# @Time: 2024-07-25 18:38
# @Description:
import requests
import execjs

ctx = execjs.compile(open('./demo.js','r',encoding='utf-8').read())

session = requests.session()
headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "priority": "u=0, i",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0"
}

url = "https://www.dongchedi.com/article/7394659052510347826"
response = session.get(url, headers=headers)
__ac_nonce = response.cookies['__ac_nonce']
__ac_signature = ctx.call('get_cookie',__ac_nonce)
cookies = {
    "__ac_signature": __ac_signature,
    # "__ac_signature": "_02B4Z6wo00f01H3o8-QAAIDDwBbvo.5mimh9yPdAAHrAa6",
    # "__ac_referer": "https://cn.bing.com/",
    # "ttwid": "1%7Cpx2qmDoE7Je65ri7x3i_-BexpyThbttcr7b_x2vTy9I%7C1709289628%7C9c03a224ee0c8ae3a9f5319fb354a2f2d634d26c8f0a5645a1c7cfc01a03385e",
    # "tt_webid": "7341342992634709558",
    # "tt_web_version": "new",
    # "city_name": "%E4%B8%8A%E6%B5%B7",
    # "s_v_web_id": "verify_lxcnwcoo_WOQevLaS_sj8K_49AL_9Nuk_NGPMp6O0m5N7",
    # "msToken": "87Ai_6WaggrHZAT2H1uCcA5y0kfpvxPupOatr3ktxdiWg_hX1eh5qVbiI9Z7sreEMlCAslXgmTF_H_yAElFvvWhwvrs5m_Hcnz7ouG8=",
    # "is_dev": "false",
    # "is_boe": "false",
    # "Hm_lvt_3e79ab9e4da287b5752d8048743b95e6": "1720511886,1720517659,1721903801",
    # "Hm_lpvt_3e79ab9e4da287b5752d8048743b95e6": "1721903801",
    # "HMACCOUNT": "3BF10D93917D9848",
    # "_gid": "GA1.2.2141218720.1721903802",
    # "_gat_gtag_UA_138671306_1": "1",
    # "_ga_YB3EWSDTGF": "GS1.1.1721903801.9.0.1721903801.60.0.0",
    # "_ga": "GA1.1.1129133414.1709289630"
}
response = session.get(url, headers=headers,cookies=cookies)
print(response.text)