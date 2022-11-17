const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_reg_source_stat_analyse', {
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    reg_source: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "注册来源"
    },
    reg_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（截止到当前）"
    },
    reg_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（截止到上月同期）"
    },
    reg_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（截止到上年同期）"
    },
    reg_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（本期月累）"
    },
    reg_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（上期月累）"
    },
    reg_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（同期月累）"
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
    tableName: 'cdp_cust_reg_source_stat_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "reg_source" },
        ]
      },
    ]
  });
};
