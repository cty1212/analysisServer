const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_life_cycle_stat_analyse', {
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
    potential_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "潜在用户数量（截止到当前）"
    },
    new_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "新用户数量（截止到当前）"
    },
    active_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "活跃用户数量（截止到当前）"
    },
    silent_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "沉默用户数量（截止到当前）"
    },
    loss_alert_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "流失预警用户数量（截止到当前）"
    },
    loss_cust_qty_td: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "流失用户数量（截止到当前）"
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
    tableName: 'cdp_cust_life_cycle_stat_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "created_company_name" },
          { name: "order_type" },
        ]
      },
    ]
  });
};
