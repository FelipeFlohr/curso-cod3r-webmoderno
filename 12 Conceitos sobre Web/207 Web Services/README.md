# Web Services
São serviços que uma aplicação provém (exemplo: obter a lista dos clientes devedores) e esses serviços são disponibilizados em cima de tecnologias da Web.

## Alternativas para trabalhar com Web Services
- Simple Object Access Protocol (SOAP): O SOAP é uma versão mais antiga e mais burocrática. Dentro do SOAP usa-se um conceito chamado **WSDL** (*Web Service Description Language*), na qual é um XML que diz quais são as funcionalidades que um Web Service provém. O SOAP é um **RPC** (*Remote Procedural Call*, ou invocação de procedimentos remotas), na qual faz com que, a partir do cliente possa ser possível invocar uma função que está no protocolo SOAP.
- Representational State Transfer (REST): O REST é uma versão mais nova e simples. Utiliza JSON e HTTP (Requisição e Respostas). Se um sistema consegue aplicar todos os princípios da convenção do REST, então ele é **RESTful**.

Exemplo de WSDL. Possui a operação "Hello World" que recebe um nome e devolve uma saudação:
```xml
<?xml version="1.0" encoding="UTF-8"?>

<definitions name="Hello" targetNamespace="http://hello" xmlns:tns="http://hello" xmlns="http://schemas.xmlsoap.org/wsdl/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/">
    <types>
        <xsd:schema elementFormDefault="qualified" targetNamespace="http://hello">

            <xsd:complexType name="sayHelloType">
                <xsd:sequence>
                    <xsd:element name="name" type="xsd:string" />
                </xsd:sequence>
            </xsd:complexType>
            <xsd:element name="sayHello" type="tns:sayHelloType" />

            <xsd:complexType name="sayHelloResponseType">
                <xsd:sequence>
                    <xsd:element name="return" type="xsd:string" />
                </xsd:sequence>
            </xsd:complexType>
            <xsd:element name="sayHelloResponse" type="tns:sayHelloResponseType" />

        </xsd:schema>
    </types>

    <message name="sayHello">
        <part name="parameters" element="tns:sayHello" />
    </message>
    <message name="sayHelloResponse">
        <part name="result" element="tns:sayHelloResponse" />
    </message>

    <portType name="HelloPortType">
        <operation name="sayHello">
            <input message="tns:sayHello" name="sayHello" />
            <output message="tns:sayHelloResponse" name="sayHelloResponse" />
        </operation>
    </portType>

    <binding name="HelloBinding" type="tns:HelloPortType">
        <soap:binding transport="http://schemas.xmlsoap.org/soap/http" style="document" />
        <operation name="sayHello">
            <soap:operation soapAction="" />
            <input>
                <soap:body use="literal" />
            </input>
            <output>
                <soap:body use="literal" />
            </output>
        </operation>
    </binding>

    <service name="HelloService">
        <port name="HelloPort" binding="tns:HelloBinding">
            <soap:address location="http://server:port/context/endpoint" />
        </port>
    </service>

</definitions>
```

## Convenções RESTful
| URL          | Método HTTP | Descrição                                   |
|--------------|-------------|---------------------------------------------|
| /clientes    | POST        | Irá criar um novo cliente no banco de dados |
| /clientes    | GET         | Obtém todos os clientes                     |
| /clientes/36 | GET         | Obtém o cliente de ID 36                    |
| /clientes/12 | PUT         | Atualiza os dados do cliente de ID 12       |
| /clientes/41 | DELETE      | Delete o cliente de ID 41                   |

## Escolhas arquiteturais
- SOA (Service-Oriented Architecture): padrão de projeto de software onde as funcionalidades implementadas nas aplicações devem ser disponibilizadas na forma de serviços, acessíveis via Web Services.
- Micro Service: pegar uma aplicação maior e "quebrar" em pequenos módulos. Exemplo: dentro do Spotify há um micro-serviço especializado na criação e manutenção de Playlist.