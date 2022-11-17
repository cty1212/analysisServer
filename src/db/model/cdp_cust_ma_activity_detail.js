const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_ma_activity_detail', {
    graph_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "活动ID"
    },
    graph_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "活动名称"
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "活动开始时间"
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "活动结束时间"
    },
    one_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "one_id"
    },
    src_sys_code: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "事件所属平台"
    },
    is_open_mini_apps: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否进入小程序"
    },
    is_item_browse: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否进入商详页"
    },
    is_add_cart: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否加购"
    },
    is_buy: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "是否有订单"
    },
    order_qty: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "订单数量"
    },
    order_amt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "订单金额"
    }
  }, {
    sequelize,
    tableName: 'cdp_cust_ma_activity_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "graph_id" },
        ]
      },
    ]
  });
};
