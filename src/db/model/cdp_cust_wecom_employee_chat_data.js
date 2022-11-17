const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cdp_cust_wecom_employee_chat_data', {
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
    new_apply_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "成员发起申请数"
    },
    new_contact_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "成员新添加的客户数量"
    },
    chat_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "成员聊天总数"
    },
    message_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "成员发送消息数"
    },
    reply_percentage: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "成员已回复聊天占比"
    },
    avg_reply_time: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "平均首次回复时长（分钟）"
    },
    negative_feedback_cnt: {
      type: DataTypes.BIGINT,
      allowNull: true,
      comment: "删除\/拉黑成员的客户数"
    }
  }, {
    sequelize,
    tableName: 'cdp_cust_wecom_employee_chat_data',
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
