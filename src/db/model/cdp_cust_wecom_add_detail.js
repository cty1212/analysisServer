const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_wecom_add_detail', {
    add_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "添加情况ID"
    },
    add_way: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "添加方式"
    },
    owner_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "添加者ID"
    },
    external_userid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "企微ID"
    },
    unionid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "unionid"
    },
    add_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "添加时间"
    },
    data_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "数据日期"
    }
  }, {
    sequelize,
    tableName: 'cdp_cust_wecom_add_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "add_id" },
        ]
      },
    ]
  });
};
