# vue 기초부터 개념 다시!

## Vue 프로젝트 설치

## vue ui / vue create [파일명]


## vue-router
코드 임포트 시키기
코드 스플릿팅으로 쪼개기

스플릿팅으로 쪼개도 많이 접근하는 곳에는 프리패치 사용

() => import(
/* webpackChunkName: "contact" , webpackPrefetch:true */ 
)
기본설정값 삭제 
//vue.config.js
chainWebpack : config => {
    config.plugins.delete('prefetch') // 프리팻치 기능이 삭제 
}