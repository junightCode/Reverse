# -*- coding:utf-8 -*-
import requests
import time
import random
import json
import math
from ddddocr import DdddOcr
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import padding
from base64 import b64encode, b64decode


def aes_encrypt(key, iv, plaintext):
    backend = default_backend()
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=backend)
    encryptor = cipher.encryptor()
    padder = padding.PKCS7(128).padder()
    padded_data = padder.update(plaintext) + padder.finalize()
    ciphertext = encryptor.update(padded_data) + encryptor.finalize()
    return b64encode(ciphertext).decode()


def getToken():
    url = 'https://passport.youzan.com/api/captcha/get-behavior-captcha-token-v2.json?bizType=15&version=1.0'
    response = requests.get(url).json()
    token = response['data']['token']
    randomStr = response['data']['randomStr']
    return token


def getImg(token):
    url = f'https://passport.youzan.com/api/captcha/get-behavior-captcha-data.json?token={token}&captchaType=1'
    response = requests.get(url).json()
    bigUrl = response['data']['captchaObtainInfoResult']['bigUrl']
    smallUrl = response['data']['captchaObtainInfoResult']['smallUrl']
    bg_data = requests.get(bigUrl).content
    with open('./bg.png', 'wb') as fp:
        fp.write(bg_data)
    small_data = requests.get(smallUrl).content
    with open('./small.png', 'wb') as fp:
        fp.write(small_data)


def getLocus():
    dct = DdddOcr(ocr=False, show_ad=False)
    with open('./bg.png', 'rb') as fp:
        bg = fp.read()
    with open('./small.png', 'rb') as fp:
        small = fp.read()
    res = dct.slide_match(small, bg, simple_target=True)
    return res['target'][0] // 2


def setArray(x):
    ts = int(time.time()) * 1000
    sx = random.randint(15, 60)
    sy = random.randint(180, 220)
    array = []
    array.append({
        'mx': sx,
        'my': sy,
        'ts': ts
    })
    for i in range(300):
        if sx < x:
            mx = random.randint(1, 4)
            ts = random.randint(1, 5)
            sx += mx
        if sx > x:
            mx = random.randint(-3, -1)
            ts = random.randint(1, 5)
            sx += mx
        data = {
            'mx': mx,
            'my': 0,
            'ts': ts
        }
        array.append(data)
        if sx == x: break
    d = {
        'cx': math.ceil(x),
        'cy': random.randint(20, 40),
        'scale': 0.5,
        'slidingEvents': array
    }
    R = {
        "words": [
            1969715539,
            910444358,
            1648638293,
            1347106125
        ],
        "sigBytes": 16
    }
    return aes_encrypt()


if __name__ == '__main__':
    # token = getToken()
    # getImg(token)
    x = getLocus()
    setArray(x)
