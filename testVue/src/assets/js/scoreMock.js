const MOCK_DATA = {
  'response': {
    'error_code': 0,
    'error_message': 'OK',
    'hint_message': ''
  },
  'dimensionality_list': [
    {
      'id': 58,
      'name': '是否见过该老师',
      'can_choose_label_num': -1,
      'is_main_dimensionality': false,
      'sub_dimensionality_list_list': {
        'sub_dimensionality_list_list': [
          {
            'id': 132,
            'name': '是',
            'label_list': [{
              'id': 87,
              'name': '相貌端正'
            }, {
              'id': 86,
              'name': '没有口音'
            }, {
              'id': 88,
              'name': '本地户籍'
            }]
          },
          {
            'id': 133,
            'name': '否',
            'label_list': [{
              'id': 133,
              'name': '完全不了解'
            }, {
              'id': 170,
              'name': '电话沟通过'
            }]
          }]
      }
    },
    {
      'id': 55,
      'name': '总体推荐',
      'star_label_list_list': [
        {
          'star': 1,
          'label_list': [
            {
              'id': 129,
              'name': '和我差不多'
            }, {
              'id': 119,
              'name': '总体比我好'
            }, {
              'id': 122,
              'name': '总体比我差'
            }]
        },
        {
          'star': 2,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        },
        {
          'star': 3,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        },
        {
          'star': 4,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        },
        {
          'star': 5,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        }],
      'can_choose_label_num': 1,
      'is_main_dimensionality': true,
      'new_star_label_list_list': {
        'star_label_list_list': [{
          'star': 1,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        }, {
          'star': 2,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        }, {
          'star': 3,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        }, {
          'star': 4,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        }, {
          'star': 5,
          'label_list': [{
            'id': 129,
            'name': '和我差不多'
          }, {
            'id': 119,
            'name': '总体比我好'
          }, {
            'id': 122,
            'name': '总体比我差'
          }]
        }]
      }
    },
    {
      'id': 1,
      'name': '教学态度',
      'star_label_list_list': [{
        'star': 1,
        'label_list': [{
          'id': 2,
          'name': '缺少沟通'
        }, {
          'id': 4,
          'name': '迟到早退'
        }, {
          'id': 6,
          'name': '仪容不整'
        }, {
          'id': 8,
          'name': '随意调课'
        }, {
          'id': 10,
          'name': '上课不专心'
        }, {
          'id': 12,
          'name': '报告内容敷衍'
        }, {
          'id': 14,
          'name': '答疑不及时'
        }]
      }, {
        'star': 2,
        'label_list': [{
          'id': 2,
          'name': '缺少沟通'
        }, {
          'id': 4,
          'name': '迟到早退'
        }, {
          'id': 6,
          'name': '仪容不整'
        }, {
          'id': 8,
          'name': '随意调课'
        }, {
          'id': 10,
          'name': '上课不专心'
        }, {
          'id': 12,
          'name': '报告内容敷衍'
        }, {
          'id': 14,
          'name': '答疑不及时'
        }]
      }, {
        'star': 3,
        'label_list': [{
          'id': 2,
          'name': '缺少沟通'
        }, {
          'id': 4,
          'name': '迟到早退'
        }, {
          'id': 6,
          'name': '仪容不整'
        }, {
          'id': 8,
          'name': '随意调课'
        }, {
          'id': 10,
          'name': '上课不专心'
        }, {
          'id': 12,
          'name': '报告内容敷衍'
        }, {
          'id': 14,
          'name': '答疑不及时'
        }]
      }, {
        'star': 4,
        'label_list': [{
          'id': 1,
          'name': '善于沟通'
        }, {
          'id': 3,
          'name': '按时上课'
        }, {
          'id': 5,
          'name': '衣着得体'
        }, {
          'id': 7,
          'name': '不乱调课'
        }, {
          'id': 9,
          'name': '上课专心'
        }, {
          'id': 11,
          'name': '报告内容详尽'
        }, {
          'id': 13,
          'name': '及时答疑'
        }]
      }, {
        'star': 5,
        'label_list': [{
          'id': 1,
          'name': '善于沟通'
        }, {
          'id': 3,
          'name': '按时上课'
        }, {
          'id': 5,
          'name': '衣着得体'
        }, {
          'id': 7,
          'name': '不乱调课'
        }, {
          'id': 9,
          'name': '上课专心'
        }, {
          'id': 11,
          'name': '报告内容详尽'
        }, {
          'id': 13,
          'name': '及时答疑'
        }]
      }],
      'can_choose_label_num': -1,
      'is_main_dimensionality': false,
      'new_star_label_list_list': {
        'star_label_list_list': [{
          'star': 1,
          'label_list': [{
            'id': 2,
            'name': '缺少沟通'
          }, {
            'id': 4,
            'name': '迟到早退'
          }, {
            'id': 6,
            'name': '仪容不整'
          }, {
            'id': 8,
            'name': '随意调课'
          }, {
            'id': 10,
            'name': '上课不专心'
          }, {
            'id': 12,
            'name': '报告内容敷衍'
          }, {
            'id': 14,
            'name': '答疑不及时'
          }]
        }, {
          'star': 2,
          'label_list': [{
            'id': 2,
            'name': '缺少沟通'
          }, {
            'id': 4,
            'name': '迟到早退'
          }, {
            'id': 6,
            'name': '仪容不整'
          }, {
            'id': 8,
            'name': '随意调课'
          }, {
            'id': 10,
            'name': '上课不专心'
          }, {
            'id': 12,
            'name': '报告内容敷衍'
          }, {
            'id': 14,
            'name': '答疑不及时'
          }]
        }, {
          'star': 3,
          'label_list': [{
            'id': 2,
            'name': '缺少沟通'
          }, {
            'id': 4,
            'name': '迟到早退'
          }, {
            'id': 6,
            'name': '仪容不整'
          }, {
            'id': 8,
            'name': '随意调课'
          }, {
            'id': 10,
            'name': '上课不专心'
          }, {
            'id': 12,
            'name': '报告内容敷衍'
          }, {
            'id': 14,
            'name': '答疑不及时'
          }]
        }, {
          'star': 4,
          'label_list': [{
            'id': 1,
            'name': '善于沟通'
          }, {
            'id': 3,
            'name': '按时上课'
          }, {
            'id': 5,
            'name': '衣着得体'
          }, {
            'id': 7,
            'name': '不乱调课'
          }, {
            'id': 9,
            'name': '上课专心'
          }, {
            'id': 11,
            'name': '报告内容详尽'
          }, {
            'id': 13,
            'name': '及时答疑'
          }]
        }, {
          'star': 5,
          'label_list': [{
            'id': 1,
            'name': '善于沟通'
          }, {
            'id': 3,
            'name': '按时上课'
          }, {
            'id': 5,
            'name': '衣着得体'
          }, {
            'id': 7,
            'name': '不乱调课'
          }, {
            'id': 9,
            'name': '上课专心'
          }, {
            'id': 11,
            'name': '报告内容详尽'
          }, {
            'id': 13,
            'name': '及时答疑'
          }]
        }]
      }
    },
    {
      'id': 2,
      'name': '教学能力',
      'star_label_list_list': [{
        'star': 1,
        'label_list': [{
          'id': 18,
          'name': '缺少引导'
        }, {
          'id': 157,
          'name': '缺少经验'
        }, {
          'id': 20,
          'name': '条理不清'
        }, {
          'id': 159,
          'name': '不熟悉教材'
        }, {
          'id': 163,
          'name': '不适合培优'
        }, {
          'id': 162,
          'name': '不适合补差'
        }]
      }, {
        'star': 2,
        'label_list': [{
          'id': 18,
          'name': '缺少引导'
        }, {
          'id': 157,
          'name': '缺少经验'
        }, {
          'id': 20,
          'name': '条理不清'
        }, {
          'id': 159,
          'name': '不熟悉教材'
        }, {
          'id': 163,
          'name': '不适合培优'
        }, {
          'id': 162,
          'name': '不适合补差'
        }]
      }, {
        'star': 3,
        'label_list': [{
          'id': 18,
          'name': '缺少引导'
        }, {
          'id': 157,
          'name': '缺少经验'
        }, {
          'id': 20,
          'name': '条理不清'
        }, {
          'id': 159,
          'name': '不熟悉教材'
        }, {
          'id': 163,
          'name': '不适合培优'
        }, {
          'id': 162,
          'name': '不适合补差'
        }]
      }, {
        'star': 4,
        'label_list': [{
          'id': 17,
          'name': '善于引导'
        }, {
          'id': 19,
          'name': '讲课生动'
        }, {
          'id': 156,
          'name': '经验丰富'
        }, {
          'id': 158,
          'name': '熟悉教材'
        }, {
          'id': 161,
          'name': '适合培优'
        }, {
          'id': 160,
          'name': '适合补差'
        }]
      }, {
        'star': 5,
        'label_list': [{
          'id': 17,
          'name': '善于引导'
        }, {
          'id': 19,
          'name': '讲课生动'
        }, {
          'id': 156,
          'name': '经验丰富'
        }, {
          'id': 158,
          'name': '熟悉教材'
        }, {
          'id': 161,
          'name': '适合培优'
        }, {
          'id': 160,
          'name': '适合补差'
        }]
      }],
      'can_choose_label_num': -1,
      'is_main_dimensionality': false,
      'new_star_label_list_list': {
        'star_label_list_list': [{
          'star': 1,
          'label_list': [{
            'id': 18,
            'name': '缺少引导'
          }, {
            'id': 157,
            'name': '缺少经验'
          }, {
            'id': 20,
            'name': '条理不清'
          }, {
            'id': 159,
            'name': '不熟悉教材'
          }, {
            'id': 163,
            'name': '不适合培优'
          }, {
            'id': 162,
            'name': '不适合补差'
          }]
        }, {
          'star': 2,
          'label_list': [{
            'id': 18,
            'name': '缺少引导'
          }, {
            'id': 157,
            'name': '缺少经验'
          }, {
            'id': 20,
            'name': '条理不清'
          }, {
            'id': 159,
            'name': '不熟悉教材'
          }, {
            'id': 163,
            'name': '不适合培优'
          }, {
            'id': 162,
            'name': '不适合补差'
          }]
        }, {
          'star': 3,
          'label_list': [{
            'id': 18,
            'name': '缺少引导'
          }, {
            'id': 157,
            'name': '缺少经验'
          }, {
            'id': 20,
            'name': '条理不清'
          }, {
            'id': 159,
            'name': '不熟悉教材'
          }, {
            'id': 163,
            'name': '不适合培优'
          }, {
            'id': 162,
            'name': '不适合补差'
          }]
        }, {
          'star': 4,
          'label_list': [{
            'id': 17,
            'name': '善于引导'
          }, {
            'id': 19,
            'name': '讲课生动'
          }, {
            'id': 156,
            'name': '经验丰富'
          }, {
            'id': 158,
            'name': '熟悉教材'
          }, {
            'id': 161,
            'name': '适合培优'
          }, {
            'id': 160,
            'name': '适合补差'
          }]
        }, {
          'star': 5,
          'label_list': [{
            'id': 17,
            'name': '善于引导'
          }, {
            'id': 19,
            'name': '讲课生动'
          }, {
            'id': 156,
            'name': '经验丰富'
          }, {
            'id': 158,
            'name': '熟悉教材'
          }, {
            'id': 161,
            'name': '适合培优'
          }, {
            'id': 160,
            'name': '适合补差'
          }]
        }]
      }
    }]
}

export default MOCK_DATA
