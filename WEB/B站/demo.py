# -*- coding:utf-8 -*-
import requests
import random
import time
import execjs

ctx = execjs.compile(open('./d1.js','r',encoding='utf-8').read())

def generate_random_string(length):
    random_string = ""
    for _ in range(length):
        random_string += format(int(16 * random.random()), 'X')
    return random_string

def format_string(string, length):
    if len(string) < length:
        padding = "0" * (length - len(string))
        return padding + string
    return string

def getBvid():
    e = generate_random_string(8)
    t = generate_random_string(4)
    r = generate_random_string(4)
    n = generate_random_string(4)
    o = generate_random_string(12)
    i = int(time.time() * 1000)
    i = format_string(str(i % 100000), 5)
    return f"{e}-{t}-{r}-{n}-{o}{i}infoc"

def getUser(mid):
    result = ctx.call('getWrid',mid)
    url = f'https://api.bilibili.com/x/space/wbi/acc/info?mid={mid}&token=&platform=web&web_location=1550101&w_rid={result["wrid"]}&wts={result["wts"]}'
    headers = {
        'Referer':f'https://space.bilibili.com/{mid}',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36'
    }
    cookie = {
        'buvid3':getBvid()
    }
    response = requests.get(url,headers=headers,cookies=cookie)
    print(response.text)


if __name__ == '__main__':
    getUser('946974')