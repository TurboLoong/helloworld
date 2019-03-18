total = 0
def count(list):
    if list == []:
        return 0
    return count(list[1:])

print count([1, 2, 3, 4])
