import matplotlib.pyplot as plt

# Coordenadas en el plano XY
P1 = (8, 2)
P2 = (-4, 8)
P3 = (-2, -5)
P4 = (4, -8)

# Lista de puntos en orden para cerrar el cuadrilátero
x = [P1[0], P2[0], P3[0], P4[0], P1[0]]
y = [P1[1], P2[1], P3[1], P4[1], P1[1]]

# Crear el gráfico
plt.figure(figsize=(6,6))
plt.plot(x, y, marker='o', linestyle='-')
plt.text(P1[0], P1[1], ' P1')
plt.text(P2[0], P2[1], ' P2')
plt.text(P3[0], P3[1], ' P3')
plt.text(P4[0], P4[1], ' P4')
plt.title('Cuadrilátero en el plano XY')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True)
plt.axis('equal')
plt.show()