# -*- coding:utf-8 -*-
import hashlib
import random

import requests
import execjs
import time
import json
from ddddocr import DdddOcr
from datetime import datetime, timezone, timedelta

c1 = execjs.compile(open('./challenge.js', 'r', encoding='utf-8').read())
c2 = execjs.compile(open('./webpack.js', 'r', encoding='utf-8').read())

param_e = {
    "setLeft": 42,
    "passtime": 242,
    "userresponse": 43.75171645945445,
    "device_id": "",
    "lot_number": "4fc432d8e47442d3818c797cda26e937",
    "pow_msg": "1|0|md5|2024-08-02T10:58:34.235639+08:00|54088bb07d2df3c46b79f80300b0abbe|4fc432d8e47442d3818c797cda26e937||f19241e6b5172b3a",
    "pow_sign": "1967b16d8ac0c9e31f51b39808e4c0d2",
    "geetest": "captcha",
    "lang": "zh",
    "ep": "123",
    "biht": "1426265548",
    "gee_guard": {
        "roe": {
            "aup": "3",
            "sep": "3",
            "egp": "3",
            "auh": "3",
            "rew": "3",
            "snh": "3",
            "res": "3",
            "cdc": "3"
        }
    },
    "UN5f": "DJjC",
    "em": {
        "ph": 0,
        "cp": 0,
        "ek": "11",
        "wd": 1,
        "nt": 0,
        "si": 0,
        "sc": 0
    }
}

param_n = {
    'options': {
        "language": "zho",
        "riskType": "slide",
        "product": "float",
        "captchaId": "54088bb07d2df3c46b79f80300b0abbe",
        "protocol": "https://",
        "lotNumber": "0b25950bda3141b499a283de412098ab",
        "captchaType": "slide",
        "slice": "captcha_v4/e70fbf1d77/slide/22397859ec/2022-04-21T09/slice/bcb03ab1e7164d7485185d4701cff935.png",
        "bg": "captcha_v4/e70fbf1d77/slide/22397859ec/2022-04-21T09/bg/bcb03ab1e7164d7485185d4701cff935.png",
        "ypos": 22,
        "arrow": "arrow_1",
        "js": "/js/gcaptcha4.js",
        "css": "/css/gcaptcha4.css",
        "staticPath": "/v4/static/v1.8.0-75f094",
        "gctPath": "/v4/gct/gct4.5a2e755576738ba0499d714db4f1c9e0.js",
        "showVoice": True,
        "feedback": "https://www.geetest.com/Helper",
        "logo": True,
        "pt": "1",
        "captchaMode": "risk_manage",
        "guard": True,
        "checkDevice": True,
        "langReverse": False,
        "customTheme": {
            "_style": "stereoscopic",
            "_color": "hsla(224,98%,66%,1)",
            "_gradient": "linear-gradient(180deg, hsla(224, 98%,  71%, 1) 0%, hsla(224,98%,66%,1) 100%)",
            "_hover": "linear-gradient(180deg, hsla(224,98%,66%,1) 0%, hsla(224, 98%,  71%, 1) 100%)",
            "_brightness": "system",
            "_radius": "4px"
        },
        "powDetail": {
            "version": "1",
            "bits": 0,
            "datetime": "2024-08-01T14:27:03.083622+08:00",
            "hashfunc": "md5"
        },
        "payload": "_b-sD20eax9oEJvmoMxvFDxz32S7qGcsFmcH8NI0r8IIxOhQBl1x8pwI220qaXlpwmRixXl3vSgGWt3RHC7VVaI3Z7uAx-O-qtQxe6PXi_CxsfH693s5tldvXhoxrzmbrFy6HXg0TOdWOg9B1Nr3Ii0b5hgWYIk0kWIsBhCR-O2JG8YuW892nZd7eIQEPyp8-DbaKyWfIABebq8LAUKpXkOtbMZmO4LuyI7r3rqlSTb2K7Zrkt-oAd-mcStAgVKAaCzkKGvswLZXCLIMiP1TCy9Zci8UQIapEjD7oM5MTPvrRzTkxaAXZ9dSDboYMjLLxyEczZ-4A9Gb28U5iH_Amcdoysp9cxvExkKDgMLbDVnTDigczPP4DpbcdIm08ADlQYe6roR4j9vvhF1kIGOvhrhN4vI_8BL6RC9KGSySdtZ3XAKaXL9fdu7qt8gsl1vB_CsHTnUyFHoTB1t14odL9oYRvrFSzDjobgxnJxDeil86mM-Q2q_9k7pcCAfYvsOucZZoejCHiuVCNbg4AbJn6eF70AuPHSnEGtGHGOAQdJWKejsnLFh9uY3Br08IbQediJenRcwKmPmehNpBsfNC6zrypekVUXOirFPdS5tB29C3oqVXEtuqEn4_drDNxv3pi7YXygUSHQI7T-PUzffbWmQ-GZmV0kPt_wK6KP9-FAnbdZtYAMfHqqEyGUaFOuqKGbZPAk84xQj_8_spkPM1C4E5jr8o_6wDxx1wPQEvanM4zyEFveweP2xXjOvnN09Kveu003w7HPxraOFkB-g1ZFkmUJKi55w1QA2tDjN1Dv7u2gWTsBUpv0vF77wfiAu2udjaNU_TZA_3JdKrtb4QJmyBFKTvvQDx7W6jfrsT_7867l2fFRCmlYKogUAGNoROCUH1Si-fBZ4Zqk3Jyk9UIvwPt3ueOqRXEFwo5SBadwQWlO3jp5H0aeHX4k4gwxhJom8ZaQXn38UUI51MSX8h4g8ySf_ju8dur7rtzjCKLTuv0nFKQHDg2oSfVm0a00w9r4sgNvSDWmSEcmwHYrMhAjGw4WWPGsSbWESSF_p3DJL-KksNpvl3BPzuM_60gwLAPxFGpnuTYUGeKTj0jvCqJyNJpeZV8RWdLxWYvP6oQoDGysqPcPoFG_FpxQPsLcLwUJBNKb1nFbBmyJIwf9QZGwWsw9zLhDCGnpQnnV_5qGaSrR_yk80wnK-iF3wkLi8Lr1GyNzio0c22NbKnvqGmrctSDckEwdmVjtHf1s3-f6NsgbNRnicryb-KEXwdzeNaiViVN3DXrGXvgO7bnXJlTK9Yx2T1_fjPqx6VQ-Abwq-dQun4IWt_H4wozilzlUNT3rctkZq1r2LR32lVsP2ALpoCn5sNia4V85NDQDC2LBdXN5s-KLt671XuN3H2eBIHz5Zb1HJtcLzYrE0cI1fQWhcRIYuKLhITLuZ3t18mHRXLwXC4eKT1IKQM2VS5WzSia2YicgKIrXWdfa4Stn_sQuhJneF-o7wP7LXZMjmjdauo0upsJFIgHwlNcK4JneB4NPwfiM9lagn6gJdH2oJqsP8OI6qZYgtau5HPTXPhdTM9qqIivLoxa82CL1_y92lOBxw-DI22xQAlwTHmK-3O3aP-7QfJvSooWXJmx4fG2UxrYi8RCMxnT8B2d3ZmRRbzm9SkYRks5RNendoJgzHOb2RA_7gYPCxJEGEGBcJ5zl3Hxxt0EryclhyTlu7wT8w9yaExmsmoQpeat8V3fiKvQCK2QBMayABZUGthi8c167Q2eNfMKDDXdApqeFKBfft4XtHFE57Vv1GnkUCS6BqiNYqgJQH2gTdd9yhPyG0nzXsZDmRs-6k70eBr7cNs2vQF0pMOjNvDoAZsyHUKaKhVwDnWg_PcCv8teKz1cwa69zzn4sTeb5a1CkDpQZvsI1KMTAaK6rIvClbLZt2oHF-ETbIHoPfQDjEg2_cz6DUb9RUwNJClSgPAjN9bW57-Vmgn0_MUV8p-dfOLmB4eGh2bYV5HtLXjuuR1LrWzhuk027hJkQWtLGR3Lgrb_XK24eivMiFSmzjTZS7yCVSvs_EHjCx8h2iG-qRNZk9wuW_TJNAO3NIzGyeTp2xTguB2yiYNFHTjynQiMwRQFBgAzkDBciDu5cdiw7Q75hEXJtBjhj68YO3Y6VPT4Ejncv5Pvl1WREEcSC-wg-pPbVvGLDIlOCM1ubYIuZ1437Bo76eZfdEYc19uHNSByEAmpfihJ_cX8bGyi0zAQyLE8SW5uUuKrSDILkyyKSLep4S4z2KrA68DGpFhrUgHqlzIT_igh6XINRHS-02CaHnnnBvTVs7cwu9B4nn91uVzDxMyggtA1whPPcYahEeaEylqShs7Swlw7DqT-oQv3PeOCbRTUaBYafFB-6NbQjddeHajESNRNVzeHpZlWY7mwSSHGkWm1E6_qb2SOxPXjrlk9VmyiO_-mAnzisYuQyH347DnbbjaEweq0K10-fVJk4ketN6JM4uL436S1hvS6B3K-A_HIsVHGNXFGfk5VTtX4ntFJ7ETabDv02yqtJt9GSTp_HuKRrte7UYeosSKRLQfVMfNhsIwGVPX9x5TG6MwXkmTWcOsRrNKCNeu3qeFSZmwPrqghcdZQJALLrt4b_mINHzv0jwmV9LVV0bENj7HdLSPQwin2aDSd5kELKGl2IW9pPgt7fb9o77mmCJ09weZ-HnPT15nKkDHxSskAi1pUeqNGmmhUFQtmJBldYgY883I-K_72qnCdTq2OjsGYZRq3WSfdrBJtRZOaVTqvQ6ONB6FLx3hlsI4ICCGEBNXz_yGPrNvDK2o4bP0VSFJF8lhCchooSTZVWa6LkZxJBoRwXLbeoy7fBUd-ct0LBZ00oprb9VijcEP5rn1_p_mgEOoSllwH7f6Hbry-EEjf53uXRw_H-qBgGJz0oZNw8fOUY7eRRa8Y2FaMThFsdl1aEA5BDxo2D2wQeSBM72_ICg-SBm694fYW8gDox0HpaZXUSBCGCrRWXDziiVYIJ19QGPAr5qla6hBorknmDiT_tcnP2d4C2CIyblzhXChHpvNwf_wOVE_5pHZ6oKmS6M9ksabvBFF0UOa1B6XsXg1XWW5BQKBt1i53x5TMz04cVnYU_T-rkDU_dZPfZq16UBCuzN_rRkqsFciWjcm0oPXbjgWOmAKmY2u2-uOOFB_XeCCQIAbsHn9pgKysXuPYMRAYbAElgjJ6zLXZw==",
        "processToken": "c4dcb7d8916e92a29f8d875d56c1591b8153ec1a87e4f352b477f8cedf5a7c46",
        "payloadProtocol": 1,
        "hash": "b9cee60d",
        "outside": True,
        "hideBindSuccess": False,
        "hideSuccess": False,
        "clientType": "web",
        "animate": True,
        "ques": 22,
        "imgs": [
            "captcha_v4/e70fbf1d77/slide/22397859ec/2022-04-21T09/bg/bcb03ab1e7164d7485185d4701cff935.png",
            "captcha_v4/e70fbf1d77/slide/22397859ec/2022-04-21T09/slice/bcb03ab1e7164d7485185d4701cff935.png"
        ],
        "deviceId": "",
        "powMsg": "1|0|md5|2024-08-01T14:27:03.083622+08:00|54088bb07d2df3c46b79f80300b0abbe|0b25950bda3141b499a283de412098ab||b6c5fb6444498c22",
        "powSign": "4315dc358a9083b33808831d2b50f65b",
        "geeGuard": {
            "roe": {
                "aup": "3",
                "sep": "3",
                "egp": "3",
                "auh": "3",
                "rew": "3",
                "snh": "3",
                "res": "3",
                "cdc": "3"
            }
        },
        "result": "fail",
        "failCount": 1,
        "switchTo": ""
    }
}


def get_time():
    east_eight_zone = timezone(timedelta(hours=8))

    current_time = datetime.now()

    # 添加时区信息（这里假设为东八区）
    current_time_with_tz = current_time.astimezone(timezone(timedelta(hours=8)))

    # 格式化时间戳字符串
    timestamp_str = current_time_with_tz.strftime('%Y-%m-%dT%H:%M:%S.%f')

    return timestamp_str + '+08:00'


def generate_random_hex():
    # 生成一个 1 到 65535 之间的随机整数
    def random_str():
        random_int = (1 + random.randint(1, 65535)) & 0xFFFF

        # 将整数转换为十六进制字符串，并去掉前缀 '0x'
        hex_str = hex(random_int)[2:]

        # 确保结果是4位的十六进制数，如果不足4位则在左侧填充 '0'
        hex_str = hex_str.zfill(4)
        return hex_str

    return random_str() + random_str() + random_str() + random_str()


def getLocus():
    dct = DdddOcr(ocr=False, show_ad=False)
    with open('./bg.jpg', 'rb') as fp:
        bg = fp.read()
    with open('./slice.jpg', 'rb') as fp:
        small = fp.read()
    res = dct.slide_match(small, bg, simple_target=True)
    return res['target'][0]


def generate_md5_hash(input_string):
    # 创建一个 MD5 hash 对象
    md5_hash = hashlib.md5()

    # 对输入字符串进行编码，因为 hashlib 需要 bytes 类型的输入
    md5_hash.update(input_string.encode('utf-8'))

    # 获取 MD5 哈希的十六进制字符串
    hex_digest = md5_hash.hexdigest()

    return hex_digest

headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Referer": "https://gt4.geetest.com/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
def getBg():

    cookies = {
        "gt_captcha_v4_user": "fcd0157753964fceba124ac722c90f66"
    }
    url = "https://gcaptcha4.geetest.com/load"
    challenge = c1.call('uuid')
    params = {
        "captcha_id": "54088bb07d2df3c46b79f80300b0abbe",
        "challenge": challenge,
        "client_type": "web",
        "risk_type": "slide",
        "lang": "zh-cn",
        "callback": f"geetest_{int(time.time() * 1000)}"
    }
    # print(params['callback'])
    response = requests.get(url, headers=headers, cookies=cookies, params=params).text
    res = response.replace(f'{params["callback"]}(', '').strip(')')
    res = json.loads(res)
    # print(res)
    data = res['data']
    bg_url = 'https://static.geetest.com/' + data['bg']
    slice_url = 'https://static.geetest.com/' + data['slice']
    bg = requests.get(bg_url).content
    with open('./bg.jpg', 'wb') as f:
        f.write(bg)
    slice = requests.get(slice_url).content
    with open('./slice.jpg', 'wb') as f:
        f.write(slice)
    payload = data['payload']
    process_token = data['process_token']
    lot_number = data['lot_number']
    return {
        'payload': payload,
        'process_token': process_token,
        'lot_number': lot_number,
        'bg': data['bg'],
        'slice': data['slice'],
        'callback': params['callback']
    }

def request_verify(param):
    params = {
        "callback": param['callback'],
        "captcha_id": "54088bb07d2df3c46b79f80300b0abbe",
        "client_type": "web",
        "lot_number": param['lot_number'],
        "risk_type": "slide",
        "payload": param['payload'],
        "process_token": param['process_token'],
        "payload_protocol": "1",
        "pt": "1",
        "w": param['w']
    }
    cookies = {
        "captcha_v4_user": "6377542a27ea484ab3e1c2af0748b034"
    }
    url = "https://gcaptcha4.geetest.com/verify"
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    print(response.text)


if __name__ == '__main__':
    result = getBg()
    x = getLocus()
    time_str = get_time()
    pow_msg = f'1|0|md5|{time_str}|54088bb07d2df3c46b79f80300b0abbe|{result["lot_number"]}||{generate_random_hex()}'
    param_e.update({
        'setLeft': int(x),
        'passtime': random.randint(300, 500),
        'userresponse': x / 1.0059466666666665 + 2,
        'lot_number': result['lot_number'],
        'pow_msg': pow_msg,
        'pow_sign': generate_md5_hash(pow_msg)
    })
    param_n["options"].update({
        'lotNumber': result['lot_number'],
        'bg': result['bg'],
        'slice': result['slice'],
        'powDetail': {
            "version": "1",
            "bits": 0,
            "datetime": time_str,
            "hashfunc": "md5"
        },
        'payload': result['payload'],
        'processToken': result['process_token'],
        'imgs': [
            result['bg'], result['slice']
        ],
        'powMsg': pow_msg,
        'powSign': generate_md5_hash(pow_msg),

    })

    w = c2.call('get_w', param_e,param_n)
    result.update({
        'w':w,
    })
    request_verify(result)

