numero_decimal= int(input("Introduzca un número: "))
numero_binario= bin(numero_decimal)[2:]
print("Número binario:", numero_binario)

numero_decimal2= int(input("Introduzca un número: "))
numero_octal= oct(numero_decimal2) [2:]
print(f"El numero octal es:", numero_octal)

numero_decimal3= int(input("Introduca un número: "))
numero_hexadecimal= hex(numero_decimal3)[2:]
print("Número hexadecimal es:",numero_hexadecimal)

#Suma de binario y re4sultado decimal
bin1= input("Introduzca un primer numero binario: ")
bin2= input("Introduzca un segundo numero binario: ")
bin1_decimal= int(bin1, 2)
bin2_decimal= int(bin2, 2)
suma= bin1_decimal+bin2_decimal
print("Suma:",suma)

#Convertir un número hexadecimal a binario y viceversa

print("=== Conversión Hexadecimal ↔ Binario ===")
hex_nume = input("Ingrese un número hexadecimal (sin 0x): ")
bin_from_hex = bin(int(hex_nume, 16))[2:]
print("En binario:", bin_from_hex)

bin_nume = input("Ingrese un número binario: ")
hex_from_bin = hex(int(bin_nume, 2))[2:]
print("En hexadecimal:", hex_from_bin)
# Operaciones aritméticas con binarios

print("\n=== Operaciones con binarios ===")
b1 = input("Ingrese el primer número binario: ")
b2 = input("Ingrese el segundo número binario: ")

# Convertir a decimal
d1 = int(b1, 2)
d2 = int(b2, 2)

# Operaciones
suma = d1 + d2
resta = d1 - d2
multiplicacion = d1 * d2
division = d1 // d2 if d2 != 0 else "Error: División entre cero"

# Mostrar resultados en binario
print("Suma:", bin(suma)[2:])
print("Resta:", bin(resta)[2:] 
      if isinstance(resta, int) and resta >= 0 
      else "No hay binario para negativo")
print("Multiplicación:", bin(multiplicacion)[2:])
print("División:", bin(division)[2:] 
      if isinstance(division, int) 
      else division)


# Tabla de multiplicar usando while

print("\n=== Tabla de multiplicar ===")
num = int(input("Ingrese un número para la tabla de multiplicar: "))
i = 1
while i <= 10:
    print(f"{num} x {i} = {num * i}")
    i += 1

# Suma de números pares entre 1 y 50

print("\n=== Suma de números pares entre 1 y 50 ===")
suma_pares = sum(i for i in range(1, 51) 
                 if i % 2 == 0)
print("La suma es:", suma_pares)

#Suma de números primos entre 1 y 100

print("\n=== Suma de números primos entre 1 y 100 ===")

def es_primo(n):
    if n < 2:
        return False
    for j in range(2, int(n ** 0.5) + 1):
        if n % j == 0:
            return False
    return True

suma_primos = sum(i for i in range(1, 101) if es_primo(i))
print("La suma es:", suma_primos)
