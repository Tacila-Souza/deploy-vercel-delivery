import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import FormProdutos from './components/produtos/formprdutos/FormProdutos'
import { AuthProvider } from './contestx/AuthContext'
import LayoutCliente from './layouts/LayoutCliente'
import LayoutRestaurante from './layouts/LayoutRestaurante'
import Cadastro from './pages/cadastro/Cadastro'
import Categorias from './pages/categorias/Categorias'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Produtos from './pages/produtos/Produtos'
import Recomendacoes from './pages/recomendacoes/Recomendacoes'

import 'react-toastify/dist/ReactToastify.css'
import { CarrinhoProvider } from './contestx/CarrinhoContext'; // Certifique-se que o caminho está correto
import { Cardapio } from './pages/Cardapio'
import { PaginaCarrinho } from './pages/Carrinho'

function App() {
  return (
      <AuthProvider>
        <CarrinhoProvider>
          <BrowserRouter>
            <ToastContainer/>
              <Routes>
                {/* AREA CLIENTE */}
              <Route element={<LayoutCliente />}>
                <Route path='/'element={<Login/>}/>
                <Route path='/login'element={<Login/>}/>
                <Route path='/cadastrar'element={<Cadastro/>}/>
                <Route path='/recomendacoes'element={<Recomendacoes/>}/>
                </Route>

                {/* AREA RESTAURANTE */}
                <Route element={<LayoutRestaurante />}>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/produtos'element={<Produtos/>}/>
                <Route path='/categorias'element={<Categorias/>}/>
                <Route path='/cadastrarproduto'element={<FormProdutos/>}/>
                <Route path='/editarproduto/:id'element={<FormProdutos/>}/>


                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/carrinho" element={<PaginaCarrinho />} />
                <Route path="/recomendacoes" element={<Recomendacoes />} />


                </Route>
              </Routes>
            </BrowserRouter>
          </CarrinhoProvider>
      </AuthProvider>
  )
}

export default App
