const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_user_behvr_item_add_oneid_analyse_yx', {
    shop_add_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "加购操作ID"
    },
    open_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "open_id"
    },
    union_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "union_id"
    },
    cust_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "客户主档ID"
    },
    one_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "oneid"
    },
    sku_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品编码"
    },
    matnr: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "物料编码"
    },
    item_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品名称"
    },
    add_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "加车时间"
    },
    add_shop_way: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "加车路径"
    },
    is_first_login: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "账号是否首日登录"
    },
    src_sys_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "来源系统代码"
    },
    unit_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "售卖单价"
    },
    original_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "原始单价"
    }
  }, {
    sequelize,
    tableName: 'cdp_user_behvr_item_add_oneid_analyse_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shop_add_id" },
        ]
      },
    ]
  });
};
