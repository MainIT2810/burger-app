import React, { Component } from "react";

export default class MenuBurger extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-info">Chọn thức ăn</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th></th>
              <th>Đơn Giá</th>
              <th>Thành tiền</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Salad</th>
              <td>
                <button className="btn btn-danger">+</button>1
                <button className="btn btn-info">-</button>
              </td>
              <td>10</td>
              <td>40</td>
            </tr>
            <tr>
              <th scope="row">Cheese</th>
              <td>
                <button className="btn btn-danger">+</button>1
                <button className="btn btn-info">-</button>
              </td>
              <td>20</td>
              <td>40</td>
            </tr>
            <tr>
              <th scope="row">Beef</th>
              <td>
                <button className="btn btn-danger">+</button>1
                <button className="btn btn-info">-</button>
              </td>
              <td>55</td>
              <td>110</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="text-success">
                <td>Tổng Tiền:</td>
                <td>10000</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
