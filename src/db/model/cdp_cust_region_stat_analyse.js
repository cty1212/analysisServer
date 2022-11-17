const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_region_stat_analyse', {
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    province: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "省份"
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "城市"
    },
    reg_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "注册用户数（截止到当前）"
    },
    buy_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "购买用户数（截止到当前）"
    },
    order_amt_td: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "交易金额（截止到当前）"
    },
    order_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "交易订单数量（截止到当前）"
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
    tableName: 'cdp_cust_region_stat_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "province" },
          { name: "city" },
        ]
      },
    ]
  });
};
