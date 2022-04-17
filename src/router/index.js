import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/views/Login";
import student from "@/views/student";
import admin from "@/views/admin";
import sop from '@/components/student_service/sop'
import aop from '@/components/admin_service/aop'
import BS from "@/components/student_service/BS"
import GC from "@/components/student_service/GC"
import HP from "@/components/student_service/HP"
import LS from "@/components/student_service/LS"
import PH from "@/components/student_service/PH"
import VC from "@/components/student_service/VC"
import IF from "@/components/admin_service/IF"
import OV from "@/components/admin_service/OV"
import PS from "@/components/admin_service/PS"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect:{name:'Login'}
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/student',
    name: 'student',
    component: student,
    children: [
      {
        path: '',
        name: 'sop',
        component: sop
      },
      {
        path: 'GC',
        name: 'GC',
        component: GC
      },
      {
        path: 'BS',
        name: 'BS',
        component: BS
      },
      {
        path: 'HP',
        name: 'HP',
        component: HP
      },
      {
        path: 'LS',
        name: 'LS',
        component: LS
      },
      {
        path: 'PH',
        name: 'PH',
        component: PH
      },
      {
        path: 'VC',
        name: 'VC',
        component: VC
      },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    children: [
      {
        path: 'aop',
        name: 'aop',
        component: aop
      },
      {
        path: 'IF',
        name: 'IF',
        component: IF
      },
      {
        path: 'OV',
        name: 'OV',
        component: OV
      },
      {
        path: 'PS',
        name: 'PS',
        component: PS
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
