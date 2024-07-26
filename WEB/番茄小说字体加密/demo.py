# -*- coding:utf-8 -*-
import requests

'''
下载字体文件
原文字体转换成unicode码
编写原文unicode码和字体文件编号的映射
'''

woff_map = {
    '58690':'太',
    '58408':'后',
    '58590':'一',
    '58658':'神',
    '58598':'往',
    '58461':'地',
    '58442':'说',
    '58457':'道'
}


def saveWoff():
    response = requests.get('https://lf6-awef.bytetos.com/obj/awesome-font/c/dc027189e0ba4cd.woff2').content
    with open('./a4cd.woff','wb') as fp:
        fp.write(response)


def test():
    s = '随脸'
    for i in s:
        print(i,"==>",ord(i))


def relpaceWoff():
    s = '随脸'
    res = ''
    for i in s:
        unicode = ord(i)
        woff = woff_map.get(str(unicode))
        if woff:
            res = res+woff
        else:
            res = res+i
    print(res)

if __name__ == '__main__':
    # saveWoff()
    # test()
    relpaceWoff()