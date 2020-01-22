/**
 * @apiDefine chapter 1.2. Sample chapter
 * This is a sample chapter with a title and description
 */

/**
 * @apiDefine group Sample group
 * This is a sample group with a title and description
 */

/**
 * @apiDefine subgroup Sample subgroup
 * This is a sample subgroup with a title ans description
 */

/**
 * @apiDefine queryParameter Sample query parameter
 * This is a sample query parameter with a title and description
 */

/**
 * @apiDefine queryParameter2 Sample query parameter 2
 * This is a sample query parameter 2 with a title and description
 */

/**
 * @apiDefine Nats 2. Nats
 */

/**
 * @apiDefine RabbitMQ 3. RabbitMQ
 */

/**
 * @apiDefine Redis 4. Redis
 */

/**
 * @apiDefine WebSocket 5. WebSocket
 */

// Sample chapter

/**
 * @api {get} /v1/test/:id?:param1 GET v1
 * @apiChapter chapter
 * @apiDescription GET v1 description
 * @apiGroup group
 * @apiFamily testGet
 * @apiSubgroup subgroup
 * @apiVersion v1
 * @apiParam {String} id Id
 * @apiParam {String} [param1=test] Query param 1
 */

/**
 * @api {get} /v2/test/:id?:param2 GET v2
 * @apiChapter chapter
 * @apiDescription GET v2 description
 * @apiGroup group
 * @apiFamily testGet
 * @apiSubgroup subgroup
 * @apiVersion v2
 * @apiParam {String} id Id
 * @apiParam {String} [param2=test] Query param 2
 * @apiParam {String} [param3=test] Query param 3
 * @apiParam {String} [param4=test] Query param 4
 */

/**
 * @api {get} /test/with/no/group/:id?:param1 GET with no group
 * @apiChapter chapter
 * @apiSubgroup subgroup1
 * @apiParam {String} id Id
 * @apiParam {String} [param1=test] Query param 1
 */

/**
 * @api {get} /test/with/no/subgroup/:id?:param1 GET with no subgroup
 * @apiChapter chapter
 * @apiGroup group1
 * @apiParam {String} id Id
 * @apiParam {String} [param1=test] Query param 1
 */

/**
 * @api {get} /test/with/no/group/subgroup/:id?:param1 GET with no group and subgroup
 * @apiChapter chapter
 * @apiParam {String} id Id
 * @apiParam {String} [param1=test] Query param 1
 */

/**
 * @api {get} /test/with/name/:id?:param1 GET with name
 * @apiChapter chapter
 * @apiName GET_WITH_NAME
 * @apiParam {String} id Id
 * @apiParam {String} [param1=test] Query param 1
 */

/**
 * @api {post} /test POST with header and parameter groups
 * @apiChapter chapter
 * @apiGroup group1
 * @apiSubgroup subgroup1
 * @apiFamily test1
 * @apiHeader (Header 1) {String} header1 Header 1
 * @apiHeader (Header 2) {String} header2 Header 2
 * @apiHeader (Header 3) {String} header3 Header 3
 * @apiParam (Parameter) {String} param1 Body param 1
 * @apiParam (File) {File} file File
 * @apiParam (Raw body) {RawBody} rawBody
 */

/**
 * @api {post} /test POST with multiple content types
 * @apiChapter chapter
 * @apiFamily test2
 * @apiGroup group1
 * @apiSubgroup subgroup1
 * @apiContentType form
 * @apiContentType json
 * @apiContentType xml
 * @apiParam {String} [param1=test] Body param 1
 *
 * @apiParamExample {form} Body example:
 * param1=param1
 *
 * @apiParamExample {json} Body example:
 * {
 *   "param1": "param1"
 * }
 *
 * @apiParamExample {xml} Body example:
 * <xml>
 *   <body param1="param1" />
 * </xml>
 */

// Nats chapter

/**
 * @api {natspub} publish Publish
 * @apiChapter Nats
 * @apiContentType json
 * @apiParam {String} [param1=test] Body param 1
 */

/**
 * @api {natsrpc} rpc RPC
 * @apiChapter Nats
 * @apiContentType json
 * @apiParam {String} [param1=test] Body param 1
 */

/**
 * @api {natssub} subscribe Subscribe
 * @apiChapter Nats
 */

// RabbitMQ chapter

/**
 * @api {rabbitmqpub} publish Publish
 * @apiChapter RabbitMQ
 * @apiContentType json
 * @apiParam {String} [param1=test] Body param 1
 */

/**
 * @api {rabbitmqrpc} rpc RPC
 * @apiChapter RabbitMQ
 * @apiContentType json
 * @apiParam {String} [param1=test] Body param 1
 */

/**
 * @api {rabbitmqsub} subscribe Subscribe
 * @apiChapter RabbitMQ
 */

 // Redis chapter

/**
 * @api {redispub} publish Publish
 * @apiChapter Redis
 * @apiContentType json
 * @apiParam {String} [param1=test] Body param 1
 */

/**
 * @api {redissub} subscribe Subscribe
 * @apiChapter Redis
 */

// WebSocket chapter

/**
 * @api {websocket} communicate Communicate
 * @apiChapter WebSocket
 * @apiContentType json
 * @apiParam {String} [param1=test] Body param 1
 */
