def create_phone_number(n):
    n.insert(0,'(')
    n.insert(4,')')
    n.insert(5,' ')
    n.insert(9,'-')
    listToStr = ''.join(map(str,n))
    return listToStr
    
print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
