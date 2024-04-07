import React from 'react'
import styled from 'styled-components'
import SideBar from '../components/SideBar'
import MainContent from '../components/MainContent'

function Home() {
   
    const Div =  styled.div`
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-area: "sidebar main";
    background-color: #f8f9fa;
    min-height: 100vh;
    `
  return (
    <Div>
        <SideBar/>
        <MainContent/>

    </Div>
  )
}

export default Home