const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_overview_stat_analyse', {
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    reg_section_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "注册版块编码"
    },
    reg_section: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "注册版块"
    },
    reg_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（截止到当前）"
    },
    reg_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（截止到上月同期月累）"
    },
    reg_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数量（截止到上年同期月累）"
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
    buy_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买用户数量（截止到当前）"
    },
    buy_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买用户数量（截止到上月同期月累）"
    },
    buy_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买用户数量（截止到上年同期月累）"
    },
    buy_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买用户数量（本期月累）"
    },
    buy_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买用户数量（上期月累）"
    },
    buy_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买用户数量（同期月累）"
    },
    once_buy_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "单次用户数量（截止到当前）"
    },
    once_buy_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "单次用户数量（截止到上月同期月累）"
    },
    once_buy_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "单次用户数量（截止到上年同期月累）"
    },
    once_buy_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "单次用户数量（本期月累）"
    },
    once_buy_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "单次用户数量（上期月累）"
    },
    once_buy_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "单次用户数量（同期月累）"
    },
    rebuy_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购用户数量（截止到当前）"
    },
    rebuy_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购用户数量（截止到上月同期月累）"
    },
    rebuy_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购用户数量（截止到上年同期月累）"
    },
    rebuy_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购用户数量（本期月累）"
    },
    rebuy_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购用户数量（上期月累）"
    },
    rebuy_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "复购用户数量（同期月累）"
    },
    male_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "男性用户数量（截止到当前）"
    },
    female_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "女性用户数量（截止到当前）"
    },
    other_gender_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "其他性别用户数量（截止到当前）"
    },
    '20_cust_qty_td': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "20岁及以下用户数量（截止到当前）"
    },
    '21to30_cust_qty_td': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "21-30岁用户数量（截止到当前）"
    },
    '31to40_cust_qty_td': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "31-40岁用户数量（截止到当前）"
    },
    '41to50_cust_qty_td': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "41-50岁用户数量（截止到当前）"
    },
    '51to60_cust_qty_td': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "51-60岁用户数量（截止到当前）"
    },
    '61_cust_qty_td': {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "61岁及以上用户数量（截止到当前）"
    },
    unknown_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "未知年龄用户数量（截止到当前）"
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
    tableName: 'cdp_cust_overview_stat_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "reg_section" },
        ]
      },
    ]
  });
};
