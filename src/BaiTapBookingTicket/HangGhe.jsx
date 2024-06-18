import React, { Component } from 'react';

export default class HangGhe extends Component {
  state = {
    gheDangChon: null // Lưu ghế đang được chọn
  };

  chonGhe = (ghe) => {
    this.props.chonGhe(ghe); // Gọi phương thức chọn ghế từ props
    this.setState({ gheDangChon: ghe }); // Cập nhật state ghế đang chọn
  };

  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let disabled = false;
      let cssGheDaDat = "";
      let cssGheDangChon = "";

      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }

      if (this.state.gheDangChon && this.state.gheDangChon.soGhe === ghe.soGhe) {
        cssGheDangChon = 'gheDangChon';
      }

      return (
        <button
          onClick={() => this.chonGhe(ghe)}
          disabled={disabled}
          className={`${cssGheDaDat} ${cssGheDangChon} ghe`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      // Nếu là hàng đầu tiên thì render tên hạng ghế
      return <div>{this.props.hangGhe.hang}</div>;
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };

  render() {
    return <div className='text-light text-left ml-5 mt-1'>{this.renderHangGhe()}</div>;
  }
}
