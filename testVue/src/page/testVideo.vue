<template>
  <div class="video">
    <video src="http://1251606527.vod2.myqcloud.com/9874e9a2vodgzp1251606527/6a1c3d1e5285890781357954388/ZxeXgauCT1cA.mp4"></video>
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      list: [
        {
          1: '一年级',
          'course': [
            {
              '数学': [
                {
                  'teacher': [
                    {
                      '宋老师': [
                        {
                          '1': 200,
                          '2': 300
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      grade: {
        1: '1年级',
        2: '2年级',
        3: '3年级',
        4: '4年级'
      },
      course: [
        {
          'id': 1,
          'value': [
            {
              'id': '01',
              'value': '数学'
            },
            {
              'id': '02',
              'value': '英语'
            }
          ]
        },
        {
          'id': 2,
          'value': [
            {
              'id': '01',
              'value': '数学'
            },
            {
              'id': '02',
              'value': '英语'
            },
            {
              'id': '03',
              'value': '语文'
            }
          ]
        }
      ],
      teacher: [
        {
          'id': '01',
          'value': [
            {
              'id': '001',
              'value': '数学'
            },
            {
              'id': '002',
              'value': '英语'
            }
          ]
        },
        {
          'id': 2,
          'value': [
            {
              'id': '01',
              'value': '数学'
            },
            {
              'id': '02',
              'value': '英语'
            },
            {
              'id': '03',
              'value': '语文'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.video, video{
  width: 100%;
}

</style>
