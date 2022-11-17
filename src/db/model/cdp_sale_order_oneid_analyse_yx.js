const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_oneid_analyse_yx', {
    order_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "订单ID"
    },
    order_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单号"
    },
    cust_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户主档ID"
    },
    one_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "oneid"
    },
    union_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "union_id"
    },
    src_sys_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "来源系统代码"
    },
    order_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单日期"
    },
    pay_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "支付时间"
    },
    order_delivery_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "发货时间"
    },
    order_receive_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "收货时间"
    },
    order_pick_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "提货时间"
    },
    order_end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单完成时间"
    },
    order_st_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单状态代码"
    },
    order_st_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单状态名称"
    },
    active_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "活动号"
    },
    sale_channel: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "销售渠道"
    },
    is_online_type_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否线上订单"
    },
    order_type_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单类型代码"
    },
    order_type_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单类型名称"
    },
    pay_mode_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "支付方式代码"
    },
    pay_mode_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "支付方式名称"
    },
    pay_st_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "支付状态代码"
    },
    pay_st_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "支付状态名称"
    },
    order_cancel_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "取消时间"
    },
    order_cancel_reason_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单取消原因码"
    },
    order_cancel_describe: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单取消原因说明"
    },
    order_create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单创建时间"
    },
    order_update_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单更新时间"
    },
    item_total_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "商品总数量"
    },
    pay_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "应付金额"
    },
    item_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品金额"
    },
    pay_ship_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "运费金额"
    },
    return_ship_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "退运费金额"
    },
    return_item_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "退产品金额"
    },
    return_total_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "退款总金额"
    },
    coupon_dsc_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "优惠券优惠金额"
    },
    ship_dsc_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "运费优惠金额"
    },
    'bigint(20)egral_dsc_amt': {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "会员积分抵扣金额"
    },
    other_dsc_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "其他折扣金额"
    },
    pay_dsc_total_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "折扣总金额"
    },
    pay_actual_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "实际支付金额"
    },
    addr_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "地址id"
    },
    order_rcv_addr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "收货地址"
    },
    addr_province: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "省份"
    },
    addr_city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "市"
    },
    addr_county: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "区县"
    },
    residential_area: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "所属小区"
    }
  }, {
    sequelize,
    tableName: 'cdp_sale_order_oneid_analyse_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
