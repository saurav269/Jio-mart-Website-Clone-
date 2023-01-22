import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeroSection from '../Components/HeroSection'
import {LoginSignup} from '../Pages/LoginSignup'
import { PrivateRoute } from './PrivateRoute'
import Products from '../Pages/Products'
import SingleCart from '../Components/SingleCart'

const MainRoutes = () => {
  return (
    <div>
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/products" element={
                        <PrivateRoute>
                            <Products/>
                         </PrivateRoute>
                    } />
                    <Route path="/products/:id" element={
                            <SingleCart/> 
                    } />
                    <Route path="/login" element={<LoginSignup />} />
                    <Route path="*" element={<h3>Page Not Found</h3>} />
                </Routes>
            </div>
  )
}

export default MainRoutes