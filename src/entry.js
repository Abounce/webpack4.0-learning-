// import $ from 'jquery'
// import'popper.js/dist/popper.js'
// import'bootstrap/dist/js/bootstrap.js'
// import'bootstrap/dist/css/bootstrap.css'
import './index.css'
$(function () {
    let aa='你好'
    $('#home').on('click',()=>{
        $('#show').text('我出现了')
        console.log(`我被点击了：${aa}`)
    })
      const  temp =[1,2,3]
    temp.map((item)=>{
        console.log('item是:'+item)
    })
})