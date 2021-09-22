
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: 로그인 처리
 * definitions:
 *   Auth_request:
 *     type: object
 *     required:
 *       - user_id
 *       - password
 *     properties:
 *       user_id:
 *         type: string
 *         description: 아이디
 *       password:
 *         type: string
 *         description: 비밀번호
 *   Auth_response:
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       status:
 *         type: string
 *         description: 로그인 성공 여부- error, success
 *       token:
 *         type: object
 *         description: 계정 정보
 *   Response_error:
 *     type: object
 *     required:
 *       - status
 *     properties:
 *       message:
 *         type: string
 *         description: 오류 사유
 *       status:
 *         type: integer
 *         description: response code
 */

/**
 * @swagger
 *  paths:
 *    /login:
 *      post:
 *        tags:
 *        - "Auth"
 *        summary: "Login process"
 *        description: ""
 *        consumes:
 *        - "application/json"
 *        produces:
 *        - "application/json"
 *        parameters:
 *        - in: "body"
 *          name: "body"
 *          description: "로그인 계정 정보와 서비스 정보를 전달"
 *          required: true
 *          schema:
 *            $ref: "#/definitions/Auth_request"
 *        responses:
 *          200:
 *            description: "로그인 결과"
 *            schema:
 *              $ref: "#/definitions/Auth_response"
 *          400:
 *            description: "잘못된 데이터"
 *            schema:
 *              $ref: "#/definitions/Response_error"
 *          500:
 *            description: "로그인 오류 & 실패"
 *            schema:
 *              $ref: "#/definitions/Response_error"
 */
router.post('/login', (req, res, next) => {
  const loginInfo = req.body;
  if (!Object.prototype.hasOwnProperty.call(loginInfo, 'user_id')
      || !Object.prototype.hasOwnProperty.call(loginInfo, 'password')) {
    res.statusCode(400).json({ status: 'error', message: 'Invalid Prameter' });
  }
  else {
    models.LoginHistorys.count({ where: { user_id: loginInfo.user_id, login_success: 'N', created_at: { [models.Sequelize.Op.gt]: moment().subtract(20, 'minutes').toDate() } } }).then((c) => {
      if (c > 5) {
        res.statusCode(500).json({ status: 'error', message: 'Login failed several times. Please try again in 10 minutes.' });
      }
      else {
        models.Users.findOne({
          where: { user_id: loginInfo.user_id, password: loginInfo.password },
          include: [models.Roles]
        }).then((u) => {
          if (u) {
            const userInfo = {
              user_id: u.user_id,
              desc: u.description,
              role: u.Roles.map(r => r.role_name)
            };
            const token = jwt.sign(userInfo, secretKey, {
              expiresIn: '5m' // 유효 시간은 5분
            });
            res.json({ status: 'success', token });
            loginInfo.login_success = 'Y';
          }
          else {
            res.json({ status: 'error', message: 'check ID or PW' });
            loginInfo.login_success = 'N';
          }
          models.LoginHistorys.create(loginInfo);
        });
      }
    });
  }
});
