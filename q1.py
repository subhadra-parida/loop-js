n=int(input("enter the num"))
i=1
emp=[]
while i<=10:
    j=0
    while j<=10:
        if i!=j:
            num=n*i
        j=j+1
    emp.append(num)
    i=i+1
print(emp)