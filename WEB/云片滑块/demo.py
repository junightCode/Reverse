import requests
import execjs
import json
import ddddocr
import random
import time

ctx = execjs.compile(open('./getBgUrl.js', 'r', encoding='utf-8').read())
# js = execjs.compile(open('./2.js', 'r', encoding='utf-8').read())
def getBg():

    params = ctx.call('get_param')

    headers = {
        "authority": "captcha.yunpian.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://www.yunpian.com/",
        "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Google",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    url = "https://captcha.yunpian.com/v1/jsonp/captcha/get"

    response = requests.get(url, headers=headers, params=params).text
    res = response.replace('ypjsonp(', '').strip(')')
    res = json.loads(res)
    bg = res['data']['bg']
    front = res['data']['front']
    bg_img = requests.get(bg).content
    with open('./bg.jpg', 'wb') as fp:
        fp.write(bg_img)
    front = requests.get(front).content
    with open('./front.jpg', 'wb') as fp:
        fp.write(front)
    token = res['data']['token']
    return token

def get_locus():
    det = ddddocr.DdddOcr(det=False,ocr=False,show_ad=False)
    with open('./front.jpg','rb') as f:
        target_bytes = f.read()
    with open('./bg.jpg','rb') as f:
        background_bytes = f.read()
    res = det.slide_match(target_bytes,background_bytes,simple_target=True)
    locus = []
    x = int(res['target'][0]/1.45)
    Slider_x = random.randint(865,885)
    Slider_y = random.randint(1955,1975)
    start_time = random.randint(120,200)
    locus.append([Slider_x,Slider_y,start_time])
    max_x = Slider_x + x + random.randint(10,30)
    real_x = Slider_x + x

    def cut(locus):
        len_locus = len(locus)
        if len_locus <= 50:
            return locus
        start = [locus[0]]
        end = locus[-1]
        i = len_locus // 50
        if i < 2:
            return locus
        for r in range(1,len_locus,i):
            start.append(locus[r])
        start.append(end)
        return start

    range_ = random.randint(300,451)
    print('预计数组长度',range_)
    for i in range(range_):
        x_random = random.randint(0,1)
        start_time += 1
        if i % 10 == 0:
            if random.randint(0,1) == 1 and Slider_y < 1975:
                Slider_y += 1
            else:
                Slider_y -= 1
        if Slider_x >= max_x:
            max_x = real_x
            Slider_x = Slider_x - x_random
            if Slider_x <= max_x:
                locus.append([max_x,Slider_y,start_time])
                print('实际数组长度',i)
                break
        else:
            Slider_x += x_random
        locus.append([Slider_x,Slider_y,start_time])
    locus = cut(locus)

    print('移动距离',x)
    print('路径0:{} 路径-1:{} 切割后的长度:{}'.format(locus[0],locus[-1],len(locus)))
    return x,locus


# def get_locus():
#     det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
#     with open('front.jpg', 'rb') as f:
#         target_bytes = f.read()
#     with open('bg.jpg', 'rb') as f:
#         background_bytes = f.read()
#     res = det.slide_match(target_bytes, background_bytes, simple_target=True)
#
#     locus = []
#     x = int(res['target'][0] / 1.45)
#     Slider_x = random.randint(865, 885)
#     Slider_y = random.randint(1955, 1975)
#     start_time = random.randint(120, 200)
#     locus.append([Slider_x, Slider_y, start_time])
#     max_x = Slider_x + x + random.randint(10, 30)
#     real_x = Slider_x + x
#
#     def cut(locus):
#         len_locus = len(locus)
#         if len_locus <= 50:
#             return locus
#         start = [locus[0]]
#         end = locus[-1]
#         i = len_locus // 50
#         if i < 2:
#             return locus
#         for r in range(1, len_locus, i):
#             start.append(locus[r])
#         start.append(end)
#         return start
#
#     range_ = random.randint(300, 451)
#     print('预计数组长度：{}'.format(range_))
#     for i in range(range_):
#         x_random = random.randint(0, 1)
#         start_time += 1
#         if i % 10 == 0:
#             if random.randint(0, 1) == 1 and Slider_y < 1975:
#                 Slider_y += 1
#             else:
#                 Slider_y -= 1
#         if Slider_x >= max_x:
#             max_x = real_x
#             Slider_x = Slider_x - x_random
#             if Slider_x <= max_x:
#                 locus.append([max_x, Slider_y, start_time])
#                 print('实际数组长度：{}'.format(i))
#                 break
#         else:
#             Slider_x += x_random
#
#         locus.append([Slider_x, Slider_y, start_time])
#     locus = cut(locus)
#
#     print('移动距离：{}'.format(x))
#     print('路径0：{} 路径-1：{} 切割后长度：{}'.format(locus[0], locus[-1], len(locus)))
#     return x, locus


def submit(params,token):
    headers = {
        "authority": "captcha.yunpian.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "referer": "https://www.yunpian.com/",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    cookies = {
        "MEIQIA_TRACK_ID": "2SPxHlxcx4aZh1UIII9Jd90bUTU",
        "MEIQIA_VISIT_ID": "2SPxHm6ZhjNGU3c75alAKpUzFwk",
        "__wksid": "n-65595F9B4AEF4D778D4D0E5159430357"
    }
    url = "https://captcha.yunpian.com/v1/jsonp/captcha/verify"
    params = {
        "cb": params['cb'],
        "i": params['i'],
        "k": params['k'],
        "token": token,
        "captchaId": '974cd565f11545b6a5006d10dc324281'
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)

    return response.text

if __name__ == '__main__':
    while True:
        token = getBg()
        x,locus = get_locus()
        params = ctx.call('submit_verify',locus,x)
        # print(params)
        res = submit(params,token)
        if 'ok' in res:
            print(res)
        else:
            print(res)
            print('---------------------------')
            time.sleep(3)


