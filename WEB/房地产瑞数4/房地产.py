import os
import subprocess
from functools import partial

subprocess.Popen = partial(subprocess.Popen, encoding='utf-8')

import requests
from lxml import etree
import execjs

DIR_PATH = os.path.dirname(os.path.abspath(__file__))


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Proxy-Connection": "keep-alive",
    "Referer": "http://www.fangdi.com.cn/service/service_law_detail.html?newsid=08b11bf27f60b230",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}
cookies = {
    "www.fangdi.com_http_ic": "www.fangdi.com.cn_80_RS",
}

request_session = requests.session()
request_session.headers.update(headers)
request_session.cookies.update(cookies)
url = "http://www.fangdi.com.cn/service/service_law_detail.html?newsid=08b11bf27f60b230"


def get_code():
    response = request_session.get(url)
    cookies['FSSBBIl1UgzbN7N80S'] = response.cookies['FSSBBIl1UgzbN7N80S']
    request_session.cookies.update(cookies)
    html = etree.HTML(response.text)
    meta_content = html.xpath('//meta[2]/@content')[0]
    js_code = html.xpath('//script[2]/text()')[0]

    return meta_content, js_code


meta_content, js_code = get_code()



with open(os.path.join(DIR_PATH, "房地产.js"), 'r', encoding='utf-8') as js_file:
    js_text = js_file.read()
    js_text = js_text.replace('meta_content', meta_content)
    js_text = js_text.replace("'js_code'", js_code)



js = execjs.compile(js_text)
f80t = js.call('main')
cookies['FSSBBIl1UgzbN7N80T'] = f80t
request_session.cookies.update(cookies)




path = '/service/index/getSecondHouse.action'
get_msg_url = "http://www.fangdi.com.cn" + path
url_ = js.call('getUrl', path)
response = request_session.get(url_)
response.encoding = 'utf-8'
print(response)
print(response.text)

