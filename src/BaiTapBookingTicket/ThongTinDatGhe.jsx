import React, { Component } from 'react';

export default class ThongTinDatGhe extends Component {
  render() {
    const { danhSachGheDaDat, xoaGhe } = this.props;

    // Tính tổng tiền từ danh sách ghế đã đặt
    const tongTien = danhSachGheDaDat.reduce((acc, ghe) => acc + ghe.gia, 0);

    return (
      <div>
        <button className='gheDuocChon'></button> <span className='text-light'>Ghế Đã Đặt</span>
        <br />
        <button className='gheDangChon'></button> <span className='text-light'>Ghế Đang Chọn</span>
        <br />
        <button style={{ marginLeft: '0' }} className='ghe'></button> <span className='text-light'>Ghế Trống</span>
        <div className='mt-5'>
          <table className='table'>
            <thead>
              <tr className='text-light'>
                <th>Số Ghế</th>
                <th>Giá</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {danhSachGheDaDat.map((ghe, index) => (
                <tr key={index}>
                  <td>{ghe.soGhe}</td>
                  <td>{ghe.gia}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => xoaGhe(ghe.soGhe)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Hiển thị tổng tiền */}
        <div className="text-light mt-3">
          <h4>Tổng tiền: {tongTien.toLocaleString()} VND</h4>
        </div>
      </div>
    );
  }
}
