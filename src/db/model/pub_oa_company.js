const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pub_oa_company', {
    oa_code: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "OA账号"
    },
    oa_company: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "公司名称"
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
    tableName: 'pub_oa_company',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "oa_code" },
          { name: "oa_company" },
        ]
      },
    ]
  });
};
