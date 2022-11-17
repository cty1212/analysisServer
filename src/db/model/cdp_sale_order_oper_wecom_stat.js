const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_oper_wecom_stat', {
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    chat_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "企微群ID"
    },
    chat_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "企微群名称"
    },
    chat_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "当前群成员人数"
    },
    enter_chat_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "进群人数（本日）"
    },
    leave_chat_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "退群人数（本日）"
    },
    cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买人数（本日）"
    },
    cust_qty_7d: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买人数（近7天）"
    },
    cust_qty_3od: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买人数（近30天）"
    },
    order_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单数（本日）"
    },
    order_qty_7d: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单数（近7天）"
    },
    order_qty_30d: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单数（近30天）"
    },
    order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "订单金额（本日）"
    },
    order_amt_7d: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "订单金额（近7天）"
    },
    order_amt_30d: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "订单金额（近30天）"
    },
    etl_create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ETL创建时间"
    },
    etl_modified_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "ETL修改时间"
    }
  }, {
    sequelize,
    tableName: 'cdp_sale_order_oper_wecom_stat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "chat_id" },
        ]
      },
    ]
  });
};
