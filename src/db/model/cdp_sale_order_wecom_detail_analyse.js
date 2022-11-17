const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_wecom_detail_analyse', {
    wecom_order_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "企微订单ID"
    },
    order_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单ID"
    },
    order_detail_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单详情ID"
    },
    order_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "订单号"
    },
    unionid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "unionid"
    },
    cust_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户ID"
    },
    external_userid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "企微ID"
    },
    owner_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "添加者ID"
    },
    src_sys_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "来源系统代码"
    },
    item_type_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品类型名称"
    },
    sku_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品编码"
    },
    order_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "订单日期"
    },
    item_base_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品原价"
    },
    item_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品单价"
    },
    item_total_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品总金额"
    },
    item_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "数量"
    }
  }, {
    sequelize,
    tableName: 'cdp_sale_order_wecom_detail_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wecom_order_id" },
        ]
      },
    ]
  });
};
