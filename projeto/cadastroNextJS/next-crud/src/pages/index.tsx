import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Rodape from "../components/Rodape";
import Tabela from "../components/Tabela";
import useCliente from "../hooks/useClientes";

export default function Home() {

  const { 
    excluirCliente, 
    novoCliente,  
    salvarCliente, 
    selecionarCliente, 
    cliente, 
    clientes,
    tabelaVisivel,
    exibirTabela
  } = useCliente()

  return (
    <>
      <div className={`
        flex flex-col justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
        `}>
          <Layout titulo="Cadastro Simples">
            {tabelaVisivel ? (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
              </div>
              <Tabela cliente={clientes}
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}
              />
            </>
            ) : (
              <Formulario 
                cliente={cliente} 
                clienteMudou={salvarCliente}
                cancelado={exibirTabela}
              />
            )} 
          </Layout>
        <footer className="text-gray-50">
          <Rodape />
        </footer>
      </div>
    </>
  )
}
