/* eslint-disable */
class Canvas_op {
  constructor (options) {
    if (!window.devicePixelRatio) {
      window.devicePixelRatio = 1
    }
    this.canvas = options.canvas
    this.state = options.state
    this.original_id = options.original_id
    this.paper_id = options.paper_id
    this.render_arr = this.state.canvas_paper_data_map[this.paper_id]
    this.canvas_config_map = {}
    this.ctx = this.canvas.getContext('2d')
    this.canvas_radio = 1.5
    this.point_radio = 1
    this.txt_info_map = {}
  }
  init_data () {
    this._handle_data(this.render_arr)
  }
  set_dimension ({ width, height }) {
    this.canvas.style.width = width + 'px'
    this.canvas.style.height = height + 'px'
    this.canvas.width = this.handle_radio(width)
    this.canvas.height = this.handle_radio(height)
  }
  _handle_history_logic (arr, temp) {
    let rmt = arr[arr.length - 1]['rmt']
    if (temp.is_history && rmt !== 1 && rmt !== 8 && rmt !== 3) {
      return true
    } else {
      return false
    }
  }
  _check_is_revert (temp) {
    let value = window.op_audit_act_id_map[temp['act_id']]
    if (value && value.is_disabled) {
      return true
    } else {
      return false
    }
  }
  _handle_data (arr) {
    if (!Array.isArray(arr)) {
      arr = [arr]
    }
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i]
      if (Array.isArray(temp)) {
        this._handle_data(temp)
      } else if (!temp || this._check_is_revert(temp)) {
        continue
      } else if (temp.rmt === 3 || temp.rmt === 8) {
        if (this._handle_history_logic(arr, temp)) {
          this.arbitrary_begin_fast_line(temp)
        } else {
          this.arbitrary_begin_line(temp)
        }
      } else if (temp.rmt === 1) {
        // 数据整合，这个是arr
        let temp_arr = temp.point.x
        for (let j = 0; j < temp_arr.length; j = j + 2) {
          if (this._handle_history_logic(arr, temp)) {
            this.arbitrary_mid_fast_line({ x: temp_arr[j], y: temp_arr[j + 1], act_id: temp.act_id })
          } else {
            this.arbitrary_mid_line({ x: temp_arr[j], y: temp_arr[j + 1], act_id: temp.act_id })
          }
        }
      } else if (temp.rmt === 2) {
        if (this._handle_history_logic(arr, temp)) {
          this.arbitrary_end_fast_line(temp)
        } else {
          this.arbitrary_end_line(temp)
        }
      } else if (temp.rmt === 7) {
        if (!temp.is_disabled) {
          if (this.txt_info_map[temp.act_id]) {
            this.txt_info_map[temp.act_id]['is_disabled'] = true
            this.txt_info_map[temp.act_id] = null
            this.reinit_data()
            break
          } else {
            this.txt_info_map[temp.act_id] = temp
            this.handle_txt(temp)
          }
        }
      } else if (temp.rmt === 14) {
        if (this.txt_info_map[temp.act_id]) {
          this.txt_info_map[temp.act_id]['is_disabled'] = true
          this.txt_info_map[temp.act_id] = null
          this.reinit_data()
          break
        } else {
          this.handle_txt(temp)
        }
      } else if (temp.rmt === 53 || temp.rmt === 51) {
        this.handle_ppt_scroll({ scroll_top: 0 })
        this.handle_img(temp)
      } else if (temp.rmt === 4) {
        // 画直线
        this.handle_direct_line(temp)
      } else if (temp.rmt === 5) {
        // 画圆
        this.handle_ellipse(temp)
      } else if (temp.rmt === 6) {
        // 画矩形
        this.stroke_rect(temp)
      } else if (temp.rmt === 10) {
        // 三角形
        this.handle_triangle(temp)
      } else if (temp.rmt === 11) {
        // 箭头线
        this.handle_tri_line(temp)
      } else if (temp.rmt === 12) {
        // 虚线
        this.handle_dot_line(temp)
      } else if (temp.rmt === 13) {
        // 清屏
        this.handle_clear_all(temp)
      } else if (temp.rmt === 52) {
        this.handle_ppt_scroll(temp)
      }
    }
  }
  reinit_data () {
    console.log('render_arr', this.render_arr)
    // 重置状态 避免有7没14的情况
    this.txt_info_map = {}
    this.canvas_config_map = {}
    this.handle_clear_all()
    this._handle_data(this.render_arr, false)
    console.log('init_data', +new Date())
  }
  handle_radio (number) {
    return Math.round(number * this.point_radio * window.devicePixelRatio * this.canvas_radio)
  }
  handle_ppt_scroll ({ top_offset }) {
    // 同步滚动消息
    let scroll_top
    if (!top_offset) {
      scroll_top = 0
    } else {
      scroll_top = -top_offset
    }
    let obj = this.state.canvas_info_map[this.original_id]
    for (var key in obj) {
      obj[key]['canvas']['canvas'].parentNode.style.top = scroll_top + 'px'
    }
  }
  arbitrary_begin_fast_line ({ point, lineWidth, strokeStyle, rmt, act_id }) {
    this.canvas_config_map[act_id] = {
      globalCompositeOperation: rmt === 8 ? 'destination-out' : 'source-over',
      lineWidth: this.handle_radio(lineWidth),
      strokeStyle: strokeStyle,
      cur_stay_point: point
    }
    this.ctx.save()
    this.ctx.lineJoin = 'round'
    this.ctx.lineCap = 'round'
    this.ctx.globalCompositeOperation = this.canvas_config_map[act_id]['globalCompositeOperation']
    this.ctx.lineWidth = this.canvas_config_map[act_id]['lineWidth']
    this.ctx.strokeStyle = this.canvas_config_map[act_id]['strokeStyle']
    this.ctx.beginPath()
    this.ctx.moveTo(this.handle_radio(point.x), this.handle_radio(point.y))
  }
  arbitrary_mid_fast_line (target_point) {
    let act_id = target_point.act_id
    if (!!this.canvas_config_map[act_id] && !!this.canvas_config_map[act_id]['cur_stay_point']) {
      let cur_stay_point = this.canvas_config_map[act_id]['cur_stay_point']
      this.ctx.moveTo(this.handle_radio(cur_stay_point.x), this.handle_radio(cur_stay_point.y))
      this.ctx.lineTo(this.handle_radio(target_point.x), this.handle_radio(target_point.y))
      this.canvas_config_map[act_id]['cur_stay_point'] = target_point
    }
  }
  arbitrary_end_fast_line ({ point, act_id }) {
    if (!!this.canvas_config_map[act_id] && !!this.canvas_config_map[act_id]['cur_stay_point']) {
      let cur_stay_point = this.canvas_config_map[act_id]['cur_stay_point']
      this.ctx.moveTo(this.handle_radio(cur_stay_point.x), this.handle_radio(cur_stay_point.y))
      this.ctx.lineTo(this.handle_radio(point.x), this.handle_radio(point.y))
      this.ctx.closePath()
      this.ctx.stroke()
      this.ctx.restore()
      this.canvas_config_map[act_id]['cur_stay_point'] = null
    }
  }
  // 曲线
  arbitrary_begin_line ({ point, lineWidth, strokeStyle, rmt, act_id }) {
    this.canvas_config_map[act_id] = {
      globalCompositeOperation: rmt === 8 ? 'destination-out' : 'source-over',
      lineWidth: this.handle_radio(lineWidth),
      strokeStyle: strokeStyle,
      cur_stay_point: point
    }
  }
  arbitrary_mid_line (target_point) {
    let act_id = target_point.act_id
    if (!!this.canvas_config_map[act_id] && !!this.canvas_config_map[act_id]['cur_stay_point']) {
      this.ctx.save()
      this.ctx.lineJoin = 'round'
      this.ctx.lineCap = 'round'
      this.ctx.globalCompositeOperation = this.canvas_config_map[act_id]['globalCompositeOperation']
      this.ctx.lineWidth = this.canvas_config_map[act_id]['lineWidth']
      this.ctx.strokeStyle = this.canvas_config_map[act_id]['strokeStyle']
      this.ctx.beginPath()
      let cur_stay_point = this.canvas_config_map[act_id]['cur_stay_point']
      this.ctx.moveTo(this.handle_radio(cur_stay_point.x), this.handle_radio(cur_stay_point.y))
      this.ctx.lineTo(this.handle_radio(target_point.x), this.handle_radio(target_point.y))
      this.ctx.closePath()
      this.ctx.stroke()
      this.canvas_config_map[act_id]['cur_stay_point'] = target_point
      this.ctx.restore()
    }
  }
  arbitrary_end_line ({ point, act_id }) {
    if (!!this.canvas_config_map[act_id] && !!this.canvas_config_map[act_id]['cur_stay_point']) {
      this.ctx.save()
      this.ctx.lineJoin = 'round'
      this.ctx.lineCap = 'round'
      this.ctx.globalCompositeOperation = this.canvas_config_map[act_id]['globalCompositeOperation']
      this.ctx.lineWidth = this.canvas_config_map[act_id]['lineWidth']
      this.ctx.strokeStyle = this.canvas_config_map[act_id]['strokeStyle']
      let cur_stay_point = this.canvas_config_map[act_id]['cur_stay_point']
      this.ctx.beginPath()
      this.ctx.moveTo(this.handle_radio(cur_stay_point.x), this.handle_radio(cur_stay_point.y))
      this.ctx.lineTo(this.handle_radio(point.x), this.handle_radio(point.y))
      this.ctx.closePath()
      this.ctx.stroke()
      this.ctx.restore()
      this.canvas_config_map[act_id]['cur_stay_point'] = null
    }
  }
  // 直线
  handle_direct_line ({ point1, point2, lineWidth, strokeStyle }) {
    // 异常情况兼容处理 点不应该超过边界 2个点不应该完全相同
    if (point1.x > 891 || point2.x > 891 || point1.y > 630 || point2.y > 630) {
      return false
    }
    if (point1.x === point2.x && point1.y === point2.y) {
      return false
    }
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.moveTo(this.handle_radio(point1.x), this.handle_radio(point1.y))
    this.ctx.lineWidth = this.handle_radio(lineWidth)
    this.ctx.strokeStyle = strokeStyle
    this.ctx.lineTo(this.handle_radio(point2.x), this.handle_radio(point2.y))
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.restore()
  }
  // 虚线
  handle_dot_line ({ point1, point2, lineWidth, strokeStyle, dot_break_len }) {
    let x1 = point1.x
    let y1 = point1.y
    let x2 = point2.x
    let y2 = point2.y
    this.ctx.save()
    this.ctx.lineWidth = this.handle_radio(lineWidth)
    this.ctx.lineJoin = 'round'
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = strokeStyle
    this.ctx.fillStyle = strokeStyle
    let angle = Math.atan(Math.abs(y2 - y1) / Math.abs(x2 - x1))
    let final_y = Math.abs(x2 - x1) / Math.cos(angle)
    // {3,2} {5,4} {9,8}
    let dot_line_width = 3
    let dot_line_break = 2
    if (lineWidth === 1) {
      dot_line_width = 3
      dot_line_break = 2
    } else if (lineWidth === 2) {
      dot_line_width = 5
      dot_line_break = 4
    } else if (lineWidth === 4) {
      dot_line_width = 9
      dot_line_break = 8
    }
    this.ctx.translate(this.handle_radio(x1), this.handle_radio(y1))
    if (x2 > x1 && y2 < y1) {
      // 第一象限
      this.ctx.rotate(-Math.PI / 2 - angle)
    } else if (x2 < x1 && y2 < y1) {
      // 第二象限
      this.ctx.rotate(Math.PI / 2 + angle)
    } else if (x2 < x1 && y2 > y1) {
      // 第三象限
      this.ctx.rotate(Math.PI / 2 - angle)
    } else if (x2 > x1 && y2 > y1) {
      // 第四象限
      this.ctx.rotate(-(Math.PI / 2 - angle))
    } else if (x1 === x2 && y2 > y1) {
      // 下竖直线
      this.ctx.rotate(0)
      final_y = Math.abs(y2 - y1)
    } else if (x1 === x2 && y1 > y2) {
      // 上竖直线
      this.ctx.rotate(Math.PI)
      final_y = Math.abs(y2 - y1)
    } else if (y1 === y2 && x2 > x1) {
      // 横右线
      this.ctx.rotate(-Math.PI / 2)
      final_y = Math.abs(x2 - x1)
    } else if (y1 === y2 && x1 > x2) {
      // 横左线
      this.ctx.rotate(Math.PI / 2)
      final_y = Math.abs(x2 - x1)
    } else {
      // 完全相等 丢弃
      this.ctx.restore()
      return false
    }
    let radio_final_y = this.handle_radio(final_y)
    let i = 0
    while (i + this.handle_radio(dot_line_width) < radio_final_y) {
      this.ctx.beginPath()
      this.ctx.moveTo(0, i)
      i = i + this.handle_radio(dot_line_width)
      this.ctx.lineTo(0, i)
      this.ctx.closePath()
      this.ctx.stroke()
      i = i + this.handle_radio(dot_line_break)
    }
    if (i < radio_final_y) {
      this.ctx.beginPath()
      this.ctx.moveTo(0, i)
      this.ctx.lineTo(0, radio_final_y)
      this.ctx.closePath()
      this.ctx.stroke()
    }
    this.ctx.restore()
  }
  // 圆
  handle_ellipse ({ x, y, radiusX, radiusY, rotation, startAngle, endAngle, lineWidth, strokeStyle, antiClockwise }) {
    this.ctx.save()
    this.ctx.lineWidth = this.handle_radio(lineWidth)
    this.ctx.strokeStyle = strokeStyle
    this.ctx.beginPath()
    this.ctx.ellipse(
      this.handle_radio(x),
      this.handle_radio(y),
      this.handle_radio(radiusX),
      this.handle_radio(radiusY),
      rotation,
      startAngle,
      endAngle,
      antiClockwise
    )
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.restore()
  }
  // 箭头线
  handle_tri_line ({ point1, point2, lineWidth, strokeStyle, triangle_width }) {
    // 先 rotate 再画箭头
    let x1 = point1.x
    let y1 = point1.y
    let x2 = point2.x
    let y2 = point2.y
    this.ctx.save()
    this.ctx.lineWidth = this.handle_radio(lineWidth)
    this.ctx.lineJoin = 'round'
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = strokeStyle
    this.ctx.fillStyle = strokeStyle
    let angle = Math.atan(Math.abs(y2 - y1) / Math.abs(x2 - x1))
    let final_y = Math.abs(x2 - x1) / Math.cos(angle)
    this.ctx.translate(this.handle_radio(x1), this.handle_radio(y1))
    if (x2 > x1 && y2 < y1) {
      // 第一象限
      this.ctx.rotate(-Math.PI / 2 - angle)
    } else if (x2 < x1 && y2 < y1) {
      // 第二象限
      this.ctx.rotate(Math.PI / 2 + angle)
    } else if (x2 < x1 && y2 > y1) {
      // 第三象限
      this.ctx.rotate(Math.PI / 2 - angle)
    } else if (x2 > x1 && y2 > y1) {
      // 第四象限
      this.ctx.rotate(-(Math.PI / 2 - angle))
    } else if (x1 === x2 && y2 > y1) {
      // 下竖直线
      this.ctx.rotate(0)
      final_y = Math.abs(y2 - y1)
    } else if (x1 === x2 && y1 > y2) {
      // 上竖直线
      this.ctx.rotate(Math.PI)
      final_y = Math.abs(y2 - y1)
    } else if (y1 === y2 && x2 > x1) {
      // 横右线
      this.ctx.rotate(-Math.PI / 2)
      final_y = Math.abs(x2 - x1)
    } else if (y1 === y2 && x1 > x2) {
      // 横左线
      this.ctx.rotate(Math.PI / 2)
      final_y = Math.abs(x2 - x1)
    } else {
      // 完全相等 丢弃
      this.ctx.restore()
      return false
    }
    let radio_final_y = this.handle_radio(final_y)
    this.ctx.beginPath()
    this.ctx.moveTo(0, 0)
    this.ctx.lineTo(0, radio_final_y)
    this.ctx.closePath()
    this.ctx.stroke()
    let tri_y1 = final_y
    let tri_x1 = 0
    let radio_tri_width = this.handle_radio(triangle_width)
    let tri_x2 = -radio_tri_width * 1 / 2
    let tri_y2 = final_y - radio_tri_width
    let tri_x3 = radio_tri_width * 1 / 2
    let tri_y3 = final_y - radio_tri_width
    this.ctx.beginPath()
    this.ctx.moveTo(this.handle_radio(tri_x1), this.handle_radio(tri_y1))
    this.ctx.lineTo(this.handle_radio(tri_x2), this.handle_radio(tri_y2))
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(this.handle_radio(tri_x1), this.handle_radio(tri_y1))
    this.ctx.lineTo(this.handle_radio(tri_x3), this.handle_radio(tri_y3))
    this.ctx.closePath()
    this.ctx.stroke()
    this.ctx.restore()
  }
  // 拆解文字
  handle_txt ({ point, txt, font, fillStyle }) {
    let txt_arr = txt.split('\n')
    // 1.5倍行距
    for (let i = 0; i < txt_arr.length; i++) {
      let temp = txt_arr[i]
      let temp_point = {
        x: this.handle_radio(point.x + 3),
        y: this.handle_radio(point.y + (1 + i) * font + 0.3 * font * (1 + i))
      }
      this.fillText({ point: temp_point, txt: temp, font, fillStyle })
    }
  }
  resize_img (width, height) {
    if (width <= 891 && height <= 630) {
      return {
        width,
        height
      }
    } else {
      if (width / height < 1.414) {
        width = 630 / height * width
        height = 630
      } else {
        height = 891 / width * height
        width = 891
      }
      return {
        width,
        height
      }
    }
  }
  resize_move_img (width, height) {
    if (width <= 891) {
      if (height <= 630) {
        // 2边都小
        return {
          x: this.handle_radio((891 - width) / 2),
          y: this.handle_radio((630 - height) / 2),
          width: width,
          height: height,
          canvas_width: Math.max(width, 891),
          canvas_height: Math.max(height, 630)
        }
      } else {
        // 变更canvas的大小
        console.log(width, height)
        return {
          x: this.handle_radio((891 - width) / 2),
          y: 0,
          width: width,
          height: height,
          canvas_width: Math.max(width, 891),
          canvas_height: Math.max(height, 630)
        }
      }
    } else {
      // 需要缩放的 width height
      let new_height = height * 891 / width
      let new_width = 891
      return this.resize_move_img(new_width, new_height)
    }
  }
  handle_img ({ url, mv }) {
    if (url) {
      this._load_img({ url, mv })
    }
  }
  _load_img ({ url, mv }) {
    // for test
    console.log('mv_test', mv)
    if (mv) {
      mv = mv.substr(1)
    }
    let self = this
    let image = new Image()
    image.onload = function () {
      if (mv >= '1.2.0') {
        let obj = self.resize_move_img(this.naturalWidth, this.naturalHeight)
        self.width = obj.canvas_width
        self.height = obj.canvas_height
        self.set_dimension({ width: self.width, height: self.height })
        self.draw_move_image({ obj, image })
        self.dispatch_redraw_draft_paper({ width: self.width, height: self.height })
      } else {
        let obj = self.resize_img(this.naturalWidth, this.naturalHeight)
        self.set_default_dimension()
        self.draw_image({ obj, image })
        self.dispatch_redraw_draft_paper({ width: self.width, height: self.height })
      }
    }
    // 异常处理,图片无法加载的时候
    image.onerror = function () {
      alert('图片加载失败', url)
      self.set_default_dimension()
    }
    image.src = url
  }
  dispatch_redraw_draft_paper ({ width, height }) {
    let obj = this.state.canvas_info_map[this.original_id][this.original_id]
    if (obj) {
      obj.canvas.set_dimension({ width, height })
      obj.canvas.reinit_data()
    }
  }
  set_default_dimension () {
    this.width = 891
    this.height = 630
    this.set_dimension({ width: self.width, height: self.height })
  }
  draw_image ({ obj, image }) {
    let x = this.handle_radio((891 - obj.width) / 2)
    let y = this.handle_radio((630 - obj.height) / 2)
    this.ctx.drawImage(image, x, y, this.handle_radio(obj.width), this.handle_radio(obj.height))
  }
  draw_move_image ({ obj, image }) {
    this.ctx.drawImage(image, obj.x, obj.y, this.handle_radio(obj.width), this.handle_radio(obj.height))
  }
  // 文字
  fillText ({ point, txt, font, fillStyle }) {
    this.ctx.save()
    this.ctx.font = this.handle_radio(font) + 'px' + ' 微软雅黑'
    this.ctx.textBaseline = 'bottom'
    this.ctx.fillStyle = fillStyle
    this.ctx.fillText(txt, point.x, point.y)
    this.ctx.restore()
  }
  // 框选删除
  erase_rect ({ point1, point2 }) {
    this.ctx.save()
    this.ctx.fillStyle = this.bg_color
    this.ctx.fillRect(point1.x, point1.y, point2.x, point2.y)
    this.ctx.restore()
  }
  handle_clear_all () {
    this.ctx.save()
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.restore()
  }
  fill_rect ({ point1, point2, lineWidth, fillStyle }) {
    this.ctx.save()
    this.ctx.fillStyle = fillStyle
    this.ctx.strokeRect(point1.x, point1.y, point2.x, point2.y)
    this.ctx.restore()
  }
  stroke_rect ({ point1, point2, lineWidth, strokeStyle }) {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.lineWidth = this.handle_radio(lineWidth)
    this.ctx.strokeStyle = strokeStyle
    this.ctx.strokeRect(
      this.handle_radio(point1.x),
      this.handle_radio(point1.y),
      this.handle_radio(point2.x) - this.handle_radio(point1.x),
      this.handle_radio(point2.y) - this.handle_radio(point1.y)
    )
    this.ctx.closePath()
    this.ctx.restore()
  }
  handle_triangle ({ point1, point2, point3, lineWidth, strokeStyle }) {
    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.moveTo(this.handle_radio(point1.x), this.handle_radio(point1.y))
    this.ctx.lineTo(this.handle_radio(point2.x), this.handle_radio(point2.y))
    this.ctx.lineTo(this.handle_radio(point3.x), this.handle_radio(point3.y))
    this.ctx.lineTo(this.handle_radio(point1.x), this.handle_radio(point1.y))
    this.ctx.closePath()
    this.ctx.lineWidth = this.handle_radio(lineWidth)
    this.ctx.strokeStyle = strokeStyle
    this.ctx.stroke()
    this.ctx.restore()
  }
}
export default Canvas_op
