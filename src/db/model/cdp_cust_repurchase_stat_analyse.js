const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_repurchase_stat_analyse', {
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
    order_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "业务模式"
    },
    buy_cust_qty: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "总购买人数（本期）"
    },
    buy_1t_cust_qty: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "购买一次人数（本期）"
    },
    buy_2t_cust_qty: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "购买两次人数（本期）"
    },
    buy_3t_cust_qty: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "购买三次人数（本期）"
    },
    buy_3moret_cust_qty: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "购买三次以上人数（本期）"
    },
    new_cust_buy_qty: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "新用户购买人数（本期）"
    },
    old_cust_buy_qty: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "老用户购买人数（本期）"
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
    tableName: 'cdp_cust_repurchase_stat_analyse',
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
          { name: "order_type" },
        ]
      },
    ]
  });
};
