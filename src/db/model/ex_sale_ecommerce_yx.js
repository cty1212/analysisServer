const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_sale_ecommerce_yx', {
    time: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "时间维度-月份"
    },
    created_company_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "所属公司名称"
    },
    channel: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "渠道名称"
    },
    target_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "指标名称"
    },
    target_value: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "当期数值"
    },
    create_by: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "创建人"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    }
  }, {
    sequelize,
    tableName: 'ex_sale_ecommerce_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time" },
          { name: "created_company_name" },
          { name: "channel" },
          { name: "target_name" },
        ]
      },
    ]
  });
};
