<template>
  <div class="wrap">
    <div class="run">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Run',
  created () {
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  .run {
    width: 620px;
    height: 725px;
    // border: 1px solid #ccc; /*no*/
    border-radius: 10px;
    overflow: hidden;
    background: url('~@/images/sd.png') no-repeat left;
    background-size: auto 100%;
    background-position: 0 0;/*no*/
    animation: run 1s steps(14, end) infinite;
  }
}
@keyframes run {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -8694px 0;
  }
}
// @keyframes run {
//    0%{
//                   background-position: 0 0;
//               }
//               8.333%{
//                 background-position: -140px 0;
//             }
//             16.666%{
//                background-position: -280px 0 ;
//             }
//           25.0%{
//                 background-position: -420px 0 ;
//             }
//             33.333%{
//                background-position: -560px 0 ;
//             }
//            41.666%{
//                  background-position: -700px 0 ;
//             }
//            50.0%{
//                   background-position: -840px 0 ;
//            }
//             58.333%{
//                  background-position: -980px 0 ;
//             }
//             66.666%{
//                 background-position: -1120px 0 ;
//             }
//             75.0%{
//                 background-position: -1260px 0 ;
//            }
//             83.333%{
//                background-position: -1400px 0 ;
//             }
//           91.666%{
//                  background-position: -1540px 0 ;
//             }
//              100%{
//                 background-position: 0 0 ;
//            }
// }
</style>
