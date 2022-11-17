const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_toc_stat_fx', {
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
    area_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "区域代码"
    },
    area: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "区域名称"
    },
    order_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "业务模式"
    },
    platform: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "来源平台"
    },
    reg_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "会员数（本期）"
    },
    reg_cust_qty_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "会员数（上期）"
    },
    reg_cust_qty_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "会员数（同期）"
    },
    order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额（本期）"
    },
    order_amt_sq: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额（上期）"
    },
    order_amt_tq: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "销售金额（同期）"
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
    cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买客户数（本期）"
    },
    cust_qty_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买客户数（上期）"
    },
    cust_qty_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买客户数（同期）"
    },
    rebuy_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购客户数（本期）"
    },
    rebuy_cust_qty_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购客户数（上期）"
    },
    rebuy_cust_qty_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购客户数（同期）"
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
    tableName: 'cdp_sale_order_toc_stat_fx',
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
          { name: "area" },
          { name: "order_type" },
          { name: "platform" },
        ]
      },
    ]
  });
};
