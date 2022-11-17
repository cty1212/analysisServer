const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_user_behvr_page_browse_oneid_analyse_yx', {
    page_browse_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "页面浏览ID"
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
      comment: "varchar(100)"
    },
    sku_no: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品编码"
    },
    browse_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "浏览时间"
    },
    referer_page_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "站内前向来源页"
    },
    event_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "事件编码"
    },
    src_sys_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "来源系统代码"
    },
    item_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品名称"
    },
    item_series: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品系列"
    },
    item_zoon: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "商品所属专区"
    },
    is_exchange: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否换购"
    },
    discount_label: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "优惠标签"
    },
    page_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "页面名称"
    },
    item_original_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品划线价"
    },
    item_current_price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "商品页面价"
    },
    browse_duration: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "浏览时长"
    }
  }, {
    sequelize,
    tableName: 'cdp_user_behvr_page_browse_oneid_analyse_yx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_browse_id" },
        ]
      },
    ]
  });
};
