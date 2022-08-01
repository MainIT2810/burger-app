import React, { Component } from "react";
import { connect } from "react-redux";
import { AddingFoodAction } from "../redux/actions/AddingFoodAction";
class MenuBurger extends Component {
  renderTable = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.addingFood(propsMenu, 1);
              }}
            >
              +
            </button>
            {burger[propsMenu]}
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.addingFood(propsMenu, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };
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

          <tbody>{this.renderTable()}</tbody>

          <tfoot>
            <tr className="text-success">
              <td colSpan={2}></td>
              <td>Tổng Tiền:</td>
              <td>{this.props.total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addingFood: (propsBurger, amount) => {
      dispatch(AddingFoodAction(propsBurger, amount));
    },
    
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MenuBurger);
