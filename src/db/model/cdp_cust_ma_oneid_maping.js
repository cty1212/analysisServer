const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_ma_oneid_maping', {
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
    segment_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "人群包ID"
    },
    segment_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "人群包名称"
    },
    node_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "人群包节点ID"
    },
    send_channel: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "触达渠道"
    },
    persona_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "用户ID"
    },
    mobile: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "手机号"
    },
    unionid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "unionid"
    },
    openid: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "openid"
    },
    cust_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "cust_id"
    },
    send_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "发送日期"
    },
    one_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "one_id"
    }
  }, {
    sequelize,
    tableName: 'cdp_cust_ma_oneid_maping',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "graph_id" },
          { name: "segment_id" },
          { name: "node_id" },
          { name: "send_channel" },
          { name: "persona_id" },
        ]
      },
    ]
  });
};
