
const result = {
  qingqing_teacher_id: '123',
  comment_word: '', // 文字评价
  images: [
    {
      image_id: 1,
      image_path: '111111111'
    }
  ],
  dimensionality_item_list:
    [{
      id: 1,
      star: 4,
      label_id_list: [],
      sub_dimensionality_id: 1, // 单选按钮id
      is_main_dimensionality: true
    }],
  client: '',
  location: ''
}

// 星星评分
const result2 = {
  dimensionality_list: [
    {
      id: 1,
      name: '你是否见过老师？',
      can_choose_label_num: -1,
      is_main_dimensionality: false,
      sub_dimensionality_list_list: {
        sub_dimensionality_list_list: [
          {
            id: 11,
            name: '见过',
            label_list: [
              {
                id: '111',
                name: '总体和我差不多'
              },
              {
                id: '112',
                name: '总体比我好'
              }
            ]
          },
          {
            id: 32,
            name: '没见过',
            label_list: []
          }
        ]
      }
    },
    {
      id: 2,
      name: '推荐指数',
      can_choose_label_num: 1,
      is_main_dimensionality: true,
      new_star_label_list_list: {
        star_label_list_list: [
          {
            star: 1,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多'
              },
              {
                id: '32',
                name: '总体比我好'
              }
            ],
            selected: true
          },
          {
            star: 2,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多'
              },
              {
                id: '32',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 3,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多'
              },
              {
                id: '32',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 4,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多'
              },
              {
                id: '32',
                name: '总体比我好'
              }
            ]
          }
        ]
      },
      currLabel: [], // 当前的标签
      starScore: '', // 星星得分
      scoreDesc: '', // 描述
      label_id_list: [] // 选中的标签
    },
    {
      id: 3,
      name: '态度',
      can_choose_label_num: 1,
      is_main_dimensionality: true,
      new_star_label_list_list: {
        star_label_list_list: [
          {
            star: 1,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 2,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 3,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 4,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          }
        ]
      }
    }
  ]
}

// mock 数据
const MOCKDATA = {
  teacherPlace: '上海浦东数学哈老师',
  teacherAge: '6',
  // 星星评分
  dimensionality_list: [
    {
      id: 1,
      name: '你是否见过老师？',
      can_choose_label_num: -1,
      is_main_dimensionality: false,
      sub_dimensionality_list_list: {
        sub_dimensionality_list_list: [
          {
            id: 11,
            name: '见过',
            label_list: [
              {
                id: '111',
                name: '总体和我差不多'
              },
              {
                id: '112',
                name: '总体比我好'
              }
            ]
          },
          {
            id: 32,
            name: '没见过',
            label_list: []
          }
        ]
      }
    },
    {
      id: 2,
      name: '推荐指数',
      can_choose_label_num: 1,
      is_main_dimensionality: true,
      new_star_label_list_list: {
        star_label_list_list: [
          {
            star: 1,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多1'
              },
              {
                id: '32',
                name: '总体比我好1'
              }
            ]
          },
          {
            star: 2,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多2'
              },
              {
                id: '32',
                name: '总体比我好2'
              }
            ]
          },
          {
            star: 3,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多3'
              },
              {
                id: '32',
                name: '总体比我好3'
              }
            ]
          },
          {
            star: 4,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多4'
              },
              {
                id: '32',
                name: '总体比我好4'
              }
            ]
          },
          {
            star: 5,
            label_list: [
              {
                id: '21',
                name: '总体和我差不多5'
              },
              {
                id: '32',
                name: '总体比我好5'
              }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      name: '态度',
      can_choose_label_num: 4,
      is_main_dimensionality: true,
      new_star_label_list_list: {
        star_label_list_list: [
          {
            star: 1,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 2,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 3,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 4,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          },
          {
            star: 5,
            label_list: [
              {
                id: '321',
                name: '总体和我差不多'
              },
              {
                id: '332',
                name: '总体比我好'
              }
            ]
          }
        ]
      }
    }
  ]
}

const MOCK_DATA = [
  {
    teacher_name: '老师名称1',
    teaching_age: 2,
    length_of_teaching: 5433,
    teacher_id: 304507777,
    url: ''
  },
  {
    teacher_name: '老师名称1',
    teaching_age: 2,
    length_of_teaching: 5433,
    teacher_id: 304507777,
    url: ''
  }
]

const MOCK_DATA = {
  'dimensionality_list': [
    {
      'id': 43,
      'name': '您是否见过该老师',
      'can_choose_label_num': -1,
      'is_main_dimensionality': false,
      'sub_dimensionality_list_list': {
        'sub_dimensionality_list_list': [
          {
            'id': 82,
            'name': '见过',
            'label_list': [
              {
                'id': 87,
                'name': '相貌端正'
              },
              {
                'id': 86,
                'name': '没有口音'
              },
              {
                'id': 93,
                'name': '搞啥子'
              },
              {
                'id': 88,
                'name': '本地户籍'
              }
            ]
          },
          {
            'id': 83,
            'name': '没见过',
            'label_list': [
              {
                'id': 89,
                'name': '邋遢'
              }
            ]
          }
        ]
      }
    },
    {
      'id': 60,
      'name': '推荐指数',
      'star_label_list_list': [
        {
          'star': 1,
          'label_list': [
            {
              'id': 129,
              'name': '和我差不多'
            },
            {
              'id': 119,
              'name': '总体比我好'
            },
            {
              'id': 122,
              'name': '总体比我差'
            }
          ]
        },
        {
          'star': 2,
          'label_list': [
            {
              'id': 129,
              'name': '和我差不多'
            },
            {
              'id': 119,
              'name': '总体比我好'
            },
            {
              'id': 122,
              'name': '总体比我差'
            }
          ]
        },
        {
          'star': 3,
          'label_list': [
            {
              'id': 129,
              'name': '和我差不多'
            },
            {
              'id': 119,
              'name': '总体比我好'
            },
            {
              'id': 122,
              'name': '总体比我差'
            }
          ]
        },
        {
          'star': 4,
          'label_list': [
            {
              'id': 129,
              'name': '和我差不多'
            },
            {
              'id': 119,
              'name': '总体比我好'
            },
            {
              'id': 122,
              'name': '总体比我差'
            }
          ]
        },
        {
          'star': 5,
          'label_list': [
            {
              'id': 119,
              'name': '总体比我好'
            },
            {
              'id': 122,
              'name': '总体比我差'
            }
          ]
        }
      ],
      'can_choose_label_num': 1,
      'is_main_dimensionality': true,
      'new_star_label_list_list': {
        'star_label_list_list': [
          {
            'star': 1,
            'label_list': [
              {
                'id': 129,
                'name': '和我差不多'
              },
              {
                'id': 119,
                'name': '总体比我好'
              },
              {
                'id': 122,
                'name': '总体比我差'
              }
            ]
          },
          {
            'star': 2,
            'label_list': [
              {
                'id': 129,
                'name': '和我差不多'
              },
              {
                'id': 119,
                'name': '总体比我好'
              },
              {
                'id': 122,
                'name': '总体比我差'
              }
            ]
          },
          {
            'star': 3,
            'label_list': [
              {
                'id': 129,
                'name': '和我差不多'
              },
              {
                'id': 119,
                'name': '总体比我好'
              },
              {
                'id': 122,
                'name': '总体比我差'
              }
            ]
          },
          {
            'star': 4,
            'label_list': [
              {
                'id': 129,
                'name': '和我差不多'
              },
              {
                'id': 119,
                'name': '总体比我好'
              },
              {
                'id': 122,
                'name': '总体比我差'
              }
            ]
          },
          {
            'star': 5,
            'label_list': [
              {
                'id': 119,
                'name': '总体比我好'
              },
              {
                'id': 122,
                'name': '总体比我差'
              }
            ]
          }
        ]
      }
    },
    {
      'id': 1,
      'name': '教学态度',
      'star_label_list_list': [
        {
          'star': 1,
          'label_list': [
            {
              'id': 4,
              'name': '迟到早退'
            },
            {
              'id': 8,
              'name': '随意调课'
            },
            {
              'id': 130,
              'name': '课后答疑'
            }
          ]
        },
        {
          'star': 2,
          'label_list': [
            {
              'id': 4,
              'name': '迟到早退'
            },
            {
              'id': 8,
              'name': '随意调课'
            },
            {
              'id': 130,
              'name': '课后答疑'
            }
          ]
        },
        {
          'star': 3,
          'label_list': [
            {
              'id': 4,
              'name': '迟到早退'
            },
            {
              'id': 8,
              'name': '随意调课'
            },
            {
              'id': 130,
              'name': '课后答疑'
            }
          ]
        },
        {
          'star': 4,
          'label_list': [
            {
              'id': 3,
              'name': '按时上课'
            },
            {
              'id': 7,
              'name': '不乱调课'
            },
            {
              'id': 9,
              'name': '上课专心'
            },
            {
              'id': 130,
              'name': '课后答疑'
            }
          ]
        },
        {
          'star': 5,
          'label_list': [
            {
              'id': 3,
              'name': '按时上课'
            },
            {
              'id': 7,
              'name': '不乱调课'
            },
            {
              'id': 9,
              'name': '上课专心'
            },
            {
              'id': 130,
              'name': '课后答疑'
            }
          ]
        }
      ],
      'can_choose_label_num': -1,
      'is_main_dimensionality': false,
      'new_star_label_list_list': {
        'star_label_list_list': [
          {
            'star': 1,
            'label_list': [
              {
                'id': 4,
                'name': '迟到早退'
              },
              {
                'id': 8,
                'name': '随意调课'
              },
              {
                'id': 130,
                'name': '课后答疑'
              }
            ]
          },
          {
            'star': 2,
            'label_list': [
              {
                'id': 4,
                'name': '迟到早退'
              },
              {
                'id': 8,
                'name': '随意调课'
              },
              {
                'id': 130,
                'name': '课后答疑'
              }
            ]
          },
          {
            'star': 3,
            'label_list': [
              {
                'id': 4,
                'name': '迟到早退'
              },
              {
                'id': 8,
                'name': '随意调课'
              },
              {
                'id': 130,
                'name': '课后答疑'
              }
            ]
          },
          {
            'star': 4,
            'label_list': [
              {
                'id': 3,
                'name': '按时上课'
              },
              {
                'id': 7,
                'name': '不乱调课'
              },
              {
                'id': 9,
                'name': '上课专心'
              },
              {
                'id': 130,
                'name': '课后答疑'
              }
            ]
          },
          {
            'star': 5,
            'label_list': [
              {
                'id': 3,
                'name': '按时上课'
              },
              {
                'id': 7,
                'name': '不乱调课'
              },
              {
                'id': 9,
                'name': '上课专心'
              },
              {
                'id': 130,
                'name': '课后答疑'
              }
            ]
          }
        ]
      }
    }
  ]
}
