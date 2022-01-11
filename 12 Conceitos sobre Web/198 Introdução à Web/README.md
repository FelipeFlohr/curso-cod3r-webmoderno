# Conceitos sobre Web

## Topologias de rede
- Topologia centralizada
Exemplo: certa empresa possui um switch e há vários computadores conectados ao mesmo. Se em alguma hora o switch parar de funcionar, toda rede para junto.

- Topologia distribuida
A topologia distribuida é muito mais parecida com a Internet. A Internet em si foi projetada para "resistir a ataques", dessa maneira, um ataque não derrubará todo o sistema de comunicação.

## Base da Internet
A base da Internet é o protocolo TCP/IP (Transmission Control Protocol / Internet Protocol).

O protocolo TCP é confiável e orietado a conexão, e de contrapartida há o protocolo de transporte UDP (User Datagram Protocol), não orientado a conexão e baseado no melhor esforço.

### Protocolo TCP/IP
O protocolo TCP/IP é uma aplicação baseada em layers (camadas). Sendo essas camadas:

- Aplicação :arrow_heading_down:
- Transporte :arrow_heading_down:
- Internet :arrow_heading_down:
- Rede/Física

Há uma dependência não-cíclica entre essas camadas: a camada de cima usa a camada de baixo. Dessa maneira, temos: aplicação dependendo de transporte; transporte dependendo de internet e internet dependendo da rede.

#### Responsabilidades e funções das camadas
- Aplicação: protocolos HTTP, FTP, SMTP, POP, DNS, etc. | Comunicação processo-a-processo faz com que, além da conexão host-a-host, também exista uma comunicação entre o Browser e o servidor Web que está provendo uma aplicação | Portas de Acesso

- Transporte: protocolos TCP (Confiável) e UDP (Melhor esforço) | Comunicação host-a-host faz com que máquinas se comuniquem (exemplo: computador cliente <-> servidor do Google).

- Internet: endereço IP (endereço de uma máquina dentro de uma rede). Esse endereço precisa ser único dentro de uma rede | Dentro da camada da internet há a comunicação entre redes e transferência de pacotes para outras redes.

- Rede/Física: tipos de conexão física: Wi-Fi, Ethernet... | MAC address (endereço da interface de rede) | Duas camadas do modelo OSI: Física (Hardware) e Enlace (Software)

## Anatomia do IPv4
Exemplo de IP: 192.168.100.230

- IP de classe A: do IP de exemplo, "192" representa a rede da máquina e "168.100.230" representa a máquina. Há poucas redes de classe A no mundo

- IP de classe B: do IP de exemplo, "192.168" representa a rede da máquina e "100.230" representa a máquina.

- IP de classe C: do IP de exemplo, "192.168.100" representa a rede da máquina e "230" representa a máquina.

## Conceito de Porta
Exemplo: há dois computadores que desejam se comunicar

- Computador 1: endereço IP 10.85.0.4
- Computador 2: endereço IP 10.85.0.5

Os dois computadores estão na mesma rede de classe C e podem facilmente se comunicarem. Contudo, nos computadores estão rodando os seguintes processos:

- Computador 1: Skype, Chrome, Apache, Dropbox
- Computador 2: GitHub Desktop, Chrome, Node, MySQL

É nesse cenário que entra a porta, pois, além da comunicação máquina-a-máquina, é necessário comunicação processo-a-processo