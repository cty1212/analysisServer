const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ex_sale_content_yx', {
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
    content_platform: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "所属内容平台"
    },
    account_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "账号名称"
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
    tableName: 'ex_sale_content_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time" },
          { name: "created_company_name" },
          { name: "content_platform" },
          { name: "account_name" },
          { name: "target_name" },
        ]
      },
    ]
  });
};
