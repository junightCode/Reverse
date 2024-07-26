# -*-coding:utf-8 -*-
# Time：2024/3/27 15:11
# Description:
from Crypto.Cipher import AES
import base64
import binascii


def decrypt_data(t, f, m):
    # 将输入的十六进制字符串解析为字节数组
    e = binascii.unhexlify(t)
    # 将字节数组转换为Base64编码的字符串
    n = base64.b64encode(e).decode('utf-8')

    # 使用AES算法进行解密
    cipher = AES.new(f, AES.MODE_CBC, m)
    decrypted_data = cipher.decrypt(base64.b64decode(n))

    # 去除PKCS7填充
    padding_length = decrypted_data[-1]
    decrypted_data = decrypted_data[:-padding_length]

    # 将解密后的字节数组转换为UTF-8编码的字符串
    print('123')
    return decrypted_data.decode('utf-8')


# 密钥和初始向量以字节数组形式提供
f = "jo8j9wGw%6HbxfFn".encode('utf-8')
m = "0123456789ABCDEF".encode('utf-8')

# 测试
t = '5588a9e126c91a28cc2f6813e379336911972dc12faaef75f742883d0671d434f9f1d45d2fd67c959ca7b762aa67da48711681af4f014130b6e585ea132460b9'  # 代表输入的十六进制字符串
result = decrypt_data(t, f, m)
print(result)