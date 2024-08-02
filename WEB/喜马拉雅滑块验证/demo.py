# -*- coding:utf-8 -*-
import requests
import ddddocr
import random
import json
from Tools import load_js
import time
import execjs
from Crypto.PublicKey import RSA
import base64
from Crypto.Cipher import PKCS1_OAEP, PKCS1_v1_5


# 生成RSA密钥对
# key = RSA.generate(2048)
# private_key = key.export_key()


# 加密函数
def encrypt_rsa(pwd):
    public_key = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCVhaR3Or7suUlwHUl2Ly36uVmboZ3+HhovogDjLgRE9CbaUokS2eqGaVFfbxAUxFThNDuXq/fBD+SdUgppmcZrIw4HMMP4AtE2qJJQH/KxPWmbXH7Lv+9CisNtPYOlvWJ/GHRqf9x3TBKjjeJ2CjuVxlPBDX63+Ecil2JR9klVawIDAQAB"
    rsa_key = RSA.import_key(base64.b64decode(public_key))
    cipher = PKCS1_v1_5.new(rsa_key)
    encrypt_pwd = base64.b64encode(cipher.encrypt(pwd.encode(encoding='utf-8')))
    return encrypt_pwd.decode()

ctx = execjs.compile(open('demo.js','r',encoding='utf-8').read())

def getBg():
    headers = {
        "authority": "mobile.ximalaya.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "origin": "https://www.ximalaya.com",
        "pragma": "no-cache",
        "referer": "https://www.ximalaya.com/",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    cookies = {
        "_xmLog": "h5&f81927fe-44bd-4e7d-88dc-f0c823176daa&process.env.sdkVersion",
        "xm-page-viewid": "ximalaya-web",
        "impl": "www.ximalaya.com.login",
        "x_xmly_traffic": "utm_source%253A%2526utm_medium%253A%2526utm_campaign%253A%2526utm_content%253A%2526utm_term%253A%2526utm_from%253A"
    }
    url = "https://mobile.ximalaya.com/captcha-web/check/slide/get"
    params = {
        "bpId": "139",
        "sessionId": "xm_lk0qyb50kx6ayi"
    }
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    res = response.json()
    fg = res['data']['fgUrl']
    bg = res['data']['bgUrl']
    bg_img = requests.get(bg).content
    with open('./bg.jpg', 'wb') as fp:
        fp.write(bg_img)
    front = requests.get(fg).content
    with open('./fg.jpg', 'wb') as fp:
        fp.write(front)

def getImgLeft(t):
    return -12 * 0.8 + (t + 10) * (380 - 84.80000000000001 + 24 * 0.8) / (380 - 40)

def getSliderLeft(t):
    return int(round(getImgLeft(t) / 0.8 +44))

def get_locus():
    det = ddddocr.DdddOcr(det=False,ocr=False,show_ad=False)
    with open('fg.jpg','rb') as f:
        target_bytes = f.read()
    with open('bg.jpg','rb') as f:
        background_bytes = f.read()
    res = det.slide_match(target_bytes,background_bytes,simple_target=True)
    x_locus = int(res['target'][0]*0.8+10)
    print('x的位移距离为',x_locus)
    return x_locus

def onMoveEnd(x):
    captchaText = str(getSliderLeft(x)) + ',' + str(1)
    return captchaText

def submit_():
    headers = {
        "authority": "mobile.ximalaya.com",
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "origin": "https://www.ximalaya.com",
        "pragma": "no-cache",
        "referer": "https://www.ximalaya.com/",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    cookies = {
        "_xmLog": "h5&f81927fe-44bd-4e7d-88dc-f0c823176daa&process.env.sdkVersion",
        "xm-page-viewid": "ximalaya-web",
        "impl": "www.ximalaya.com.login",
        "x_xmly_traffic": "utm_source%253A%2526utm_medium%253A%2526utm_campaign%253A%2526utm_content%253A%2526utm_term%253A%2526utm_from%253A"
    }
    url = "https://mobile.ximalaya.com/captcha-web/valid/slider"
    getBg()
    x_locus = get_locus()
    captchaText = onMoveEnd(x_locus)
    data = {
        "bpId": 139,
        "sessionId": "xm_lk0qyb50kx6ayi",
        "type": "slider",
        "captchaText": captchaText,
        "startX": random.randint(150,210),
        "startY": random.randint(480,510),
        "startTime": int(round(time.time() * 1000)) - random.randint(2000,4000)
    }
    # data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, json=data)
    return response.json()['token']

def getNonce(token):
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        "Origin": "https://www.ximalaya.com",
        "Pragma": "no-cache",
        "Referer": "https://www.ximalaya.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "_xmLog": "h5&f81927fe-44bd-4e7d-88dc-f0c823176daa&process.env.sdkVersion",
        "xm-page-viewid": "ximalaya-web",
        "impl": "www.ximalaya.com.login",
        "x_xmly_traffic": "utm_source%253A%2526utm_medium%253A%2526utm_campaign%253A%2526utm_content%253A%2526utm_term%253A%2526utm_from%253A",
        "fds_otp": token
    }
    url = "https://passport.ximalaya.com/web/nonce/1689240851471"
    response = requests.get(url, headers=headers, cookies=cookies)
    return response.json().get('nonce',None)

def RsaPassword():
    # 公钥
    public_key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCVhaR3Or7suUlwHUl2Ly36uVmboZ3+HhovogDjLgRE9CbaUokS2eqGaVFfbxAUxFThNDuXq/fBD+SdUgppmcZrIw4HMMP4AtE2qJJQH/KxPWmbXH7Lv+9CisNtPYOlvWJ/GHRqf9x3TBKjjeJ2CjuVxlPBDX63+Ecil2JR9klVawIDAQAB'
    rsa_key = RSA.import_key(base64.b64decode(public_key))  # 读取公钥信息
    cip = PKCS1_v1_5.new(rsa_key)  # 生成一个加密类
    rsa_pass = base64.b64encode(cip.encrypt(password.encode(encoding='utf-8')))  # 对数据进行加密
    return  rsa_pass.decode()  # 对文本进行解码


def loginUser(nonce,token):
    rsa_password = RsaPassword()
    signature = load_js('login_demo', 'get_s', para=(account, password, nonce))
    # print(rsa_password)
    # print(signature)
    headers = {
        "Accept": "*/*",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Origin": "https://www.ximalaya.com",
        "Referer": "https://www.ximalaya.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\""
    }
    cookies = {
        "_xmLog": "h5&5517f576-1e6c-4e9c-8e66-8a089bda08c5&process.env.sdkVersion",
        "xm-page-viewid": "ximalaya-web",
        "impl": "www.ximalaya.com.login",
        "x_xmly_traffic": "utm_source%253A%2526utm_medium%253A%2526utm_campaign%253A%2526utm_content%253A%2526utm_term%253A%2526utm_from%253A",
        "Hm_lvt_4a7d8ec50cfd6af753c4f8aee3425070": "1689646484",
        "Hm_lpvt_4a7d8ec50cfd6af753c4f8aee3425070": "1689661120",
        "fds_otp": token
    }
    url = "https://passport.ximalaya.com/web/login/pwd/v1"
    data = {
        "account": account,
        "password": rsa_password,
        "nonce":nonce,
        "signature": signature,
        "rememberMe": False
    }
    response = requests.post(url,headers=headers,cookies=cookies,json=data)
    print(response.text)
    print(response)

def login_(nonce,token):
    cookies = {
        "_xmLog": "h5&f81927fe-44bd-4e7d-88dc-f0c823176daa&process.env.sdkVersion",
        "xm-page-viewid": "ximalaya-web",
        "impl": "www.ximalaya.com.login",
        "x_xmly_traffic": "utm_source%253A%2526utm_medium%253A%2526utm_campaign%253A%2526utm_content%253A%2526utm_term%253A%2526utm_from%253A",
        "login_type": "password_mobile",
        "fds_otp": token
    }
    param = {
        'account':'18306533233',
        'password': encrypt_rsa('123456'),
        'nonce':nonce
    }
    signature = ctx.call('q',param)
    param.update({
        'rememberMe':False,
        'signature':signature
    })
    res = requests.post('https://passport.ximalaya.com/web/login/pwd/v1',json=param,cookies=cookies)
    print(res.json())

if __name__ == '__main__':
    # getBg()
    # get_locus()
    account = '222521'
    password = '77895264'
    rsa_password = 'COwAPfdEc1v7kpuCBthpmovzVkFNGwiD2il83YmrUauQ5mZv1Q9jB7oFKJlIvNIyGNeuBBxSRcdLLK3ejspG6UrTHp19AZjT5O0RHifJK0S66ctUNJnWouAPckuP48ecPo3THzWcC6MwRN1iMSzPhOKbR9t+K27bOffjLSGjgI0='
    # token = submit_()
    # if token:
    #     nonce = getNonce(token)
    #     print(token,nonce)
    #     if nonce:
    #         login_(nonce,token)
            # loginUser(nonce,token)
    # token = submit_()
    # nonce = getNonce(token)
    nonce = '0-566BE436379337d59695e07d5dade68ccd75da607149657df9a77b55243aa4'
    param = {
        'account': '18306533233',
        'password': rsa_password,
        'nonce': nonce
    }
    sig = ctx.call('q', param)
    print(sig)


