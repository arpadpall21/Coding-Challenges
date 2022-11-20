def removeNMaround(s):
    removeMap = [None for _ in range(len(s)+3)]

    for i in range(len(s)):
        if s[i] == 'M':
            removeMap[i+1] = 0
            removeMap[i] = 0
            continue

        if s[i] == 'N':
            removeMap[i+3] = 0
            continue

        if removeMap[i+2] == 0:
            continue

        removeMap[i+2] = s[i]

    return ''.join([i for i in removeMap if i != None and i != 0])


s1 = 'abMcdeNfMNg'
s2 = 'MabcdeMNMfg'
s3 = 'abMNc'
s4 = 'NMNM'
s5 = '123456xxM7Nb'

print( removeNMaround(s1))     # -> 'cde'
print( removeNMaround(s2))     # -> 'abcfg
print( removeNMaround(s3))     # -> ''
print( removeNMaround(s4))     # -> ''
print( removeNMaround(s5))     # -> '1234567'
