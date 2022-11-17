const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_wecom_group_chat_data', {
    data_time: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true,
      comment: "数据日期"
    },
    external_userid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "群主企微ID"
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "修改时间"
    },
    newchat_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "新增企微群数量（当天）"
    },
    chat_total_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "企微群总数量（截至当天）"
    },
    member_total_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "入群总人数（截至当天）"
    },
    chat_msg_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "有发过消息的群数量（当天）"
    },
    new_member_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "新增入群人数（当天）"
    },
    member_msg_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "有发过消息的群成员数（当天）"
    },
    msg_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "企微群消息总数（当天）"
    }
  }, {
    sequelize,
    tableName: 'cdp_cust_wecom_group_chat_data',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "data_time" },
          { name: "external_userid" },
        ]
      },
    ]
  });
};
