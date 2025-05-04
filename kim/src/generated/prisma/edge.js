
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

exports.hobby_top_ten_category = exports.$Enums.hobby_top_ten_category = {
  cooking: 'cooking',
  exercise: 'exercise'
};

exports.hobby_view_history_category = exports.$Enums.hobby_view_history_category = {
  cooking: 'cooking',
  exercise: 'exercise'
};

exports.user_user_type = exports.$Enums.user_user_type = {
  ADMIN: 'ADMIN',
  BASIC_USER: 'BASIC_USER'
};

exports.report_report_status = exports.$Enums.report_report_status = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  REJECTED: 'REJECTED'
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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/ejkim/workspce/meow-express/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/Users/ejkim/workspce/meow-express/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel QRTZ_BLOB_TRIGGERS {\n  SCHED_NAME    String        @db.VarChar(120)\n  TRIGGER_NAME  String        @db.VarChar(190)\n  TRIGGER_GROUP String        @db.VarChar(190)\n  BLOB_DATA     Bytes?        @db.Blob\n  QRTZ_TRIGGERS QRTZ_TRIGGERS @relation(fields: [SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], references: [SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], onDelete: NoAction, onUpdate: NoAction, map: \"QRTZ_BLOB_TRIGGERS_ibfk_1\")\n\n  @@id([SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP])\n  @@index([SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], map: \"SCHED_NAME\")\n}\n\nmodel QRTZ_CALENDARS {\n  SCHED_NAME    String @db.VarChar(120)\n  CALENDAR_NAME String @db.VarChar(190)\n  CALENDAR      Bytes  @db.Blob\n\n  @@id([SCHED_NAME, CALENDAR_NAME])\n}\n\nmodel QRTZ_CRON_TRIGGERS {\n  SCHED_NAME      String        @db.VarChar(120)\n  TRIGGER_NAME    String        @db.VarChar(190)\n  TRIGGER_GROUP   String        @db.VarChar(190)\n  CRON_EXPRESSION String        @db.VarChar(120)\n  TIME_ZONE_ID    String?       @db.VarChar(80)\n  QRTZ_TRIGGERS   QRTZ_TRIGGERS @relation(fields: [SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], references: [SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], onDelete: NoAction, onUpdate: NoAction, map: \"QRTZ_CRON_TRIGGERS_ibfk_1\")\n\n  @@id([SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP])\n}\n\nmodel QRTZ_FIRED_TRIGGERS {\n  SCHED_NAME        String  @db.VarChar(120)\n  ENTRY_ID          String  @db.VarChar(95)\n  TRIGGER_NAME      String  @db.VarChar(190)\n  TRIGGER_GROUP     String  @db.VarChar(190)\n  INSTANCE_NAME     String  @db.VarChar(190)\n  FIRED_TIME        BigInt\n  SCHED_TIME        BigInt\n  PRIORITY          Int\n  STATE             String  @db.VarChar(16)\n  JOB_NAME          String? @db.VarChar(190)\n  JOB_GROUP         String? @db.VarChar(190)\n  IS_NONCONCURRENT  String? @db.VarChar(1)\n  REQUESTS_RECOVERY String? @db.VarChar(1)\n\n  @@id([SCHED_NAME, ENTRY_ID])\n  @@index([SCHED_NAME, INSTANCE_NAME, REQUESTS_RECOVERY], map: \"IDX_QRTZ_FT_INST_JOB_REQ_RCVRY\")\n  @@index([SCHED_NAME, JOB_GROUP], map: \"IDX_QRTZ_FT_JG\")\n  @@index([SCHED_NAME, JOB_NAME, JOB_GROUP], map: \"IDX_QRTZ_FT_J_G\")\n  @@index([SCHED_NAME, TRIGGER_GROUP], map: \"IDX_QRTZ_FT_TG\")\n  @@index([SCHED_NAME, INSTANCE_NAME], map: \"IDX_QRTZ_FT_TRIG_INST_NAME\")\n  @@index([SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], map: \"IDX_QRTZ_FT_T_G\")\n}\n\nmodel QRTZ_JOB_DETAILS {\n  SCHED_NAME        String          @db.VarChar(120)\n  JOB_NAME          String          @db.VarChar(190)\n  JOB_GROUP         String          @db.VarChar(190)\n  DESCRIPTION       String?         @db.VarChar(250)\n  JOB_CLASS_NAME    String          @db.VarChar(250)\n  IS_DURABLE        String          @db.VarChar(1)\n  IS_NONCONCURRENT  String          @db.VarChar(1)\n  IS_UPDATE_DATA    String          @db.VarChar(1)\n  REQUESTS_RECOVERY String          @db.VarChar(1)\n  JOB_DATA          Bytes?          @db.Blob\n  QRTZ_TRIGGERS     QRTZ_TRIGGERS[]\n\n  @@id([SCHED_NAME, JOB_NAME, JOB_GROUP])\n  @@index([SCHED_NAME, JOB_GROUP], map: \"IDX_QRTZ_J_GRP\")\n  @@index([SCHED_NAME, REQUESTS_RECOVERY], map: \"IDX_QRTZ_J_REQ_RECOVERY\")\n}\n\nmodel QRTZ_LOCKS {\n  SCHED_NAME String @db.VarChar(120)\n  LOCK_NAME  String @db.VarChar(40)\n\n  @@id([SCHED_NAME, LOCK_NAME])\n}\n\nmodel QRTZ_PAUSED_TRIGGER_GRPS {\n  SCHED_NAME    String @db.VarChar(120)\n  TRIGGER_GROUP String @db.VarChar(190)\n\n  @@id([SCHED_NAME, TRIGGER_GROUP])\n}\n\nmodel QRTZ_SCHEDULER_STATE {\n  SCHED_NAME        String @db.VarChar(120)\n  INSTANCE_NAME     String @db.VarChar(190)\n  LAST_CHECKIN_TIME BigInt\n  CHECKIN_INTERVAL  BigInt\n\n  @@id([SCHED_NAME, INSTANCE_NAME])\n}\n\nmodel QRTZ_SIMPLE_TRIGGERS {\n  SCHED_NAME      String        @db.VarChar(120)\n  TRIGGER_NAME    String        @db.VarChar(190)\n  TRIGGER_GROUP   String        @db.VarChar(190)\n  REPEAT_COUNT    BigInt\n  REPEAT_INTERVAL BigInt\n  TIMES_TRIGGERED BigInt\n  QRTZ_TRIGGERS   QRTZ_TRIGGERS @relation(fields: [SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], references: [SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], onDelete: NoAction, onUpdate: NoAction, map: \"QRTZ_SIMPLE_TRIGGERS_ibfk_1\")\n\n  @@id([SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP])\n}\n\nmodel QRTZ_SIMPROP_TRIGGERS {\n  SCHED_NAME    String        @db.VarChar(120)\n  TRIGGER_NAME  String        @db.VarChar(190)\n  TRIGGER_GROUP String        @db.VarChar(190)\n  STR_PROP_1    String?       @db.VarChar(512)\n  STR_PROP_2    String?       @db.VarChar(512)\n  STR_PROP_3    String?       @db.VarChar(512)\n  INT_PROP_1    Int?\n  INT_PROP_2    Int?\n  LONG_PROP_1   BigInt?\n  LONG_PROP_2   BigInt?\n  DEC_PROP_1    Decimal?      @db.Decimal(13, 4)\n  DEC_PROP_2    Decimal?      @db.Decimal(13, 4)\n  BOOL_PROP_1   String?       @db.VarChar(1)\n  BOOL_PROP_2   String?       @db.VarChar(1)\n  QRTZ_TRIGGERS QRTZ_TRIGGERS @relation(fields: [SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], references: [SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP], onDelete: NoAction, onUpdate: NoAction, map: \"QRTZ_SIMPROP_TRIGGERS_ibfk_1\")\n\n  @@id([SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP])\n}\n\nmodel QRTZ_TRIGGERS {\n  SCHED_NAME            String                 @db.VarChar(120)\n  TRIGGER_NAME          String                 @db.VarChar(190)\n  TRIGGER_GROUP         String                 @db.VarChar(190)\n  JOB_NAME              String                 @db.VarChar(190)\n  JOB_GROUP             String                 @db.VarChar(190)\n  DESCRIPTION           String?                @db.VarChar(250)\n  NEXT_FIRE_TIME        BigInt?\n  PREV_FIRE_TIME        BigInt?\n  PRIORITY              Int?\n  TRIGGER_STATE         String                 @db.VarChar(16)\n  TRIGGER_TYPE          String                 @db.VarChar(8)\n  START_TIME            BigInt\n  END_TIME              BigInt?\n  CALENDAR_NAME         String?                @db.VarChar(190)\n  MISFIRE_INSTR         Int?                   @db.SmallInt\n  JOB_DATA              Bytes?                 @db.Blob\n  QRTZ_BLOB_TRIGGERS    QRTZ_BLOB_TRIGGERS?\n  QRTZ_CRON_TRIGGERS    QRTZ_CRON_TRIGGERS?\n  QRTZ_SIMPLE_TRIGGERS  QRTZ_SIMPLE_TRIGGERS?\n  QRTZ_SIMPROP_TRIGGERS QRTZ_SIMPROP_TRIGGERS?\n  QRTZ_JOB_DETAILS      QRTZ_JOB_DETAILS       @relation(fields: [SCHED_NAME, JOB_NAME, JOB_GROUP], references: [SCHED_NAME, JOB_NAME, JOB_GROUP], onDelete: NoAction, onUpdate: NoAction, map: \"QRTZ_TRIGGERS_ibfk_1\")\n\n  @@id([SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP])\n  @@index([SCHED_NAME, CALENDAR_NAME], map: \"IDX_QRTZ_T_C\")\n  @@index([SCHED_NAME, TRIGGER_GROUP], map: \"IDX_QRTZ_T_G\")\n  @@index([SCHED_NAME, JOB_NAME, JOB_GROUP], map: \"IDX_QRTZ_T_J\")\n  @@index([SCHED_NAME, JOB_GROUP], map: \"IDX_QRTZ_T_JG\")\n  @@index([SCHED_NAME, NEXT_FIRE_TIME], map: \"IDX_QRTZ_T_NEXT_FIRE_TIME\")\n  @@index([SCHED_NAME, MISFIRE_INSTR, NEXT_FIRE_TIME], map: \"IDX_QRTZ_T_NFT_MISFIRE\")\n  @@index([SCHED_NAME, TRIGGER_STATE, NEXT_FIRE_TIME], map: \"IDX_QRTZ_T_NFT_ST\")\n  @@index([SCHED_NAME, MISFIRE_INSTR, NEXT_FIRE_TIME, TRIGGER_STATE], map: \"IDX_QRTZ_T_NFT_ST_MISFIRE\")\n  @@index([SCHED_NAME, MISFIRE_INSTR, NEXT_FIRE_TIME, TRIGGER_GROUP, TRIGGER_STATE], map: \"IDX_QRTZ_T_NFT_ST_MISFIRE_GRP\")\n  @@index([SCHED_NAME, TRIGGER_GROUP, TRIGGER_STATE], map: \"IDX_QRTZ_T_N_G_STATE\")\n  @@index([SCHED_NAME, TRIGGER_NAME, TRIGGER_GROUP, TRIGGER_STATE], map: \"IDX_QRTZ_T_N_STATE\")\n  @@index([SCHED_NAME, TRIGGER_STATE], map: \"IDX_QRTZ_T_STATE\")\n}\n\nmodel bag {\n  bag_id BigInt @id @default(autoincrement())\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel ban_word {\n  id          BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  word        String   @unique(map: \"word\") @db.VarChar(255)\n  created_at  DateTime @db.DateTime(0)\n  modified_at DateTime @db.DateTime(0)\n}\n\nmodel flyway_schema_history {\n  installed_rank Int      @id\n  version        String?  @db.VarChar(50)\n  description    String   @db.VarChar(200)\n  type           String   @db.VarChar(20)\n  script         String   @db.VarChar(1000)\n  checksum       Int?\n  installed_by   String   @db.VarChar(100)\n  installed_on   DateTime @default(now()) @db.Timestamp(0)\n  execution_time Int\n  success        Boolean\n\n  @@index([success], map: \"flyway_schema_history_s_idx\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel follow {\n  follow_id      BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id        BigInt   @db.UnsignedBigInt\n  target_user_id BigInt   @db.UnsignedBigInt\n  created_at     DateTime @db.DateTime(0)\n  modified_at    DateTime @db.DateTime(0)\n  deleted        Boolean  @default(false)\n\n  @@unique([user_id, target_user_id], map: \"UNIQUE_FOLLOW\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hashtag {\n  hashtag_id  BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  hashtag     String   @unique(map: \"hashtag\") @db.VarChar(255)\n  created_at  DateTime @default(now()) @db.DateTime(0)\n  modified_at DateTime @db.DateTime(0)\n\n  @@unique([hashtag_id, hashtag], map: \"UNIQUE_FOLLOW\")\n  @@index([hashtag], map: \"idx_hashtag\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby {\n  hobby_id          BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id           BigInt   @db.UnsignedBigInt\n  hobby_category_id BigInt   @db.UnsignedBigInt\n  hobby_name        String   @db.LongText\n  hobby_group_id    BigInt\n  created_at        DateTime @default(now()) @db.DateTime(0)\n  created_by        BigInt   @db.UnsignedBigInt\n  modified_at       DateTime @db.DateTime(0)\n  modified_by       BigInt   @db.UnsignedBigInt\n  deleted           Boolean  @default(false)\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_category {\n  hobby_category_id        BigInt                             @id @default(autoincrement()) @db.UnsignedBigInt\n  hobby_category_name      hobby_category_hobby_category_name\n  hobby_category_thumbnail String                             @db.VarChar(255)\n  created_at               DateTime                           @db.DateTime(0)\n  modified_at              DateTime                           @db.DateTime(0)\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_comment {\n  comment_id  BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  post_id     BigInt    @db.UnsignedBigInt\n  comment     String    @db.TinyText\n  created_at  DateTime  @db.DateTime(0)\n  created_by  BigInt    @db.UnsignedBigInt\n  modified_at DateTime  @db.DateTime(0)\n  modified_by BigInt    @db.UnsignedBigInt\n  deleted     Boolean   @default(false)\n  deleted_at  DateTime? @db.DateTime(0)\n\n  @@unique([created_by, post_id], map: \"unique_comment\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_group {\n  hobby_group_id    BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id           BigInt    @db.UnsignedBigInt\n  hobby_group_title String    @db.VarChar(30)\n  deleted           Boolean   @default(false)\n  created_at        DateTime  @default(now()) @db.DateTime(0)\n  created_by        BigInt    @db.UnsignedBigInt\n  modified_at       DateTime  @db.DateTime(0)\n  modified_by       BigInt    @db.UnsignedBigInt\n  deleted_at        DateTime? @db.DateTime(0)\n\n  @@unique([created_by, user_id, hobby_group_title], map: \"unique_hobby_group\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_like {\n  hobby_like_id BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id       BigInt   @db.UnsignedBigInt\n  hobby_post_id BigInt   @db.UnsignedBigInt\n  created_at    DateTime @default(now()) @db.DateTime(0)\n  created_by    BigInt   @db.UnsignedBigInt\n  modified_at   DateTime @db.DateTime(0)\n  modified_by   BigInt   @db.UnsignedBigInt\n  deleted       Boolean  @default(false)\n\n  @@unique([user_id, hobby_post_id], map: \"unique_hobby_like\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_photo {\n  hobby_photo_id   BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  hobby_post_id    BigInt   @db.UnsignedBigInt\n  hobby_photo_path String   @db.VarChar(255)\n  deleted          Boolean  @default(false)\n  created_at       DateTime @default(now()) @db.DateTime(0)\n  created_by       BigInt   @db.UnsignedBigInt\n  modified_at      DateTime @db.DateTime(0)\n  modified_by      BigInt   @db.UnsignedBigInt\n\n  @@unique([created_by, hobby_post_id, hobby_photo_path], map: \"unique_hobby_photo\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_post {\n  hobby_post_id        BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id              BigInt    @db.UnsignedBigInt\n  hobby_id             BigInt    @db.UnsignedBigInt\n  hobby_post_content   String    @db.VarChar(1000)\n  hobby_post_thumbnail String    @db.VarChar(500)\n  deleted              Boolean   @default(false)\n  created_at           DateTime  @default(now()) @db.DateTime(0)\n  created_by           BigInt    @db.UnsignedBigInt\n  modified_at          DateTime  @db.DateTime(0)\n  modified_by          BigInt    @db.UnsignedBigInt\n  deleted_at           DateTime? @db.DateTime(0)\n\n  @@unique([created_by, user_id, hobby_id], map: \"unique_hobby_post\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_sub_comment {\n  sub_comment_id BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  comment_id     BigInt    @db.UnsignedBigInt\n  post_id        BigInt    @db.UnsignedBigInt\n  sub_comment    String    @db.TinyText\n  created_at     DateTime  @db.DateTime(0)\n  created_by     BigInt    @db.UnsignedBigInt\n  modified_at    DateTime  @db.DateTime(0)\n  modified_by    BigInt    @db.UnsignedBigInt\n  deleted        Boolean   @default(false)\n  deleted_at     DateTime? @db.DateTime(0)\n\n  @@unique([created_by, comment_id, post_id], map: \"unique_sub_comment\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_top_ten {\n  hobby_top_ten_id BigInt                 @id @default(autoincrement()) @db.UnsignedBigInt\n  hobby_post_id    BigInt                 @db.UnsignedBigInt\n  view_count       BigInt                 @db.UnsignedBigInt\n  category         hobby_top_ten_category\n  created_at       DateTime               @db.Date\n\n  @@unique([hobby_post_id, view_count, created_at], map: \"unique_top_ten\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel hobby_view_history {\n  hobby_view_history_id BigInt                      @id @default(autoincrement()) @db.UnsignedBigInt\n  hobby_post_id         BigInt                      @db.UnsignedBigInt\n  user_id               BigInt                      @db.UnsignedBigInt\n  category              hobby_view_history_category\n  created_at            DateTime                    @db.DateTime(0)\n  modified_at           DateTime                    @db.DateTime(0)\n  created_by            BigInt                      @db.UnsignedBigInt\n  modified_by           BigInt                      @db.UnsignedBigInt\n  deleted               Boolean                     @default(false)\n\n  @@unique([user_id, hobby_post_id], map: \"unique_user_hobby\")\n  @@index([hobby_post_id, created_at], map: \"idx_hobby_post_and_created_at\")\n  @@index([user_id], map: \"idx_user_id\")\n}\n\nmodel item {\n  item_id   BigInt  @id @default(autoincrement())\n  item_name String? @db.VarChar(100)\n  bag_id    BigInt?\n}\n\nmodel member {\n  studentId    BigInt  @id @default(autoincrement())\n  studentName  String? @db.VarChar(10)\n  studentEmail String? @db.VarChar(50)\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel policy_agree {\n  policy_agree_id   BigInt                   @id @default(autoincrement()) @db.UnsignedBigInt\n  policy_type       policy_agree_policy_type\n  policy_history_id BigInt                   @db.UnsignedBigInt\n  user_id           BigInt                   @db.UnsignedBigInt\n  created_at        DateTime                 @db.DateTime(0)\n  modified_at       DateTime                 @db.DateTime(0)\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel policy_history {\n  policy_history_id  BigInt                     @id @default(autoincrement()) @db.UnsignedBigInt\n  policy_type        policy_history_policy_type\n  revision_date      DateTime                   @db.DateTime(0)\n  pdf_file_path      String                     @db.VarChar(300)\n  required           Boolean                    @default(false)\n  is_latest_revision Boolean                    @default(false)\n  created_at         DateTime                   @db.DateTime(0)\n  modified_at        DateTime                   @db.DateTime(0)\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel post_hashtag {\n  post_hashtags_id BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  post_id          BigInt    @db.UnsignedBigInt\n  hashtag_id       BigInt    @db.UnsignedBigInt\n  created_at       DateTime  @default(now()) @db.DateTime(0)\n  modified_at      DateTime  @db.DateTime(0)\n  deleted          Boolean   @default(false)\n  deleted_at       DateTime? @db.DateTime(0)\n\n  @@unique([post_hashtags_id, post_id, hashtag_id], map: \"UNIQUE_FOLLOW\")\n  @@index([hashtag_id], map: \"idx_hashtag_id\")\n  @@index([post_id], map: \"idx_post_id\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel recommended_feed {\n  recommended_feed_id BigInt                             @id @default(autoincrement()) @db.UnsignedBigInt\n  hobby_post_id       BigInt                             @db.UnsignedBigInt\n  recommended_type    recommended_feed_recommended_type?\n  created_at          DateTime                           @default(now()) @db.DateTime(0)\n  created_by          BigInt                             @db.UnsignedBigInt\n  modified_at         DateTime                           @db.DateTime(0)\n  modified_by         BigInt                             @db.UnsignedBigInt\n  deleted             Boolean                            @default(false)\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel report {\n  report_id      BigInt               @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id        BigInt               @db.UnsignedBigInt\n  hobby_post_id  BigInt?              @db.UnsignedBigInt\n  comment_id     BigInt?              @db.UnsignedBigInt\n  sub_comment_id BigInt?              @db.UnsignedBigInt\n  report_content String               @db.VarChar(1000)\n  report_status  report_report_status\n  created_at     DateTime             @default(now()) @db.DateTime(0)\n  created_by     BigInt               @db.UnsignedBigInt\n  modified_at    DateTime             @db.DateTime(0)\n  modified_by    BigInt               @db.UnsignedBigInt\n  deleted        Boolean              @default(false)\n\n  @@unique([created_at, user_id], map: \"unique_report\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel setting {\n  setting_id   BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  user_id      BigInt   @db.UnsignedBigInt\n  notification Boolean  @default(false)\n  marketing    Boolean  @default(false)\n  created_at   DateTime @default(now()) @db.DateTime(0)\n  created_by   BigInt   @db.UnsignedBigInt\n  modified_at  DateTime @db.DateTime(0)\n  modified_by  BigInt   @db.UnsignedBigInt\n  deleted      Boolean  @default(false)\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel today_hobby {\n  today_hobby_id                  BigInt   @id @default(autoincrement()) @db.UnsignedBigInt\n  hobby_category_id               BigInt?  @db.UnsignedBigInt\n  today_theme_code                BigInt?  @db.UnsignedBigInt\n  today_theme_name                String   @db.VarChar(255)\n  today_hobby_details_name        String   @unique(map: \"today_hobby_details_name\") @db.VarChar(255)\n  today_hobby_details_description String   @db.Text\n  today_hobby_details_attributes  String   @db.Text\n  today_hobby_thumbnail           String   @db.VarChar(255)\n  created_at                      DateTime @default(now()) @db.DateTime(0)\n  modified_at                     DateTime @db.DateTime(0)\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel user {\n  user_id              BigInt             @id @default(autoincrement()) @db.UnsignedBigInt\n  user_email           String?            @unique(map: \"user_email\") @db.VarChar(100)\n  user_profile         String?            @db.LongText\n  user_password        String?            @db.VarChar(255)\n  user_type            user_user_type     @default(BASIC_USER)\n  user_nickname        String?            @unique(map: \"user_nickname\") @db.VarChar(30)\n  provider_type        user_provider_type\n  provider_key         String?            @unique(map: \"provider_key\") @db.VarChar(255)\n  created_at           DateTime           @db.DateTime(0)\n  modified_at          DateTime           @db.DateTime(0)\n  user_last_login_date DateTime           @db.DateTime(0)\n  deleted              Boolean            @default(false)\n  dormancy             Boolean            @default(false)\n  refresh_token        String?            @db.VarChar(255)\n  profile_description  String?            @db.VarChar(30)\n\n  @@index([user_email], map: \"idx_email\")\n  @@index([user_nickname], map: \"idx_nickname\")\n  @@index([provider_key], map: \"idx_provider_key\")\n}\n\n/// This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\nmodel user_metrics {\n  id          BigInt   @id @default(autoincrement())\n  new_users   BigInt   @default(0)\n  total_users BigInt   @default(0)\n  created_at  DateTime @db.DateTime(0)\n  modified_at DateTime @db.DateTime(0)\n}\n\nenum hobby_category_hobby_category_name {\n  cooking\n  exercise\n}\n\nenum policy_agree_policy_type {\n  REQUIRED_IS_OVER_FOURTEEN\n  REQUIRED_TERMS_OF_SERVICE\n  REQUIRED_PERSONAL_INFO_PROCESS\n  OPTION_PERSONAL_INFO_MARKETING\n  OPTION_EVENT_MAIL_OR_SMS\n}\n\nenum policy_history_policy_type {\n  REQUIRED_IS_OVER_FOURTEEN\n  REQUIRED_TERMS_OF_SERVICE\n  REQUIRED_PERSONAL_INFO_PROCESS\n  OPTION_PERSONAL_INFO_MARKETING\n  OPTION_EVENT_MAIL_OR_SMS\n}\n\nenum recommended_feed_recommended_type {\n  INFLUENCE\n  POPULAR_POST\n}\n\nenum hobby_top_ten_category {\n  cooking\n  exercise\n}\n\nenum hobby_view_history_category {\n  cooking\n  exercise\n}\n\nenum user_user_type {\n  ADMIN\n  BASIC_USER\n}\n\nenum report_report_status {\n  PENDING\n  IN_PROGRESS\n  COMPLETED\n  REJECTED\n}\n\nenum user_provider_type {\n  KAKAO\n  NAVER\n  GOOGLE\n  ORIGIN\n}\n",
  "inlineSchemaHash": "8755f087f9beda707bc52d749466ee26e221ac1fd4ee5bb127c6f740c7779b0e",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"QRTZ_BLOB_TRIGGERS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BLOB_DATA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":[\"Blob\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_TRIGGERS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_BLOB_TRIGGERSToQRTZ_TRIGGERS\",\"relationFromFields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"],\"relationToFields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_CALENDARS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CALENDAR_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CALENDAR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":[\"Blob\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"CALENDAR_NAME\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_CRON_TRIGGERS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CRON_EXPRESSION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIME_ZONE_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"80\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_TRIGGERS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_CRON_TRIGGERSToQRTZ_TRIGGERS\",\"relationFromFields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"],\"relationToFields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_FIRED_TRIGGERS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ENTRY_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"95\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"INSTANCE_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FIRED_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SCHED_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRIORITY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"16\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_NONCONCURRENT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REQUESTS_RECOVERY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"ENTRY_ID\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_JOB_DETAILS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIPTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"250\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_CLASS_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"250\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_DURABLE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_NONCONCURRENT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"IS_UPDATE_DATA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REQUESTS_RECOVERY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_DATA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":[\"Blob\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_TRIGGERS\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_JOB_DETAILSToQRTZ_TRIGGERS\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"JOB_NAME\",\"JOB_GROUP\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_LOCKS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOCK_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"40\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"LOCK_NAME\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_PAUSED_TRIGGER_GRPS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"TRIGGER_GROUP\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_SCHEDULER_STATE\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"INSTANCE_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LAST_CHECKIN_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHECKIN_INTERVAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"INSTANCE_NAME\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_SIMPLE_TRIGGERS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REPEAT_COUNT\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REPEAT_INTERVAL\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIMES_TRIGGERED\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_TRIGGERS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_SIMPLE_TRIGGERSToQRTZ_TRIGGERS\",\"relationFromFields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"],\"relationToFields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_SIMPROP_TRIGGERS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STR_PROP_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STR_PROP_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STR_PROP_3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"512\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"INT_PROP_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"INT_PROP_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LONG_PROP_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LONG_PROP_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DEC_PROP_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"13\",\"4\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DEC_PROP_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"13\",\"4\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BOOL_PROP_1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BOOL_PROP_2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_TRIGGERS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_SIMPROP_TRIGGERSToQRTZ_TRIGGERS\",\"relationFromFields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"],\"relationToFields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"QRTZ_TRIGGERS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"SCHED_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"120\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_GROUP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRIPTION\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"250\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NEXT_FIRE_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PREV_FIRE_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PRIORITY\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_STATE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"16\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRIGGER_TYPE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"8\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"START_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"END_TIME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CALENDAR_NAME\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"190\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MISFIRE_INSTR\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"JOB_DATA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"nativeType\":[\"Blob\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_BLOB_TRIGGERS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_BLOB_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_BLOB_TRIGGERSToQRTZ_TRIGGERS\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_CRON_TRIGGERS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_CRON_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_CRON_TRIGGERSToQRTZ_TRIGGERS\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_SIMPLE_TRIGGERS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_SIMPLE_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_SIMPLE_TRIGGERSToQRTZ_TRIGGERS\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_SIMPROP_TRIGGERS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_SIMPROP_TRIGGERS\",\"nativeType\":null,\"relationName\":\"QRTZ_SIMPROP_TRIGGERSToQRTZ_TRIGGERS\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"QRTZ_JOB_DETAILS\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"QRTZ_JOB_DETAILS\",\"nativeType\":null,\"relationName\":\"QRTZ_JOB_DETAILSToQRTZ_TRIGGERS\",\"relationFromFields\":[\"SCHED_NAME\",\"JOB_NAME\",\"JOB_GROUP\"],\"relationToFields\":[\"SCHED_NAME\",\"JOB_NAME\",\"JOB_GROUP\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"SCHED_NAME\",\"TRIGGER_NAME\",\"TRIGGER_GROUP\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"bag\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"bag_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ban_word\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"flyway_schema_history\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"installed_rank\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"version\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"200\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"script\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"checksum\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"installed_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"installed_on\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"execution_time\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"success\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"follow\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"follow_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"user_id\",\"target_user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"user_id\",\"target_user_id\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hashtag\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hashtag_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashtag\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"hashtag_id\",\"hashtag\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"hashtag_id\",\"hashtag\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hobby_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_category\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hobby_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_category_name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hobby_category_hobby_category_name\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_category_thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_comment\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"TinyText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"created_by\",\"post_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"created_by\",\"post_id\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_group\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hobby_group_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_group_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"created_by\",\"user_id\",\"hobby_group_title\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"created_by\",\"user_id\",\"hobby_group_title\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_like\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hobby_like_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"user_id\",\"hobby_post_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"user_id\",\"hobby_post_id\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_photo\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hobby_photo_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_photo_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"created_by\",\"hobby_post_id\",\"hobby_photo_path\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"created_by\",\"hobby_post_id\",\"hobby_photo_path\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_post\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hobby_post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_post_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_post_thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"500\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"created_by\",\"user_id\",\"hobby_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"created_by\",\"user_id\",\"hobby_id\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_sub_comment\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"sub_comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub_comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"TinyText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"created_by\",\"comment_id\",\"post_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"created_by\",\"comment_id\",\"post_id\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_top_ten\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hobby_top_ten_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"view_count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hobby_top_ten_category\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"hobby_post_id\",\"view_count\",\"created_at\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"hobby_post_id\",\"view_count\",\"created_at\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"hobby_view_history\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"hobby_view_history_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"hobby_view_history_category\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"user_id\",\"hobby_post_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"user_id\",\"hobby_post_id\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"item\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"item_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"item_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bag_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"member\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"studentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studentEmail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"policy_agree\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"policy_agree_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"policy_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"policy_agree_policy_type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"policy_history_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"policy_history\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"policy_history_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"policy_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"policy_history_policy_type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revision_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pdf_file_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"300\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"required\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_latest_revision\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"post_hashtag\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"post_hashtags_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hashtag_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"post_hashtags_id\",\"post_id\",\"hashtag_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"post_hashtags_id\",\"post_id\",\"hashtag_id\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"recommended_feed\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"recommended_feed_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recommended_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recommended_feed_recommended_type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"report\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"report_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_post_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sub_comment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"report_content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"1000\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"report_status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"report_report_status\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"created_at\",\"user_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"created_at\",\"user_id\"]}],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"setting\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"setting_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notification\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marketing\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_by\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"today_hobby\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"today_hobby_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hobby_category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"today_theme_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"today_theme_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"today_hobby_details_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"today_hobby_details_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"today_hobby_details_attributes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"today_hobby_thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":[\"UnsignedBigInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_profile\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"LongText\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"user_user_type\",\"nativeType\":null,\"default\":\"BASIC_USER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_nickname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider_type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_provider_type\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provider_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_last_login_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dormancy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refresh_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"},\"user_metrics\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"new_users\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_users\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"modified_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments\"}},\"enums\":{\"hobby_category_hobby_category_name\":{\"values\":[{\"name\":\"cooking\",\"dbName\":null},{\"name\":\"exercise\",\"dbName\":null}],\"dbName\":null},\"policy_agree_policy_type\":{\"values\":[{\"name\":\"REQUIRED_IS_OVER_FOURTEEN\",\"dbName\":null},{\"name\":\"REQUIRED_TERMS_OF_SERVICE\",\"dbName\":null},{\"name\":\"REQUIRED_PERSONAL_INFO_PROCESS\",\"dbName\":null},{\"name\":\"OPTION_PERSONAL_INFO_MARKETING\",\"dbName\":null},{\"name\":\"OPTION_EVENT_MAIL_OR_SMS\",\"dbName\":null}],\"dbName\":null},\"policy_history_policy_type\":{\"values\":[{\"name\":\"REQUIRED_IS_OVER_FOURTEEN\",\"dbName\":null},{\"name\":\"REQUIRED_TERMS_OF_SERVICE\",\"dbName\":null},{\"name\":\"REQUIRED_PERSONAL_INFO_PROCESS\",\"dbName\":null},{\"name\":\"OPTION_PERSONAL_INFO_MARKETING\",\"dbName\":null},{\"name\":\"OPTION_EVENT_MAIL_OR_SMS\",\"dbName\":null}],\"dbName\":null},\"recommended_feed_recommended_type\":{\"values\":[{\"name\":\"INFLUENCE\",\"dbName\":null},{\"name\":\"POPULAR_POST\",\"dbName\":null}],\"dbName\":null},\"hobby_top_ten_category\":{\"values\":[{\"name\":\"cooking\",\"dbName\":null},{\"name\":\"exercise\",\"dbName\":null}],\"dbName\":null},\"hobby_view_history_category\":{\"values\":[{\"name\":\"cooking\",\"dbName\":null},{\"name\":\"exercise\",\"dbName\":null}],\"dbName\":null},\"user_user_type\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"BASIC_USER\",\"dbName\":null}],\"dbName\":null},\"report_report_status\":{\"values\":[{\"name\":\"PENDING\",\"dbName\":null},{\"name\":\"IN_PROGRESS\",\"dbName\":null},{\"name\":\"COMPLETED\",\"dbName\":null},{\"name\":\"REJECTED\",\"dbName\":null}],\"dbName\":null},\"user_provider_type\":{\"values\":[{\"name\":\"KAKAO\",\"dbName\":null},{\"name\":\"NAVER\",\"dbName\":null},{\"name\":\"GOOGLE\",\"dbName\":null},{\"name\":\"ORIGIN\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

