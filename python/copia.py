# Sequence Order 
numeros = []
for i in range (5):
    numero = int(input(f"Ingrese el numero {i+1}: "))
    numeros.append(numero)
ascendente = True
descendente = True 

for i in range(4):
    if numeros[i] > numeros [i+1]:
        ascendente = False
        
    if numeros[i] < numeros [i+1]:
        descendente = False

if ascendente:
    print ("Orden ascendente")
elif descendente:
    print("Orden descendente")
else:
    print("Orden aleatorio")  
 
 # Element Search
numeros = []
cantidad = int(input("Introduzca la cantidad de numeros: "))

for i in range (cantidad):
    num= int(input(f"Ingrese el numero {i+1}: "))
    numeros.append(num)

print("Lista ingresada:", numeros)

buscando = int(input("Ingrese el numero a buscar: "))
encontrado = False
for numero in numeros:
     if num == numeros:
        encontrado = True
        break

if encontrado:
    print ("Numero encontrado")
else:
    print("Numero no encontrado")

#Count of Even
num=int(input("Introduzca un numero entero: "))
pares= 0
impares= 0
numero = abs(numero)

while numero >0:
    digito = numero % 10
    if digito % 2 == 0:
        pares +=1
    else:
        impares += 1
    numero = numero // 10

print ("Digitos pares:", pares)
print("Digitos impares:",impares)


#Team Performance
numeros=[]
num=int(input("Cuantos elementos tendra su lista?: "))

for i in range (num):
    cantidad = int(input(f"Introduzca el elemento {i+1}: "))
    numeros.append(cantidad)

print("Lista:",numeros)

numeros2=[]

for i in range (num):
    cantidad2 = int(input(f"Introduzca el elemento {i+1}: "))
    numeros2.append(cantidad2)

print("Lista:",numeros2)

suma1=0
suma2=0
for i in range (num):
    suma1=suma1+numeros[i]
    suma2=suma2+numeros2[i]

if (suma1//num) == (suma2/num):
    print("Tienen el mismo promedio")

elif (suma1//num) >(suma2/num):
    print("El equipo 1 tiene mejor promedio")
else:
    print("El equipo 2 tiene mejor promedio")

#Largest Product Between two numbers
numeros=[]
cantidad = 4
for i in range (cantidad):
    num=int(input(f"Introduzca el numero {i+1}: "))
    numeros.append(num)
print(numeros)

mayor_producto = numeros[0] * numeros[1]

for i in range((cantidad-1)):
    print(numeros[i])
    for j in range(i+1,(cantidad)):
        print(numeros[j])
        producto = numeros[i] * numeros[j]
        if producto > mayor_producto:
            mayor_producto=producto
print(mayor_producto)

#Goal
meta= int(input("Ingrese la meta de ahorro: "))
ahorro_total=0
ahorro_diario=5
dia=0
while ahorro_total<meta:
    ahorro_total= ahorro_total+ahorro_diario
    ahorro_diario= ahorro_diario+2
    dia=dia+1

print(f"El ahorro ha sido alcanzado en {dia} dias ")

#Two Number Combination
numeros=[]
for i in range (4):
    num=int(input(f"Introduzca el numero {i+1}: "))
    numeros.append(num)

print("Lista ingresasa:",numeros)

for i in range (len(numeros)):
    for j in range (i+1, len(numeros)):
        print (f"({numeros[i]}, {numeros[j]})")

# Palindrome Number
num = int(input("Introduzca un numero: "))
cnum= num
newnum= 0
while num >0:
    digito = num % 10 
    num = num // 10
    newnum = (newnum * 10) + digito
print(f"Nuevo numero {newnum}")
if (newnum == cnum):
    print ("El numero es palindromo")
else:
    print("El numero no es palindromo")


#Prime number
num= int(input("Introduzca un numero entero: "))
cont = 0
for i in range (1,num+1):
    if num % i == 0:
        cont = cont + 1
   
if cont == 2:
        print("El numero es primo")
else: 
    print ("El numero no es primo") 

#Two Number 
numeros=[]
for i in range (4):
    num = int(input(f"Ingrese el numero {i+1}: "))
    numeros.append(num)
print("Lista ingresada: ", numeros)
for i in range (len(numeros)):
    for j in range (i+1, len(numeros)):
        print(f"()")


        
#Sum of Even Elements
numeros = []
cantidad = int(input("Introduzca la cantidad de numeros: "))
for i in range (cantidad):
    num = int(input(f"Introduzca el numero {i+1}: "))
    numeros.append(num)
print(numeros)

suma = 0
for i in range (cantidad):
    if numeros[i] % 2 == 0:
        suma = suma + numeros[i]
print("Suma de numeros pares: ",suma)

print (numeros[2])




