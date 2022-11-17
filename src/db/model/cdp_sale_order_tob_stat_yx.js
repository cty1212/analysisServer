const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_tob_stat_yx', {
    time: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      comment: "时间维度"
    },
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    created_company_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "所属公司编码"
    },
    created_company_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "所属公司名称"
    },
    channel_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "渠道编码"
    },
    channel: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "渠道名称"
    },
    tax_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额-含税（本期）"
    },
    tax_order_amt_sq: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额-含税（上期）"
    },
    tax_order_amt_tq: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额-含税（同期）"
    },
    non_tax_order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额-不含税（本期）"
    },
    non_tax_order_amt_sq: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额-不含税（上期）"
    },
    non_tax_order_amt_tq: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额-不含税（同期）"
    },
    order_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "销售订单量（本期）"
    },
    order_qty_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "销售订单量（上期）"
    },
    order_qty_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "销售订单量（同期）"
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
    tableName: 'cdp_sale_order_tob_stat_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time" },
          { name: "data_time" },
          { name: "created_company_name" },
          { name: "channel" },
        ]
      },
    ]
  });
};
