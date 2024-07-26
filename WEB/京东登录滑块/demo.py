# -*- coding:utf-8 -*-
import requests
import json
import re
import base64
import random
import ddddocr
import execjs
import subprocess
import time
from functools import partial

# 解决execjs乱码问题
subprocess.Popen = partial(subprocess.Popen,encoding='utf-8')



session = requests.session()
session.headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
}


def get_g(): # 获取拼图图片和背景图片，保存到本地,返回challenge参数
    g_params = {
        "appId": "1604ebb2287",
        "scene": "login",
        "product": "click-bind-suspend",
        "e": "E446FEHH6V37FLVJZFVNE6AJFOTJFZYDMXQY4TJ2N4WAWHMKIW3BIEBFRC7JCOQ2OB3NYCCB62VATKFJV2UJ753DSE",
        "j": "",
        "lang": "zh_CN",
        "callback": "jsonp_040507233586688574"
    }
    url = 'https://iv.jd.com/slide/g.html'
    response = session.get(url, params=g_params).text
    obj = re.compile('\((?P<data_code>.*)\)',re.S)
    res = obj.search(response).group('data_code')
    data = json.loads(res)
    bg = data['bg']
    slide = data['patch']
    with open('./bg.png','wb') as f:
        f.write(base64.b64decode(bg))
    with open('./slide.png','wb') as f:
        f.write(base64.b64decode(slide))
    return data['challenge']

def ocr():# 识别缺口坐标（左上角坐标，左下角坐标），获取横向坐标
    dddd = ddddocr.DdddOcr(det=False,ocr=False,show_ad=False)
    f1 = open('./bg.png','rb')
    f2 = open('./slide.png','rb')
    result = dddd.slide_match(f2.read(),f1.read(),simple_target=True)
    distance = round(result['target'][0] * 0.77222222222222 + 25) # 等比缩放
    print(distance)
    return distance

def parse():
    challenge = get_g()
    distance = ocr()
    ctx = execjs.compile(open('./轨迹.js','r',encoding='utf-8 ').read())
    guiji = ctx.call('getSlide',distance)
    time.sleep(5)
    d = ctx.call('getCoordinate',guiji)
    s_params = {
        "d":d,
        "c": challenge,
        "w": "278",
        "appId": "1604ebb2287",
        "scene": "login",
        "product": "click-bind-suspend",
        "e": "E446FEHH6V37FLVJZFVNE6AJFOTJFZYDMXQY4TJ2N4WAWHMKIW3BIEBFRC7JCOQ2OB3NYCCB62VATKFJV2UJ753DSE",
        "j": "",
        "s": "174880991297112416",
        "o": "123",
        "o1": "0",
        "u": "https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue%26utm_source%3Dwww.baidu.com%26utm_medium%3Dtuiguang%26utm_campaign%3Dt_1003608409_%26utm_term%3D9aef336859da442d95d81a6a52b23b04",
        "lang": "zh_CN",
        "callback": "jsonp_004671156304193547"
    }
    response = session.get('https://iv.jd.com/slide/s.html',params=s_params)
    print(response.text)


if __name__ == '__main__':
    # get_g()
    # print(ocr())
    for i in range(5):
        parse()