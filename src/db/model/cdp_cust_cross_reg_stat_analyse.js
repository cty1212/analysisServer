const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_cross_reg_stat_analyse', {
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    cross_reg_sys1: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "交叉板块1"
    },
    cross_reg_sys2: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "交叉板块2"
    },
    cross_reg_cust_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "交叉用户数量"
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
    tableName: 'cdp_cust_cross_reg_stat_analyse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "cross_reg_sys1" },
          { name: "cross_reg_sys2" },
        ]
      },
    ]
  });
};
