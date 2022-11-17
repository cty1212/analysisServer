const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_business_cust_type_analyse', {
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
    cust_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "客户类型"
    },
    cust_class: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "客户分类"
    },
    reg_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "客户数量（截止到当前）"
    },
    reg_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "客户数量（截止到上月同期）"
    },
    reg_cust_qty_dtq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "客户数量（截止到上年同期）"
    },
    reg_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "客户数量（本期月累）"
    },
    reg_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "客户数量（上期月累）"
    },
    reg_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "客户数量（同期月累）"
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
    tableName: 'cdp_business_cust_type_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "created_company_name" },
          { name: "cust_type" },
          { name: "cust_class" },
        ]
      },
    ]
  });
};
