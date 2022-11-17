const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_sale_order_toc_offline_stat_yx', {
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
    store_category: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "门店类型"
    },
    store_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "门店编码"
    },
    store_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "门店名称"
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
    store_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "店铺数量（本期）"
    },
    store_qty_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "店铺数量（上期）"
    },
    store_qty_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "店铺数量（同期）"
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
    tableName: 'cdp_sale_order_toc_offline_stat_yx',
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
          { name: "store_category" },
          { name: "store_name" },
        ]
      },
    ]
  });
};
