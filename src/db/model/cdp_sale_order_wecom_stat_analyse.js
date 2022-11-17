const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_wecom_stat_analyse', {
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
    src_sys_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "订单来源"
    },
    created_company_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "所属公司编码"
    },
    created_company_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "所属公司名称"
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
    tableName: 'cdp_sale_order_wecom_stat_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "chat_id" },
          { name: "src_sys_code" },
          { name: "created_company_id" },
        ]
      },
    ]
  });
};
