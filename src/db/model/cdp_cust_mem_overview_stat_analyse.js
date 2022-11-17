const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_mem_overview_stat_analyse', {
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    reg_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册会员数量（截止到当前）"
    },
    reg_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册会员数量（截止到上月同期月累）"
    },
    reg_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册会员数量（截止到上年同期月累）"
    },
    reg_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册会员数量（本期月累）"
    },
    reg_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册会员数量（上期月累）"
    },
    reg_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册会员数量（同期月累）"
    },
    v1_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "喜悦会员数量（截止到当前）"
    },
    v1_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "喜悦会员数量（截止到上月同期月累）"
    },
    v1_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "喜悦会员数量（截止到上年同期月累）"
    },
    v1_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "喜悦会员数量（本期月累）"
    },
    v1_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "喜悦会员数量（上期月累）"
    },
    v1_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "喜悦会员数量（同期月累）"
    },
    v2_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "优悦会员数量（截止到当前）"
    },
    v2_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "优悦会员数量（截止到上月同期月累）"
    },
    v2_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "优悦会员数量（截止到上年同期月累）"
    },
    v2_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "优悦会员数量（本期月累）"
    },
    v2_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "优悦会员数量（上期月累）"
    },
    v2_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "优悦会员数量（同期月累）"
    },
    v3_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "卓悦会员数量（截止到当前）"
    },
    v3_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "卓悦会员数量（截止到上月同期月累）"
    },
    v3_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "卓悦会员数量（截止到上年同期月累）"
    },
    v3_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "卓悦会员数量（本期月累）"
    },
    v3_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "卓悦会员数量（上期月累）"
    },
    v3_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "卓悦会员数量（同期月累）"
    },
    v4_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "超悦会员数量（截止到当前）"
    },
    v4_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "超悦会员数量（截止到上月同期月累）"
    },
    v4_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "超悦会员数量（截止到上年同期月累）"
    },
    v4_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "超悦会员数量（本期月累）"
    },
    v4_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "超悦会员数量（上期月累）"
    },
    v4_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "超悦会员数量（同期月累）"
    },
    yuexiuhui_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦秀会会员数量（截止到当前）"
    },
    yuexiuhui_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦秀会会员数量（截止到上月同期月累）"
    },
    yuexiuhui_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦秀会会员数量（截止到上年同期月累）"
    },
    yuexiuhui_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦秀会会员数量（本期月累）"
    },
    yuexiuhui_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦秀会会员数量（上期月累）"
    },
    yuexiuhui_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦秀会会员数量（同期月累）"
    },
    yuexianghui_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享会会员数量（截止到当前）"
    },
    yuexianghui_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享会会员数量（截止到上月同期月累）"
    },
    yuexianghui_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享会会员数量（截止到上年同期月累）"
    },
    yuexianghui_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享会会员数量（本期月累）"
    },
    yuexianghui_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享会会员数量（上期月累）"
    },
    yuexianghui_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享会会员数量（同期月累）"
    },
    fangbao_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀房宝会员数量（截止到当前）"
    },
    fangbao_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀房宝会员数量（截止到上月同期月累）"
    },
    fangbao_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀房宝会员数量（截止到上年同期月累）"
    },
    fangbao_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀房宝会员数量（本期月累）"
    },
    fangbao_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀房宝会员数量（上期月累）"
    },
    fangbao_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀房宝会员数量（同期月累）"
    },
    xinyu_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀星寓会员数量（截止到当前）"
    },
    xinyu_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀星寓会员数量（截止到上月同期月累）"
    },
    xinyu_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀星寓会员数量（截止到上年同期月累）"
    },
    xinyu_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀星寓会员数量（本期月累）"
    },
    xinyu_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀星寓会员数量（上期月累）"
    },
    xinyu_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "越秀星寓会员数量（同期月累）"
    },
    yuexianghui2_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享汇会员数量（截止到当前）"
    },
    yuexianghui2_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享汇会员数量（截止到上月同期月累）"
    },
    yuexianghui2_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享汇会员数量（截止到上年同期月累）"
    },
    yuexianghui2_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享汇会员数量（本期月累）"
    },
    yuexianghui2_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享汇会员数量（上期月累）"
    },
    yuexianghui2_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "悦享汇会员数量（同期月累）"
    },
    hsh_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "皇上皇会员数量（截止到当前）"
    },
    hsh_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "皇上皇会员数量（截止到上月同期月累）"
    },
    hsh_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "皇上皇会员数量（截止到上年同期月累）"
    },
    hsh_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "皇上皇会员数量（本期月累）"
    },
    hsh_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "皇上皇会员数量（上期月累）"
    },
    hsh_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "皇上皇会员数量（同期月累）"
    },
    fxry_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "风行乳业会员数量（截止到当前）"
    },
    fxry_cust_qty_td_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "风行乳业会员数量（截止到上月同期月累）"
    },
    fxry_cust_qty_td_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "风行乳业会员数量（截止到上年同期月累）"
    },
    fxry_cust_qty_mtd: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "风行乳业会员数量（本期月累）"
    },
    fxry_cust_qty_mtd_sq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "风行乳业会员数量（上期月累）"
    },
    fxry_cust_qty_mtd_tq: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "风行乳业会员数量（同期月累）"
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
    tableName: 'cdp_cust_mem_overview_stat_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
        ]
      },
    ]
  });
};
