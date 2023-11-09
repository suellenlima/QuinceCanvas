import os
import shutil

# Caminho da pasta onde as imagens estão localizadas
pasta_imagens = "E:/"  # Substitua pelo caminho correto da pasta

# Caminho da pasta de destino (onde os arquivos serão copiados)
pasta_destino = "C:/Users/2017200628/Desktop/MilenaXV/Extras"  # Substitua pelo caminho correto da pasta de destino

# Lista das imagens que você quer copiar (apenas os números)
lista_numeros = [
    "6939", "6075", "6216", "6494", "6527", "6506", "6530", "6548", "6557", "6576", "6603", "6593", "6605", "6607", "6619", "6634", "6675", "6830", "6489", "6525", "6581", "6904", "6848", "6858", "6895", "7433", "6912", "6958", "6999", "6986", "7090", "8788", "7060", "7098", "6934", "6454", "7133", "7219", "7253", "7269", "7282", "7287", "7291", "7293", "6837", "7462", "6934", "7487", "6360", "8759", "8840", "8868", "6052", "6126", "6118", "6149", "6437", "6221", "6325", "6092", "8807"
]

# Função para copiar os arquivos selecionados para a pasta de destino
def copiar_arquivos_selecionados():
    for numero in lista_numeros:
        for arquivo in os.listdir(pasta_imagens):
            if str(numero) in arquivo or str("_" + numero) in arquivo:
                caminho_arquivo_origem = os.path.join(pasta_imagens, arquivo)
                caminho_arquivo_destino = os.path.join(pasta_destino, arquivo)
                shutil.copy(caminho_arquivo_origem, caminho_arquivo_destino)

# Executa a função para copiar os arquivos selecionados
copiar_arquivos_selecionados()
