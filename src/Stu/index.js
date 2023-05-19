/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Layer from './Layer'
import ConLeft from './page/conLfet'
import Top from './page/top'
import {Outlet} from 'react-router-dom'
import GetRouterStr from '../unit/RouterChildren'

export default function index() {
  const Config ={
    uses:{
        root:'/user',
        upAdd:'/upadd',
        pay:{
            root:'/pay',
            AddPay:'/addpay',
            uppau:'/uppay'
        }
    },
    login:{
      root:'/login',
      password:'/password',
      name:{
        root:'/nameId',
        AddName:'/addname',
        deltName:'/deltName',
        Xname:{
          root:'/xname',
          usename:'/usename'
        }
      }

    }
}
  const RouterStr  =  GetRouterStr(Config,'');
  return (
    <>
    <Layer  top={<Top/>} left={<ConLeft/>}>
    <Outlet />
    </Layer>
  </>
  )
}

