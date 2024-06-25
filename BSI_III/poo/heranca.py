class Usuario:
    def __init__(self):
        self.__nomeUsuario = None
    
    def setNomeUsuario(self, nome):
        self.__nomeUsuario = nome
    
    def getNomeUsuario(self):
        return self.__nomeUsuario


class Admin(Usuario):
    def escrevaNome(self):
        return "Admin"
    
    def digaOla(self):
        nome_usuario = self.getNomeUsuario()
        if nome_usuario:
            return f"Olá Admin, {nome_usuario}"
        else:
            return "Olá Admin"




admin = Admin()
admin.setNomeUsuario("Lucas")
print(admin.escrevaNome())  
print(admin.digaOla())     

admin1 = Admin()
admin1.setNomeUsuario("Baltazar")
print(admin1.digaOla())