const mock = {
  response: {
    error_code: 0,
    error_message: 'OK',
    hint_message: ''
    // hint_message: '这个是130****5202的订单，请确认后在支付'
  },
  package_info: {
    unpaid_winter_sub_order_info_brief: [
      {
        grade_course_with_name: {
          grade_id: 1,
          grade_name: '小学一年级',
          course_id: 2,
          course_name: '数学',
          grade_short_name: '一年级'
        },
        teacher_info: {
          qingqing_user_id: '222659297',
          user_type: 'teacher',
          head_image: '',
          nick: '程程老师',
          sex: 'female',
          new_head_image: '/teacher_headimg/201805/6a/{0}6a5465b7-23ca-46d5-9667-0fc08797c18f.jpg'
        },
        first_course_time: 1555808400000,
        course_num: 12,
        course_time: 100,
        real_pay_amount: 890,
        order_site_type: 'live_ost',
        qingqing_group_sub_order_id: '889951878085', // 模拟一个有奖学券的订单ID
        order_type: 'general_order_type',
        voucher_reduce_amount: 100, // 重刷数据
        label_items: [
          {
            label_name: '开学包',
            label_type: 'winter_vacation_config_name_ol_type'
          },
          {
            label_name: '双线课',
            label_type: 'strengthen_package_ol_type'
          }
        ],
        charge_type: 'formal_occt',
        selected_service_package: {
          service_package_id: 12,
          effective_time_length: 6,
          price: 3600
        },
        service_package_info: {
          service_package_info_items: [
            {
              service_package_id: 12,
              effective_time_length: 6,
              price: 3600
            },
            {
              service_package_id: 9,
              effective_time_length: 12,
              price: 0.01
            },
            {
              service_package_id: 14,
              effective_time_length: 14,
              price: 3600
            },
            {
              service_package_id: 13,
              effective_time_length: 24,
              price: 12000
            }
          ],
          is_forced: false,
          selected_service_package: {
            service_package_id: 12,
            effective_time_length: 6,
            price: 3600
          }
        },
        order_status: 'wait_to_pay_wvp_order_status'
      }
    ],
    paid_winter_sub_order_info_brief: [
      {
        grade_course_with_name: {
          grade_id: 1,
          grade_name: '小学一年级',
          course_id: 2,
          course_name: '数学',
          grade_short_name: '一年级'
        },
        teacher_info: {
          qingqing_user_id: '222659297',
          user_type: 'teacher',
          head_image: '',
          nick: '程程老师',
          sex: 'female',
          new_head_image: '/teacher_headimg/201805/6a/{0}6a5465b7-23ca-46d5-9667-0fc08797c18f.jpg'
        },
        first_course_time: 1555808400000,
        course_num: 10,
        course_time: 100,
        real_pay_amount: 0,
        order_site_type: 'live_ost',
        qingqing_group_sub_order_id: '608990288578',
        order_type: 'general_order_type',
        voucher_reduce_amount: 200,
        label_items: [
          {
            label_name: '开学包',
            label_type: 'winter_vacation_config_name_ol_type'
          },
          {
            label_name: '双线课',
            label_type: 'strengthen_package_ol_type'
          }
        ],
        charge_type: 'formal_occt',
        selected_service_package: {
          service_package_id: 12,
          effective_time_length: 6,
          price: 3600
        },
        service_package_info: {
          service_package_info_items: [
            {
              service_package_id: 12,
              effective_time_length: 6,
              price: 3600
            },
            {
              service_package_id: 9,
              effective_time_length: 12,
              price: 0.01
            },
            {
              service_package_id: 14,
              effective_time_length: 14,
              price: 3600
            },
            {
              service_package_id: 13,
              effective_time_length: 24,
              price: 12000
            }
          ],
          is_forced: false,
          selected_service_package: {
            service_package_id: 12,
            effective_time_length: 6,
            price: 3600
          }
        },
        order_status: 'paid_with_refund_wvp_order_status'
      }
    ],
    paid_info: {
      paid_course_num: 20,
      paid_course_time: 40,
      paid_amount: 1234,
      cashback_amount: 123
    },
    unpaid_info: {
      // 重刷数据
      unpaid_course_num: 20,
      unpaid_course_time: 40,
      unpaid_amount: 1234, // 重刷数据
      unpaid_voucher_reduce_amount: '123'
    },

    predict_cashback_info: {
      // 重刷数据
      cash_back_items: [
        {
          cashback_rate: '5',
          cashback_amount: '600',
          cashback_type: 'up_shift_wvp_cash_back_type'
        },
        {
          cashback_rate: '3',
          cashback_amount: '300',
          cashback_type: 'new_order_wvp_cash_back_type'
        }
      ],
      total_cash_back_amount: 3211
    },

    qingqing_winter_vacation_package_id: '387293683873',
    create_time: 1554176201000,
    // voucher_reduce_amount: 365, // 重刷数据
    multipleInfo: {
      multiple_mode: 'general_multiple_mode',
      multiple_paid_amout: 500,
      multiple_remain_pay_amount: 6000
    }
  }
}

const cashback = {
  response: {
    error_code: 0,
    error_message: 'OK',
    hint_message: ''
  },
  cash_back_info_itmes: [
    {
      cashback_type: 'upgrade_cashback_type',
      cashback_time: 1554884554000,
      cashback_amount: +100
    },
    {
      cashback_type: 'readjust_order_cashback_type',
      cashback_time: 1552206154000,
      cashback_amount: +101
    },
    {
      cashback_type: 'downgrade_cashback_type',
      cashback_time: 1552206154000,
      cashback_amount: -102
    },
    {
      cashback_type: 'cancel_course_deduction_cashback_type',
      cashback_time: 1552119754000,
      cashback_amount: -103
    },
    {
      cashback_type: 'new_order_cashback_type',
      cashback_time: 1541860554000,
      cashback_amount: +104
    }
  ]
}

const afterCalculate = {
  response: {
    error_code: 0,
    error_message: 'OK',
    hint_message: ''
  },
  sub_order_calculate_infos: [
    {
      qingqing_group_sub_order_id: '889951878085',
      order_type: 'general_order_type',
      real_pay_amount: 0,
      voucher_reduce_amount: 100
    }
  ],
  unpaid_info: {
    unpaid_course_num: 1,
    unpaid_course_time: 1,
    unpaid_amount: 1,
    unpaid_voucher_reduce_amount: 123
  },
  // voucher_reduce_amount: 1,
  cashback_info: {
    cash_back_items: [
      {
        cashback_rate: 1,
        cashback_amount: 1,
        cashback_type: 'up_shift_wvp_cash_back_type'
      },
      {
        cashback_rate: 1,
        cashback_amount: 1,
        cashback_type: 'new_order_wvp_cash_back_type'
      }
    ],
    total_cash_back_amount: 1
  }
}

// 多个订单使用奖学券
const orderVoucherItems = [
  {
    common_order: {
      order_type: 'general_order_type',
      qingqing_common_order_id: '123123'
    },
    value_voucher_instance_ids: [1, 2, 3, 4]
  }
]

export { mock, cashback, afterCalculate, orderVoucherItems }
