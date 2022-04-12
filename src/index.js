import React from 'react'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'

// Ultima modificación Constanza Castillo 4/04/2022
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)
