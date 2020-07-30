import cmath
# o resultado estará entre [-π, π]
print(cmath.pi)

x = 0
# o resultado estará entre [-π, π]
print(cmath.phase(x)) # 0.6435011087932844
print(phase(complex(-1.0, 0.0))) # 3.1415926535897931
print(phase(complex(-1.0, -0.0))) # -3.1415926535897931
