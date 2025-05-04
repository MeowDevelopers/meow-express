
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.QRTZ_BLOB_TRIGGERSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  BLOB_DATA: 'BLOB_DATA'
};

exports.Prisma.QRTZ_CALENDARSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  CALENDAR_NAME: 'CALENDAR_NAME',
  CALENDAR: 'CALENDAR'
};

exports.Prisma.QRTZ_CRON_TRIGGERSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  CRON_EXPRESSION: 'CRON_EXPRESSION',
  TIME_ZONE_ID: 'TIME_ZONE_ID'
};

exports.Prisma.QRTZ_FIRED_TRIGGERSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  ENTRY_ID: 'ENTRY_ID',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  INSTANCE_NAME: 'INSTANCE_NAME',
  FIRED_TIME: 'FIRED_TIME',
  SCHED_TIME: 'SCHED_TIME',
  PRIORITY: 'PRIORITY',
  STATE: 'STATE',
  JOB_NAME: 'JOB_NAME',
  JOB_GROUP: 'JOB_GROUP',
  IS_NONCONCURRENT: 'IS_NONCONCURRENT',
  REQUESTS_RECOVERY: 'REQUESTS_RECOVERY'
};

exports.Prisma.QRTZ_JOB_DETAILSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  JOB_NAME: 'JOB_NAME',
  JOB_GROUP: 'JOB_GROUP',
  DESCRIPTION: 'DESCRIPTION',
  JOB_CLASS_NAME: 'JOB_CLASS_NAME',
  IS_DURABLE: 'IS_DURABLE',
  IS_NONCONCURRENT: 'IS_NONCONCURRENT',
  IS_UPDATE_DATA: 'IS_UPDATE_DATA',
  REQUESTS_RECOVERY: 'REQUESTS_RECOVERY',
  JOB_DATA: 'JOB_DATA'
};

exports.Prisma.QRTZ_LOCKSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  LOCK_NAME: 'LOCK_NAME'
};

exports.Prisma.QRTZ_PAUSED_TRIGGER_GRPSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP'
};

exports.Prisma.QRTZ_SCHEDULER_STATEScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  INSTANCE_NAME: 'INSTANCE_NAME',
  LAST_CHECKIN_TIME: 'LAST_CHECKIN_TIME',
  CHECKIN_INTERVAL: 'CHECKIN_INTERVAL'
};

exports.Prisma.QRTZ_SIMPLE_TRIGGERSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  REPEAT_COUNT: 'REPEAT_COUNT',
  REPEAT_INTERVAL: 'REPEAT_INTERVAL',
  TIMES_TRIGGERED: 'TIMES_TRIGGERED'
};

exports.Prisma.QRTZ_SIMPROP_TRIGGERSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  STR_PROP_1: 'STR_PROP_1',
  STR_PROP_2: 'STR_PROP_2',
  STR_PROP_3: 'STR_PROP_3',
  INT_PROP_1: 'INT_PROP_1',
  INT_PROP_2: 'INT_PROP_2',
  LONG_PROP_1: 'LONG_PROP_1',
  LONG_PROP_2: 'LONG_PROP_2',
  DEC_PROP_1: 'DEC_PROP_1',
  DEC_PROP_2: 'DEC_PROP_2',
  BOOL_PROP_1: 'BOOL_PROP_1',
  BOOL_PROP_2: 'BOOL_PROP_2'
};

exports.Prisma.QRTZ_TRIGGERSScalarFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  JOB_NAME: 'JOB_NAME',
  JOB_GROUP: 'JOB_GROUP',
  DESCRIPTION: 'DESCRIPTION',
  NEXT_FIRE_TIME: 'NEXT_FIRE_TIME',
  PREV_FIRE_TIME: 'PREV_FIRE_TIME',
  PRIORITY: 'PRIORITY',
  TRIGGER_STATE: 'TRIGGER_STATE',
  TRIGGER_TYPE: 'TRIGGER_TYPE',
  START_TIME: 'START_TIME',
  END_TIME: 'END_TIME',
  CALENDAR_NAME: 'CALENDAR_NAME',
  MISFIRE_INSTR: 'MISFIRE_INSTR',
  JOB_DATA: 'JOB_DATA'
};

exports.Prisma.BagScalarFieldEnum = {
  bag_id: 'bag_id'
};

exports.Prisma.Ban_wordScalarFieldEnum = {
  id: 'id',
  word: 'word',
  created_at: 'created_at',
  modified_at: 'modified_at'
};

exports.Prisma.Flyway_schema_historyScalarFieldEnum = {
  installed_rank: 'installed_rank',
  version: 'version',
  description: 'description',
  type: 'type',
  script: 'script',
  checksum: 'checksum',
  installed_by: 'installed_by',
  installed_on: 'installed_on',
  execution_time: 'execution_time',
  success: 'success'
};

exports.Prisma.FollowScalarFieldEnum = {
  follow_id: 'follow_id',
  user_id: 'user_id',
  target_user_id: 'target_user_id',
  created_at: 'created_at',
  modified_at: 'modified_at',
  deleted: 'deleted'
};

exports.Prisma.HashtagScalarFieldEnum = {
  hashtag_id: 'hashtag_id',
  hashtag: 'hashtag',
  created_at: 'created_at',
  modified_at: 'modified_at'
};

exports.Prisma.HobbyScalarFieldEnum = {
  hobby_id: 'hobby_id',
  user_id: 'user_id',
  hobby_category_id: 'hobby_category_id',
  hobby_name: 'hobby_name',
  hobby_group_id: 'hobby_group_id',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted: 'deleted'
};

exports.Prisma.Hobby_categoryScalarFieldEnum = {
  hobby_category_id: 'hobby_category_id',
  hobby_category_name: 'hobby_category_name',
  hobby_category_thumbnail: 'hobby_category_thumbnail',
  created_at: 'created_at',
  modified_at: 'modified_at'
};

exports.Prisma.Hobby_commentScalarFieldEnum = {
  comment_id: 'comment_id',
  post_id: 'post_id',
  comment: 'comment',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted: 'deleted',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hobby_groupScalarFieldEnum = {
  hobby_group_id: 'hobby_group_id',
  user_id: 'user_id',
  hobby_group_title: 'hobby_group_title',
  deleted: 'deleted',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hobby_likeScalarFieldEnum = {
  hobby_like_id: 'hobby_like_id',
  user_id: 'user_id',
  hobby_post_id: 'hobby_post_id',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted: 'deleted'
};

exports.Prisma.Hobby_photoScalarFieldEnum = {
  hobby_photo_id: 'hobby_photo_id',
  hobby_post_id: 'hobby_post_id',
  hobby_photo_path: 'hobby_photo_path',
  deleted: 'deleted',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by'
};

exports.Prisma.Hobby_postScalarFieldEnum = {
  hobby_post_id: 'hobby_post_id',
  user_id: 'user_id',
  hobby_id: 'hobby_id',
  hobby_post_content: 'hobby_post_content',
  hobby_post_thumbnail: 'hobby_post_thumbnail',
  deleted: 'deleted',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hobby_sub_commentScalarFieldEnum = {
  sub_comment_id: 'sub_comment_id',
  comment_id: 'comment_id',
  post_id: 'post_id',
  sub_comment: 'sub_comment',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted: 'deleted',
  deleted_at: 'deleted_at'
};

exports.Prisma.Hobby_top_tenScalarFieldEnum = {
  hobby_top_ten_id: 'hobby_top_ten_id',
  hobby_post_id: 'hobby_post_id',
  view_count: 'view_count',
  category: 'category',
  created_at: 'created_at'
};

exports.Prisma.Hobby_view_historyScalarFieldEnum = {
  hobby_view_history_id: 'hobby_view_history_id',
  hobby_post_id: 'hobby_post_id',
  user_id: 'user_id',
  category: 'category',
  created_at: 'created_at',
  modified_at: 'modified_at',
  created_by: 'created_by',
  modified_by: 'modified_by',
  deleted: 'deleted'
};

exports.Prisma.ItemScalarFieldEnum = {
  item_id: 'item_id',
  item_name: 'item_name',
  bag_id: 'bag_id'
};

exports.Prisma.MemberScalarFieldEnum = {
  studentId: 'studentId',
  studentName: 'studentName',
  studentEmail: 'studentEmail'
};

exports.Prisma.Policy_agreeScalarFieldEnum = {
  policy_agree_id: 'policy_agree_id',
  policy_type: 'policy_type',
  policy_history_id: 'policy_history_id',
  user_id: 'user_id',
  created_at: 'created_at',
  modified_at: 'modified_at'
};

exports.Prisma.Policy_historyScalarFieldEnum = {
  policy_history_id: 'policy_history_id',
  policy_type: 'policy_type',
  revision_date: 'revision_date',
  pdf_file_path: 'pdf_file_path',
  required: 'required',
  is_latest_revision: 'is_latest_revision',
  created_at: 'created_at',
  modified_at: 'modified_at'
};

exports.Prisma.Post_hashtagScalarFieldEnum = {
  post_hashtags_id: 'post_hashtags_id',
  post_id: 'post_id',
  hashtag_id: 'hashtag_id',
  created_at: 'created_at',
  modified_at: 'modified_at',
  deleted: 'deleted',
  deleted_at: 'deleted_at'
};

exports.Prisma.Recommended_feedScalarFieldEnum = {
  recommended_feed_id: 'recommended_feed_id',
  hobby_post_id: 'hobby_post_id',
  recommended_type: 'recommended_type',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted: 'deleted'
};

exports.Prisma.ReportScalarFieldEnum = {
  report_id: 'report_id',
  user_id: 'user_id',
  hobby_post_id: 'hobby_post_id',
  comment_id: 'comment_id',
  sub_comment_id: 'sub_comment_id',
  report_content: 'report_content',
  report_status: 'report_status',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted: 'deleted'
};

exports.Prisma.SettingScalarFieldEnum = {
  setting_id: 'setting_id',
  user_id: 'user_id',
  notification: 'notification',
  marketing: 'marketing',
  created_at: 'created_at',
  created_by: 'created_by',
  modified_at: 'modified_at',
  modified_by: 'modified_by',
  deleted: 'deleted'
};

exports.Prisma.Today_hobbyScalarFieldEnum = {
  today_hobby_id: 'today_hobby_id',
  hobby_category_id: 'hobby_category_id',
  today_theme_code: 'today_theme_code',
  today_theme_name: 'today_theme_name',
  today_hobby_details_name: 'today_hobby_details_name',
  today_hobby_details_description: 'today_hobby_details_description',
  today_hobby_details_attributes: 'today_hobby_details_attributes',
  today_hobby_thumbnail: 'today_hobby_thumbnail',
  created_at: 'created_at',
  modified_at: 'modified_at'
};

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  user_email: 'user_email',
  user_profile: 'user_profile',
  user_password: 'user_password',
  user_type: 'user_type',
  user_nickname: 'user_nickname',
  provider_type: 'provider_type',
  provider_key: 'provider_key',
  created_at: 'created_at',
  modified_at: 'modified_at',
  user_last_login_date: 'user_last_login_date',
  deleted: 'deleted',
  dormancy: 'dormancy',
  refresh_token: 'refresh_token',
  profile_description: 'profile_description'
};

exports.Prisma.User_metricsScalarFieldEnum = {
  id: 'id',
  new_users: 'new_users',
  total_users: 'total_users',
  created_at: 'created_at',
  modified_at: 'modified_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.QRTZ_BLOB_TRIGGERSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP'
};

exports.Prisma.QRTZ_CALENDARSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  CALENDAR_NAME: 'CALENDAR_NAME'
};

exports.Prisma.QRTZ_CRON_TRIGGERSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  CRON_EXPRESSION: 'CRON_EXPRESSION',
  TIME_ZONE_ID: 'TIME_ZONE_ID'
};

exports.Prisma.QRTZ_FIRED_TRIGGERSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  ENTRY_ID: 'ENTRY_ID',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  INSTANCE_NAME: 'INSTANCE_NAME',
  STATE: 'STATE',
  JOB_NAME: 'JOB_NAME',
  JOB_GROUP: 'JOB_GROUP',
  IS_NONCONCURRENT: 'IS_NONCONCURRENT',
  REQUESTS_RECOVERY: 'REQUESTS_RECOVERY'
};

exports.Prisma.QRTZ_JOB_DETAILSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  JOB_NAME: 'JOB_NAME',
  JOB_GROUP: 'JOB_GROUP',
  DESCRIPTION: 'DESCRIPTION',
  JOB_CLASS_NAME: 'JOB_CLASS_NAME',
  IS_DURABLE: 'IS_DURABLE',
  IS_NONCONCURRENT: 'IS_NONCONCURRENT',
  IS_UPDATE_DATA: 'IS_UPDATE_DATA',
  REQUESTS_RECOVERY: 'REQUESTS_RECOVERY'
};

exports.Prisma.QRTZ_LOCKSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  LOCK_NAME: 'LOCK_NAME'
};

exports.Prisma.QRTZ_PAUSED_TRIGGER_GRPSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP'
};

exports.Prisma.QRTZ_SCHEDULER_STATEOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  INSTANCE_NAME: 'INSTANCE_NAME'
};

exports.Prisma.QRTZ_SIMPLE_TRIGGERSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP'
};

exports.Prisma.QRTZ_SIMPROP_TRIGGERSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  STR_PROP_1: 'STR_PROP_1',
  STR_PROP_2: 'STR_PROP_2',
  STR_PROP_3: 'STR_PROP_3',
  BOOL_PROP_1: 'BOOL_PROP_1',
  BOOL_PROP_2: 'BOOL_PROP_2'
};

exports.Prisma.QRTZ_TRIGGERSOrderByRelevanceFieldEnum = {
  SCHED_NAME: 'SCHED_NAME',
  TRIGGER_NAME: 'TRIGGER_NAME',
  TRIGGER_GROUP: 'TRIGGER_GROUP',
  JOB_NAME: 'JOB_NAME',
  JOB_GROUP: 'JOB_GROUP',
  DESCRIPTION: 'DESCRIPTION',
  TRIGGER_STATE: 'TRIGGER_STATE',
  TRIGGER_TYPE: 'TRIGGER_TYPE',
  CALENDAR_NAME: 'CALENDAR_NAME'
};

exports.Prisma.ban_wordOrderByRelevanceFieldEnum = {
  word: 'word'
};

exports.Prisma.flyway_schema_historyOrderByRelevanceFieldEnum = {
  version: 'version',
  description: 'description',
  type: 'type',
  script: 'script',
  installed_by: 'installed_by'
};

exports.Prisma.hashtagOrderByRelevanceFieldEnum = {
  hashtag: 'hashtag'
};

exports.Prisma.hobbyOrderByRelevanceFieldEnum = {
  hobby_name: 'hobby_name'
};

exports.Prisma.hobby_categoryOrderByRelevanceFieldEnum = {
  hobby_category_thumbnail: 'hobby_category_thumbnail'
};

exports.Prisma.hobby_commentOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.hobby_groupOrderByRelevanceFieldEnum = {
  hobby_group_title: 'hobby_group_title'
};

exports.Prisma.hobby_photoOrderByRelevanceFieldEnum = {
  hobby_photo_path: 'hobby_photo_path'
};

exports.Prisma.hobby_postOrderByRelevanceFieldEnum = {
  hobby_post_content: 'hobby_post_content',
  hobby_post_thumbnail: 'hobby_post_thumbnail'
};

exports.Prisma.hobby_sub_commentOrderByRelevanceFieldEnum = {
  sub_comment: 'sub_comment'
};

exports.Prisma.itemOrderByRelevanceFieldEnum = {
  item_name: 'item_name'
};

exports.Prisma.memberOrderByRelevanceFieldEnum = {
  studentName: 'studentName',
  studentEmail: 'studentEmail'
};

exports.Prisma.policy_historyOrderByRelevanceFieldEnum = {
  pdf_file_path: 'pdf_file_path'
};

exports.Prisma.reportOrderByRelevanceFieldEnum = {
  report_content: 'report_content'
};

exports.Prisma.today_hobbyOrderByRelevanceFieldEnum = {
  today_theme_name: 'today_theme_name',
  today_hobby_details_name: 'today_hobby_details_name',
  today_hobby_details_description: 'today_hobby_details_description',
  today_hobby_details_attributes: 'today_hobby_details_attributes',
  today_hobby_thumbnail: 'today_hobby_thumbnail'
};

exports.Prisma.userOrderByRelevanceFieldEnum = {
  user_email: 'user_email',
  user_profile: 'user_profile',
  user_password: 'user_password',
  user_nickname: 'user_nickname',
  provider_key: 'provider_key',
  refresh_token: 'refresh_token',
  profile_description: 'profile_description'
};
exports.hobby_category_hobby_category_name = exports.$Enums.hobby_category_hobby_category_name = {
  cooking: 'cooking',
  exercise: 'exercise'
};

exports.hobby_top_ten_category = exports.$Enums.hobby_top_ten_category = {
  cooking: 'cooking',
  exercise: 'exercise'
};

exports.hobby_view_history_category = exports.$Enums.hobby_view_history_category = {
  cooking: 'cooking',
  exercise: 'exercise'
};

exports.policy_agree_policy_type = exports.$Enums.policy_agree_policy_type = {
  REQUIRED_IS_OVER_FOURTEEN: 'REQUIRED_IS_OVER_FOURTEEN',
  REQUIRED_TERMS_OF_SERVICE: 'REQUIRED_TERMS_OF_SERVICE',
  REQUIRED_PERSONAL_INFO_PROCESS: 'REQUIRED_PERSONAL_INFO_PROCESS',
  OPTION_PERSONAL_INFO_MARKETING: 'OPTION_PERSONAL_INFO_MARKETING',
  OPTION_EVENT_MAIL_OR_SMS: 'OPTION_EVENT_MAIL_OR_SMS'
};

exports.policy_history_policy_type = exports.$Enums.policy_history_policy_type = {
  REQUIRED_IS_OVER_FOURTEEN: 'REQUIRED_IS_OVER_FOURTEEN',
  REQUIRED_TERMS_OF_SERVICE: 'REQUIRED_TERMS_OF_SERVICE',
  REQUIRED_PERSONAL_INFO_PROCESS: 'REQUIRED_PERSONAL_INFO_PROCESS',
  OPTION_PERSONAL_INFO_MARKETING: 'OPTION_PERSONAL_INFO_MARKETING',
  OPTION_EVENT_MAIL_OR_SMS: 'OPTION_EVENT_MAIL_OR_SMS'
};

exports.recommended_feed_recommended_type = exports.$Enums.recommended_feed_recommended_type = {
  INFLUENCE: 'INFLUENCE',
  POPULAR_POST: 'POPULAR_POST'
};

exports.report_report_status = exports.$Enums.report_report_status = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED'
};

exports.user_user_type = exports.$Enums.user_user_type = {
  ADMIN: 'ADMIN',
  BASIC_USER: 'BASIC_USER'
};

exports.user_provider_type = exports.$Enums.user_provider_type = {
  KAKAO: 'KAKAO',
  NAVER: 'NAVER',
  GOOGLE: 'GOOGLE',
  ORIGIN: 'ORIGIN'
};

exports.Prisma.ModelName = {
  QRTZ_BLOB_TRIGGERS: 'QRTZ_BLOB_TRIGGERS',
  QRTZ_CALENDARS: 'QRTZ_CALENDARS',
  QRTZ_CRON_TRIGGERS: 'QRTZ_CRON_TRIGGERS',
  QRTZ_FIRED_TRIGGERS: 'QRTZ_FIRED_TRIGGERS',
  QRTZ_JOB_DETAILS: 'QRTZ_JOB_DETAILS',
  QRTZ_LOCKS: 'QRTZ_LOCKS',
  QRTZ_PAUSED_TRIGGER_GRPS: 'QRTZ_PAUSED_TRIGGER_GRPS',
  QRTZ_SCHEDULER_STATE: 'QRTZ_SCHEDULER_STATE',
  QRTZ_SIMPLE_TRIGGERS: 'QRTZ_SIMPLE_TRIGGERS',
  QRTZ_SIMPROP_TRIGGERS: 'QRTZ_SIMPROP_TRIGGERS',
  QRTZ_TRIGGERS: 'QRTZ_TRIGGERS',
  bag: 'bag',
  ban_word: 'ban_word',
  flyway_schema_history: 'flyway_schema_history',
  follow: 'follow',
  hashtag: 'hashtag',
  hobby: 'hobby',
  hobby_category: 'hobby_category',
  hobby_comment: 'hobby_comment',
  hobby_group: 'hobby_group',
  hobby_like: 'hobby_like',
  hobby_photo: 'hobby_photo',
  hobby_post: 'hobby_post',
  hobby_sub_comment: 'hobby_sub_comment',
  hobby_top_ten: 'hobby_top_ten',
  hobby_view_history: 'hobby_view_history',
  item: 'item',
  member: 'member',
  policy_agree: 'policy_agree',
  policy_history: 'policy_history',
  post_hashtag: 'post_hashtag',
  recommended_feed: 'recommended_feed',
  report: 'report',
  setting: 'setting',
  today_hobby: 'today_hobby',
  user: 'user',
  user_metrics: 'user_metrics'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
